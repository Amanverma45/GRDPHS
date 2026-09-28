import React, { useState } from 'react';
import { Shirt, CheckCircle2, AlertCircle, Sparkles, Sun, Snowflake, Award } from 'lucide-react';

export default function DressCode() {
  const [activeTab, setActiveTab] = useState('regular');

  return (
    <section id="dress-code" className="dress-code-section">
      <div className="container">
        {/* Header */}
        <div className="section-head-center">
          <div className="badge-tag">
            <Shirt size={14} /> Student Discipline & Identity
          </div>
          <h2 className="section-main-heading">
            School Uniform & Dress Code Guidelines
          </h2>
          <p className="section-subtext">
            A neat and dignified uniform instills equality, pride, and discipline among all students at GRD Public School.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="uniform-tabs-row">
          <button
            type="button"
            className={`uniform-tab-btn ${activeTab === 'regular' ? 'active' : ''}`}
            onClick={() => setActiveTab('regular')}
          >
            <Sun size={18} /> Regular Uniform (Mon, Tue, Thu, Fri)
          </button>
          <button
            type="button"
            className={`uniform-tab-btn ${activeTab === 'sports' ? 'active' : ''}`}
            onClick={() => setActiveTab('sports')}
          >
            <Award size={18} /> Sports & House Uniform (Wed & Sat)
          </button>
          <button
            type="button"
            className={`uniform-tab-btn ${activeTab === 'winter' ? 'active' : ''}`}
            onClick={() => setActiveTab('winter')}
          >
            <Snowflake size={18} /> Winter Uniform (Nov to Feb)
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="uniform-content-box animate-fade-in">
          {activeTab === 'regular' && (
            <div className="uniform-grid">
              {/* Boys Uniform */}
              <div className="uniform-card">
                <div className="gender-badge boys-badge">👦 For Boys</div>
                <h3 className="uniform-card-title">Regular Dress Code (Boys)</h3>
                <ul className="uniform-spec-list">
                  <li>
                    <strong>Shirt:</strong> Light Sky Blue shirt with school embroidered GRD crest on left pocket.
                  </li>
                  <li>
                    <strong>Trousers / Shorts:</strong> Navy Blue formal trousers (Classes 6-12) / Navy Blue shorts (Classes Nursery - 5th).
                  </li>
                  <li>
                    <strong>Tie & Belt:</strong> Official GRD Public School diagonal striped tie and school belt with metal buckle.
                  </li>
                  <li>
                    <strong>Footwear:</strong> Polished black leather shoes with Navy Blue socks with sky blue stripes.
                  </li>
                  <li>
                    <strong>Hair Grooming:</strong> Clean, short and neatly combed hair cut.
                  </li>
                </ul>
              </div>

              {/* Girls Uniform */}
              <div className="uniform-card">
                <div className="gender-badge girls-badge">👧 For Girls</div>
                <h3 className="uniform-card-title">Regular Dress Code (Girls)</h3>
                <ul className="uniform-spec-list">
                  <li>
                    <strong>Shirt / Kurti:</strong> Light Sky Blue shirt (Primary) or Sky Blue Kurti with Navy Blue Salwar & Dupatta (Senior classes).
                  </li>
                  <li>
                    <strong>Skirt / Tunic:</strong> Navy Blue pleated skirt / tunic below knee length (Nursery to Class 5th).
                  </li>
                  <li>
                    <strong>Tie & Belt:</strong> Official school tie and school belt for primary wing.
                  </li>
                  <li>
                    <strong>Footwear:</strong> Black buckle shoes with Navy Blue socks.
                  </li>
                  <li>
                    <strong>Hair Grooming:</strong> Neatly tied two plaits / braids with Navy Blue ribbons or simple black hairband.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'sports' && (
            <div className="uniform-grid">
              <div className="uniform-card sports-full">
                <div className="gender-badge sports-badge">🏃 House & Activity Uniform</div>
                <h3 className="uniform-card-title">Wednesday & Saturday Sports Attire</h3>
                <p className="sports-intro-text">
                  Students wear their assigned House T-Shirt to encourage team spirit, fitness, and sportsmanship:
                </p>
                <div className="houses-row">
                  <div className="house-box house-red">
                    <span className="house-color-dot red"></span>
                    <div>
                      <strong>Tagore House (Red)</strong>
                      <small>Courage & Passion</small>
                    </div>
                  </div>
                  <div className="house-box house-blue">
                    <span className="house-color-dot blue"></span>
                    <div>
                      <strong>Raman House (Blue)</strong>
                      <small>Science & Wisdom</small>
                    </div>
                  </div>
                  <div className="house-box house-green">
                    <span className="house-color-dot green"></span>
                    <div>
                      <strong>Ashoka House (Green)</strong>
                      <small>Growth & Harmony</small>
                    </div>
                  </div>
                  <div className="house-box house-yellow">
                    <span className="house-color-dot yellow"></span>
                    <div>
                      <strong>Kalam House (Yellow)</strong>
                      <small>Vision & Energy</small>
                    </div>
                  </div>
                </div>

                <ul className="uniform-spec-list" style={{ marginTop: '1.5rem' }}>
                  <li><strong>Lower:</strong> White track pant with house color stripe.</li>
                  <li><strong>Footwear:</strong> Pure white sports canvas sneakers with white socks.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'winter' && (
            <div className="uniform-grid">
              <div className="uniform-card winter-card">
                <div className="gender-badge winter-badge">❄️ Winter Season</div>
                <h3 className="uniform-card-title">Winter Dress Guidelines</h3>
                <ul className="uniform-spec-list">
                  <li>
                    <strong>Blazer / Sweater:</strong> Navy Blue V-neck woollen sweater with school logo for all students (Class Nursery - 5th).
                  </li>
                  <li>
                    <strong>Senior Blazer:</strong> Single-breasted Navy Blue Blazer with school emblem badge on pocket (Class 6th - 12th).
                  </li>
                  <li>
                    <strong>Cap / Scarf:</strong> Plain Navy Blue woollen cap and mufflers allowed during peak cold.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Discipline Notice Box */}
          <div className="dress-code-notice">
            <AlertCircle size={20} className="text-navy" />
            <div>
              <strong>Note on School Identity & Respect:</strong> All students are expected to arrive at school in clean, well-ironed uniforms with their official GRD identity card worn at all times.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
