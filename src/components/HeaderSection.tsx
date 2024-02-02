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
    <div className="mb-16 flex flex-col items-center">
      <img
        src={judiImage}
        alt="Picture of Judi."
        className="mb-10 mt-16 w-6/12 rounded-full md:w-4/12"
      />
      <h1 className="mb-2 font-serif text-6xl font-light text-blue-900 transition-all duration-500 dark:text-rose-500">
        Judith Böhlert
      </h1>
      <h2 className="mb-10 text-3xl font-semibold text-blue-900 transition-all duration-500 dark:text-rose-500">
        Freelance Sofware Engineer
      </h2>
      <div className="flex h-12 flex-row items-center justify-center space-x-6 ">
        {icons.map((icon, index) => (
          <a
            key={index}
            href={icon.url}
            title={icon.title}
            target="_blank"
            rel="noReferrer"
          >
            <FontAwesomeIcon
              icon={icon.icon}
              className="size-10 text-rose-900 transition-all duration-500 hover:size-12 hover:text-rose-500 dark:text-teal-100 hover:dark:text-teal-500"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default HeaderSection;
