import { useEffect, useState } from "react";

import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserParameters from "./components/UserParameters";

import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [investmentDuration, setInvestmentDuration] = useState(10);
  const [annualData, setAnnualData] = useState([]);

  const inputIsValid = investmentDuration >= 1;

  function handleUserInputChange(id, newValue) {
    const numericValue = +newValue; // parseInt(newValue) converts the string input to a number
    switch (id) {
      case "initial-investment":
        setInitialInvestment(numericValue);
        break;
      case "annual-investment":
        setAnnualInvestment(numericValue);
        break;
      case "expected-return":
        setExpectedReturn(numericValue);
        break;
      case "investment-duration":
        setInvestmentDuration(numericValue);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    callCalculateInvestmentResults();
  }, [initialInvestment, annualInvestment, expectedReturn, investmentDuration]);

  function callCalculateInvestmentResults() {
    const results = calculateInvestmentResults({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration: investmentDuration,
    });
    setAnnualData(results);
  }
  return (
    <>
      <Header />
      <UserParameters
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        investmentDuration={investmentDuration}
        onChange={handleUserInputChange}
      />
      {inputIsValid ? <ResultsTable annualData={annualData} /> :
        <p className="center">Please enter a duration greater than 0.</p>}
    </>
  )
}

export default App
