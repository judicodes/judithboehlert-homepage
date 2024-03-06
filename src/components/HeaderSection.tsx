import {
  faGithubSquare,
  faInstagramSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import judiImage from "../assets/judi_couch_square_blurred.webp";

const icons = [
  {
    icon: faEnvelope,
    url: "mailto:hello@judithboehlert.com",
    title: "Send me an email"
  },
  {
    icon: faLinkedin,
    url: "https://linkedin.com/in/jboehlert",
    title: "LinkedIn"
  },
  {
    icon: faInstagramSquare,
    url: "https://www.instagram.com/judi.codes/",
    title: "Instagram @judi.codes"
  },
  { icon: faGithubSquare, url: "https://github.com/judicodes", title: "GitHub" }
];

function HeaderSection() {
  return (
    <div className="mb-12 flex flex-col items-center">
      <img
        src={judiImage}
        alt="Picture of Judi."
        className="mb-10 mt-16 aspect-square w-6/12 rounded-full md:w-5/12"
      />
      <h1 className="mb-4 font-serif  text-4xl font-light text-blue-900 transition-all duration-500 md:text-6xl dark:text-blue-100">
        Judith Böhlert
      </h1>
      <h2 className="mb-10 text-xl font-semibold text-blue-900 transition-all duration-500 md:text-3xl dark:text-blue-100">
        Freelance Software Engineer
      </h2>
      <div className="flex h-12 flex-row items-center justify-center space-x-6 ">
        {icons.map((icon, index) => (
          <a
            key={index}
            href={icon.url}
            title={icon.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={icon.icon}
              className="size-10 text-pink-700 transition-all duration-500 hover:size-12 hover:text-pink-900 dark:text-pink-300 hover:dark:text-pink-500"
            />
          </a>
        ))}
      </div>
      <h3 className=" mt-4 text-center text-xl  text-blue-900 transition-all duration-500 md:text-2xl dark:text-blue-100">
        <span className="font-bold"> Top Skills:</span>{" "}
        <span className="italic">
          {" "}
          TypeScript - JavaScript - HTML - CSS - React - Vue - Node.js
        </span>
      </h3>
    </div>
  );
}

export default HeaderSection;
