import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-6xl font-bold mb-4 
                       bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
          >
            
            Get In Me
          </h1>
          <p className="text-gray-600 dark:text-gray-400 md:text-2xl">
            Contact me for your projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Methods */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-12 mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold mb-2">Email</h3>
              <p className="text-gray-600 text-sm mb-4">
                ugn.nishamaheeka@gmail.com
              </p>
              <a
                href="mailto:ugn.nishamaheeka@gmail.com"
                 className="text-purple-600 hover:text-purple-800 inline-flex items-center"
              >
                Write me <span className="ml-2">→</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-lg border border-gray-200 text-center">
              <div className="w-12  mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-sm mb-4">+94 76 382 5296</p>
              <a
                href="https://wa.me/94763825296"
               className="text-purple-600 hover:text-purple-800 inline-flex items-center"
              >
                Write me <span className="ml-2">→</span>
              </a>
            </div>

            {/* Discord Card */}
            <div className="p-6 rounded-sm border border-gray-200 text-center">
              <div className="w-12  mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold mb-2">Discord</h3>
              <p className="text-gray-600 text-sm mb-4">nipun_nishamaheeka</p>
              <a
                href="#"
                 className="text-purple-600 hover:text-purple-800 inline-flex items-center"
              >
                Write me <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 flex justify-center">Write me your project</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Insert your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Insert your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2">Description</label>
                <textarea
                  rows="6"
                  placeholder="Write your description"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 resize-none"
                ></textarea>
              </div>

        
              <div className="flex justify-center">
                <button class="button ">
                  Send Now
                  <svg class="icon " viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
