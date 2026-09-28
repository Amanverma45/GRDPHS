import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  GraduationCap, 
  Users, 
  MessageSquare, 
  Award, 
  CreditCard, 
  Shirt, 
  CheckCircle, 
  Search, 
  Send, 
  BookOpen, 
  Sun, 
  Sunrise, 
  Languages, 
  Menu, 
  X,
  Sparkles
} from 'lucide-react';
import logoImg from './assets/grd.jpg';
import './App.css';

// Sample students database for quick demonstration
const studentsData = [
  {
    rollNo: '101',
    name: 'Aarav Sharma',
    class: 'Class 8th',
    medium: 'English Medium',
    shift: 'Morning Shift (7:30 AM - 12:30 PM)',
    fatherName: 'Mr. Ramesh Sharma',
    phone: '98261XXXXX',
    attendance: '96%',
    status: 'Present',
    marks: { Hindi: 88, English: 92, Math: 95, Science: 90, 'Social Science': 86 },
    total: '451 / 500 (90.2%)',
    grade: 'A+ (Pass)'
  },
  {
    rollNo: '102',
    name: 'Pooja Verma',
    class: 'Class 8th',
    medium: 'Hindi Medium',
    shift: 'Morning Shift (7:30 AM - 12:30 PM)',
    fatherName: 'Mr. Suresh Verma',
    phone: '94065XXXXX',
    attendance: '98%',
    status: 'Present',
    marks: { Hindi: 94, English: 90, Math: 92, Science: 94, 'Social Science': 91 },
    total: '461 / 500 (92.2%)',
    grade: 'A+ (Pass)'
  },
  {
    rollNo: '103',
    name: 'Rahul Patel',
    class: 'Class 5th',
    medium: 'English Medium',
    shift: 'Day Shift (10:00 AM - 5:00 PM)',
    fatherName: 'Mr. Dinesh Patel',
    phone: '97530XXXXX',
    attendance: '92%',
    status: 'Present',
    marks: { Hindi: 82, English: 86, Math: 90, Science: 88, EVS: 84 },
    total: '430 / 500 (86.0%)',
    grade: 'A (Pass)'
  },
  {
    rollNo: '104',
    name: 'Sneha Rajput',
    class: 'Class 10th',
    medium: 'Hindi Medium',
    shift: 'Morning Shift (7:30 AM - 12:30 PM)',
    fatherName: 'Mr. Virendra Rajput',
    phone: '91310XXXXX',
    attendance: '99%',
    status: 'Present',
    marks: { Hindi: 96, English: 95, Math: 98, Science: 96, 'Social Science': 94 },
    total: '479 / 500 (95.8%)',
    grade: 'A+ (Pass)'
  }
];

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  // Student Directory Demo State
  const [selectedClass, setSelectedClass] = useState('All');
  const [selectedStudent, setSelectedStudent] = useState(studentsData[0]);

  // Result Demo State
  const [searchRoll, setSearchRoll] = useState('101');
  const [foundResult, setFoundResult] = useState(studentsData[0]);

  // SMS Demo State
  const [smsType, setSmsType] = useState('attendance');
  const [smsSent, setSmsSent] = useState(false);

  // Admission Form State
  const [form, setForm] = useState({
    name: '',
    father: '',
    phone: '',
    applyClass: 'Class 1st',
    medium: 'English Medium',
    address: ''
  });
  const [formDone, setFormDone] = useState(false);

  // Filter students
  const filteredList = studentsData.filter(s => 
    selectedClass === 'All' ? true : s.class === selectedClass
  );

  const handleResultSearch = (e) => {
    e.preventDefault();
    const res = studentsData.find(s => s.rollNo === searchRoll.trim());
    if (res) {
      setFoundResult(res);
    } else {
      alert('Student with Roll No ' + searchRoll + ' not found. Try Roll No: 101, 102, 103, or 104');
    }
  };

  const handleSendSms = () => {
    setSmsSent(true);
    setTimeout(() => setSmsSent(false), 4500);
  };

  const handleAdmissionSubmit = (e) => {
    e.preventDefault();
    setFormDone(true);
  };

  return (
    <div className="page-wrapper">
      {/* 1. TOP INFORMATION BAR */}
      <div className="top-info-bar">
        <div className="full-width-container top-flex">
          <div className="top-left-info">
            <span className="location-tag">📍 Tilawad Maina (M.P.)</span>
            <span className="divider-dot">•</span>
            <span className="medium-badge">English & Hindi Medium (LKG to 10th) | Hindi Medium (11th & 12th)</span>
          </div>
          <div className="top-right-info">
            <span className="shift-pill morning">
              <Sunrise size={13} /> 1st Shift (7th to 12th): <strong>7:30 AM – 12:30 PM</strong>
            </span>
            <span className="shift-pill day">
              <Sun size={13} /> 2nd Shift (LKG to 6th): <strong>10:00 AM – 5:00 PM</strong>
            </span>
            <span className="phone-item">
              <Phone size={13} /> +91 98XXX XXXXX
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <header className="main-header">
        <div className="full-width-container header-flex">
          {/* Logo and Two-line Brand Name */}
          <a href="#home" className="school-brand">
            <div className="brand-logo-frame">
              <img src={logoImg} alt="GRD Logo" className="brand-logo" />
            </div>
            <div className="brand-text-block">
              <div className="brand-title-grd">G.R.D</div>
              <div className="brand-title-public">Public School</div>
            </div>
          </a>

          {/* Clean Single-line Navigation Links with Hover Effects */}
          <nav className={`nav-menu ${navOpen ? 'open' : ''}`}>
            <a href="#home" className="nav-link" onClick={() => setNavOpen(false)}>Home</a>
            <a href="#management" className="nav-link" onClick={() => setNavOpen(false)}>Management</a>
            <a href="#shifts-medium" className="nav-link" onClick={() => setNavOpen(false)}>Shifts & Medium</a>
            <a href="#features" className="nav-link" onClick={() => setNavOpen(false)}>Features</a>
            <a href="#demo" className="nav-link" onClick={() => setNavOpen(false)}>Live Demo</a>
            <a href="#fees" className="nav-link" onClick={() => setNavOpen(false)}>Fees & Uniform</a>
            <a href="#admission" className="nav-link" onClick={() => setNavOpen(false)}>Admission</a>
            <a href="#contact" className="nav-link" onClick={() => setNavOpen(false)}>Contact</a>
          </nav>

          {/* Header Action Button */}
          <a href="#admission" className="btn-apply-header">Online Admission</a>

          {/* Mobile Hamburger Toggle */}
          <button className="mobile-menu-toggle" onClick={() => setNavOpen(!navOpen)} aria-label="Menu">
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="full-width-container hero-grid">
          <div className="hero-left">
            <div className="badge-row">
              <span className="pill-badge">Official Website Concept • Tilawad Maina</span>
              <span className="pill-badge-gold">Session 2026-2027</span>
            </div>

            <h2 className="hero-heading">
              Nurturing Minds with Quality & Values at <span className="highlight-grd">G.R.D Public School</span>
            </h2>

            <p className="hero-desc">
              Located in <strong>Tilawad Maina (M.P.)</strong>, under the dedicated leadership of 
              <strong> Director Shri Rajendra Verma</strong> and <strong>Principal Shri Mahesh Verma</strong>. 
              Offering English & Hindi Medium education with two organized shifts for better learning.
            </p>

            {/* Shift & Medium Quick Summary Cards */}
            <div className="hero-shifts-summary">
              <div className="h-shift-card">
                <Sunrise size={20} className="icon-gold" />
                <div>
                  <strong>1st Shift (Morning): 7:30 AM – 12:30 PM</strong>
                  <span>For Senior Classes: 7th, 8th, 9th, 10th, 11th & 12th</span>
                </div>
              </div>
              <div className="h-shift-card">
                <Sun size={20} className="icon-blue" />
                <div>
                  <strong>2nd Shift (Day): 10:00 AM – 5:00 PM</strong>
                  <span>For Junior Classes: LKG, UKG, 1st, 2nd, 3rd, 4th, 5th & 6th</span>
                </div>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#demo" className="btn-primary">Explore Live Features Demo 👇</a>
              <a href="#admission" className="btn-outline">Online Admission Form</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="logo-card">
              <div className="logo-highlight-circle">
                <img src={logoImg} alt="G.R.D Public School Logo" className="big-logo" />
              </div>
              <h3 className="card-brand-title">G.R.D PUBLIC SCHOOL</h3>
              <p className="card-brand-location">Tilawad Maina, Madhya Pradesh</p>
              
              <div className="card-highlights-list">
                <div className="c-item">✓ <strong>LKG to 10th:</strong> Both English & Hindi Medium</div>
                <div className="c-item">✓ <strong>11th & 12th:</strong> Hindi Medium</div>
                <div className="c-item">✓ <strong>Smart Portal:</strong> SMS Alerts, Student Database & Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SHIFTS & MEDIUM OVERVIEW SECTION */}
      <section id="shifts-medium" className="section-padding bg-white">
        <div className="full-width-container">
          <div className="section-title-center">
            <span className="pill-badge">Academic Structure</span>
            <h3>School Timings, Shifts & Medium Details</h3>
            <p>Well-organized shifts to ensure personal attention and quality learning for every student</p>
          </div>

          <div className="shifts-grid-2">
            {/* Shift 1 */}
            <div className="shift-card-detailed morning-theme">
              <div className="shift-header">
                <div className="shift-icon-wrap"><Sunrise size={28} /></div>
                <div>
                  <span className="shift-sub-title">Morning Shift</span>
                  <h4>1st Shift: 7:30 AM to 12:30 PM</h4>
                </div>
              </div>
              <div className="shift-body">
                <div className="info-badge-row">
                  <span className="tag-classes">Applicable Classes: 7th to 12th</span>
                </div>
                <ul className="shift-points">
                  <li><strong>Class 7th to 10th:</strong> Available in <strong>Both English & Hindi Medium</strong></li>
                  <li><strong>Class 11th & 12th:</strong> Available in <strong>Hindi Medium</strong></li>
                  <li>Dedicated morning hours for high-focus academics and science practicals.</li>
                </ul>
              </div>
            </div>

            {/* Shift 2 */}
            <div className="shift-card-detailed day-theme">
              <div className="shift-header">
                <div className="shift-icon-wrap"><Sun size={28} /></div>
                <div>
                  <span className="shift-sub-title">Day Shift</span>
                  <h4>2nd Shift: 10:00 AM to 5:00 PM</h4>
                </div>
              </div>
              <div className="shift-body">
                <div className="info-badge-row">
                  <span className="tag-classes">Applicable Classes: LKG to 6th</span>
                </div>
                <ul className="shift-points">
                  <li><strong>Class LKG & UKG (Pre-Primary):</strong> Both English & Hindi Medium</li>
                  <li><strong>Class 1st to 6th:</strong> Both English & Hindi Medium</li>
                  <li>Includes foundational learning, games, arts, and interactive activities.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MANAGEMENT SECTION (Director & Principal) */}
      <section id="management" className="section-padding">
        <div className="full-width-container">
          <div className="section-title-center">
            <h3>School Leadership & Management</h3>
            <p>Guiding principles of G.R.D Public School, Tilawad Maina</p>
          </div>

          <div className="management-grid">
            {/* Director */}
            <div className="manage-card">
              <div className="manage-badge">Director</div>
              <div className="manage-avatar">RV</div>
              <h4>Shri Rajendra Verma</h4>
              <span className="manage-role">Director — G.R.D Public School</span>
              <p className="manage-msg">
                "Our mission is to empower every child in Tilawad Maina with modern technology, strong moral values, and quality education. This website will connect parents directly with school updates, daily attendance, and exam results."
              </p>
            </div>

            {/* Principal */}
            <div className="manage-card">
              <div className="manage-badge principal-badge">Principal</div>
              <div className="manage-avatar principal-avatar">MV</div>
              <h4>Shri Mahesh Verma</h4>
              <span className="manage-role">Principal — G.R.D Public School</span>
              <p className="manage-msg">
                "We ensure disciplined academic growth, personal care, and active co-curricular learning. With our structured two-shift system and digital communication, parents stay fully informed of their child's daily progress."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROPOSED WEBSITE FEATURES */}
      <section id="features" className="section-padding bg-white">
        <div className="full-width-container">
          <div className="section-title-center">
            <h3>Proposed Features for G.R.D Public School Portal</h3>
            <p>Simple and powerful digital features to manage the school smoothly</p>
          </div>

          <div className="features-grid-simple">
            <div className="feat-box">
              <div className="feat-icon"><GraduationCap size={24} /></div>
              <h4>1. Online Admission Form</h4>
              <p>Parents can easily register student details and select Medium (English/Hindi) and Class.</p>
            </div>

            <div className="feat-box">
              <div className="feat-icon"><Users size={24} /></div>
              <h4>2. Class & Roll No. Search</h4>
              <p>Teachers can lookup any student in seconds by class, medium, shift, and roll number.</p>
            </div>

            <div className="feat-box">
              <div className="feat-icon"><MessageSquare size={24} /></div>
              <h4>3. SMS & WhatsApp Alerts</h4>
              <p>Instant automated notification to parents when attendance is marked or notices are published.</p>
            </div>

            <div className="feat-box">
              <div className="feat-icon"><Award size={24} /></div>
              <h4>4. Online Result Card</h4>
              <p>Parents can enter roll number anytime to view and print official quarterly and final report cards.</p>
            </div>

            <div className="feat-box">
              <div className="feat-icon"><CreditCard size={24} /></div>
              <h4>5. Fee & Bus Structure</h4>
              <p>Clear quarterly installment fees and bus/van route charges for Tilawad Maina and surrounding villages.</p>
            </div>

            <div className="feat-box">
              <div className="feat-icon"><Shirt size={24} /></div>
              <h4>6. Uniform & Guidelines</h4>
              <p>Complete dress code instructions for regular weekdays and Wednesday/Saturday sports dress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LIVE WORKING DEMOS */}
      <section id="demo" className="section-padding">
        <div className="full-width-container">
          <div className="section-title-center">
            <span className="pill-badge">Interactive Live Demo</span>
            <h3>Test How The School System Works</h3>
            <p>Click and test the live working prototypes below:</p>
          </div>

          {/* DEMO 1: Student Search */}
          <div className="demo-block">
            <div className="demo-header">
              <h4>Demo 1: Student Directory (Class, Medium & Roll No.)</h4>
              <span className="tag-info">Teacher / Admin System</span>
            </div>

            <div className="demo-filter-row">
              <label>Filter by Class:</label>
              <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="simple-select">
                <option value="All">All Classes (LKG to 12th)</option>
                <option value="Class 5th">Class 5th (Day Shift)</option>
                <option value="Class 8th">Class 8th (Morning Shift)</option>
                <option value="Class 10th">Class 10th (Morning Shift)</option>
              </select>
            </div>

            <div className="demo-flex-layout">
              {/* Table */}
              <div className="table-col">
                <table className="simple-table">
                  <thead>
                    <tr>
                      <th>Roll No</th>
                      <th>Student Name</th>
                      <th>Class & Medium</th>
                      <th>Shift Timing</th>
                      <th>Attendance</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredList.map(st => (
                      <tr key={st.rollNo} className={selectedStudent.rollNo === st.rollNo ? 'active-row' : ''}>
                        <td><strong>{st.rollNo}</strong></td>
                        <td>{st.name}</td>
                        <td>{st.class} • <span className="text-muted-tag">{st.medium}</span></td>
                        <td><span className="shift-tag">{st.shift.split('(')[0]}</span></td>
                        <td><span className="tag-green">{st.attendance}</span></td>
                        <td>
                          <button className="btn-table" onClick={() => setSelectedStudent(st)}>View Card</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Detail Card */}
              <div className="detail-card-col">
                <div className="student-card">
                  <div className="sc-header">
                    <div className="sc-avatar">👤</div>
                    <div>
                      <h5>{selectedStudent.name}</h5>
                      <span>Roll No: {selectedStudent.rollNo} | {selectedStudent.class} ({selectedStudent.medium})</span>
                    </div>
                  </div>
                  <div className="sc-body">
                    <p><strong>Shift:</strong> {selectedStudent.shift}</p>
                    <p><strong>Father's Name:</strong> {selectedStudent.fatherName}</p>
                    <p><strong>Parent Mobile:</strong> {selectedStudent.phone}</p>
                    <p><strong>Today's Status:</strong> <span className="tag-green">✓ {selectedStudent.status}</span></p>
                    <p><strong>Exam Total:</strong> {selectedStudent.total}</p>
                    <p><strong>Grade:</strong> <span className="tag-blue">{selectedStudent.grade}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DEMO 2: SMS Simulator */}
          <div className="demo-block">
            <div className="demo-header">
              <h4>Demo 2: Instant Parent SMS & WhatsApp Notification</h4>
              <span className="tag-info">Automated Parent Alerts</span>
            </div>

            <div className="sms-grid">
              <div className="sms-controls">
                <p>Send an instant demo message to <strong>{selectedStudent.fatherName}</strong> (Parent of {selectedStudent.name}):</p>
                
                <div className="sms-radio-group">
                  <label>
                    <input type="radio" name="sms" checked={smsType === 'attendance'} onChange={() => setSmsType('attendance')} />
                    <span>Daily Attendance Alert (Present at School)</span>
                  </label>
                  <label>
                    <input type="radio" name="sms" checked={smsType === 'result'} onChange={() => setSmsType('result')} />
                    <span>Term Exam Result Announcement</span>
                  </label>
                  <label>
                    <input type="radio" name="sms" checked={smsType === 'timing'} onChange={() => setSmsType('timing')} />
                    <span>School Shift Timing & Holiday Notice</span>
                  </label>
                </div>

                <button className="btn-send-sms" onClick={handleSendSms}>
                  <Send size={16} /> Send Test WhatsApp & SMS Alert
                </button>

                {smsSent && (
                  <div className="sms-sent-banner">
                    ✅ <strong>Alert Delivered!</strong> Message sent to {selectedStudent.phone} ({selectedStudent.name}'s Guardian).
                  </div>
                )}
              </div>

              <div className="sms-preview-box">
                <div className="phone-screen">
                  <div className="phone-top">G.R.D Public School • Tilawad Maina</div>
                  <div className="phone-body">
                    <div className="phone-msg">
                      {smsType === 'attendance' && (
                        <p>
                          <strong>[G.R.D Public School]</strong> Dear Parent, your child <strong>{selectedStudent.name}</strong> ({selectedStudent.class}, {selectedStudent.medium}) has arrived safely and is marked <strong>PRESENT</strong> today. Shift: {selectedStudent.shift.split('(')[1] || '7:30 AM'}
                        </p>
                      )}
                      {smsType === 'result' && (
                        <p>
                          <strong>[G.R.D Public School]</strong> Dear Parent, Exam Results for <strong>{selectedStudent.name}</strong> are declared. Total: <strong>{selectedStudent.total}</strong>. Marksheet available on school website.
                        </p>
                      )}
                      {smsType === 'timing' && (
                        <p>
                          <strong>[G.R.D Public School Notice]</strong> Attention Parents: 1st Shift (7th-12th) starts at 7:30 AM. 2nd Shift (LKG-6th) starts at 10:00 AM. Please ensure on-time arrival. - Director & Principal Office.
                        </p>
                      )}
                      <small className="msg-time">Delivered ✓✓</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DEMO 3: Online Marksheet */}
          <div className="demo-block">
            <div className="demo-header">
              <h4>Demo 3: Online Marksheet Generator</h4>
              <span className="tag-info">Parent Portal Result Lookup</span>
            </div>

            <form onSubmit={handleResultSearch} className="result-form-row">
              <label>Enter Student Roll Number:</label>
              <input 
                type="text" 
                value={searchRoll} 
                onChange={(e) => setSearchRoll(e.target.value)}
                placeholder="e.g. 101, 102, 103, 104" 
                className="simple-input"
              />
              <button type="submit" className="btn-search">
                <Search size={16} /> Search Result
              </button>
            </form>

            <div className="marksheet-box">
              <div className="ms-head">
                <img src={logoImg} alt="GRD Logo" className="ms-logo" />
                <div>
                  <h4>G.R.D PUBLIC SCHOOL</h4>
                  <p>Tilawad Maina, Madhya Pradesh</p>
                  <span className="ms-sub">Progress Report Card (Session 2026-2027)</span>
                </div>
              </div>

              <div className="ms-student-info">
                <div><strong>Student Name:</strong> {foundResult.name}</div>
                <div><strong>Roll No:</strong> {foundResult.rollNo}</div>
                <div><strong>Father's Name:</strong> {foundResult.fatherName}</div>
                <div><strong>Class & Medium:</strong> {foundResult.class} ({foundResult.medium})</div>
              </div>

              <table className="marks-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Max Marks</th>
                    <th>Marks Obtained</th>
                    <th>Result Status</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(foundResult.marks).map(([subj, score]) => (
                    <tr key={subj}>
                      <td><strong>{subj}</strong></td>
                      <td>100</td>
                      <td>{score}</td>
                      <td><span className="tag-green">Pass</span></td>
                    </tr>
                  ))}
                  <tr className="total-row">
                    <td><strong>TOTAL RESULT</strong></td>
                    <td><strong>500</strong></td>
                    <td><strong>{foundResult.total}</strong></td>
                    <td><strong className="tag-blue">{foundResult.grade}</strong></td>
                  </tr>
                </tbody>
              </table>

              <div className="ms-signatures">
                <div>
                  <div className="sign-line"></div>
                  <span>Class Teacher</span>
                </div>
                <div>
                  <div className="sign-line"></div>
                  <span>Principal (Shri Mahesh Verma)</span>
                </div>
                <div>
                  <div className="sign-line"></div>
                  <span>Director (Shri Rajendra Verma)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FEES & UNIFORM */}
      <section id="fees" className="section-padding bg-white">
        <div className="full-width-container">
          <div className="section-title-center">
            <h3>Fee Schedule & Uniform Guidelines</h3>
            <p>Transparent fee structure and uniform rules for parents</p>
          </div>

          <div className="fees-uniform-grid">
            {/* Fees Table */}
            <div className="card-box">
              <h4 className="box-title"><CreditCard size={20} /> Fee Structure (Annual & Quarterly)</h4>
              <table className="simple-table">
                <thead>
                  <tr>
                    <th>Class Group</th>
                    <th>Shift</th>
                    <th>Annual Fee</th>
                    <th>Quarterly (4 Terms)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>LKG to UKG</td>
                    <td>2nd Shift (10 AM - 5 PM)</td>
                    <td>₹8,000</td>
                    <td>₹2,000 / term</td>
                  </tr>
                  <tr>
                    <td>Class 1st to 6th</td>
                    <td>2nd Shift (10 AM - 5 PM)</td>
                    <td>₹10,000</td>
                    <td>₹2,500 / term</td>
                  </tr>
                  <tr>
                    <td>Class 7th to 10th</td>
                    <td>1st Shift (7:30 AM - 12:30 PM)</td>
                    <td>₹12,500</td>
                    <td>₹3,125 / term</td>
                  </tr>
                  <tr>
                    <td>Class 11th & 12th (Hindi Med.)</td>
                    <td>1st Shift (7:30 AM - 12:30 PM)</td>
                    <td>₹15,000</td>
                    <td>₹3,750 / term</td>
                  </tr>
                </tbody>
              </table>
              <p className="fee-subnote">
                * Safe Bus & Van facility available for Tilawad Maina and all nearby village routes.
              </p>
            </div>

            {/* Uniform Guide */}
            <div className="card-box">
              <h4 className="box-title"><Shirt size={20} /> School Dress Code</h4>
              
              <div className="uniform-block">
                <h5>👔 Regular Uniform (Mon, Tue, Thu, Fri):</h5>
                <p><strong>Boys:</strong> Sky Blue Shirt with school crest, Navy Blue Trousers/Shorts, School Tie, Belt & Black Shoes.</p>
                <p><strong>Girls:</strong> Sky Blue Shirt/Kurti, Navy Blue Skirt/Salwar, School Belt & Black Buckle Shoes.</p>
              </div>

              <div className="uniform-block" style={{ marginTop: '1.2rem' }}>
                <h5>🏃 Sports Uniform (Wednesday & Saturday):</h5>
                <p>Assigned House Color T-Shirt (Red, Blue, Green, Yellow), White Track Pant, and White Canvas Shoes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ADMISSION FORM */}
      <section id="admission" className="section-padding">
        <div className="full-width-container">
          <div className="section-title-center">
            <span className="pill-badge">Admissions 2026-2027</span>
            <h3>Online Admission Inquiry Form</h3>
            <p>Parents can apply directly online from home:</p>
          </div>

          <div className="form-container-box">
            {formDone ? (
              <div className="form-success">
                <CheckCircle size={48} className="text-green" />
                <h4>Inquiry Submitted Successfully!</h4>
                <p>
                  Thank you, <strong>{form.father}</strong>. The registration for <strong>{form.name}</strong> ({form.applyClass} - {form.medium}) has been received at G.R.D Public School office.
                </p>
                <p className="sms-alert-note">
                  📲 Notification SMS sent to mobile number: <strong>{form.phone}</strong>
                </p>
                <button className="btn-primary" onClick={() => setFormDone(false)}>Submit Another Form</button>
              </div>
            ) : (
              <form onSubmit={handleAdmissionSubmit} className="simple-admission-form">
                <div className="form-grid-2">
                  <div className="field">
                    <label>Student Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Rohan Verma" 
                      value={form.name} 
                      onChange={e => setForm({...form, name: e.target.value})} 
                    />
                  </div>

                  <div className="field">
                    <label>Applying for Class *</label>
                    <select value={form.applyClass} onChange={e => setForm({...form, applyClass: e.target.value})}>
                      <option value="LKG / UKG">LKG / UKG (2nd Shift: 10 AM - 5 PM)</option>
                      <option value="Class 1st">Class 1st (2nd Shift: 10 AM - 5 PM)</option>
                      <option value="Class 2nd">Class 2nd (2nd Shift: 10 AM - 5 PM)</option>
                      <option value="Class 3rd">Class 3rd (2nd Shift: 10 AM - 5 PM)</option>
                      <option value="Class 4th">Class 4th (2nd Shift: 10 AM - 5 PM)</option>
                      <option value="Class 5th">Class 5th (2nd Shift: 10 AM - 5 PM)</option>
                      <option value="Class 6th">Class 6th (2nd Shift: 10 AM - 5 PM)</option>
                      <option value="Class 7th">Class 7th (1st Shift: 7:30 AM - 12:30 PM)</option>
                      <option value="Class 8th">Class 8th (1st Shift: 7:30 AM - 12:30 PM)</option>
                      <option value="Class 9th">Class 9th (1st Shift: 7:30 AM - 12:30 PM)</option>
                      <option value="Class 10th">Class 10th (1st Shift: 7:30 AM - 12:30 PM)</option>
                      <option value="Class 11th">Class 11th - Hindi Medium (1st Shift: 7:30 AM - 12:30 PM)</option>
                      <option value="Class 12th">Class 12th - Hindi Medium (1st Shift: 7:30 AM - 12:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="field">
                    <label>Preferred Medium *</label>
                    <select value={form.medium} onChange={e => setForm({...form, medium: e.target.value})}>
                      <option value="English Medium">English Medium</option>
                      <option value="Hindi Medium">Hindi Medium</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>Mobile Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="e.g. 98261XXXXX" 
                      value={form.phone} 
                      onChange={e => setForm({...form, phone: e.target.value})} 
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="field">
                    <label>Father's Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Shri Ramesh Verma" 
                      value={form.father} 
                      onChange={e => setForm({...form, father: e.target.value})} 
                    />
                  </div>

                  <div className="field">
                    <label>Village / Area (Tilawad Maina area)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Main Road, Tilawad Maina" 
                      value={form.address} 
                      onChange={e => setForm({...form, address: e.target.value})} 
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary full-width-btn">
                  Submit Admission Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 10. CONTACT & FOOTER */}
      <footer id="contact" className="simple-footer">
        <div className="full-width-container footer-grid-simple">
          <div>
            <div className="footer-logo-row">
              <div className="brand-logo-frame mini">
                <img src={logoImg} alt="GRD Logo" className="footer-logo" />
              </div>
              <div className="brand-text-block">
                <div className="brand-title-grd text-white">G.R.D</div>
                <div className="brand-title-public text-gold">Public School</div>
              </div>
            </div>
            <p className="footer-text">
              Excellence in English & Hindi Medium education in Tilawad Maina under visionary management.
            </p>
          </div>

          <div>
            <h5>School Leadership</h5>
            <p><strong>Director:</strong> Shri Rajendra Verma</p>
            <p><strong>Principal:</strong> Shri Mahesh Verma</p>
            <p><strong>Mediums:</strong> English & Hindi Medium</p>
          </div>

          <div>
            <h5>Campus Address & Shifts</h5>
            <p>📍 Main Road, Tilawad Maina (M.P.)</p>
            <p>⏰ <strong>1st Shift (7th - 12th):</strong> 7:30 AM – 12:30 PM</p>
            <p>⏰ <strong>2nd Shift (LKG - 6th):</strong> 10:00 AM – 5:00 PM</p>
            <p>📞 Helpline: +91 98XXX XXXXX</p>
          </div>
        </div>

        <div className="footer-bottom-line">
          <div className="full-width-container">
            © {new Date().getFullYear()} G.R.D Public School, Tilawad Maina (M.P.). All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
