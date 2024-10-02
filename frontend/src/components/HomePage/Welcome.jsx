import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Welcome = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            <TypeAnimation
              sequence={["Welcome to JournalForge", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join a Global Community of Scholars and Innovators in Pushing the
            Boundaries of Knowledge
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/journals">
              <Button
                variant="default"
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-lg"
              >
                Explore Journals
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Welcome;
