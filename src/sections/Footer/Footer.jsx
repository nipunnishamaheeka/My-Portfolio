function Footer() {
  return (
    <footer id="footer" className="py-8 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-400">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <p className="text-base text-gray-600 dark:text-gray-800 leading-relaxed">
            &copy; {new Date().getFullYear()} Nipun Nishamaheeka. <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;