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
    <div className="mb-12 flex flex-col items-center rounded-md bg-beige-100 p-12 shadow-lg dark:bg-bluegrey-900">
      <h1 className="mb-4 font-serif text-3xl sm:text-4xl md:text-6xl">
        Judith Böhlert
      </h1>
      <h2 className="font-serif text-xl sm:text-2xl md:text-3xl">
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
      <h3 className="text-center text-xl md:text-2xl">
        <span className="font-bold"> Top Skills:</span>{" "}
        <span>
          TypeScript - JavaScript - HTML - CSS - React - Vue - TailwindCSS -
          Node.js - Postgresql
        </span>
      </h3>
    </div>
  );
}

export default HeaderSection;
