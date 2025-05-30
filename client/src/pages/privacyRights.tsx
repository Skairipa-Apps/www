import { Helmet } from "react-helmet";
import { PDFDownloadButton } from "@/components/ui/pdf-download-button";

const PrivacyRights = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Rights - Skairipa Apps Inc.</title>
        <meta
          name="description"
          content="Understand your privacy rights under CCPA and GDPR when using Skairipa Apps Inc.'s services."
        />
      </Helmet>

      <section className="py-16 sm:py-24 bg-[hsl(var(--neutral-light))]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Privacy Rights (CCPA & GDPR)
              </h1>
              <p className="text-lg text-[hsl(var(--neutral-mid))]">
                Last updated: January 15, 2023
              </p>
              <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div id="privacy-rights-content" className="prose max-w-none">
                <p>
                  Skairipa Apps Inc. is committed to protecting your privacy and
                  complying with data protection laws, including the California
                  Consumer Privacy Act (CCPA) and the General Data Protection
                  Regulation (GDPR).
                </p>

                <h3>1. Your Privacy Rights</h3>
                <p>
                  Depending on your location and applicable law, you may have
                  the right to:
                </p>
                <ul>
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Withdraw consent to data processing</li>
                  <li>
                    Object to or restrict processing under specific grounds
                  </li>
                  <li>Request a copy of your data (data portability)</li>
                  <li>
                    File a complaint with a supervisory authority (for EU
                    residents)
                  </li>
                </ul>

                <h3>2. How to Exercise Your Rights</h3>
                <p>
                  You may make a request by contacting us at{" "}
                  <a href="mailto:privacy@skairipaapps.com">
                    privacy@skairipaapps.com
                  </a>
                  . We may need to verify your identity before processing any
                  request.
                </p>

                <h3>3. No Sale of Personal Data</h3>
                <p>
                  Skairipa Apps Inc. does <strong>not</strong> sell or rent your
                  personal data to third parties for marketing or advertising
                  purposes.
                </p>

                <h3>4. Cookies and Tracking</h3>
                <p>
                  We use only essential cookies to maintain session information
                  and remember if you have accepted our terms. We do not use
                  cookies for advertising or tracking.
                </p>
                <p>
                  For full details, see our{" "}
                  <a href="/cookies" className="text-primary underline">
                    Cookie Policy
                  </a>
                  .
                </p>

                <h3>5. Data Transfers</h3>
                <p>
                  If you are located outside the United States, please note that
                  your information may be transferred to and processed in the
                  U.S., where our systems and servers are located.
                </p>

                <h3>6. Contact</h3>
                <p>
                  If you have any questions or would like to exercise your data
                  rights, contact us at:{" "}
                  <a href="mailto:privacy@skairipaapps.com">
                    privacy@skairipaapps.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <PDFDownloadButton
                contentId="privacy-rights-content"
                filename="Skairipa_Apps_Privacy_Rights"
                title="Privacy Rights"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyRights;
