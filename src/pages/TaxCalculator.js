import React, { useState } from 'react';
import StaticNavbar from '../component/common/StaticNavbar';

const TaxCalculator = () => {
  // State variables for form inputs
  const [assessmentYear, setAssessmentYear] = useState('2025-26');
  const [taxpayerCategory, setTaxpayerCategory] = useState('Individual');
  const [residentialStatus, setResidentialStatus] = useState('RES');
  const [age, setAge] = useState('Below 60');
  const [totalIncome, setTotalIncome] = useState('');
  const [totalDeductions, setTotalDeductions] = useState('');
  const [regime, setRegime] = useState('old');
  const [oldRegimeTax, setOldRegimeTax] = useState(0);
  const [newRegimeTax, setNewRegimeTax] = useState(0);

  // Calculate tax
  const calculateTax = (event) => {
    event.preventDefault();
    
    const income = parseFloat(totalIncome) || 0;
    const deductions = parseFloat(totalDeductions) || 0;
    const taxableIncome = income - deductions;
    
    let calculatedOldTax = 0;
    let calculatedNewTax = 0;

    if (regime === 'old') {
      calculatedOldTax = calculateOldRegimeTax(taxableIncome);
      setOldRegimeTax(calculatedOldTax);
      setNewRegimeTax(0);
    } else {
      calculatedNewTax = calculateNewRegimeTax(taxableIncome);
      setOldRegimeTax(0);
      setNewRegimeTax(calculatedNewTax);
    }
  };

  // Calculate tax for old regime
  const calculateOldRegimeTax = (income) => {
    let tax = 0;

    if (income <= 250000) {
      tax = 0;
    } else if (income <= 500000) {
      tax = (income - 250000) * 0.05;
    } else if (income <= 1000000) {
      tax = (income - 500000) * 0.20 + 12500;
    } else {
      tax = (income - 1000000) * 0.30 + 112500;
    }

    return tax;
  };

  // Calculate tax for new regime
  const calculateNewRegimeTax = (income) => {
    let tax = 0;

    if (income <= 250000) {
      tax = 0;
    } else if (income <= 500000) {
      tax = (income - 250000) * 0.05;
    } else if (income <= 750000) {
      tax = (income - 500000) * 0.10 + 12500;
    } else if (income <= 1000000) {
      tax = (income - 750000) * 0.15 + 37500;
    } else if (income <= 1250000) {
      tax = (income - 1000000) * 0.20 + 75000;
    } else if (income <= 1500000) {
      tax = (income - 1250000) * 0.25 + 125000;
    } else {
      tax = (income - 1500000) * 0.30 + 187500;
    }

    return tax;
  };

  return (
    <div>
      <div className='max-w-[1260px] w-11/12 m-auto'>
        <StaticNavbar />
      </div>
      <div className="max-w-3xl mt-8 mx-auto p-5 flex gap-8 bg-white rounded-lg shadow-xl">
        <form className="w-full space-y-5 tax-form" onSubmit={calculateTax}>
          {/* Assessment Year */}
          <div className="mb-5">
            <label htmlFor="assessmentYear" className="block font-semibold mb-2">Assessment Year *</label>
            <select 
              id="assessmentYear" 
              value={assessmentYear} 
              onChange={(e) => setAssessmentYear(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="2025-26">2025-26</option>
              <option value="2024-25">2024-25</option>
              <option value="2023-24">2023-24</option>
              <option value="2022-23">2022-23</option>
            </select>
          </div>

          {/* Taxpayer Category */}
          <div className="mb-5">
            <label htmlFor="taxpayerCategory" className="block font-semibold mb-2">Taxpayer Category *</label>
            <select 
              id="taxpayerCategory" 
              value={taxpayerCategory} 
              onChange={(e) => setTaxpayerCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Individual">Individual</option>
              <option value="HUF">HUF</option>
              <option value="Firm">Firm</option>
              <option value="LLP">LLP</option>
              <option value="Domestic Company">Domestic Company</option>
              <option value="Foreign Company">Foreign Company</option>
              <option value="AOP/BOI">AOP/BOI</option>
              <option value="Cooperative Society">Cooperative Society</option>
              <option value="Trust">Trust</option>
            </select>
          </div>

          {/* Residential Status */}
          <div className="mb-5">
            <label htmlFor="residentialStatus" className="block font-semibold mb-2">Residential Status *</label>
            <select 
              id="residentialStatus" 
              value={residentialStatus} 
              onChange={(e) => setResidentialStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="RES">RES (Resident)</option>
              <option value="RNOR">RNOR (Resident But Not Ordinarily Resident)</option>
              <option value="NR">NR (NON Resident)</option>
            </select>
          </div>

          {/* Age */}
          <div className="mb-5">
            <label className="block font-semibold mb-2">Your Age *</label>
            <div className="flex justify-between">
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="ageBelow60" 
                  name="age" 
                  value="Below 60" 
                  checked={age === 'Below 60'}
                  onChange={() => setAge('Below 60')}
                  className="mr-2"
                />
                <label htmlFor="ageBelow60">Below 60 years (Regular Citizen)</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="age60To79" 
                  name="age" 
                  value="60-79" 
                  checked={age === '60-79'}
                  onChange={() => setAge('60-79')}
                  className="mr-2"
                />
                <label htmlFor="age60To79">Between 60 - 79 years (Senior Citizen)</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="age80Above" 
                  name="age" 
                  value="80+" 
                  checked={age === '80+'}
                  onChange={() => setAge('80+')}
                  className="mr-2"
                />
                <label htmlFor="age80Above">80 and above (Super Senior Citizen)</label>
              </div>
            </div>
          </div>

          {/* Total Annual Income */}
          <div className="mb-5">
            <label htmlFor="totalIncome" className="block font-semibold mb-2">Total Annual Income *</label>
            <input 
              type="text" 
              id="totalIncome" 
              value={totalIncome}
              onChange={(e) => setTotalIncome(e.target.value)}
              placeholder="₹" 
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Total Deductions */}
          <div className="mb-5">
            <label htmlFor="totalDeductions" className="block font-semibold mb-2">Total Deductions *</label>
            <input 
              type="text" 
              id="totalDeductions" 
              value={totalDeductions}
              onChange={(e) => setTotalDeductions(e.target.value)}
              placeholder="₹" 
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Regime Selection */}
          <div className="mb-5">
            <label className="block font-semibold mb-2">Tax Regime *</label>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="oldRegime" 
                  name="regime" 
                  value="old" 
                  checked={regime === 'old'}
                  onChange={() => setRegime('old')}
                  className="mr-2"
                />
                <label htmlFor="oldRegime">Old Regime</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="newRegime" 
                  name="regime" 
                  value="new" 
                  checked={regime === 'new'}
                  onChange={() => setRegime('new')}
                  className="mr-2"
                />
                <label htmlFor="newRegime">New Regime</label>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-5 flex space-x-4">
            <button type="submit" className="bg-[#e8f4ff] text-black py-2 px-4 rounded shadow hover:bg-blue-200">Calculate</button>
            <button 
              type="button" 
              onClick={() => {
                setTotalIncome('');
                setTotalDeductions('');
                setOldRegimeTax(0);
                setNewRegimeTax(0);
                setRegime('old');
              }}
              className="bg-[#e8f4ff] text-black py-2 px-4 rounded shadow hover:bg-blue-200"
            >
              Reset
            </button>
          </div>

          {/* Result */}
          <div className="mb-5">
            <h3 className="text-lg font-semibold">Total Tax: 
              <input 
                type="text" 
                value={(regime === 'old' ? oldRegimeTax : newRegimeTax).toFixed(2)}
                readOnly 
                placeholder="Result" 
                className="border border-gray-300 rounded px-2 py-1"
              />
            </h3>
          </div>

          {/* Note */}
          <div className="mb-5 text-sm text-gray-600">
            <p className="font-semibold">Note:</p>
            <ol className="list-decimal list-inside">
              <li>To see the effect of marginal relief please use advance tax calculator or login to use Income & Tax Estimator.</li>
              <li>Tax calculator for "Manufacturing Co-operative societies" will be provided shortly.</li>
            </ol>
          </div>

          {/* Disclaimer */}
          <div className="bg-[#e8f4ff] p-5 rounded mb-5">
            <h2 className="text-lg font-semibold">Disclaimer :</h2>
            <p className="text-sm text-gray-600">
              The above calculator is only to enable public to have a <br /> quick and an easy access to basic tax calculation and <br /> does not purport to give correct income and tax <br /> calculation in all circumstances. It is advised that for filing <br /> of returns the exact calculation may be made as per the <br /> provisions contained in the relevant Acts, Rules etc.
            </p>
          </div>
        </form>

        {/* Tax Summary */}
        <div className="bg-[#e8f4ff] p-5 rounded">
          <h3 className="text-lg font-semibold">Tax Summary</h3>
          <p>Total Annual Income: ₹{totalIncome}</p>
          <p>Total Deductions: ₹{totalDeductions}</p>
          <p>Tax Amount (as per Old Tax Regime): <span className="font-bold">₹{oldRegimeTax.toFixed(2)}</span></p>
          <p>Tax Amount (as per New Tax Regime): <span className="font-bold">₹{newRegimeTax.toFixed(2)}</span></p>
          <a href="#" className="text-blue-500 hover:underline block mt-4 font-bold">View Comparison</a>
          <p className="mt-2">You save Rs. <span className="font-bold">₹{(oldRegimeTax - newRegimeTax).toFixed(2)}</span> if you opt for New Tax Regime.</p>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;