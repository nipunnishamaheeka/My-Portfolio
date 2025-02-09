
function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-b  to-black">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 
                      bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Get In Touch
        </h1>
        <p className="text-gray-800 text-center mb-12 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <form className="max-w-2xl mx-auto space-y-8">
          <div className="group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full  border border-gray-800 rounded-lg px-6 py-4 text-gray-100 
                        placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 
                        focus:border-transparent transition-all duration-300
                        backdrop-blur-sm"
            />
          </div>

          <div className="group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full  border border-gray-800 rounded-lg px-6 py-4 text-gray-100 
                        placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 
                        focus:border-transparent transition-all duration-300
                        backdrop-blur-sm"
            />
          </div>

          <div className="group">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="6"
              className="w-full  border border-gray-800 rounded-lg px-6 py-4 text-gray-100 
                        placeholder:text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 
                        focus:border-transparent transition-all duration-300 resize-none
                        backdrop-blur-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white 
                     rounded-lg font-medium text-lg hover:opacity-90 transition-all duration-300
                     hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-purple-500/25"
          >
            Send Message
          </button>
        </form>

        {/* Optional: Add social links */}
        <div className="mt-16 flex justify-center space-x-6 text-gray-400">
          <a href="#" className="hover:text-purple-500 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.163 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.161 22 16.419 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a href="#" className="hover:text-purple-500 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 5.16c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C17.69 3.69 16.52 3 15.23 3c-2.51 0-4.54 2.03-4.54 4.54 0 .36.04.7.11 1.03A12.83 12.83 0 011.67 3.97c-.37.64-.58 1.39-.58 2.19 0 1.57.8 2.96 2.02 3.77-.75-.02-1.45-.23-2.06-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.38.1-.78.16-1.19.16-.29 0-.58-.03-.85-.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.38 2.06 6.94 2.06 8.31 0 12.86-6.9 12.86-12.86 0-.2 0-.4-.02-.6.89-.64 1.65-1.45 2.26-2.37z" />
            </svg>
          </a>
          <a href="#" className="hover:text-purple-500 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;