import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section className="bg-[hsl(var(--neutral-light))] py-16 sm:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Innovative Apps with Privacy at Heart
          </h1>
          <p className="text-lg sm:text-xl text-[hsl(var(--neutral-mid))] mb-8">
            At Skairipa Apps Inc., we develop iOS and web applications that respect your privacy while delivering exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex justify-center items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition"
            >
              Our Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-6 py-3 bg-white text-primary font-medium rounded-md border border-primary hover:bg-[hsl(var(--neutral-light))] transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
