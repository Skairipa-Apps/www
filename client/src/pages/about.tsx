import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Skairipa Apps Inc.</title>
        <meta
          name="description"
          content="Learn about Skairipa Apps Inc., our mission, values, and the team behind our innovative applications."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>

      <div className="container section">
        <h1 className="section-title">About Skairipa Apps Inc.</h1>
        <div className="section-divider"></div>

        <div className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-6 text-lg">
            Skairipa Apps Inc. was founded in 2023 with a simple mission: to
            create innovative, privacy-first applications that enhance people's
            lives while respecting their digital rights. As technology becomes
            increasingly integrated into our daily lives, we believe that
            privacy should be a fundamental right, not an optional feature.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Privacy by Design
              </h3>
              <p>
                We integrate privacy protections from the very beginning of our
                development process, not as an afterthought.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Innovation
              </h3>
              <p>
                We continuously push the boundaries of what's possible, creating
                solutions that are both cutting-edge and practical.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Transparency
              </h3>
              <p>
                We believe in being open about how our applications work and how
                they handle user data.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                User-Centered Design
              </h3>
              <p>
                We create products that are intuitive, accessible, and focused
                on solving real user needs.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Our Team</h2>
          <p className="mb-6 text-lg">
            Skairipa Apps Inc. is a small but dedicated team of developers,
            designers, and privacy advocates who are passionate about creating
            technology that respects and empowers users. We come from diverse
            backgrounds but share a common commitment to ethical technology
            development.
          </p>
          <p className="mb-10 text-lg">
            As a startup, we're growing and always looking for talented
            individuals who share our vision. If you're interested in joining
            our team, please check out our{" "}
            <a href="/careers" className="text-primary hover:underline">
              Careers page
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}