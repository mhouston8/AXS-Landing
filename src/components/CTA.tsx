import './CTA.css'

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2 className="cta-title">Ready to Transform Your Documents?</h2>
        <p className="cta-description">
          Start scanning, editing, and managing your documents like a pro. Download AxioScan free from the App Store.
        </p>
        <div className="cta-buttons">
          <button className="cta-button primary">Download on App Store</button>
          <button className="cta-button secondary">Learn More</button>
        </div>
        <p className="cta-note">Available for iPhone and iPad • Free to download</p>
      </div>
    </section>
  )
}
