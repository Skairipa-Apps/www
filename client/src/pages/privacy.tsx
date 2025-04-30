import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Skairipa Apps Inc.</title>
        <meta
          name="description"
          content="Skairipa Apps Inc. Privacy Policy - Learn how we protect your personal data and privacy."
        />
      </Helmet>

      <section className="py-16 sm:py-24 bg-[hsl(var(--neutral-light))]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-lg text-[hsl(var(--neutral-mid))]">Last updated: January 15, 2023</p>
              <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="prose max-w-none">
                <p className="mb-4">
                  At Skairipa Apps Inc., privacy isn't just a policy—it's our foundation. We design all our applications with privacy as the primary consideration.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Information We Collect</h3>
                <p className="mb-4">
                  We collect minimal information required for our apps to function properly. This may include:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Account information (if you create an account)</li>
                  <li>Device information for troubleshooting</li>
                  <li>App usage analytics (anonymized and aggregated)</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4">How We Use Your Information</h3>
                <p className="mb-4">
                  We use collected information solely to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Improve our applications</li>
                  <li>Communicate with you about updates or support</li>
                </ul>
                <p className="mb-4">
                  We do not sell, rent, or share your personal data with third parties for marketing purposes.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Data Storage and Security</h3>
                <p className="mb-4">
                  We employ industry-standard security measures to protect your data. When possible, we store sensitive data locally on your device rather than on our servers.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Your Rights</h3>
                <p className="mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Delete your data</li>
                  <li>Export your data</li>
                  <li>Opt out of certain processing</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4">Changes to This Policy</h3>
                <p className="mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Contact Us</h3>
                <p className="mb-4">
                  If you have any questions about our Privacy Policy, please contact us at privacy@skairipaapps.com.
                </p>

                <div className="mt-8 text-center">
                  <a href="#" className="text-primary hover:underline">Download Full Privacy Policy (PDF)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
