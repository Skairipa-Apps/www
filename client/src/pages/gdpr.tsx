import { Helmet } from "react-helmet";
import { PDFDownloadButton } from "@/components/ui/pdf-download-button";

export default function GDPR() {
  return (
    <>
      <Helmet>
        <title>GDPR Compliance - Skairipa Apps Inc.</title>
        <meta name="description" content="Learn about how Skairipa Apps Inc. complies with GDPR regulations and protects your data rights." />
      </Helmet>
      
      <section className="py-16 sm:py-24 bg-[hsl(var(--neutral-light))]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">GDPR Compliance</h1>
              <p className="text-lg text-[hsl(var(--neutral-mid))]">Last updated: April 30, 2025</p>
              <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <div id="gdpr-content" className="prose max-w-none">
          <p className="text-lg mb-6">
            At Skairipa Apps Inc., we're committed to protecting your privacy rights under the General Data Protection Regulation (GDPR). 
            This page explains how we comply with GDPR requirements and how you can exercise your rights under this regulation.
          </p>
          
                <h3 className="text-xl font-bold mt-8 mb-4">What is GDPR?</h3>
          <p className="mb-6">
            The General Data Protection Regulation (GDPR) is a comprehensive privacy law that gives EU citizens and residents greater 
            control over their personal data. It went into effect on May 25, 2018, and applies to all organizations that process 
            the personal data of EU citizens and residents, regardless of where the organization is located.
          </p>
          
                <h3 className="text-xl font-bold mt-8 mb-4">Your Rights Under GDPR</h3>
          <div className="grid gap-6 mb-10">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-3 text-primary">Right to Access</h4>
              <p>You have the right to request a copy of the personal data we hold about you and information about how we process it.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-3 text-primary">Right to Rectification</h4>
              <p>You have the right to request that we correct any inaccurate personal data we hold about you.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-3 text-primary">Right to Erasure</h4>
              <p>Also known as the "right to be forgotten," you have the right to request that we delete your personal data in certain circumstances.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-3 text-primary">Right to Restrict Processing</h4>
              <p>You have the right to request that we limit how we use your data in certain circumstances.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-3 text-primary">Right to Data Portability</h4>
              <p>You have the right to receive your personal data in a structured, commonly used, and machine-readable format, and to transmit that data to another controller.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-3 text-primary">Right to Object</h4>
              <p>You have the right to object to the processing of your personal data in certain circumstances.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-3 text-primary">Rights Related to Automated Decision Making</h4>
              <p>You have the right not to be subject to a decision based solely on automated processing that produces legal effects concerning you or similarly significantly affects you.</p>
            </div>
          </div>
          
                <h3 className="text-xl font-bold mt-8 mb-4">How We Comply with GDPR</h3>
          <div className="grid gap-6 mb-10">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Privacy by Design</h3>
              <p>We integrate privacy protections from the very beginning of our development process, ensuring data protection is built into our applications from the start.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Data Minimization</h3>
              <p>We collect only the data we need for specific purposes and store it only for as long as necessary.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Transparent Processing</h3>
              <p>We're transparent about what data we collect, how we use it, who we share it with, and why.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Data Security</h3>
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing and against accidental loss, destruction, or damage.</p>
            </div>
          </div>
          
                <h3 className="text-xl font-bold mt-8 mb-4">Exercising Your Rights</h3>
          <p className="mb-6">
            If you would like to exercise any of your rights under GDPR, please contact us at:
          </p>
          <div className="bg-secondary p-6 rounded-lg mb-10">
            <p className="font-medium mb-1">Email: privacy@skairipapps.com</p>
            <p>We will respond to your request within one month of receiving it.</p>
          </div>
          
                <h3 className="text-xl font-bold mt-8 mb-4">Data Processing Agreements</h3>
          <p className="mb-10">
            If you are a client or partner of Skairipa Apps Inc. and require a Data Processing Agreement (DPA) to comply with GDPR, 
            please contact us at legal@skairipapps.com.
          </p>
          
                <h3 className="text-xl font-bold mt-8 mb-4">Changes to this Notice</h3>
          <p className="mb-10">
            We may update this GDPR Compliance notice from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
              </div>
              
              <div className="mt-8 text-center">
                <PDFDownloadButton 
                  contentId="gdpr-content"
                  filename="Skairipa_Apps_GDPR_Compliance"
                  title="GDPR Compliance"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}