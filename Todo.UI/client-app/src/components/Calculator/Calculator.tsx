import { useEffect, useState } from "react";
import {
  RepaymentFrequency,
  useLoanCalculator,
} from "../../hooks/useLoanCalculator";

const Calculator: React.FC = () => {
  const [loanAmount, setAmount] = useState<number>(1000);
  const [interestRate, setRate] = useState<number>(1);
  const [repaymentFrequency, setFrequency] =
    useState<RepaymentFrequency>("weekly");
  const [result, calculateLoan] = useLoanCalculator({
    loanAmount,
    interestRate,
  });
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value));
  };
  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRate(parseFloat(e.target.value));
  };
  const handleFrequencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(typeof e);
    setFrequency(e.target.value as RepaymentFrequency);
  };
  useEffect(() => {
    calculateLoan({ loanAmount, interestRate, repaymentFrequency });
  }, [loanAmount, interestRate, repaymentFrequency]);
  return (
    <>
      <label htmlFor="amount">Amount</label>
      <input type="text" name="amount" value={loanAmount} onChange={handleAmountChange} />
      <br />
      <label>
        Repayment Frequency:
        <select value={repaymentFrequency} onChange={handleFrequencyChange}>
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="fortnightly">Fortnightly</option>
        </select>
      </label>
      <br />
      {result.map(({ amount, repaymentFrequency }) => {
        return (
          <span>
            amount : {amount}
            frequency : {repaymentFrequency}
            <br />
          </span>
        );
      })}
    </>
  );
};

export default Calculator;
