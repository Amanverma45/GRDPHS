import React, { useState } from 'react';
import { Phone, Mail, MapPin, Sparkles, Menu, X, Bell, UserCheck, Shield, GraduationCap, ChevronDown } from 'lucide-react';
import logoImg from '../assets/grd.jpg';

export default function Navbar({ activeSection, setActiveSection, openAdmissionModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'leadership', label: 'Director & Principal' },
    { id: 'features-demo', label: 'Smart Portal Features' },
    { id: 'admissions', label: 'Admission Process' },
    { id: 'fees', label: 'Fee Structure' },
    { id: 'dress-code', label: 'Uniform & Dress Code' },
    { id: 'about', label: 'About School' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky-header">
      {/* Top Notification Announcement Bar */}
      <div className="top-banner">
        <div className="container top-banner-content">
          <div className="banner-left">
            <span className="live-pill">
              <span className="live-dot"></span> PITCH DEMO
            </span>
            <span className="banner-text">
              ✨ <strong>GRD Public School Digital Portal</strong> — Admissions Open 2026-27 | Tilawad Maina (M.P.)
            </span>
          </div>
          <div className="banner-right">
            <span className="contact-item">
              <Phone size={14} /> +91 98XXX XXXXX
            </span>
            <span className="contact-item">
              <MapPin size={14} /> Tilawad Maina, M.P.
            </span>
            <span className="affiliation-badge">Affiliated & Recognized</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="main-navbar">
        <div className="container nav-container">
          {/* Logo and School Name */}
          <div className="logo-brand" onClick={() => handleNavClick('home')}>
            <div className="logo-wrapper">
              <img src={logoImg} alt="GRD Public School Logo" className="school-logo" />
            </div>
            <div className="brand-text">
              <div className="school-title">
                <span className="highlight-grd">GRD</span> PUBLIC SCHOOL
              </div>
              <div className="school-subtitle">
                <span>TILAWAD MAINA (M.P.)</span>
                <span className="tag-motto">• Nurturing Future Leaders</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <ul className="nav-links desktop-only">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className={`nav-item-btn ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                  {link.id === 'features-demo' && (
                    <span className="badge-new">New Tech</span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Action CTAs */}
          <div className="nav-actions desktop-only">
            <button
              type="button"
              className="btn-portal-demo"
              onClick={() => handleNavClick('features-demo')}
            >
              <Sparkles size={16} /> Portal Demo
            </button>
            <button
              type="button"
              className="btn-admission-cta"
              onClick={openAdmissionModal}
            >
              <GraduationCap size={18} /> Apply Online
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="mobile-toggle-btn mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer animate-fade-in">
            <div className="mobile-links-list">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  className={`mobile-nav-btn ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  <span>{link.label}</span>
                  {link.id === 'features-demo' && <span className="badge-new">Demo</span>}
                </button>
              ))}
            </div>
            <div className="mobile-actions">
              <button
                type="button"
                className="btn-admission-cta full-width"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAdmissionModal();
                }}
              >
                <GraduationCap size={18} /> Apply for Admission
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
