import { Lock, Lightbulb, Users } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Mission & Vision</h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
              <p className="text-neutral-mid">
                We believe your data belongs to you. Our applications are designed to protect your privacy from the ground up.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-neutral-mid">
                We push boundaries to create tools that solve real problems with elegant, intuitive interfaces.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">User-Centered</h3>
              <p className="text-neutral-mid">
                Every feature we build starts with understanding user needs. We prioritize experiences that feel natural and delightful.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <blockquote className="italic text-xl text-center text-neutral-mid">
              "Our purpose is to create technology that empowers without exploiting, giving users back control over their digital lives."
            </blockquote>
            <p className="text-center mt-4 font-medium">— The Skairipa Apps Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
