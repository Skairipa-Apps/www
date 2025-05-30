import { Helmet } from "react-helmet";
import ContactSection from "@/components/contact/contact-section";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Skairipa Apps Inc.</title>
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
