import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, School } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', queryType: 'General Inquiry', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert('Please provide your name and phone number.');
      return;
    }
    setSent(true);
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Header */}
        <div className="section-head-center">
          <div className="badge-tag">
            <Phone size={14} /> Get in Touch
          </div>
          <h2 className="section-main-heading">Contact School Administration</h2>
          <p className="section-subtext">
            Have queries regarding admissions, transport routes, or student progress? We are here to help.
          </p>
        </div>

        <div className="contact-grid-wrapper">
          {/* Left Column: Direct Contact Info & Management Office */}
          <div className="contact-info-panel">
            <div className="contact-card-header">
              <School size={28} className="text-gold" />
              <div>
                <h3>GRD Public School</h3>
                <p className="sub">Tilawad Maina, Madhya Pradesh</p>
              </div>
            </div>

            <div className="contact-detail-items">
              <div className="detail-item">
                <div className="detail-icon"><MapPin size={20} /></div>
                <div>
                  <strong>Campus Address:</strong>
                  <p>GRD Public School Campus, Main Road, Tilawad Maina, District Shajapur / M.P. PIN: 465XXX</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon"><Phone size={20} /></div>
                <div>
                  <strong>Director / Principal Helpline:</strong>
                  <p className="phone-highlight">+91 98XXX XXXXX / +91 94XXX XXXXX</p>
                  <small>Director: Shri Rajendra Verma | Principal: Shri Mahesh Verma</small>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon"><Mail size={20} /></div>
                <div>
                  <strong>Official Email:</strong>
                  <p>info@grdpublicschooltilawad.edu.in</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon"><Clock size={20} /></div>
                <div>
                  <strong>Office Working Hours:</strong>
                  <p>Monday – Saturday: 08:00 AM to 03:30 PM (Sunday Closed)</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quick Chat Card */}
            <div className="whatsapp-help-box">
              <div className="wa-title">
                <MessageSquare size={18} /> Quick WhatsApp Helpdesk
              </div>
              <p>Parents can send direct admission questions via WhatsApp anytime for quick response.</p>
            </div>
          </div>

          {/* Right Column: Direct Quick Message Box */}
          <div className="contact-form-panel">
            <h3 className="form-title">Send Direct Message to School Office</h3>
            <p className="form-sub">We usually respond within 2-4 business hours.</p>

            {sent ? (
              <div className="contact-success-box animate-fade-in">
                <CheckCircle2 size={44} className="text-green" />
                <h4>Message Received!</h4>
                <p>Thank you <strong>{form.name}</strong>. Our school counselor or administrative office will call you back at <strong>{form.phone}</strong> soon.</p>
                <button
                  type="button"
                  className="btn-send-again"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: '', phone: '', queryType: 'General Inquiry', message: '' });
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-elements">
                <div className="form-field">
                  <label>Your Full Name <span className="text-red">*</span></label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Verma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Mobile Number <span className="text-red">*</span></label>
                  <input
                    type="tel"
                    placeholder="e.g. 98261 XXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Inquiry Regarding:</label>
                  <select
                    value={form.queryType}
                    onChange={(e) => setForm({ ...form, queryType: e.target.value })}
                  >
                    <option value="New Admission 2026-27">New Admission (Session 2026-27)</option>
                    <option value="Bus / Transport Route">Bus / Transport Route Inquiry</option>
                    <option value="Fee Structure Inquiry">Fee Structure & Installments</option>
                    <option value="Meeting with Director/Principal">Meeting with Director / Principal Sir</option>
                    <option value="General Inquiry">Other General Inquiry</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Your Message / Question:</label>
                  <textarea
                    rows="3"
                    placeholder="How can we assist you?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-contact-submit">
                  <Send size={18} /> Send Message to Office
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
