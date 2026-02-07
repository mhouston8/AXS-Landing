import './HowItWorks.css'

interface Step {
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '1',
    title: 'Open the App',
    description: 'Launch AxioScan on your device and grant camera permissions.'
  },
  {
    number: '2',
    title: 'Point & Scan',
    description: 'Aim your camera at the document. Our AI automatically detects edges and captures the perfect scan.'
  },
  {
    number: '3',
    title: 'Enhance & Edit',
    description: 'Automatically enhance image quality, adjust brightness, and crop to perfection.'
  },
  {
    number: '4',
    title: 'Save & Share',
    description: 'Export to your preferred format and share instantly via email, cloud storage, or messaging apps.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">How It Works</h2>
          <p className="how-it-works-subtitle">
            Get started in minutes. No complicated setup required.
          </p>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
