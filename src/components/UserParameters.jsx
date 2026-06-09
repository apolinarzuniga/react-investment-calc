function UserParameters({ initialInvestment,
  annualInvestment,
  expectedReturn,
  investmentDuration,
  onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            id="initial-investment"
            placeholder="e.g. 10000"
            value={initialInvestment}
            onChange={(event) => onChange("initial-investment", event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            id="annual-investment"
            placeholder="e.g. 10000"
            value={annualInvestment}
            onChange={(event) => onChange("annual-investment", event.target.value)}
          />
        </div>
      </div>
      <div className="input-group input-top-spacing">
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="number"
            id="expected-return"
            placeholder="e.g. 5"
            value={expectedReturn}
            onChange={(event) => onChange("expected-return", event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="investment-duration">Duration</label>
          <input
            type="number"
            id="investment-duration"
            placeholder="e.g. 10"
            value={investmentDuration}
            onChange={(event) => onChange("investment-duration", event.target.value)}
          />
        </div>
      </div>
    </section>
  )
}

export default UserParameters;