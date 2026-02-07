import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>AxioScan</h2>
        </div>
        <button 
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? 'navbar-menu-open' : ''}`}>
          <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a></li>
          <li><a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</a></li>
          <li><a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a></li>
          <li><button className="navbar-cta">Get Started</button></li>
        </ul>
      </div>
    </nav>
  )
}
