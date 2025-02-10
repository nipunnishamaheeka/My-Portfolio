import { useState } from "react";

function Service() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Mobile App Development",
      hoverColor: "hover:bg-indigo-300",
      description: "Creating innovative mobile applications tailored to your needs.",
      details: [
        "Native app development",
        "Cross-platform solutions",
        "UI/UX design for mobile",
        "App maintenance & support",
        "Performance optimization"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      title: "Web Development",
      hoverColor: "hover:bg-amber-300",
      description: "Creating visually appealing and user-friendly websites tailored to your needs.",
      details: [
        "Web Page development",
        "I develop the user interfaces",
        "I create UX element interactions",
        "Portfolio & showcase Design",
        "Blog or Magazine Design"
      ]
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      title: "Software Development",
      hoverColor: "hover:bg-pink-300",
      description: "Developing robust and scalable software solutions for your business.",
      details: [
        "Custom software development",
        "Enterprise solutions",
        "Database design",
        "API development",
        "System integration"
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto  ">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Services
        </h1>
        <p className="text-gray-600  md:text-3xl">What I offer</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group relative bg-white h-72 w-64 p-12 border-2 border-gray-300
                       ${service.hoverColor}
                       transition-all duration-500 ease-out hover:scale-105 
                       hover:shadow-2xl cursor-pointer`}
          >
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full mt-6">
              {/* Icon */}
              <div className="mb-8 transform transition-transform duration-500 
                            group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                {service.title}
              </h3>

              {/* Get More Button */}
              <div className="mt-auto">
                <button
                  onClick={() => setSelectedService(service)}
                  className="absolute bottom-4 right-15 opacity-0 text-sm text-white
                            transform translate-x-10 transition-all duration-500 
                            group-hover:opacity-100 group-hover:translate-x-0 
                            inline-flex items-center gap-2"
                >
                  Get More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Popup Dialog */}
            {selectedService === service && (
              <>
                {/* Overlay */}
                <div 
                  className="fixed inset-0 bg-black bg-opacity-50 z-40"
                  onClick={() => setSelectedService(null)}
                ></div>
                
                {/* Popup Content */}
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                              bg-white p-8 rounded-lg shadow-2xl z-50 w-96 max-h-[90vh] overflow-y-auto">
                  <button 
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={() => setSelectedService(null)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-white/10 opacity-0 
                           group-hover:opacity-20 transition-opacity duration-500">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
