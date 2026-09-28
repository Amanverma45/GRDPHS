import React from 'react';
import { Heart, MapPin, Phone, Mail, GraduationCap, ShieldCheck, ArrowUp } from 'lucide-react';
import logoImg from '../assets/grd.jpg';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="school-footer">
      {/* Pitch Summary Banner inside Footer for Rajendra Sir & Mahesh Sir */}
      <div className="footer-pitch-bar">
        <div className="container footer-pitch-flex">
          <div className="pitch-col-text">
            <h3>🌟 Digital Vision for GRD Public School, Tilawad Maina</h3>
            <p>
              Under <strong>Director Shri Rajendra Verma</strong> and <strong>Principal Shri Mahesh Verma</strong>, 
              this portal streamlines admissions, student records, automated SMS/WhatsApp alerts, fee management, and digital report cards.
            </p>
          </div>
          <button 
            type="button" 
            className="btn-footer-cta"
            onClick={() => onNavigate('features-demo')}
          >
            🚀 Re-test Smart Features Demo
          </button>
        </div>
      </div>

      <div className="container footer-main-content">
        <div className="footer-grid">
          {/* Column 1: School Identity */}
          <div className="footer-col-about">
            <div className="footer-brand-wrap" onClick={scrollToTop}>
              <img src={logoImg} alt="GRD Logo" className="footer-logo-img" />
              <div>
                <h4 className="footer-school-title">GRD PUBLIC SCHOOL</h4>
                <p className="footer-school-sub">Tilawad Maina (M.P.)</p>
              </div>
            </div>
            <p className="footer-desc">
              Committed to imparting value-based, technologically advanced education to nurture responsible future leaders with high moral integrity.
            </p>
            <div className="footer-leaders-tag">
              <span><strong>Director:</strong> Shri Rajendra Verma</span>
              <span><strong>Principal:</strong> Shri Mahesh Verma</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li><button type="button" onClick={() => onNavigate('home')}>Home</button></li>
              <li><button type="button" onClick={() => onNavigate('leadership')}>Director & Principal Desk</button></li>
              <li><button type="button" onClick={() => onNavigate('features-demo')}>Smart Web Portal Demo</button></li>
              <li><button type="button" onClick={() => onNavigate('admissions')}>Online Admission 2026-27</button></li>
              <li><button type="button" onClick={() => onNavigate('fees')}>Fee Structure & Calculator</button></li>
              <li><button type="button" onClick={() => onNavigate('dress-code')}>Uniform & Dress Code</button></li>
            </ul>
          </div>

          {/* Column 3: School Modules */}
          <div className="footer-col-links">
            <h4 className="footer-heading">Portal Modules</h4>
            <ul className="footer-list">
              <li><button type="button" onClick={() => onNavigate('features-demo')}>Student Directory (Class & Roll No.)</button></li>
              <li><button type="button" onClick={() => onNavigate('features-demo')}>SMS & WhatsApp Parent Alerts</button></li>
              <li><button type="button" onClick={() => onNavigate('features-demo')}>Online Result & Marksheet</button></li>
              <li><button type="button" onClick={() => onNavigate('gallery')}>Campus Photo Gallery</button></li>
              <li><button type="button" onClick={() => onNavigate('contact')}>Contact School Office</button></li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="footer-col-contact">
            <h4 className="footer-heading">Reach Us</h4>
            <div className="footer-contact-items">
              <p><MapPin size={16} /> Main Road, Tilawad Maina, M.P.</p>
              <p><Phone size={16} /> +91 98XXX XXXXX / 94XXX XXXXX</p>
              <p><Mail size={16} /> info@grdpublicschooltilawad.edu.in</p>
              <p><GraduationCap size={16} /> Affiliated School / English & Hindi Medium</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} GRD Public School, Tilawad Maina. All Rights Reserved.</p>
          <button type="button" className="btn-back-to-top" onClick={scrollToTop}>
            <ArrowUp size={16} /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
