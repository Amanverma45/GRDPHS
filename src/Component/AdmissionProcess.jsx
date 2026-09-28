import React, { useState } from 'react';
import { GraduationCap, CheckCircle2, FileText, Send, Calendar, Sparkles, Phone, User, Home as HomeIcon, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AdmissionProcess() {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    motherName: '',
    applyingClass: 'Class 1st',
    contactNumber: '',
    email: '',
    dob: '',
    address: '',
    previousSchool: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.fatherName || !formData.contactNumber) {
      alert('Please fill the required student name, father name, and contact number.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      studentName: '',
      fatherName: '',
      motherName: '',
      applyingClass: 'Class 1st',
      contactNumber: '',
      email: '',
      dob: '',
      address: '',
      previousSchool: ''
    });
  };

  return (
    <section id="admissions" className="admissions-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-head-center">
          <div className="badge-tag">
            <GraduationCap size={14} /> Admissions 2026-2027
          </div>
          <h2 className="section-main-heading">
            Admission Process & Online Registration
          </h2>
          <p className="section-subtext">
            Join the GRD Public School family. Simple 4-step admission process with instant online inquiry.
          </p>
        </div>

        {/* 4 Steps Roadmap */}
        <div className="admission-steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <h4>Online Registration</h4>
            <p>Fill the basic admission inquiry form online or visit the school office in Tilawad Maina.</p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>
            <h4>Document Verification</h4>
            <p>Submit Aadhar Card, Birth Certificate, and previous year report card at the Principal Office.</p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <h4>Interaction & Counseling</h4>
            <p>Warm introductory interaction of student and parents with Principal Shri Mahesh Verma Sir.</p>
          </div>

          <div className="step-card">
            <div className="step-number">04</div>
            <h4>Seat Confirmation</h4>
            <p>Pay admission fees, collect booklist, syllabus, and school uniform details to begin classes.</p>
          </div>
        </div>

        {/* Form and Documents Grid */}
        <div className="admission-form-wrapper">
          {/* Left: Required Documents & Eligibility */}
          <div className="admission-info-sidebar">
            <div className="info-card-box">
              <h3 className="info-box-title">
                <FileText size={20} className="text-gold" />
                Required Documents Checklist
              </h3>
              <ul className="checklist">
                <li><CheckCircle2 size={18} className="text-green" /> Student Birth Certificate (DOB proof)</li>
                <li><CheckCircle2 size={18} className="text-green" /> Student & Parents Aadhar Card photocopy</li>
                <li><CheckCircle2 size={18} className="text-green" /> Previous Class Marksheet / Report Card</li>
                <li><CheckCircle2 size={18} className="text-green" /> Transfer Certificate (TC) from previous school</li>
                <li><CheckCircle2 size={18} className="text-green" /> 4 Recent Passport Size Photographs</li>
                <li><CheckCircle2 size={18} className="text-green" /> Samagra ID & Caste Certificate (if applicable)</li>
              </ul>
            </div>

            <div className="info-card-box help-desk-card">
              <h4>Direct Admission Helpdesk:</h4>
              <p>For urgent admission inquiries or bus route availability in Tilawad Maina region:</p>
              <div className="helpdesk-contact">
                <Phone size={18} />
                <span>+91 98XXX XXXXX (School Office)</span>
              </div>
              <small>Timings: 08:00 AM to 03:00 PM (Monday to Saturday)</small>
            </div>
          </div>

          {/* Right: Interactive Online Application Form */}
          <div className="form-card-container">
            {submitted ? (
              <div className="success-submission-state animate-fade-in">
                <div className="success-icon-badge">
                  <Check size={42} />
                </div>
                <h3>Admission Inquiry Submitted Successfully!</h3>
                <p>
                  Thank you, <strong>{formData.fatherName}</strong>. The application for <strong>{formData.studentName}</strong> ({formData.applyingClass}) has been recorded at GRD Public School office.
                </p>

                <div className="success-sms-simulation">
                  <div className="sms-sim-badge">📲 Automated SMS Sent to {formData.contactNumber}</div>
                  <p className="sms-sim-text">
                    "Dear Parent, Thank you for registering at GRD Public School, Tilawad Maina. 
                    Ref ID: #GRD-ADM-{Math.floor(1000 + Math.random() * 9000)}. Our admission team / Principal Office will contact you shortly."
                  </p>
                </div>

                <button type="button" className="btn-reset-form" onClick={resetForm}>
                  Submit Another Admission Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="actual-admission-form">
                <div className="form-header-row">
                  <h3>Online Admission Inquiry Form (2026-27)</h3>
                  <span className="badge-fast">Fast Online Entry</span>
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label>Student Full Name <span className="text-red">*</span></label>
                    <input
                      type="text"
                      name="studentName"
                      placeholder="e.g. Rohan Verma"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label>Applying for Class <span className="text-red">*</span></label>
                    <select
                      name="applyingClass"
                      value={formData.applyingClass}
                      onChange={handleChange}
                    >
                      <option value="Nursery">Nursery / LKG / UKG</option>
                      <option value="Class 1st">Class 1st</option>
                      <option value="Class 2nd">Class 2nd</option>
                      <option value="Class 3rd">Class 3rd</option>
                      <option value="Class 4th">Class 4th</option>
                      <option value="Class 5th">Class 5th</option>
                      <option value="Class 6th">Class 6th</option>
                      <option value="Class 7th">Class 7th</option>
                      <option value="Class 8th">Class 8th</option>
                      <option value="Class 9th">Class 9th</option>
                      <option value="Class 10th">Class 10th</option>
                      <option value="Class 11th / 12th">Class 11th / 12th</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label>Father's Name <span className="text-red">*</span></label>
                    <input
                      type="text"
                      name="fatherName"
                      placeholder="e.g. Shri Ramesh Verma"
                      value={formData.fatherName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label>Mother's Name</label>
                    <input
                      type="text"
                      name="motherName"
                      placeholder="e.g. Smt. Sunita Verma"
                      value={formData.motherName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label>Contact / WhatsApp Number <span className="text-red">*</span></label>
                    <input
                      type="tel"
                      name="contactNumber"
                      placeholder="e.g. 98261 XXXXX"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label>Village / City / Address (Tilawad Maina area)</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="e.g. Main Market, Village Tilawad Maina..."
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label>Previous School Attended (If Any)</label>
                  <input
                    type="text"
                    name="previousSchool"
                    placeholder="e.g. Primary School Tilawad"
                    value={formData.previousSchool}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn-submit-admission" disabled={loading}>
                  {loading ? 'Submitting Application...' : 'Submit Admission Registration'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
