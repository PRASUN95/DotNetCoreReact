import { useEffect, useState } from "react";
import {
  RepaymentFrequency,
  useLoanCalculator,
} from "../../hooks/useLoanCalculator";

const Calculator: React.FC = () => {
  const handleInputChange = (e: HTMLInputElement) => {};
  const [loanAmount, setAmount] = useState<number>(1000);
  const [interestRate, setRate] = useState<number>(1);
  const [repaymentFrequency, setFrequency] = useState<RepaymentFrequency>();
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
  const handleFrequencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFrequency(e.target.value as RepaymentFrequency);
  };
  useEffect(() => {
    calculateLoan({ loanAmount, interestRate, repaymentFrequency });
  }, [loanAmount, interestRate, repaymentFrequency]);
  return (
    <>
      <label htmlFor="amount">Amount</label>
      <input type="text" name="amount" onChange={handleAmountChange} />
      <label htmlFor="interestRate">Rate</label>
      <input type="text" name="interestRate" onChange={handleRateChange} />
      <label htmlFor="frequency">Frequency</label>
      <input type="text" name="frequency" onChange={handleFrequencyChange} />
      Result: {result}
    </>
  );
};

export default Calculator;
