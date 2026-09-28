import React from 'react';
import { Award, BookOpen, HeartHandshake, ShieldCheck, Sparkles, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import logoImg from '../assets/grd.jpg';

export default function Leadership() {
  return (
    <section id="leadership" className="leadership-full-section">
      <div className="container">
        <div className="section-head-center">
          <div className="badge-tag">
            <Sparkles size={14} /> School Administration
          </div>
          <h2 className="section-main-heading">
            Message from Director & Principal's Desk
          </h2>
          <p className="section-subtext">
            Under the visionary stewardship of our leadership, GRD Public School is shaping the 
            brightest future for students in Tilawad Maina and adjoining regions.
          </p>
        </div>

        <div className="leadership-cards-duo">
          {/* Director: Rajendra Verma Sir */}
          <div className="leader-detailed-card">
            <div className="leader-card-header">
              <div className="leader-avatar-circle">
                <div className="leader-initials">RV</div>
                <div className="verified-badge-icon">✓</div>
              </div>
              <div className="leader-title-wrap">
                <span className="leader-designation-badge">Director's Desk</span>
                <h3 className="leader-full-name">Shri Rajendra Verma</h3>
                <p className="leader-post">Director, GRD Public School, Tilawad Maina</p>
              </div>
            </div>

            <div className="leader-message-content">
              <p className="message-highlight">
                "Our commitment is to provide affordable yet world-class modern education right here in Tilawad Maina."
              </p>
              <p className="message-para">
                Dear Parents, Teachers, and Well-wishers, education is the most powerful tool to transform society. 
                At GRD Public School, our primary objective is to bring high-standard academic infrastructure, digital 
                learning, smart classrooms, and character-building values to every child.
              </p>
              <p className="message-para">
                By adopting this modern school web portal, we are taking a giant leap in digital connectivity — 
                enabling parents to receive instant updates on attendance, fees, and results right on their mobile phones.
              </p>
            </div>

            <div className="leader-key-pillars">
              <div className="pillar-item">
                <ShieldCheck size={18} className="text-blue" />
                <span>Transparent Administration</span>
              </div>
              <div className="pillar-item">
                <Sparkles size={18} className="text-blue" />
                <span>Modern Smart Campus</span>
              </div>
              <div className="pillar-item">
                <BookOpen size={18} className="text-blue" />
                <span>Quality Faculty Team</span>
              </div>
            </div>

            <div className="leader-signature-block">
              <div className="signature-text">Rajendra Verma</div>
              <span className="sign-role">Director — GRD Public School</span>
            </div>
          </div>

          {/* Principal: Mahesh Verma Sir */}
          <div className="leader-detailed-card">
            <div className="leader-card-header">
              <div className="leader-avatar-circle">
                <div className="leader-initials">MV</div>
                <div className="verified-badge-icon">✓</div>
              </div>
              <div className="leader-title-wrap">
                <span className="leader-designation-badge">Principal's Desk</span>
                <h3 className="leader-full-name">Shri Mahesh Verma</h3>
                <p className="leader-post">Principal, GRD Public School, Tilawad Maina</p>
              </div>
            </div>

            <div className="leader-message-content">
              <p className="message-highlight">
                "Discipline, intellectual curiosity, and holistic moral growth form the backbone of our school."
              </p>
              <p className="message-para">
                Dear Students and Parents, a school is not just a building of brick and mortar; it is a sacred cradle 
                where dreams take flight. Our dedicated faculty ensures personalized attention to every student from 
                Primary to Higher Secondary.
              </p>
              <p className="message-para">
                With continuous assessments, sports training, science exhibitions, and active parent-teacher synergy, 
                GRD Public School guarantees 100% academic excellence and confident leadership skills in our students.
              </p>
            </div>

            <div className="leader-key-pillars">
              <div className="pillar-item">
                <CheckCircle2 size={18} className="text-green" />
                <span>100% Academic Focus</span>
              </div>
              <div className="pillar-item">
                <Award size={18} className="text-green" />
                <span>Sports & Moral Values</span>
              </div>
              <div className="pillar-item">
                <HeartHandshake size={18} className="text-green" />
                <span>Parent-Teacher Synergy</span>
              </div>
            </div>

            <div className="leader-signature-block">
              <div className="signature-text">Mahesh Verma</div>
              <span className="sign-role">Principal — GRD Public School</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
