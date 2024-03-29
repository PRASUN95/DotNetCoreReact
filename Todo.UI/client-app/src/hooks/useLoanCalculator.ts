import { useState } from "react";
import data from "../../src/Mocks/response.json"

type refData = typeof data.frequency;

interface LoanDetails {
  loanAmount: number;
  interestRate: number;
  repaymentFrequency?: RepaymentFrequency;
}

interface LoanRepayment {
  amount: number;
  repaymentFrequency?: RepaymentFrequency;
}

export type RepaymentFrequency = "monthly" | "fortnightly" | "weekly";

const calculateRepayment = ({
  loanAmount,
  interestRate,
  repaymentFrequency = "weekly",
}: LoanDetails): number => {
  let amount = (loanAmount * interestRate) / 100 / 12;
  if (repaymentFrequency === "weekly") return amount / 4;
  if (repaymentFrequency === "fortnightly") return amount / 2;
  return amount;
};

const useLoanCalculator = (
  loanDetails: LoanDetails
): [LoanRepayment[], (loanDetails: LoanDetails) => void] => {
  //console.log("I am in useLoanCalculator");
  const interestRates: refData = data.frequency;
  const [calculatedAmount, setCalculatedAmount] = useState<LoanRepayment[]>([]);
  const calculateRepaymentAmount = (loanDetails: LoanDetails) => {
    const data: LoanRepayment[] = interestRates.map(({id, description}) => {
      loanDetails.interestRate = id;
      return {
        amount : calculateRepayment(loanDetails),
        repaymentFrequency: loanDetails.repaymentFrequency
      };
    });
    setCalculatedAmount(data);
  };
  return [calculatedAmount, calculateRepaymentAmount];
};

export { useLoanCalculator };
