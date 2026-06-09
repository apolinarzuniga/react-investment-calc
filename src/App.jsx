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

  function handleInitialInvestmentChange(event) {
    setInitialInvestment(parseInt(event.target.value));
  }
  function handleAnnualInvestmentChange(event) {
    setAnnualInvestment(parseInt(event.target.value));
  }
  function handleExpectedReturnChange(event) {
    setExpectedReturn(parseInt(event.target.value));
  }
  function handleInvestmentDurationChange(event) {
    setInvestmentDuration(parseInt(event.target.value));
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
        onInitialInvestmentChange={handleInitialInvestmentChange}
        onAnnualInvestmentChange={handleAnnualInvestmentChange}
        onExpectedReturnChange={handleExpectedReturnChange}
        onInvestmentDurationChange={handleInvestmentDurationChange}
      />
      <ResultsTable annualData={annualData} />
    </>
  )
}

export default App
