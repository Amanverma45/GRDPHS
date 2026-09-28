import React, { useState } from 'react';
import { 
  Users, 
  MessageSquare, 
  Award, 
  CreditCard, 
  Shirt, 
  Send, 
  Search, 
  CheckCircle, 
  AlertCircle, 
  Smartphone, 
  FileText, 
  Download, 
  Printer, 
  Sparkles,
  UserCheck,
  Calendar,
  Clock,
  PhoneCall,
  ShieldCheck,
  Building,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import logoImg from '../assets/grd.jpg';

// Sample dummy student database for demonstration
const sampleStudents = [
  {
    rollNo: 'GRD-101',
    name: 'Aarav Sharma',
    class: 'Class 8th',
    section: 'A',
    fatherName: 'Mr. Ramesh Sharma',
    contact: '+91 98261 XXXXX',
    attendance: '96%',
    status: 'Present Today',
    classTeacher: 'Mrs. Sunita Verma',
    marks: { Hindi: 88, English: 92, Mathematics: 95, Science: 90, 'Social Science': 86, Computer: 98 },
    feeStatus: 'Paid (No Dues)',
    photo: '👦',
    remarks: 'Outstanding academic performance and active in debate competitions.'
  },
  {
    rollNo: 'GRD-102',
    name: 'Pooja Verma',
    class: 'Class 8th',
    section: 'A',
    fatherName: 'Mr. Suresh Verma',
    contact: '+91 94065 XXXXX',
    attendance: '94%',
    status: 'Present Today',
    classTeacher: 'Mrs. Sunita Verma',
    marks: { Hindi: 94, English: 89, Mathematics: 91, Science: 93, 'Social Science': 90, Computer: 96 },
    feeStatus: 'Paid (No Dues)',
    photo: '👧',
    remarks: 'Excellent discipline and top score in Science practicals.'
  },
  {
    rollNo: 'GRD-103',
    name: 'Rahul Patel',
    class: 'Class 9th',
    section: 'B',
    fatherName: 'Mr. Dinesh Patel',
    contact: '+91 97530 XXXXX',
    attendance: '91%',
    status: 'Present Today',
    classTeacher: 'Mr. Anil Patidar',
    marks: { Hindi: 82, English: 85, Mathematics: 88, Science: 86, 'Social Science': 84, Computer: 90 },
    feeStatus: 'Quarter 3 Pending',
    photo: '👦',
    remarks: 'Good progress in sports and science projects.'
  },
  {
    rollNo: 'GRD-104',
    name: 'Sneha Rajput',
    class: 'Class 10th',
    section: 'A',
    fatherName: 'Mr. Virendra Rajput',
    contact: '+91 91310 XXXXX',
    attendance: '98%',
    status: 'Present Today',
    classTeacher: 'Mr. Rajendra Sir',
    marks: { Hindi: 96, English: 94, Mathematics: 99, Science: 97, 'Social Science': 95, Computer: 100 },
    feeStatus: 'Paid (No Dues)',
    photo: '👧',
    remarks: 'School Topper candidate. Exemplary consistency.'
  },
  {
    rollNo: 'GRD-105',
    name: 'Mohit Mewada',
    class: 'Class 5th',
    section: 'A',
    fatherName: 'Mr. Kailash Mewada',
    contact: '+91 99812 XXXXX',
    attendance: '92%',
    status: 'Present Today',
    classTeacher: 'Mrs. Radha Sharma',
    marks: { Hindi: 85, English: 80, Mathematics: 90, Science: 88, 'Social Science': 82, Computer: 92 },
    feeStatus: 'Paid (No Dues)',
    photo: '👦',
    remarks: 'Active in cultural programs and drawing.'
  }
];

export default function SmartFeaturesDemo() {
  const [activeTab, setActiveTab] = useState('students');
  
  // Tab 1: Student Search State
  const [selectedClass, setSelectedClass] = useState('All');
  const [searchRoll, setSearchRoll] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(sampleStudents[0]);

  // Tab 2: Messaging Simulator State
  const [msgType, setMsgType] = useState('attendance');
  const [recipient, setRecipient] = useState('parent');
  const [customMsgText, setCustomMsgText] = useState('');
  const [sentLog, setSentLog] = useState([]);
  const [simulatingSend, setSimulatingSend] = useState(false);

  // Tab 3: Result Card State
  const [resultRollInput, setResultRollInput] = useState('GRD-101');
  const [loadedResult, setLoadedResult] = useState(sampleStudents[0]);

  // Filter students
  const filteredStudents = sampleStudents.filter((s) => {
    const matchesClass = selectedClass === 'All' || s.class.toLowerCase().includes(selectedClass.toLowerCase());
    const matchesSearch = s.rollNo.toLowerCase().includes(searchRoll.toLowerCase()) || 
                          s.name.toLowerCase().includes(searchRoll.toLowerCase());
    return matchesClass && matchesSearch;
  });

  // Handle Send Message Simulation
  const handleSendMessage = () => {
    setSimulatingSend(true);
    setTimeout(() => {
      let previewMessage = '';
      if (msgType === 'attendance') {
        previewMessage = `[GRD PUBLIC SCHOOL - Tilawad Maina] Dear Parent, your ward ${selectedStudent.name} (Roll No: ${selectedStudent.rollNo}, Class: ${selectedStudent.class}) has arrived safely at school and is marked PRESENT today at 08:15 AM.`;
      } else if (msgType === 'result') {
        previewMessage = `[GRD PUBLIC SCHOOL] Dear Parent, Term Exam Results for ${selectedStudent.name} (${selectedStudent.class}) have been announced. Percentage: 91.5%. View full report card online at school portal.`;
      } else if (msgType === 'fee') {
        previewMessage = `[GRD PUBLIC SCHOOL Notice] Dear Parent, this is a gentle reminder regarding the 3rd Quarter School Fee for ${selectedStudent.name}. Please clear before 10th of this month. Thank you.`;
      } else {
        previewMessage = customMsgText || `[GRD PUBLIC SCHOOL] Important notice from Director Shri Rajendra Verma & Principal Shri Mahesh Verma for all parents regarding upcoming Annual Sports Meet.`;
      }

      const newLog = {
        id: Date.now(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: msgType,
        recipient: recipient === 'parent' ? `Parent of ${selectedStudent.name}` : 'All Class Teachers',
        contact: selectedStudent.contact,
        text: previewMessage,
        status: 'Delivered (WhatsApp & SMS)'
      };

      setSentLog([newLog, ...sentLog]);
      setSimulatingSend(false);
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
    }, 600);
  };

  // Handle Search Result
  const handleSearchResult = (e) => {
    e.preventDefault();
    const found = sampleStudents.find(
      s => s.rollNo.toLowerCase() === resultRollInput.trim().toLowerCase() ||
           s.name.toLowerCase().includes(resultRollInput.trim().toLowerCase())
    );
    if (found) {
      setLoadedResult(found);
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
    } else {
      alert(`Student with Roll No/Name "${resultRollInput}" not found in demo database. Try: GRD-101, GRD-102, GRD-103, GRD-104, GRD-105`);
    }
  };

  // Calculate percentage for Result Card
  const calculateTotal = (marksObj) => {
    const subjects = Object.keys(marksObj);
    const totalMarks = subjects.reduce((sum, sub) => sum + marksObj[sub], 0);
    const maxMarks = subjects.length * 100;
    const percentage = ((totalMarks / maxMarks) * 100).toFixed(1);
    return { totalMarks, maxMarks, percentage };
  };

  return (
    <section id="features-demo" className="smart-demo-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-center">
          <div className="badge-tag">
            <Sparkles size={14} /> Interactive Live Demos
          </div>
          <h2 className="section-main-heading">
            Live Preview of Proposed School Portal Features
          </h2>
          <p className="section-subtext">
            Dear <strong>Rajendra Sir & Mahesh Sir</strong>, test these working interactive modules 
            designed exclusively for <strong>GRD Public School, Tilawad Maina</strong>.
          </p>
        </div>

        {/* Feature Tab Navigation */}
        <div className="demo-tabs-container">
          <button
            type="button"
            className={`demo-tab-btn ${activeTab === 'students' ? 'active' : ''}`}
            onClick={() => setActiveTab('students')}
          >
            <Users size={18} />
            <span>1. Student Directory (Class & Roll No.)</span>
          </button>

          <button
            type="button"
            className={`demo-tab-btn ${activeTab === 'messaging' ? 'active' : ''}`}
            onClick={() => setActiveTab('messaging')}
          >
            <MessageSquare size={18} />
            <span>2. Instant SMS / WhatsApp Alerts</span>
          </button>

          <button
            type="button"
            className={`demo-tab-btn ${activeTab === 'results' ? 'active' : ''}`}
            onClick={() => setActiveTab('results')}
          >
            <Award size={18} />
            <span>3. Online Result Portal & Marksheet</span>
          </button>
        </div>

        {/* ================= TAB 1: STUDENT DIRECTORY ================= */}
        {activeTab === 'students' && (
          <div className="demo-card-box animate-fade-in">
            <div className="demo-box-header">
              <div>
                <h3 className="demo-title">
                  Class-wise & Roll Number Student Record System
                </h3>
                <p className="demo-subtitle">
                  Filter by class or search any student instantly. Teachers and management can view attendance, parent contact, and academic status.
                </p>
              </div>
              <div className="system-pill">
                <ShieldCheck size={16} /> Admin / Teacher View
              </div>
            </div>

            {/* Filter Bar */}
            <div className="filter-controls-bar">
              <div className="filter-group">
                <label>Filter by Class:</label>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="custom-select"
                >
                  <option value="All">All Classes (Nursery to 10th)</option>
                  <option value="5th">Class 5th</option>
                  <option value="8th">Class 8th</option>
                  <option value="9th">Class 9th</option>
                  <option value="10th">Class 10th</option>
                </select>
              </div>

              <div className="search-group">
                <label>Search Student Name or Roll No:</label>
                <div className="search-input-wrapper">
                  <Search size={18} className="search-icon" />
                  <input
                    type="text"
                    placeholder="e.g. GRD-101 or Pooja Verma..."
                    value={searchRoll}
                    onChange={(e) => setSearchRoll(e.target.value)}
                    className="custom-input"
                  />
                </div>
              </div>
            </div>

            {/* Content Layout: Table & Detail Card */}
            <div className="student-demo-grid">
              {/* Left: Students Table */}
              <div className="students-table-wrapper">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Roll No</th>
                      <th>Student Name</th>
                      <th>Class</th>
                      <th>Attendance</th>
                      <th>Fee Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((st) => (
                      <tr
                        key={st.rollNo}
                        className={selectedStudent.rollNo === st.rollNo ? 'selected-row' : ''}
                        onClick={() => setSelectedStudent(st)}
                      >
                        <td><strong>{st.rollNo}</strong></td>
                        <td>
                          <div className="name-cell">
                            <span className="avatar-emoji">{st.photo}</span>
                            <span>{st.name}</span>
                          </div>
                        </td>
                        <td><span className="badge-class">{st.class} - {st.section}</span></td>
                        <td>
                          <span className="badge-attendance">{st.attendance}</span>
                        </td>
                        <td>
                          <span className={st.feeStatus.includes('Paid') ? 'badge-paid' : 'badge-pending'}>
                            {st.feeStatus}
                          </span>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn-sm-view"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedStudent(st);
                            }}
                          >
                            View Card
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Right: Selected Student Detail Card */}
              <div className="student-profile-card">
                <div className="profile-header">
                  <div className="profile-avatar">{selectedStudent.photo}</div>
                  <div>
                    <h4>{selectedStudent.name}</h4>
                    <span className="profile-roll">Roll No: {selectedStudent.rollNo} | {selectedStudent.class} ({selectedStudent.section})</span>
                  </div>
                </div>

                <div className="profile-body">
                  <div className="profile-info-row">
                    <span className="info-label">Father's Name:</span>
                    <span className="info-value">{selectedStudent.fatherName}</span>
                  </div>
                  <div className="profile-info-row">
                    <span className="info-label">Guardian Contact:</span>
                    <span className="info-value text-blue">{selectedStudent.contact}</span>
                  </div>
                  <div className="profile-info-row">
                    <span className="info-label">Class Teacher:</span>
                    <span className="info-value">{selectedStudent.classTeacher}</span>
                  </div>
                  <div className="profile-info-row">
                    <span className="info-label">Today's Attendance:</span>
                    <span className="badge-success-pill">✓ {selectedStudent.status}</span>
                  </div>
                  <div className="profile-info-row">
                    <span className="info-label">School:</span>
                    <span className="info-value">GRD Public School, Tilawad Maina</span>
                  </div>

                  <div className="teacher-remarks-box">
                    <div className="remarks-title">Teacher's Remark:</div>
                    <p className="remarks-text">"{selectedStudent.remarks}"</p>
                  </div>

                  <div className="profile-action-buttons">
                    <button
                      type="button"
                      className="btn-quick-sms"
                      onClick={() => {
                        setActiveTab('messaging');
                      }}
                    >
                      <MessageSquare size={16} /> Send SMS to Parent
                    </button>
                    <button
                      type="button"
                      className="btn-quick-result"
                      onClick={() => {
                        setLoadedResult(selectedStudent);
                        setResultRollInput(selectedStudent.rollNo);
                        setActiveTab('results');
                      }}
                    >
                      <Award size={16} /> View Marksheet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: SMS & WHATSAPP ALERTS SIMULATOR ================= */}
        {activeTab === 'messaging' && (
          <div className="demo-card-box animate-fade-in">
            <div className="demo-box-header">
              <div>
                <h3 className="demo-title">
                  Automated Teacher & Parent SMS / WhatsApp Notification Simulator
                </h3>
                <p className="demo-subtitle">
                  This solves the biggest communication gap in schools. Instant automatic alerts keep parents informed and build massive trust for GRD Public School.
                </p>
              </div>
              <div className="system-pill">
                <Smartphone size={16} /> Live Notification Engine
              </div>
            </div>

            <div className="messaging-demo-grid">
              {/* Left Column: Message Trigger Panel */}
              <div className="message-controls-panel">
                <div className="form-group-item">
                  <label className="input-title">1. Select Target Student / Parent:</label>
                  <select
                    value={selectedStudent.rollNo}
                    onChange={(e) => {
                      const found = sampleStudents.find(s => s.rollNo === e.target.value);
                      if (found) setSelectedStudent(found);
                    }}
                    className="custom-select"
                  >
                    {sampleStudents.map(s => (
                      <option key={s.rollNo} value={s.rollNo}>
                        {s.name} ({s.rollNo} - {s.class}) - Father: {s.fatherName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group-item">
                  <label className="input-title">2. Choose Alert Type:</label>
                  <div className="alert-type-selector">
                    <button
                      type="button"
                      className={`type-btn ${msgType === 'attendance' ? 'active' : ''}`}
                      onClick={() => setMsgType('attendance')}
                    >
                      🔔 Daily Attendance Alert
                    </button>
                    <button
                      type="button"
                      className={`type-btn ${msgType === 'result' ? 'active' : ''}`}
                      onClick={() => setMsgType('result')}
                    >
                      📊 Exam Result Published
                    </button>
                    <button
                      type="button"
                      className={`type-btn ${msgType === 'fee' ? 'active' : ''}`}
                      onClick={() => setMsgType('fee')}
                    >
                      💳 Fee Due / Reminder
                    </button>
                    <button
                      type="button"
                      className={`type-btn ${msgType === 'custom' ? 'active' : ''}`}
                      onClick={() => setMsgType('custom')}
                    >
                      📢 School Holiday / Emergency Notice
                    </button>
                  </div>
                </div>

                {msgType === 'custom' && (
                  <div className="form-group-item">
                    <label className="input-title">Custom Notice from Director / Principal Desk:</label>
                    <textarea
                      rows="3"
                      className="custom-textarea"
                      placeholder="e.g. GRD Public School will remain closed tomorrow due to heavy rain / festival. Regular classes will resume from Monday."
                      value={customMsgText}
                      onChange={(e) => setCustomMsgText(e.target.value)}
                    ></textarea>
                  </div>
                )}

                <div className="trigger-action-block">
                  <button
                    type="button"
                    className="btn-send-notification"
                    disabled={simulatingSend}
                    onClick={handleSendMessage}
                  >
                    {simulatingSend ? (
                      <span>Dispatching Notification...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Dispatch Test WhatsApp & SMS Alert</span>
                      </>
                    )}
                  </button>
                  <small className="hint-text">
                    *Clicking simulates sending live WhatsApp message directly to parent's phone ({selectedStudent.contact}).
                  </small>
                </div>
              </div>

              {/* Right Column: Realistic WhatsApp Phone Mockup */}
              <div className="phone-mockup-container">
                <div className="smartphone-frame">
                  <div className="phone-speaker"></div>
                  <div className="phone-header-bar">
                    <div className="chat-avatar-mini">
                      <img src={logoImg} alt="GRD Logo" />
                    </div>
                    <div className="chat-meta">
                      <div className="chat-school-name">GRD Public School, Tilawad Maina</div>
                      <div className="chat-online-status">Official Verified School Channel</div>
                    </div>
                  </div>

                  <div className="chat-messages-body">
                    <div className="chat-date-pill">TODAY</div>

                    {/* Preloaded message */}
                    <div className="chat-bubble-received">
                      <div className="bubble-sender">GRD Public School (Director & Principal Office)</div>
                      <p>
                        Welcome to GRD Public School Digital Parent Portal. You will receive real-time attendance, 
                        homework, and exam notices for your child here.
                      </p>
                      <span className="bubble-time">07:30 AM</span>
                    </div>

                    {/* Dynamically Sent Message */}
                    {sentLog.length > 0 ? (
                      sentLog.map((log) => (
                        <div key={log.id} className="chat-bubble-received animate-fade-in highlight-new-bubble">
                          <div className="bubble-sender">📢 Alert for {log.recipient}</div>
                          <p>{log.text}</p>
                          <div className="bubble-footer">
                            <span className="bubble-time">{log.time}</span>
                            <span className="bubble-ticks">✓✓ Delivered</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="chat-placeholder-hint">
                        👈 Click <strong>"Dispatch Test WhatsApp & SMS Alert"</strong> button on the left to see the message pop up here live!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: ONLINE RESULT & MARKSHEET ================= */}
        {activeTab === 'results' && (
          <div className="demo-card-box animate-fade-in">
            <div className="demo-box-header">
              <div>
                <h3 className="demo-title">
                  Digital Result & Marksheet Generation Portal
                </h3>
                <p className="demo-subtitle">
                  Parents & students enter their Roll Number to access tamper-proof digital report cards anytime, anywhere.
                </p>
              </div>
              <div className="system-pill">
                <Award size={16} /> Report Card Generator
              </div>
            </div>

            {/* Search Roll Number for Result */}
            <form onSubmit={handleSearchResult} className="result-search-bar">
              <div className="result-input-wrap">
                <label>Enter Student Roll Number to Check Result:</label>
                <div className="input-and-btn">
                  <input
                    type="text"
                    placeholder="e.g. GRD-101, GRD-102, GRD-104..."
                    value={resultRollInput}
                    onChange={(e) => setResultRollInput(e.target.value)}
                    className="custom-input"
                  />
                  <button type="submit" className="btn-search-result">
                    <Search size={18} /> View Result
                  </button>
                </div>
              </div>

              <div className="quick-roll-tags">
                <span>Quick Test:</span>
                {sampleStudents.map(s => (
                  <button
                    type="button"
                    key={s.rollNo}
                    className="tag-pill-btn"
                    onClick={() => {
                      setResultRollInput(s.rollNo);
                      setLoadedResult(s);
                    }}
                  >
                    {s.name} ({s.rollNo})
                  </button>
                ))}
              </div>
            </form>

            {/* Printable Official Marksheet */}
            <div className="official-marksheet-card" id="printable-marksheet">
              <div className="marksheet-border-frame">
                {/* Header with GRD Public School Info */}
                <div className="marksheet-header">
                  <div className="marksheet-logo-wrap">
                    <img src={logoImg} alt="GRD Logo" className="marksheet-logo" />
                  </div>
                  <div className="marksheet-title-block">
                    <h2 className="marksheet-school-name">GRD PUBLIC SCHOOL</h2>
                    <p className="marksheet-sub">TILAWAD MAINA, MADHYA PRADESH</p>
                    <div className="marksheet-badge">ANNUAL PROGRESS REPORT CARD (2026-2027)</div>
                  </div>
                  <div className="marksheet-director-stamp">
                    <div className="stamp-box">
                      <span>VERIFIED</span>
                      <small>Govt. Recognized</small>
                    </div>
                  </div>
                </div>

                {/* Student Details Row */}
                <div className="marksheet-student-meta">
                  <div className="meta-col">
                    <p><strong>Student Name:</strong> {loadedResult.name}</p>
                    <p><strong>Father's Name:</strong> {loadedResult.fatherName}</p>
                  </div>
                  <div className="meta-col">
                    <p><strong>Roll Number:</strong> <span className="highlight-roll">{loadedResult.rollNo}</span></p>
                    <p><strong>Class & Section:</strong> {loadedResult.class} ({loadedResult.section})</p>
                  </div>
                  <div className="meta-col">
                    <p><strong>Attendance:</strong> {loadedResult.attendance}</p>
                    <p><strong>Session:</strong> 2026-2027</p>
                  </div>
                </div>

                {/* Marks Table */}
                <table className="marksheet-table">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Subject Name</th>
                      <th>Max Marks</th>
                      <th>Marks Obtained</th>
                      <th>Grade</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(loadedResult.marks).map(([subj, mark], idx) => {
                      const grade = mark >= 90 ? 'A+' : mark >= 80 ? 'A' : mark >= 70 ? 'B' : 'C';
                      return (
                        <tr key={subj}>
                          <td>{idx + 1}</td>
                          <td><strong>{subj}</strong></td>
                          <td>100</td>
                          <td><span className="marks-bold">{mark}</span></td>
                          <td><span className="grade-pill">{grade}</span></td>
                          <td><span className="text-green font-semibold">Passed</span></td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    {(() => {
                      const stats = calculateTotal(loadedResult.marks);
                      return (
                        <tr className="summary-row">
                          <td colSpan="2"><strong>GRAND TOTAL & PERCENTAGE</strong></td>
                          <td><strong>{stats.maxMarks}</strong></td>
                          <td><strong className="grand-total">{stats.totalMarks}</strong></td>
                          <td colSpan="2">
                            <span className="percentage-highlight">
                              {stats.percentage}% — FIRST DIVISION (A+)
                            </span>
                          </td>
                        </tr>
                      );
                    })()}
                  </tfoot>
                </table>

                {/* Signatures & Remarks */}
                <div className="marksheet-footer-grid">
                  <div className="sign-box">
                    <div className="sign-line"></div>
                    <p>Class Teacher Sign</p>
                    <small>({loadedResult.classTeacher})</small>
                  </div>
                  <div className="sign-box">
                    <div className="sign-line"></div>
                    <p>Principal Sign</p>
                    <small>Shri Mahesh Verma</small>
                  </div>
                  <div className="sign-box">
                    <div className="sign-line"></div>
                    <p>Director Sign</p>
                    <small>Shri Rajendra Verma</small>
                  </div>
                </div>
              </div>

              {/* Action Buttons for Marksheet */}
              <div className="marksheet-actions">
                <button
                  type="button"
                  className="btn-print-marksheet"
                  onClick={() => window.print()}
                >
                  <Printer size={18} /> Print Official Marksheet
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
