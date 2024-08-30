import React, { useState } from 'react'

function TaxCalculator() {
  const [income, setIncome] = useState(0);
  const [taxRate, setTaxRate] = useState(10);
  const [calculatedTax, setCalculatedTax] = useState(0);

  const handleCalculateTax = () => {
    setCalculatedTax((income * taxRate) / 100);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Tax Calculator</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Income:
          </label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="border border-gray-300 rounded w-full p-2"
            placeholder="Enter your income"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tax Rate (%):
          </label>
          <input
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            className="border border-gray-300 rounded w-full p-2"
            placeholder="Enter tax rate"
          />
        </div>

        <button
          onClick={handleCalculateTax}
          className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600 transition"
        >
          Calculate Tax
        </button>

        <div className="mt-4 text-center">
          <p className="text-lg">
            Calculated Tax: <span className="font-semibold">${calculatedTax.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaxCalculator