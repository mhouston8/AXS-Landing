import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './LegalPage.css'

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <div className="legal-page">
        <div className="legal-container">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last updated: February 7, 2026</p>
          
          <section>
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using AxioScan ("the Service"), you agree to be bound by these Terms 
              of Service. If you disagree with any part of these terms, you may not access the Service.
            </p>
          </section>

          <section>
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily use AxioScan for personal, non-commercial use only. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained in the Service</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2>3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, 
              complete, and current at all times. You are responsible for safeguarding the password 
              and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2>4. Acceptable Use</h2>
            <p>You agree not to use the Service:</p>
            <ul>
              <li>In any way that violates any applicable national or international law or regulation</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material</li>
              <li>To impersonate or attempt to impersonate the company, a company employee, another user, 
              or any other person or entity</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, 
              threatening, fraudulent, or harmful</li>
            </ul>
          </section>

          <section>
            <h2>5. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain 
              the exclusive property of Brevix Ventures LLC and its licensors. The Service is protected 
              by copyright, trademark, and other laws.
            </p>
          </section>

          <section>
            <h2>6. Disclaimer</h2>
            <p>
              The information on this Service is provided on an "as is" basis. To the fullest extent 
              permitted by law, Brevix Ventures LLC excludes all representations, warranties, and 
              conditions relating to our Service and the use of this Service.
            </p>
          </section>

          <section>
            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall Brevix Ventures LLC, nor its directors, employees, partners, agents, 
              suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, 
              or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
              or other intangible losses, resulting from your use of the Service.
            </p>
          </section>

          <section>
            <h2>8. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Brevix Ventures LLC and its licensee 
              and licensors, and their employees, contractors, agents, officers and directors, from 
              and against any and all claims, damages, obligations, losses, liabilities, costs or debt, 
              and expenses (including but not limited to attorney's fees).
            </p>
          </section>

          <section>
            <h2>9. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the Service immediately, 
              without prior notice or liability, under our sole discretion, for any reason whatsoever 
              and without limitation, including but not limited to a breach of the Terms.
            </p>
          </section>

          <section>
            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be interpreted and governed by the laws of the United States, without 
              regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2>11. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will provide at least 30 days notice prior to any new terms 
              taking effect.
            </p>
          </section>

          <section>
            <h2>12. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p>
              <strong>Brevix Ventures LLC</strong><br />
              Email: legal@axioscan.com
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}
