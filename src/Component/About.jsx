import React from 'react';
import { Target, Compass, BookOpen, Award, CheckCircle2, ShieldCheck, Bus, Laptop, FlaskConical, Users } from 'lucide-react';
import logoImg from '../assets/grd.jpg';

export default function About() {
  const facilities = [
    {
      icon: <Laptop size={28} className="text-blue" />,
      title: 'Digital Computer Lab',
      desc: 'High-speed internet, modern computer systems, and coding literacy from junior classes.'
    },
    {
      icon: <FlaskConical size={28} className="text-green" />,
      title: 'Composite Science Lab',
      desc: 'Hands-on practical physics, chemistry, and biology experimental kits for experiential learning.'
    },
    {
      icon: <BookOpen size={28} className="text-amber" />,
      title: 'Rich School Library',
      desc: 'Over 2,500+ books spanning reference encyclopedias, NCERT textbooks, storybooks, and journals.'
    },
    {
      icon: <Bus size={28} className="text-purple" />,
      title: 'Safe Bus & Van Transport',
      desc: 'Dedicated transport covering Tilawad Maina and all nearby village pickup points with safety escorts.'
    },
    {
      icon: <Award size={28} className="text-rose" />,
      title: 'Sports & Athletics Ground',
      desc: 'Volleyball, Cricket, Badminton, Kabaddi, and Indoor Chess/Carrom training under sports instructors.'
    },
    {
      icon: <ShieldCheck size={28} className="text-teal" />,
      title: 'CCTV Secured Campus',
      desc: '24/7 CCTV surveillance across all corridors, classrooms, gates, and playground for utmost child safety.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Top Header */}
        <div className="section-head-center">
          <div className="badge-tag">
            <Compass size={14} /> Legacy & Vision
          </div>
          <h2 className="section-main-heading">
            About GRD Public School, Tilawad Maina
          </h2>
          <p className="section-subtext">
            Rooted in values, elevated by modern digital learning — a premier center of learning founded by visionary educators.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="vision-mission-grid">
          <div className="vm-card vision-card">
            <div className="vm-icon"><Target size={32} /></div>
            <h3>Our Vision</h3>
            <p>
              To become the premier educational benchmark in Madhya Pradesh by nurturing intellectually curious, 
              socially responsible, and morally upright future citizens equipped with 21st-century technological skills.
            </p>
          </div>

          <div className="vm-card mission-card">
            <div className="vm-icon"><Compass size={32} /></div>
            <h3>Our Mission</h3>
            <p>
              Under the guidance of Director Shri Rajendra Verma and Principal Shri Mahesh Verma, to provide equal, 
              inclusive, high-standard education with state-of-the-art infrastructure, sports, and transparent parent communication.
            </p>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="facilities-section-block">
          <div className="section-head-center" style={{ marginTop: '2.5rem', marginBottom: '2rem' }}>
            <h3 className="facilities-heading">World-Class Campus Facilities</h3>
            <p className="section-subtext">Designed to provide a secure, inspiring, and engaging environment for every child.</p>
          </div>

          <div className="facilities-grid">
            {facilities.map((fac, i) => (
              <div key={i} className="facility-item-card">
                <div className="fac-icon-wrap">{fac.icon}</div>
                <h4>{fac.title}</h4>
                <p>{fac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
