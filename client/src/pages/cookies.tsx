import { Helmet } from "react-helmet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PDFDownloadButton } from "@/components/ui/pdf-download-button";

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Skairipa Apps Inc.</title>
        <meta
          name="description"
          content="Learn about how Skairipa Apps Inc. uses cookies and manages your cookie preferences."
        />
      </Helmet>

      <div className="container section">
        <h1 className="section-title">Cookie Policy</h1>
        <div className="section-divider"></div>

        <div id="cookies-policy-content" className="mt-12 max-w-4xl mx-auto">
          <p className="text-lg mb-6">
            This Cookie Policy explains how Skairipa Apps Inc. ("we", "us", or
            "our") uses cookies and similar technologies on our website. This
            policy is part of our commitment to transparency and should be read
            alongside our Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">What Are Cookies?</h2>
          <p className="mb-6">
            Cookies are small text files that are placed on your device when you
            visit a website. They are widely used to make websites work more
            efficiently and provide information to the website owners. Cookies
            can be "persistent" or "session" cookies. Persistent cookies remain
            on your device when you go offline, while session cookies are
            deleted as soon as you close your web browser.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">How We Use Cookies</h2>
          <p className="mb-6">
            We use minimal cookies on our website, primarily for essential
            functions and to enhance user experience. As a privacy-focused
            company, we're committed to using cookies responsibly and
            transparently.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            Types of Cookies We Use
          </h2>
          <Table className="mb-8">
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4">Type</TableHead>
                <TableHead className="w-2/4">Purpose</TableHead>
                <TableHead className="w-1/4">Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Essential</TableCell>
                <TableCell>
                  Necessary for the website to function properly. These cannot
                  be disabled.
                </TableCell>
                <TableCell>Session</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Preference</TableCell>
                <TableCell>
                  Allow the website to remember choices you make (such as your
                  preferred language or the region you are in).
                </TableCell>
                <TableCell>1 year</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Analytics</TableCell>
                <TableCell>
                  Help us understand how visitors interact with our website by
                  collecting and reporting information anonymously.
                </TableCell>
                <TableCell>2 years</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <h2 className="text-2xl font-bold mt-10 mb-4">Third-Party Cookies</h2>
          <p className="mb-6">
            We do not use third-party cookies for advertising purposes. The only
            third-party cookies on our website are for anonymous analytics that
            help us improve our site and services.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            Managing Your Cookie Preferences
          </h2>
          <p className="mb-4">
            Most web browsers allow you to manage your cookie preferences. You
            can:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Delete cookies from your device</li>
            <li>
              Block cookies by activating the setting on your browser that
              allows you to refuse all or some cookies
            </li>
            <li>Set your browser to notify you when you receive a cookie</li>
          </ul>
          <p className="mb-6">
            Please note that if you choose to block or delete cookies, you may
            not be able to access certain areas or features of our website, and
            some services may not function properly.
          </p>
          <p className="mb-6">
            You can find out how to manage cookies in popular browsers by
            visiting:
          </p>
          <ul className="list-disc pl-6 mb-10 space-y-2">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                className="text-primary hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                className="text-primary hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                className="text-primary hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Microsoft Edge
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                className="text-primary hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Safari
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">
            Changes to Our Cookie Policy
          </h2>
          <p className="mb-10">
            We may update our Cookie Policy from time to time. Any changes will
            be posted on this page and, where appropriate, notified to you.
            Please check back frequently to see any updates or changes.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions about our Cookie Policy, please contact us
            at:
          </p>
          <div className="bg-secondary p-6 rounded-lg mb-10">
            <p className="font-medium">Email: privacy@skairipapps.com</p>
          </div>

          <div className="text-center mb-8">
            <PDFDownloadButton
              contentId="cookies-policy-content"
              filename="Skairipa_Apps_Cookie_Policy"
              title="Cookie Policy"
              buttonText="Download Cookie Policy"
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Last updated: April 30, 2025
          </p>
        </div>
      </div>
    </>
  );
}
