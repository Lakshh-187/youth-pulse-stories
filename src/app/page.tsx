tsx
// src/app/page.tsx

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PremiumPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleViewMoreClick = () => {
      setIsPopupVisible(true);\n  };\n\n  const closePopup = () => {\n    setIsPopupVisible(false);\n  };\n\n  return (\n    <section className=\"py-12 bg-gray-50\">\n      <div className=\"container mx-auto px-4\">\n        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6\">\n          {/* Uni-Pitch */}\n          <div className=\"bg-white rounded-lg shadow-md p-6\">\n            <h3 className=\"text-lg font-semibold mb-2\">Uni-Pitch</h3>\n            <p className=\"text-gray-600 mb-4\">\n              Description for Uni-Pitch program.\n            </p>\n            <Button\n              onClick={handleViewMoreClick}\n              className=\"bg-blue-500 hover:bg-blue-700 text-white\"\n            >\n              View More\n            </Button>\n          </div>\n\n          {/* Pitchburg */}\n          <div className=\"bg-white rounded-lg shadow-md p-6\">\n            <h3 className=\"text-lg font-semibold mb-2\">Pitchburg</h3>\n            <p className=\"text-gray-600 mb-4\">\n              Description for Pitchburg program.\n            </p>\n            <Button\n              onClick={handleViewMoreClick}\n              className=\"bg-blue-500 hover:bg-blue-700 text-white\"\n            >\n              View More\n            </Button>\n          </div>\n\n          {/* Stunburg */}\n          <div className=\"bg-white rounded-lg shadow-md p-6\">\n            <h3 className=\"text-lg font-semibold mb-2\">Stunburg</h3>\n            <p className=\"text-gray-600 mb-4\">\n              Description for Stunburg program.\n            </p>\n            <Button\n              onClick={handleViewMoreClick}\n              className=\"bg-blue-500 hover:bg-blue-700 text-white\"\n            >\n              View More\n            </Button>\n          </div>\n\n          {/* Vintage Program */}\n          <div className=\"bg-white rounded-lg shadow-md p-6\">\n            <h3 className=\"text-lg font-semibold mb-2\">Vintage Program</h3>\n            <p className=\"text-gray-600 mb-4\">\n              Description for Vintage Program.\n            </p>\n            <Button\n              onClick={handleViewMoreClick}\n              className=\"bg-blue-500 hover:bg-blue-700 text-white\"\n            >\n              View More\n            </Button>\n          </div>\n        </div>\n\n        {isPopupVisible && (\n          <div className=\"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center\">\n            <div className=\"bg-white rounded-lg p-8\">\n              <h2 className=\"text-xl font-bold mb-4\">Premium Feature</h2>\n              <p>This feature is available for premium scholars only.</p>\n              <Button\n                onClick={closePopup}\n                className=\"mt-4 bg-blue-500 hover:bg-blue-700 text-white\"\n              >\n                Close\n              </Button>\n            </div>\n          </div>\n        )}\n      </div>\n    </section>\n  );\n};\n\n\nconst HomePage = () => {\n  return (\n    <div>\n      <Hero />\n      <PremiumPopup/>\n      <FeaturedPrograms />\n    </div>\n  );\n};\n\nexport default HomePage;

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Unlock Your Potential with Premium Resources
        </h1>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          Get access to exclusive interviews, in-depth case studies, and cutting-edge research to accelerate your success.
        </p>
        <Link href="/premium">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Explore Premium Content
          </Button>
        </Link>
      </div>
    </section>
  );
};

const FeaturedPrograms = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleViewMoreClick = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Premium Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Uni-Pitch */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Uni-Pitch</h3>
            <p className="text-gray-600 mb-4">
              Engage in dynamic pitching competitions and showcase your innovative ideas.
            </p>
            <Button onClick={handleViewMoreClick} className="bg-blue-500 hover:bg-blue-700 text-white">
              View More
            </Button>
          </div>

          {/* Pitchburg */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Pitchburg</h3>
            <p className="text-gray-600 mb-4">
              Participate in intensive workshops focused on mastering the art of pitching.
            </p>
            <Button onClick={handleViewMoreClick} className="bg-blue-500 hover:bg-blue-700 text-white">
              View More
            </Button>
          </div>

          {/* Stunburg */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Stunburg</h3>
            <p className="text-gray-600 mb-4">
              Experience real-world simulations to refine your entrepreneurial skills.
            </p>
            <Button onClick={handleViewMoreClick} className="bg-blue-500 hover:bg-blue-700 text-white">
              View More
            </Button>
          </div>

          {/* Vintage Program */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">Vintage Program</h3>
            <p className="text-gray-600 mb-4">
              Learn from seasoned entrepreneurs and industry leaders in exclusive sessions.
            </p>
            <Button onClick={handleViewMoreClick} className="bg-blue-500 hover:bg-blue-700 text-white">
              View More
            </Button>
          </div>
        </div>

        {isPopupVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-xl font-bold mb-4">Premium Feature</h2>
              <p>This feature is available for premium scholars only.</p>
              <Button onClick={closePopup} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white">
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePage;