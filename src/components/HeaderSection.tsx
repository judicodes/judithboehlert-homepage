import {
  faGithubSquare,
  faInstagramSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <h1 className="mb-4 font-mono text-4xl text-neutral-700 transition-all duration-500 md:text-6xl dark:text-neutral-100">
        Judith Böhlert
      </h1>
      <h2 className="font-mono text-xl font-semibold text-neutral-700 transition-all duration-500 md:text-3xl dark:text-neutral-100">
        Freelance Full-stack Engineer
      </h2>
      <div className="my-10 flex h-12 flex-row items-center justify-center space-x-6 ">
        {icons.map((icon) => (
          <a
            key={icon.title}
            href={icon.url}
            title={icon.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={icon.icon}
              className="size-10 text-pink-900 transition-all duration-500 hover:size-12 hover:text-pink-500 dark:text-pink-500 hover:dark:text-pink-300"
            />
          </a>
        ))}
      </div>
      <h3 className="text-center text-xl text-neutral-700 transition-all duration-500 md:text-2xl dark:text-neutral-100">
        <span className="font-mono font-bold"> Top Skills:</span>{" "}
        <span className="font-mono">
          TypeScript - JavaScript - HTML - CSS - React - Vue - Node.js
        </span>
      </h3>
    </div>
  );
}

export default HeaderSection;
