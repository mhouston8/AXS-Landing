import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './LegalPage.css'

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="legal-page">
        <div className="legal-container">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: February 7, 2026</p>
          
          <section>
            <h2>1. Introduction</h2>
            <p>
              Brevix Ventures LLC ("we," "our," or "us") operates AxioScan ("the Service"). 
              This Privacy Policy informs you of our policies regarding the collection, use, 
              and disclosure of personal data when you use our Service.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>We collect several types of information for various purposes:</p>
            <ul>
              <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide 
              certain personally identifiable information that can be used to contact or identify you.</li>
              <li><strong>Usage Data:</strong> We may collect information on how the Service is accessed and used.</li>
              <li><strong>Document Data:</strong> Documents you scan using our Service are processed locally 
              on your device. We do not store or transmit your document content without your explicit consent.</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for various purposes:</p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Security</h2>
            <p>
              The security of your data is important to us. We implement appropriate technical 
              and organizational measures to protect your personal information. However, no method 
              of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
            </ul>
          </section>

          <section>
            <h2>6. Third-Party Services</h2>
            <p>
              Our Service may contain links to third-party websites or services that are not owned 
              or controlled by us. We have no control over, and assume no responsibility for, 
              the privacy policies or practices of any third-party sites or services.
            </p>
          </section>

          <section>
            <h2>7. Children's Privacy</h2>
            <p>
              Our Service does not address anyone under the age of 13. We do not knowingly collect 
              personally identifiable information from children under 13.
            </p>
          </section>

          <section>
            <h2>8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>Brevix Ventures LLC</strong><br />
              Email: privacy@axioscan.com
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
