import './CTA.css'

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">
        <h2 className="cta-title">Ready to Transform Your Documents?</h2>
        <p className="cta-description">
          Join thousands of users who have streamlined their document workflow with AxioScan
        </p>
        <div className="cta-buttons">
          <button className="cta-button primary">Get Started Free</button>
          <button className="cta-button secondary">Contact Sales</button>
        </div>
        <p className="cta-note">No credit card required • Free 14-day trial</p>
      </div>
    </section>
  )
}
