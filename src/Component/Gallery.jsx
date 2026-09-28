import React, { useState } from 'react';
import { Image, Sparkles, Trophy, BookOpen, Music, Users, Camera } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'academic',
      title: 'Interactive Smart Classroom Session',
      desc: 'Visual animated learning on smart board in Class 8th.',
      tag: 'Smart Class',
      gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
      icon: '💻'
    },
    {
      id: 2,
      category: 'events',
      title: 'Annual Day & Cultural Dance Performance',
      desc: 'Traditional folk & patriotic dance by primary students.',
      tag: 'Annual Fest',
      gradient: 'linear-gradient(135deg, #b45309 0%, #f59e0b 100%)',
      icon: '🎭'
    },
    {
      id: 3,
      category: 'sports',
      title: 'Inter-House Volleyball & Athletics Championship',
      desc: 'Annual sports meet with 4 house teams competing.',
      tag: 'Sports Day',
      gradient: 'linear-gradient(135deg, #047857 0%, #10b981 100%)',
      icon: '🏆'
    },
    {
      id: 4,
      category: 'science',
      title: 'Science & Robotics Exhibition 2026',
      desc: 'Students presenting working models under teacher guidance.',
      tag: 'Science Fair',
      gradient: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)',
      icon: '🔬'
    },
    {
      id: 5,
      category: 'academic',
      title: 'Central Library & Reading Circle',
      desc: 'Students exploring encyclopedias and general knowledge journals.',
      tag: 'Library',
      gradient: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
      icon: '📚'
    },
    {
      id: 6,
      category: 'events',
      title: 'Republic Day & Independence Day Celebration',
      desc: 'Flag hoisting ceremony by Director & Principal Sir.',
      tag: 'Celebrations',
      gradient: 'linear-gradient(135deg, #c2410c 0%, #fb923c 100%)',
      icon: '🇮🇳'
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {/* Header */}
        <div className="section-head-center">
          <div className="badge-tag">
            <Camera size={14} /> Life at GRD
          </div>
          <h2 className="section-main-heading">Campus Moments & Event Gallery</h2>
          <p className="section-subtext">
            Glance through memorable celebrations, sports achievements, and classroom innovations at GRD Public School.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="gallery-filters-row">
          <button
            type="button"
            className={`gallery-pill ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Campus Highlights
          </button>
          <button
            type="button"
            className={`gallery-pill ${filter === 'academic' ? 'active' : ''}`}
            onClick={() => setFilter('academic')}
          >
            Smart Classes & Labs
          </button>
          <button
            type="button"
            className={`gallery-pill ${filter === 'sports' ? 'active' : ''}`}
            onClick={() => setFilter('sports')}
          >
            Sports & Athletics
          </button>
          <button
            type="button"
            className={`gallery-pill ${filter === 'events' ? 'active' : ''}`}
            onClick={() => setFilter('events')}
          >
            Annual Functions & Fests
          </button>
          <button
            type="button"
            className={`gallery-pill ${filter === 'science' ? 'active' : ''}`}
            onClick={() => setFilter('science')}
          >
            Science & Tech
          </button>
        </div>

        {/* Gallery Cards Grid */}
        <div className="gallery-cards-grid animate-fade-in">
          {filteredItems.map(item => (
            <div key={item.id} className="gallery-art-card">
              <div 
                className="gallery-image-canvas" 
                style={{ background: item.gradient }}
              >
                <div className="canvas-badge">{item.tag}</div>
                <div className="canvas-center-icon">{item.icon}</div>
              </div>
              <div className="gallery-caption-body">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
