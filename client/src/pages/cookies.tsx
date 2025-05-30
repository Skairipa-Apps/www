import { Helmet } from "react-helmet";
import { PDFDownloadButton } from "@/components/ui/pdf-download-button";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Skairipa Apps Inc.</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="title" content="Skairipa Apps Inc." />
        <meta
          name="description"
          content="Discover a powerful ecosystem of apps, from web to iOS, all designed with your needs at the center. Seamlessly connected, user-focused, and built to enhance your digital lifestyle—experience technology that works for YOU."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skairipaapps.com/" />
        <meta property="og:title" content="Skairipa Apps Inc." />
        <meta
          property="og:description"
          content="Discover a powerful ecosystem of apps, from web to iOS, all designed with your needs at the center. Seamlessly connected, user-focused, and built to enhance your digital lifestyle—experience technology that works for YOU."
        />
        <meta
          property="og:image"
          content="https://skairipaapps.com/cover.svg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://skairipaapps.com/" />
        <meta property="twitter:title" content="Skairipa Apps Inc." />
        <meta
          property="twitter:description"
          content="Discover a powerful ecosystem of apps, from web to iOS, all designed with your needs at the center. Seamlessly connected, user-focused, and built to enhance your digital lifestyle—experience technology that works for YOU."
        />
        <meta property="twitter:image" content="/cover.svg" />
      </Helmet>

      <section className="py-16 sm:py-24 bg-[hsl(var(--neutral-light))]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Cookie Policy
              </h1>
              <p className="text-lg text-[hsl(var(--neutral-mid))]">
                Last updated: January 15, 2023
              </p>
              <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div id="cookie-policy-content" className="prose max-w-none">
                <p>
                  Skairipa Apps Inc. ("we", "us", or "our") uses cookies only
                  for essential functionality across our websites and
                  applications. This Cookie Policy explains how and why we use
                  cookies and similar technologies.
                </p>

                <h3>1. What Are Cookies?</h3>
                <p>
                  Cookies are small text files stored on your device to help
                  websites and apps remember your preferences and activity.
                  Skairipa Apps uses only essential cookies that are required
                  for core functionality.
                </p>

                <h3>2. How We Use Cookies</h3>
                <p>We use cookies strictly to:</p>
                <ul>
                  <li>Maintain active user sessions</li>
                  <li>Remember login state across visits</li>
                  <li>
                    Record whether you have accepted our Terms of Service and/or
                    Privacy Policy on that device
                  </li>
                </ul>

                <h3>3. No Analytics or Tracking</h3>
                <p>
                  We do <strong>not</strong> use any cookies for analytics,
                  advertising, tracking, or profiling purposes.
                </p>

                <h3>4. Cookie Duration</h3>
                <p>
                  Some cookies may persist beyond a single session (e.g., to
                  remember agreement acceptance or login state), and may remain
                  until manually deleted by the user or the app.
                </p>

                <h3>5. Managing Cookies</h3>
                <p>
                  You can control or delete cookies using your browser or device
                  settings. However, disabling essential cookies may impair
                  functionality or prevent access to certain features of our
                  services.
                </p>

                <h3>6. Contact</h3>
                <p>
                  If you have any questions about this policy, please contact us
                  at{" "}
                  <a href="mailto:privacy@skairipaapps.com">
                    privacy@skairipaapps.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <PDFDownloadButton
                contentId="cookie-policy-content"
                filename="Skairipa_Apps_Cookie_Policy"
                title="Cookie Policy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicy;
