import './Features.css'

interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Scan documents in seconds with our optimized scanning engine. No waiting, no delays.'
  },
  {
    icon: '🤖',
    title: 'AI-Powered OCR',
    description: 'Advanced optical character recognition extracts text with 99.9% accuracy from any document.'
  },
  {
    icon: '🔒',
    title: 'Secure & Private',
    description: 'Your documents are encrypted end-to-end. We never store or access your data without permission.'
  },
  {
    icon: '📱',
    title: 'Multi-Platform',
    description: 'Works seamlessly on iOS, Android, and Web. Scan from anywhere, access everywhere.'
  },
  {
    icon: '📄',
    title: 'Multiple Formats',
    description: 'Export to PDF, Word, Excel, or images. Choose the format that works best for you.'
  },
  {
    icon: '☁️',
    title: 'Cloud Sync',
    description: 'Automatically sync your scans across all devices. Access your documents anytime, anywhere.'
  }
]

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Powerful Features</h2>
          <p className="features-subtitle">
            Everything you need to digitize and manage your documents efficiently
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
