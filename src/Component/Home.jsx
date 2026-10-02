import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  Users, 
  MessageSquare, 
  Award, 
  CreditCard, 
  Shirt, 
  ShieldCheck, 
  BookOpen, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Calendar,
  Smartphone,
  School,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2
} from 'lucide-react';
import logoImg from '../assets/grd.jpg';
import bannerImg from '../assets/grd-banner.png';
import buildingImg from '../assets/images1.jpg';

const homeHeroSlides = [
  {
    id: 1,
    image: bannerImg,
    badge: 'Maa Saraswati Blessings & Highlights',
    tag: 'Official School Banner & Annual Highlights',
    heading: 'Welcome to G.R.D Public High School',
    subheading: 'Nurturing Minds with Quality & Values in Tilawad Maina (M.P.)',
    description: 'Under the visionary leadership of Director Shri Rajendra Verma and Principal Shri Mahesh Verma. Outstanding track record of MP Toppers, disciplined moral values, and vibrant student activities.'
  },
  {
    id: 2,
    image: buildingImg,
    badge: 'Spacious Campus & Infrastructure',
    tag: 'School Building & Campus - Tilawad Maina',
    heading: 'Empowering Students for a Brilliant Future',
    subheading: 'High-Quality English & Hindi Medium Education with Modern Facilities',
    description: 'Providing student-centric smart classrooms, experienced teachers, and organized morning and day shifts to ensure personalized attention for every child.'
  }
];

export default function Home({ onNavigate, openAdmissionModal }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % homeHeroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="home-section-container">
      {/* Hero Section */}
      <section 
        className="hero-banner hero-slider-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="hero-slider-bg-wrapper">
          {homeHeroSlides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`hero-slide-bg-item ${index === activeSlide ? 'active' : ''}`}
            >
              <img src={slide.image} alt={slide.tag} className="hero-bg-img" />
            </div>
          ))}
        </div>
        <div className="hero-backdrop-overlay"></div>

        <button 
          type="button" 
          className="hero-arrow-btn prev"
          onClick={() => setActiveSlide((prev) => (prev - 1 + homeHeroSlides.length) % homeHeroSlides.length)}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={28} />
        </button>
        <button 
          type="button" 
          className="hero-arrow-btn next"
          onClick={() => setActiveSlide((prev) => (prev + 1) % homeHeroSlides.length)}
          aria-label="Next Slide"
        >
          <ChevronRight size={28} />
        </button>

        <div className="container hero-content-grid relative-content">
          {/* Left Column: Hero Text */}
          <div className="hero-text-block hero-text-card">
            <div className="hero-badge animate-fade-in">
              <Sparkles size={16} className="text-gold" />
              <span>{homeHeroSlides[activeSlide].badge}</span>
            </div>

            <h1 className="hero-main-title">
              {homeHeroSlides[activeSlide].heading}
            </h1>

            <p className="hero-subheading-tagline">
              {homeHeroSlides[activeSlide].subheading}
            </p>

            <p className="hero-lead-text">
              {homeHeroSlides[activeSlide].description}
            </p>

            {/* Value Proposition Pills */}
            <div className="hero-feature-tags">
              <span className="hero-tag"><CheckCircle2 size={16} /> Online Admissions</span>
              <span className="hero-tag"><CheckCircle2 size={16} /> Instant SMS / WhatsApp Alerts</span>
              <span className="hero-tag"><CheckCircle2 size={16} /> Class-wise Student Records</span>
              <span className="hero-tag"><CheckCircle2 size={16} /> Online Result & Fee Portal</span>
            </div>

            {/* Call to Actions */}
            <div className="hero-cta-group">
              <button 
                type="button" 
                className="btn-hero-primary"
                onClick={openAdmissionModal}
              >
                <GraduationCap size={20} />
                <span>Admission Inquiry 2026-27</span>
              </button>

              <button 
                type="button" 
                className="btn-hero-secondary"
                onClick={() => onNavigate('features-demo')}
              >
                <Sparkles size={18} />
                <span>Explore Smart Portal Demo</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Quick Stats Bar */}
            <div className="hero-stats-row">
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Students</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Result Track Record</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-card">
                <div className="stat-number">25+</div>
                <div className="stat-label">Expert Teachers</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-card">
                <div className="stat-number">Smart</div>
                <div className="stat-label">Modern Classrooms</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive School Showcase Card */}
          <div className="hero-visual-block">
            <div className="school-emblem-card hero-showcase-card">
              <div className="slide-preview-banner">
                <img 
                  src={homeHeroSlides[activeSlide].image} 
                  alt={homeHeroSlides[activeSlide].tag} 
                  className="slide-mini-preview-img" 
                />
                <div className="slide-banner-caption">
                  <span className="caption-tag">{homeHeroSlides[activeSlide].tag}</span>
                </div>
              </div>

              <div className="emblem-header">
                <div className="live-status-pill">
                  <span className="ping-dot"></span> Official Website
                </div>
                <span className="session-tag">Session 2026-2027</span>
              </div>

              <div className="emblem-center">
                <div className="emblem-circle-glow">
                  <img src={logoImg} alt="GRD Public School Logo" className="hero-logo-img" />
                </div>
                <h3 className="card-school-name">GRD PUBLIC SCHOOL</h3>
                <p className="card-school-location">Tilawad Maina, Madhya Pradesh</p>
              </div>

              {/* Instant Slide Switcher Thumbnails */}
              <div className="slide-thumb-selector">
                <span className="thumb-label">Switch Slide:</span>
                <div className="thumb-row">
                  {homeHeroSlides.map((s, idx) => (
                    <button
                      key={s.id}
                      type="button"
                      className={`thumb-btn ${idx === activeSlide ? 'active' : ''}`}
                      onClick={() => setActiveSlide(idx)}
                    >
                      <img src={s.image} alt={s.tag} />
                      <span className="thumb-num">
                        {idx === 0 ? '1. Banner' : '2. Building'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pitch Highlights Box */}
              <div className="management-pitch-box">
                <div className="pitch-title">
                  <Smartphone size={18} /> Proposed School Portal Capabilities:
                </div>
                <ul className="pitch-list">
                  <li>
                    <span className="bullet-check">✓</span>
                    <div>
                      <strong>Smart Student Database:</strong> Filter by Class & Roll No instantly.
                    </div>
                  </li>
                  <li>
                    <span className="bullet-check">✓</span>
                    <div>
                      <strong>Automated Messaging:</strong> Instant WhatsApp/SMS to parents.
                    </div>
                  </li>
                  <li>
                    <span className="bullet-check">✓</span>
                    <div>
                      <strong>Online Result Portal:</strong> Parents can view & print report cards.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="emblem-footer">
                <button 
                  type="button" 
                  className="btn-interactive-demo"
                  onClick={() => onNavigate('features-demo')}
                >
                  🚀 Test Live Features Demo Below
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Slide Pagination Bar */}
        <div className="hero-slider-footer-bar">
          <div className="slider-dots-list">
            {homeHeroSlides.map((s, idx) => (
              <button
                key={idx}
                type="button"
                className={`slider-dot-btn ${idx === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(idx)}
              >
                <span className="dot-indicator"></span>
                <span className="dot-text">{idx === 0 ? 'Banner & Activities' : 'School Building'}</span>
              </button>
            ))}
          </div>

          <button 
            type="button" 
            className="slider-play-pause-btn"
            onClick={() => setIsPaused(!isPaused)}
          >
            {isPaused ? <Play size={14} /> : <Pause size={14} />}
            <span>{isPaused ? 'Auto Slide: Paused' : 'Auto Slide: Active'}</span>
          </button>
        </div>
      </section>
        </div>
      </section>

      {/* Leadership Quick Preview Section */}
      <section className="leadership-quick-intro">
        <div className="container">
          <div className="section-head-center">
            <span className="badge-tag">Guiding Lights</span>
            <h2 className="section-main-heading">Leadership at GRD Public School</h2>
            <p className="section-subtext">
              Dedicated mentors driving academic distinction and values in Tilawad Maina
            </p>
          </div>

          <div className="leadership-cards-grid">
            {/* Director Card */}
            <div className="leader-intro-card director-theme">
              <div className="leader-badge">Director</div>
              <div className="leader-avatar-placeholder">
                <School size={48} className="text-navy" />
              </div>
              <div className="leader-info">
                <h3>Shri Rajendra Verma</h3>
                <span className="leader-role">Director — GRD Public School</span>
                <p className="leader-quote">
                  "Our mission is to equip the children of Tilawad Maina and neighboring areas with modern technology, 
                  disciplined values, and world-class educational tools."
                </p>
              </div>
            </div>

            {/* Principal Card */}
            <div className="leader-intro-card principal-theme">
              <div className="leader-badge">Principal</div>
              <div className="leader-avatar-placeholder">
                <GraduationCap size={48} className="text-navy" />
              </div>
              <div className="leader-info">
                <h3>Shri Mahesh Verma</h3>
                <span className="leader-role">Principal — GRD Public School</span>
                <p className="leader-quote">
                  "Every student has unique potential. Through academic rigor, sports, and transparent communication 
                  with parents, we foster all-round excellence."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Portal Feature Cards */}
      <section className="portal-modules-section">
        <div className="container">
          <div className="section-head-center">
            <span className="badge-tag">Digital Transformation</span>
            <h2 className="section-main-heading">Key Features of the School Web Portal</h2>
            <p className="section-subtext">
              Explore how this website makes school management effortless for teachers, parents, and students.
            </p>
          </div>

          <div className="modules-grid">
            <div className="module-item" onClick={() => onNavigate('features-demo')}>
              <div className="module-icon bg-blue"><Users size={28} /></div>
              <h4>Class & Roll No. Student Directory</h4>
              <p>Search any student in seconds by class and roll number with full profile & attendance stats.</p>
              <span className="module-link">Test Demo &rarr;</span>
            </div>

            <div className="module-item" onClick={() => onNavigate('features-demo')}>
              <div className="module-icon bg-green"><MessageSquare size={28} /></div>
              <h4>Teacher & Parent SMS Alerts</h4>
              <p>Automated SMS and WhatsApp notification delivery for daily attendance, notices, and exam schedules.</p>
              <span className="module-link">Test Demo &rarr;</span>
            </div>

            <div className="module-item" onClick={() => onNavigate('features-demo')}>
              <div className="module-icon bg-amber"><Award size={28} /></div>
              <h4>Online Result & Report Cards</h4>
              <p>Parents can check quarterly, half-yearly and final results online with digital report card download.</p>
              <span className="module-link">Test Demo &rarr;</span>
            </div>

            <div className="module-item" onClick={() => onNavigate('fees')}>
              <div className="module-icon bg-purple"><CreditCard size={28} /></div>
              <h4>Fee Structure & Calculator</h4>
              <p>Transparent fee schedule with installment breakdown and bus transport fee calculator.</p>
              <span className="module-link">View Structure &rarr;</span>
            </div>

            <div className="module-item" onClick={() => onNavigate('dress-code')}>
              <div className="module-icon bg-rose"><Shirt size={28} /></div>
              <h4>School Uniform & Dress Code</h4>
              <p>Standardized uniform guidelines for summer, winter, and sports days for boys and girls.</p>
              <span className="module-link">View Guidelines &rarr;</span>
            </div>

            <div className="module-item" onClick={() => onNavigate('admissions')}>
              <div className="module-icon bg-teal"><GraduationCap size={28} /></div>
              <h4>Online Admission Inquiry</h4>
              <p>Digital admission forms allowing parents to submit application directly from home.</p>
              <span className="module-link">Apply Now &rarr;</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
