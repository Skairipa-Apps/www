import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Careers() {
  const openPositions = [
    {
      title: "iOS Developer",
      type: "Volunteer",
      description: "Help us build beautiful, privacy-focused iOS applications using Swift and SwiftUI. Experience with iOS development required.",
      skills: ["Swift", "SwiftUI", "iOS SDK", "Git"]
    },
    {
      title: "Frontend Developer",
      type: "Volunteer",
      description: "Create responsive and accessible user interfaces for our web applications. Experience with modern frontend frameworks required.",
      skills: ["React", "TypeScript", "HTML/CSS", "Responsive Design"]
    },
    {
      title: "UI/UX Designer",
      type: "Volunteer",
      description: "Design beautiful, intuitive interfaces for our applications that follow Apple's Human Interface Guidelines and accessibility standards.",
      skills: ["Figma", "UI Design", "UX Research", "Accessibility"]
    },
    {
      title: "Privacy Advocate",
      type: "Volunteer",
      description: "Help ensure our applications follow best practices for privacy and data protection. Knowledge of privacy regulations and standards required.",
      skills: ["GDPR", "CCPA", "Privacy By Design", "Data Protection"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Skairipa Apps Inc.</title>
        <meta
          name="description"
          content="Join our team at Skairipa Apps Inc. and help build innovative, privacy-focused applications."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>

      <div className="container section">
        <h1 className="section-title">Join Our Team</h1>
        <div className="section-divider"></div>

        <div className="section-subtitle mt-8">
          At Skairipa Apps Inc., we're looking for passionate individuals who
          share our commitment to privacy-focused technology.
        </div>

        <div className="mt-8 max-w-4xl mx-auto bg-card p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">About Volunteer Positions</h2>
          <p className="mb-4">
            As a startup in our early stages, all of our current positions are
            on a volunteer basis. We're transparent about this because we value
            honesty in all our relationships, including with our team members.
          </p>
          <p className="mb-4">
            While we cannot offer financial compensation at this time,
            volunteering with us provides:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Valuable experience working on real-world projects</li>
            <li>Portfolio-building opportunities</li>
            <li>Mentorship from experienced developers</li>
            <li>
              The chance to be part of a growing company from the ground up
            </li>
            <li>Potential for future paid positions as we grow</li>
          </ul>
          <p>
            We're deeply grateful for any time and expertise you can contribute,
            and we aim to create a collaborative environment where everyone's
            contributions are valued and recognized.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Open Positions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{position.title}</CardTitle>
                  <CardDescription>
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium mt-2">
                      {position.type}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{position.description}</p>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <a href="mailto:careers@skairipapps.com">Apply Now</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="mb-4 text-lg">
            Don't see a position that matches your skills?
          </p>
          <Button variant="outline" size="lg">
            <a href="mailto:careers@skairipapps.com">Send us your resume</a>
          </Button>
        </div>
      </div>
    </>
  );
}