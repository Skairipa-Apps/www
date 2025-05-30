import { Helmet } from "react-helmet";
import ContactSection from "@/components/contact/contact-section";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Skairipa Apps Inc.</title>
        <meta
          name="description"
          content="Get in touch with the Skairipa Apps team. We're here to help with any questions about our privacy-focused applications."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>

      <div className="bg-[hsl(var(--neutral-light))] py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        </div>
      </div>

      <ContactSection />
    </>
  );
};

export default Contact;
