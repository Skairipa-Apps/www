import { Helmet } from "react-helmet";
import { PDFDownloadButton } from "@/components/ui/pdf-download-button";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Skairipa Apps Inc.</title>
        <meta
          name="description"
          content="Skairipa Apps Inc. Terms of Service - Please read these terms carefully before using our applications."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
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
              <div id="terms-of-service-content" className="prose max-w-none">
                <p className="mb-4">
                  Please read these Terms of Service ("Terms") carefully before
                  using any application, service, or product provided by
                  Skairipa Apps Inc. and its affiliates (collectively, "Skairipa
                  Apps", "we", "us", or "our"). By accessing or using any part
                  of our services, you agree to be bound by these Terms.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">
                  1. Use of Services
                </h3>
                <p className="mb-4">
                  You agree to use the services only for lawful purposes and in
                  accordance with these Terms. You may not use our services in
                  any manner that could disable, overburden, damage, or impair
                  any Skairipa Apps systems or interfere with any other party's
                  use.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">
                  2. User Accounts
                </h3>
                <p className="mb-4">
                  You are responsible for maintaining the confidentiality of
                  your account and password and for restricting access to your
                  device. You agree to accept responsibility for all activities
                  that occur under your account.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">
                  3. Intellectual Property
                </h3>
                <p className="mb-4">
                  All content, features, and functionality of the services,
                  including but not limited to all information, software, text,
                  displays, images, video, and audio, are owned by Skairipa Apps
                  Inc. or its licensors and are protected by applicable
                  intellectual property laws.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">4. User Content</h3>
                <p className="mb-4">
                  You retain ownership of any content you post through our
                  services. By submitting content, you grant Skairipa Apps a
                  worldwide, non-exclusive, royalty-free, sublicensable, and
                  transferable license to use, reproduce, modify, and display
                  your content as necessary to operate and improve our services.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">5. Disclaimers</h3>
                <p className="mb-4">
                  OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                  ANY WARRANTIES OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY
                  LAW, SKAIRIPA DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED,
                  INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                  NON-INFRINGEMENT.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">
                  6. Limitation of Liability
                </h3>
                <p className="mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, SKAIRIPA APPS INC., OR
                  ITS DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, AFFILIATES, OR
                  LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF
                  PROFITS, DATA, OR USE, ARISING OUT OF OR IN CONNECTION WITH
                  YOUR ACCESS TO OR USE OF OUR SERVICES.
                </p>
                <p className="mb-4">
                  OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THE SERVICES
                  SHALL NOT EXCEED THE GREATER OF ONE HUNDRED U.S. DOLLARS (USD
                  $100) OR THE AMOUNT YOU PAID TO SKAIRIPA APPS INC. IN THE
                  THREE (3) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE CLAIM.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">
                  7. Indemnification
                </h3>
                <p className="mb-4">
                  You agree to defend, indemnify, and hold harmless Skairipa
                  Apps Inc. and its affiliates, licensors, and service providers
                  from any claims, damages, liabilities, costs, or expenses
                  (including attorneys' fees) arising from your use of the
                  services or your violation of these Terms.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">8. Termination</h3>
                <p className="mb-4">
                  We reserve the right to suspend or terminate your access to
                  our services at any time and for any reason, including if you
                  violate these Terms.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">
                  9. Subscriptions & In-App Purchases
                </h3>
                <p className="mb-4">
                  Some Skairipa Apps services include subscription plans or
                  one-time purchases. Subscription terms, pricing, renewal
                  options, and cancellation processes may vary by application or
                  platform (e.g., iOS, Android, Web). Please review the specific
                  app or platform for detailed subscription terms.
                </p>
                <p className="mb-4">
                  Subscriptions automatically renew unless canceled before the
                  end of the billing cycle. You are responsible for managing
                  your subscription settings through the respective app store or
                  platform.
                </p>
                <p className="mb-4">
                  For purchases made through third-party platforms (e.g., Apple
                  App Store, Google Play), their billing policies and refund
                  processes apply. Skairipa Apps Inc. is not responsible for
                  billing issues on third-party platforms.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">
                  10. International Users
                </h3>
                <p className="mb-4">
                  Our services are operated from the United States. If you
                  access our services from outside the U.S., you do so at your
                  own risk and are responsible for compliance with local laws.
                  By using the services, you consent to your information being
                  processed in the U.S.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">11. Privacy</h3>
                <p className="mb-4">
                  We respect your privacy. Please refer to our{" "}
                  <a href="/privacy" className="text-primary underline">
                    Privacy Policy
                  </a>{" "}
                  for details about how we collect, use, and share your personal
                  data.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">
                  12. Arbitration & Dispute Resolution
                </h3>
                <p className="mb-4">
                  All disputes arising out of or relating to these Terms or the
                  use of our services shall be resolved by binding arbitration
                  conducted in Denver, Colorado under the rules of the American
                  Arbitration Association (AAA). You waive your right to a jury
                  trial and to participate in a class action.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">
                  13. Governing Law
                </h3>
                <p className="mb-4">
                  These Terms and your use of the services are governed by the
                  laws of the State of Colorado, without regard to its conflict
                  of law principles.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">
                  14. Severability
                </h3>
                <p className="mb-4">
                  If any provision of these Terms is found to be unenforceable,
                  the remaining provisions will remain in full force and effect.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">
                  15. Changes to Terms
                </h3>
                <p className="mb-4">
                  We may revise these Terms from time to time. If we make
                  material changes, we will provide notice (e.g., by posting an
                  update or sending an email). Continued use of the services
                  constitutes acceptance of the revised Terms.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">16. Contact Us</h3>
                <p className="mb-4">
                  If you have any questions about these Terms, please contact us
                  at{" "}
                  <a href="mailto:legal@skairipaapps.com">
                    legal@skairipaapps.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <PDFDownloadButton
                contentId="terms-of-service-content"
                filename="Skairipa_Apps_Terms_of_Service"
                title="Terms of Service"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;