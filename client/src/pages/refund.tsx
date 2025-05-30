import { Helmet } from "react-helmet";
import { PDFDownloadButton } from "@/components/ui/pdf-download-button";

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy - Skairipa Apps Inc.</title>
        <meta
          name="description"
          content="Refund Policy for subscriptions and purchases on Skairipa Apps Inc. Learn how refunds work on mobile and web platforms."
        />
      </Helmet>

      <section className="py-16 sm:py-24 bg-[hsl(var(--neutral-light))]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Refund Policy
              </h1>
              <p className="text-lg text-[hsl(var(--neutral-mid))]">
                Last updated: January 15, 2023
              </p>
              <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div id="refund-policy-content" className="prose max-w-none">
                <p>
                  At Skairipa Apps Inc., we strive to offer a consistent,
                  transparent experience for all users of our mobile apps and
                  web services. Our refund policy is designed to align with
                  industry standards while maintaining fairness for both users
                  and our team.
                </p>

                <h3>1. Mobile App Purchases</h3>
                <p>
                  For purchases made through the Apple App Store or Google Play,
                  all refunds are handled directly by the platform provider.
                  Skairipa Apps Inc. does not have the ability to process or
                  override these requests.
                </p>
                <ul>
                  <li>
                    <strong>Apple App Store:</strong> Request a refund via{" "}
                    <a
                      href="https://reportaproblem.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      reportaproblem.apple.com
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Google Play:</strong> You may request a refund
                    within 48 hours of purchase via the Google Play Store, or
                    contact us for consideration.
                  </li>
                </ul>

                <h3>2. Web-Based Subscriptions</h3>
                <p>
                  All subscriptions and digital purchases made through our
                  website (e.g., via Stripe or similar providers) are
                  <strong> non-refundable</strong> once access to the service
                  has been granted.
                </p>
                <p>
                  We do not offer refunds or credits for partially used
                  subscription periods, accidental purchases, or user
                  inactivity. Please review your plan carefully before
                  confirming a subscription.
                </p>

                <h3>3. Exceptions</h3>
                <p>Refunds may be granted in limited cases involving:</p>
                <ul>
                  <li>Duplicate charges caused by a technical issue</li>
                  <li>Failure to deliver a purchased product or service</li>
                  <li>Unauthorized transactions (upon investigation)</li>
                </ul>
                <p>
                  All refund exception requests must be submitted to{" "}
                  <a href="mailto:support@skairipaapps.com">
                    support@skairipaapps.com
                  </a>{" "}
                  within 7 days of the original transaction.
                </p>

                <h3>4. Subscription Cancellations</h3>
                <p>
                  You may cancel your subscription at any time to prevent future
                  charges. Cancellations take effect at the end of the current
                  billing cycle, and no partial refunds are issued for unused
                  time.
                </p>

                <h3>5. Contact Us</h3>
                <p>
                  If you have questions about this policy, contact us at{" "}
                  <a href="mailto:support@skairipaapps.com">
                    support@skairipaapps.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <PDFDownloadButton
                contentId="refund-policy-content"
                filename="Skairipa_Apps_Refund_Policy"
                title="Refund Policy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;
