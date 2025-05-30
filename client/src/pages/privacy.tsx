import { PDFDownloadButton } from "@/components/ui/pdf-download-button";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Skairipa Apps Inc.</title>
        <meta
          name="description"
          content="Skairipa Apps Inc. Privacy Policy - How we collect, use, and protect your data across our apps and services."
        />
      </Helmet>

      <section className="py-16 sm:py-24 bg-[hsl(var(--neutral-light))]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Terms of Service
              </h1>
              <p className="text-lg text-[hsl(var(--neutral-mid))]">
                Last updated: January 15, 2023
              </p>
              <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div id="privacy-policy-content" className="prose max-w-none">
              <p>
                This Privacy Policy explains how Skairipa Apps Inc. ("Skairipa
                Apps", "we", "us", or "our") collects, uses, and protects your
                personal information when you use our websites, mobile apps, or
                services ("Services").
              </p>

              <h3>1. Information We Collect</h3>
              <ul>
                <li>
                  <strong>Account Information:</strong> Email, username, or
                  other identifiers you provide.
                </li>
                <li>
                  <strong>Payment Information:</strong> Processed securely
                  through third-party platforms (Apple, Google, Stripe, etc.).
                  We do not store payment card details.
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, app interactions,
                  device type, crash reports, and performance analytics.
                </li>
                <li>
                  <strong>Location Data:</strong> Approximate location (if
                  granted by the device).
                </li>
                <li>
                  <strong>User Content:</strong> Any information or files you
                  upload, send, or submit through our apps.
                </li>
              </ul>

              <h3>2. How We Use Your Information</h3>
              <ul>
                <li>To operate, improve, and personalize our Services</li>
                <li>To process subscriptions or purchases</li>
                <li>To send service-related communications</li>
                <li>To ensure legal compliance and prevent abuse</li>
                <li>To understand trends through anonymized analytics</li>
              </ul>

              <h3>3. Sharing & Disclosure</h3>
              <p>
                We do <strong>not</strong> sell or rent your personal data. We
                may share limited data with:
              </p>
              <ul>
                <li>
                  Service providers under strict data protection terms (e.g.,
                  analytics, hosting)
                </li>
                <li>Payment processors (e.g., Apple, Google, Stripe)</li>
                <li>
                  Authorities when legally required (e.g., subpoenas or fraud
                  investigations)
                </li>
              </ul>

              <h3>4. Your Rights</h3>
              <p>You have rights over your personal information, including:</p>
              <ul>
                <li>Accessing your data</li>
                <li>Requesting deletion (where legally applicable)</li>
                <li>Objecting to certain data processing</li>
                <li>Withdrawing consent where previously given</li>
              </ul>

              <h3>5. Cookies & Tracking</h3>
              <p>
                We and our partners may use cookies or similar technologies to
                provide essential functions, analyze usage, and personalize
                content. You can manage cookie preferences in your browser or
                device settings.
              </p>

              <h3>6. International Transfers</h3>
              <p>
                If you use our services from outside the United States, your
                data may be transferred and processed in the U.S. where data
                protection laws may differ.
              </p>

              <h3>7. Data Security</h3>
              <p>
                We implement reasonable security measures to protect your
                information. However, no online service is 100% secure. Please
                use strong passwords and keep them confidential.
              </p>

              <h3>8. Data Retention</h3>
              <p>
                We retain data for as long as necessary to provide services,
                comply with legal obligations, resolve disputes, and enforce our
                agreements.
              </p>

              <h3>9. Children’s Privacy</h3>
              <p>
                Our services are not intended for children under 13 (or
                equivalent minimum age in your jurisdiction). We do not
                knowingly collect personal data from children without parental
                consent.
              </p>

              <h3>10. Third-Party Links</h3>
              <p>
                Our apps or websites may link to external sites we don’t
                control. Please review their privacy policies separately.
              </p>

              <h3>11. Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. Material
                changes will be communicated clearly via our app or website.
              </p>

              <h3>12. Contact Us</h3>
              <p>
                If you have questions about this policy, please contact us at:{" "}
                <a href="mailto:privacy@skairipaapps.com">
                  privacy@skairipaapps.com
                </a>
              </p>
            </div>
          </div>

            <div className="mt-8 text-center">
              <PDFDownloadButton
                contentId="privacy-policy-content"
                filename="Skairipa_Apps_Privacy_Policy"
                title="Privacy Policy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
