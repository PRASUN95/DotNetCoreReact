import { useState } from "react";

interface LoanDetails {
  loanAmount: number;
  interestRate: number;
  repaymentFrequency?: RepaymentFrequency;
}

interface LoanRepayment {
  amount: number;
  repaymentFrequency: RepaymentFrequency;
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
): [number, (loanDetails: LoanDetails) => void] => {
  console.log("I am in useLoanCalculator");
  const [calculatedAmount, setCalculatedAmount] = useState<number>(0);
  const calculateRepaymentAmount = (loanDetails: LoanDetails) => {
    const calculatedAmount = calculateRepayment(loanDetails);
    setCalculatedAmount(calculatedAmount);
  };
  return [calculatedAmount, calculateRepaymentAmount];
};

export { useLoanCalculator };
