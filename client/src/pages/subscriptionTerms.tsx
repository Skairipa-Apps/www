import { Helmet } from "react-helmet";
import { PDFDownloadButton } from "@/components/ui/pdf-download-button";

const SubscriptionTerms = () => {
  return (
    <>
      <Helmet>
        <title>Subscription Terms - Skairipa Apps Inc.</title>
        <meta
          name="description"
          content="Learn how subscriptions work across Skairipa Apps Inc.'s mobile and web platforms, including billing, renewal, and cancellation policies."
        />
      </Helmet>

      <section className="py-16 sm:py-24 bg-[hsl(var(--neutral-light))]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Subscription Terms
              </h1>
              <p className="text-lg text-[hsl(var(--neutral-mid))]">
                Last updated: January 15, 2023
              </p>
              <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div id="subscription-terms-content" className="prose max-w-none">
                <p>
                  These Subscription Terms govern your use of any subscription
                  product or service provided by Skairipa Apps Inc. ("Skairipa
                  Apps", "we", "us", or "our"). By starting a subscription
                  through our mobile apps or website, you agree to the terms
                  below.
                </p>

                <h3>1. Subscription Platforms</h3>
                <p>Subscriptions may be offered via:</p>
                <ul>
                  <li>Our mobile apps (Apple App Store / Google Play)</li>
                  <li>Our website or web-based services</li>
                </ul>
                <p>
                  Your subscription is managed by the platform you used to make
                  the purchase. All billing, renewals, and cancellations are
                  handled through that platform.
                </p>

                <h3>2. Billing & Renewals</h3>
                <p>
                  Subscriptions are billed in advance on a recurring basis
                  (monthly, yearly, or otherwise, depending on the plan
                  selected). Unless you cancel before the end of the current
                  billing period, your subscription will automatically renew.
                </p>
                <p>
                  By subscribing, you authorize the applicable platform to
                  charge the subscription fee to your chosen payment method
                  without requiring further approval from you.
                </p>

                <h3>3. Cancellations</h3>
                <p>
                  You may cancel your subscription at any time through the
                  original purchase platform:
                </p>
                <ul>
                  <li>
                    <strong>Apple App Store:</strong> Go to your iOS device’s
                    Settings &gt; Apple ID &gt; Subscriptions.
                  </li>
                  <li>
                    <strong>Google Play:</strong> Open the Play Store &gt;
                    Subscriptions.
                  </li>
                  <li>
                    <strong>Web Subscriptions:</strong> Use your account
                    dashboard or contact us at{" "}
                    <a href="mailto:support@skairipaapps.com">
                      support@skairipaapps.com
                    </a>
                    .
                  </li>
                </ul>
                <p>
                  Cancellations take effect at the end of the current billing
                  cycle. You will retain access until the subscription expires.
                  We do not issue partial refunds.
                </p>

                <h3>4. Free Trials</h3>
                <p>
                  Some subscriptions may offer a free trial. At the end of the
                  trial period, your subscription will automatically convert
                  into a paid plan unless canceled in advance.
                </p>

                <h3>5. Price Changes</h3>
                <p>
                  We reserve the right to modify subscription pricing at any
                  time. If a price change applies to your plan, we will provide
                  notice via the platform or service and give you the option to
                  cancel before the change takes effect.
                </p>

                <h3>6. Responsibility</h3>
                <p>
                  It is your responsibility to manage your subscription, review
                  billing details, and cancel before renewal if you no longer
                  wish to continue.
                </p>

                <h3>7. Platform Conflicts</h3>
                <p>
                  Subscriptions purchased on one platform (e.g., Apple) may not
                  transfer to another (e.g., web or Android). Cross-platform
                  syncing is not guaranteed unless explicitly supported.
                </p>

                <h3>8. Refunds</h3>
                <p>
                  All purchases are subject to our{" "}
                  <a href="/refund-policy" className="text-primary underline">
                    Refund Policy
                  </a>
                  . In-app purchases follow Apple or Google’s refund policies.
                </p>

                <h3>9. Contact</h3>
                <p>
                  Questions? Contact us at{" "}
                  <a href="mailto:support@skairipaapps.com">
                    support@skairipaapps.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <PDFDownloadButton
                contentId="subscription-terms-content"
                filename="Skairipa_Apps_Subscription_Terms"
                title="Subscription Terms"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubscriptionTerms;
