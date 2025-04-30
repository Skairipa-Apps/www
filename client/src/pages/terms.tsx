import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Skairipa Apps Inc.</title>
        <meta
          name="description"
          content="Skairipa Apps Inc. Terms of Service - Please read these terms carefully before using our applications."
        />
      </Helmet>

      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-lg text-neutral-mid">Last updated: January 15, 2023</p>
              <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="prose max-w-none">
                <p className="mb-4">
                  Please read these Terms of Service carefully before using our applications and services. By accessing or using our services, you agree to be bound by these Terms.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">1. Use of Services</h3>
                <p className="mb-4">
                  You agree to use our services only for purposes that are permitted by these Terms and any applicable law, regulation, or generally accepted practices in the relevant jurisdictions.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">2. User Accounts</h3>
                <p className="mb-4">
                  When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding the password that you use to access our services and for any activities or actions under your password.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">3. Intellectual Property</h3>
                <p className="mb-4">
                  Our services and their entire contents, features, and functionality are owned by Skairipa Apps Inc. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">4. User Content</h3>
                <p className="mb-4">
                  You retain ownership of any content you submit, post, or display on or through our services. By making such content available, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such content.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">5. Termination</h3>
                <p className="mb-4">
                  We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">6. Limitation of Liability</h3>
                <p className="mb-4">
                  In no event shall Skairipa Apps Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">7. Changes to Terms</h3>
                <p className="mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">8. Governing Law</h3>
                <p className="mb-4">
                  These Terms shall be governed and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Contact Us</h3>
                <p className="mb-4">
                  If you have any questions about these Terms, please contact us at legal@skairipaapps.com.
                </p>

                <div className="mt-8 text-center">
                  <a href="#" className="text-primary hover:underline">Download Full Terms of Service (PDF)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
