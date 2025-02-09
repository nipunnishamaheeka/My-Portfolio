import heroImg from "../../assets/roundImg.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Nipunnishamaheeka CV.pdf";
import { useTheme } from "../../common/ThemeContext";
import "./Hero.css";
function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section
      id="hero"
      className="min-h-[500px] h-screen flex flex-col md:flex-row-reverse justify-center md:justify-evenly items-center gap-5 px-4 relative"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white w-full -z-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl -z-5"></div>

      {/* Image Section */}
      <div className="relative">
        <img
          src={heroImg}
          alt="Profile picture"
          className="max-w-[200px] md:max-w-[350px] xl:max-w-[400px] w-full 
                     animate-float  "
        />
        <button
          onClick={toggleTheme}
          className="absolute right-0 top-0 p-2 rounded-full bg-white/90 dark:bg-gray-300/90 
                     shadow-lg hover:scale-110 transition-transform duration-200 backdrop-blur-sm"
        >
          <img src={themeIcon} alt="Color mode icon" className="w-6 h-6" />
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center md:items-start gap-6 w-full max-w-xl">
          {/* Heading Section */}
          <div className="text-center md:text-left w-full">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-gray-600 to-gray-800 text-transparent bg-clip-text">
              FullStack Developer
            </h1>

            <div className="flex items-center justify-center md:justify-start gap-2">
              <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-800 font-medium">
                Nipun Nishamaheeka
              </h2>
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-blue-500 fill-current"
                aria-label="Verified account"
              >
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
              </svg>
            </div>
          </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {[
            { icon: twitterIcon, link: "https://twitter.com/", alt: "Twitter" },
            {
              icon: githubIcon,
              link: "https://github.com/nipunnishamaheeka",
              alt: "Github",
            },
            {
              icon: linkedinIcon,
              link: "https://www.linkedin.com/in/nipunnishamaheeka/",
              alt: "LinkedIn",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img src={social.icon} alt={social.alt} className="w-8 h-8" />
            </a>
          ))}
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-800 text-center md:text-left max-w-[38ch]">
          Passionate Full Stack Developer with a strong focus on UI/UX front-end
          design, creating seamless, user-centered digital experiences across
          platforms.
        </p>

        {/* <a
          href={CV}
          download
          className="inline-block px-8 py-3 text-lg font-bold text-white 
                     bg-gradient-to-r from-purple-600 to-pink-600 rounded-full
                     hover:scale-105 active:scale-95 transition-all duration-200
                     shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 
                     focus:ring-purple-500 focus:ring-offset-2"
        >
          Resume
        </a> */}
        <a href={CV} download class="cssbuttons-io-button">
          Resume
          <div class="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
