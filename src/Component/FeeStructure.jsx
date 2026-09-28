import React, { useState } from 'react';
import { CreditCard, CheckCircle2, Calculator, Bus, ShieldCheck, HelpCircle, FileCheck } from 'lucide-react';

export default function FeeStructure() {
  const [calcClass, setCalcClass] = useState('8th');
  const [includeBus, setIncludeBus] = useState(true);
  const [busRoute, setBusRoute] = useState('tilawad-local');

  // Base fee mapping
  const feeData = {
    'primary': { name: 'Primary (Nursery - 5th)', tuition: 8500, exam: 1200, activity: 1500, lab: 800 },
    'middle': { name: 'Middle School (6th - 8th)', tuition: 11000, exam: 1500, activity: 1800, lab: 1500 },
    'high': { name: 'High School (9th - 10th)', tuition: 14500, exam: 2000, activity: 2000, lab: 2500 },
    'higher': { name: 'Higher Secondary (11th - 12th)', tuition: 18000, exam: 2500, activity: 2500, lab: 3500 },
  };

  const busRoutes = {
    'tilawad-local': { name: 'Tilawad Maina (Local / Main Village)', fee: 3000 },
    'route-a': { name: 'Nearby Villages (Within 5 km radius)', fee: 4500 },
    'route-b': { name: 'Extended Route (6-12 km radius)', fee: 6000 }
  };

  let activeTier = 'middle';
  if (['nursery', 'lkg', 'ukg', '1st', '2nd', '3rd', '4th', '5th'].includes(calcClass.toLowerCase())) {
    activeTier = 'primary';
  } else if (['6th', '7th', '8th'].includes(calcClass.toLowerCase())) {
    activeTier = 'middle';
  } else if (['9th', '10th'].includes(calcClass.toLowerCase())) {
    activeTier = 'high';
  } else {
    activeTier = 'higher';
  }

  const currentFee = feeData[activeTier];
  const busCost = includeBus ? busRoutes[busRoute].fee : 0;
  const annualTotal = currentFee.tuition + currentFee.exam + currentFee.activity + currentFee.lab + busCost;
  const quarterlyInstallment = Math.round(annualTotal / 4);

  return (
    <section id="fees" className="fees-section">
      <div className="container">
        {/* Header */}
        <div className="section-head-center">
          <div className="badge-tag">
            <CreditCard size={14} /> Affordable & Transparent
          </div>
          <h2 className="section-main-heading">
            Fee Structure & Online Fee Calculator (2026-27)
          </h2>
          <p className="section-subtext">
            Transparent, zero-hidden-cost fee structure ensuring accessible high-grade education for every family in Tilawad Maina.
          </p>
        </div>

        <div className="fees-layout-grid">
          {/* Left: Interactive Fee Calculator */}
          <div className="fee-calc-card">
            <div className="calc-header">
              <div className="calc-title">
                <Calculator size={22} className="text-gold" />
                <h3>Instant School Fee Estimator</h3>
              </div>
              <span className="calc-badge">Live Calculator</span>
            </div>

            <div className="calc-body">
              <div className="calc-field">
                <label>Select Student Class:</label>
                <select
                  value={calcClass}
                  onChange={(e) => setCalcClass(e.target.value)}
                  className="calc-select"
                >
                  <option value="nursery">Pre-Primary (Nursery / KG)</option>
                  <option value="1st">Class 1st to 5th</option>
                  <option value="8th">Class 6th to 8th</option>
                  <option value="10th">Class 9th to 10th</option>
                  <option value="12th">Class 11th to 12th</option>
                </select>
              </div>

              <div className="calc-field transport-toggle-field">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={includeBus}
                    onChange={(e) => setIncludeBus(e.target.checked)}
                  />
                  <span className="checkbox-text">
                    <Bus size={18} /> Include School Bus / Van Transport Facility
                  </span>
                </label>
              </div>

              {includeBus && (
                <div className="calc-field">
                  <label>Select Bus / Van Route Area:</label>
                  <select
                    value={busRoute}
                    onChange={(e) => setBusRoute(e.target.value)}
                    className="calc-select"
                  >
                    <option value="tilawad-local">Tilawad Maina (Local)</option>
                    <option value="route-a">Nearby Villages (Within 5 km radius)</option>
                    <option value="route-b">Extended Route (6-12 km radius)</option>
                  </select>
                </div>
              )}

              {/* Breakdown Display */}
              <div className="fee-breakdown-box">
                <div className="breakdown-title">Estimated Annual Breakdown:</div>
                <div className="breakdown-row">
                  <span>Tuition & Smart Classroom Fee:</span>
                  <strong>₹{currentFee.tuition.toLocaleString('en-IN')}</strong>
                </div>
                <div className="breakdown-row">
                  <span>Science, Computer Lab & Library:</span>
                  <strong>₹{currentFee.lab.toLocaleString('en-IN')}</strong>
                </div>
                <div className="breakdown-row">
                  <span>Sports & Co-curricular Activities:</span>
                  <strong>₹{currentFee.activity.toLocaleString('en-IN')}</strong>
                </div>
                <div className="breakdown-row">
                  <span>Examination & Assessment Fee:</span>
                  <strong>₹{currentFee.exam.toLocaleString('en-IN')}</strong>
                </div>
                {includeBus && (
                  <div className="breakdown-row text-blue font-medium">
                    <span>Transport ({busRoutes[busRoute].name}):</span>
                    <strong>₹{busCost.toLocaleString('en-IN')}</strong>
                  </div>
                )}

                <div className="breakdown-divider"></div>

                <div className="total-fee-row">
                  <div>
                    <div className="total-label">Total Annual Fee:</div>
                    <small>4 Easy Quarterly Installments</small>
                  </div>
                  <div className="total-amount">
                    ₹{annualTotal.toLocaleString('en-IN')}
                    <div className="installment-pill">
                      ₹{quarterlyInstallment.toLocaleString('en-IN')} / Quarter
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Payment Modes & Policies */}
          <div className="fee-policy-column">
            <div className="policy-card">
              <h4>
                <ShieldCheck size={20} className="text-green" /> Flexible Payment Options
              </h4>
              <p>
                To support parents, fees can be paid in <strong>4 quarterly installments</strong> (April, July, October, January).
              </p>
              <ul className="payment-modes-list">
                <li>💳 Online UPI (Google Pay, PhonePe, Paytm)</li>
                <li>🏦 Net Banking & Direct Bank Transfer</li>
                <li>🏫 Cash Deposit at School Fee Counter</li>
              </ul>
            </div>

            <div className="policy-card">
              <h4>
                <FileCheck size={20} className="text-gold" /> Scholarships & Concessions
              </h4>
              <p>
                Special fee concessions are available under Director & Principal discretionary quota for:
              </p>
              <ul className="payment-modes-list">
                <li>⭐ Siblings studying in GRD Public School (10% waiver)</li>
                <li>⭐ Top 3 rank holders in Annual Board Exams</li>
                <li>⭐ Outstanding district/state sports achievers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
