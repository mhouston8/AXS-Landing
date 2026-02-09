import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Smart Document Scanning
            <span className="hero-highlight"> for Mobile Devices</span>
          </h1>
          <p className="hero-description">
            Capture documents with automatic edge detection, edit them with professional tools, 
            and export in the format that you need. Your all-in-one document scanning solution.
          </p>
          <div className="hero-buttons">
            <button className="hero-button primary">Download on App Store</button>
            <button className="hero-button secondary">Learn More</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">Smart</div>
              <div className="stat-label">Edge Detection</div>
            </div>
            <div className="stat">
              <div className="stat-number">Professional</div>
              <div className="stat-label">Editing Tools</div>
            </div>
            <div className="stat">
              <div className="stat-number">Multiple</div>
              <div className="stat-label">Export Formats</div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <svg width="500" height="400" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="500" height="400" rx="20" fill="#1a0a2d" stroke="#667eea" strokeWidth="2" opacity="0.5"/>
              <rect x="50" y="50" width="400" height="300" rx="10" fill="#0a0a0a" stroke="#667eea" strokeWidth="2"/>
              <rect x="80" y="100" width="340" height="40" rx="5" fill="#667eea" opacity="0.2"/>
              <rect x="80" y="160" width="280" height="30" rx="5" fill="#667eea" opacity="0.15"/>
              <rect x="80" y="210" width="300" height="30" rx="5" fill="#667eea" opacity="0.15"/>
              <rect x="80" y="260" width="250" height="30" rx="5" fill="#667eea" opacity="0.15"/>
              <circle cx="400" cy="200" r="30" fill="#667eea" opacity="0.3"/>
              <path d="M385 200 L395 210 L415 190" stroke="#667eea" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
