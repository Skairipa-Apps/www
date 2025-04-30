import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function GDPR() {
  return (
    <>
      <Helmet>
        <title>GDPR Compliance | Skairipa Apps Inc.</title>
        <meta name="description" content="Learn about how Skairipa Apps Inc. complies with GDPR regulations and protects your data rights." />
      </Helmet>
      
      <div className="container section">
        <h1 className="section-title">GDPR Compliance</h1>
        <div className="section-divider"></div>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <p className="text-lg mb-6">
            At Skairipa Apps Inc., we're committed to protecting your privacy rights under the General Data Protection Regulation (GDPR). 
            This page explains how we comply with GDPR requirements and how you can exercise your rights under this regulation.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">What is GDPR?</h2>
          <p className="mb-6">
            The General Data Protection Regulation (GDPR) is a comprehensive privacy law that gives EU citizens and residents greater 
            control over their personal data. It went into effect on May 25, 2018, and applies to all organizations that process 
            the personal data of EU citizens and residents, regardless of where the organization is located.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Your Rights Under GDPR</h2>
          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">Right to Access</AccordionTrigger>
              <AccordionContent>
                <p>You have the right to request a copy of the personal data we hold about you and information about how we process it.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Right to Rectification</AccordionTrigger>
              <AccordionContent>
                <p>You have the right to request that we correct any inaccurate personal data we hold about you.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">Right to Erasure</AccordionTrigger>
              <AccordionContent>
                <p>Also known as the "right to be forgotten," you have the right to request that we delete your personal data in certain circumstances.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">Right to Restrict Processing</AccordionTrigger>
              <AccordionContent>
                <p>You have the right to request that we limit how we use your data in certain circumstances.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">Right to Data Portability</AccordionTrigger>
              <AccordionContent>
                <p>You have the right to receive your personal data in a structured, commonly used, and machine-readable format, and to transmit that data to another controller.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">Right to Object</AccordionTrigger>
              <AccordionContent>
                <p>You have the right to object to the processing of your personal data in certain circumstances.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-medium">Rights Related to Automated Decision Making</AccordionTrigger>
              <AccordionContent>
                <p>You have the right not to be subject to a decision based solely on automated processing that produces legal effects concerning you or similarly significantly affects you.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">How We Comply with GDPR</h2>
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
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Exercising Your Rights</h2>
          <p className="mb-6">
            If you would like to exercise any of your rights under GDPR, please contact us at:
          </p>
          <div className="bg-secondary p-6 rounded-lg mb-10">
            <p className="font-medium mb-1">Email: privacy@skairipapps.com</p>
            <p>We will respond to your request within one month of receiving it.</p>
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Data Processing Agreements</h2>
          <p className="mb-10">
            If you are a client or partner of Skairipa Apps Inc. and require a Data Processing Agreement (DPA) to comply with GDPR, 
            please contact us at legal@skairipapps.com.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Changes to this Notice</h2>
          <p className="mb-10">
            We may update this GDPR Compliance notice from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
          
          <p className="text-sm text-muted-foreground">Last updated: April 30, 2023</p>
        </div>
      </div>
    </>
  );
}