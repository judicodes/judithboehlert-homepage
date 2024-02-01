import {
  faGithubSquare,
  faInstagramSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import judiImage from "./assets/judi_couch_square_blurred.webp";

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

function App() {
  return (
    <div className="dark ">
      <div className="min-w-screen min-h-screen  bg-gradient-to-br from-30% via-80% dark:from-black dark:via-neutral-900 dark:to-teal-900 ">
        <div className="container mx-auto w-11/12 md:w-8/12 lg:w-5/12 2xl:w-4/12">
          <div className="mb-28 flex flex-col items-center">
            <img
              src={judiImage}
              alt="Picture of Judi."
              className="mb-10 mt-16 w-6/12 rounded-full md:w-4/12"
            />
            <h1 className="mb-2 font-serif text-5xl font-bold dark:text-rose-500">
              Judith Böhlert
            </h1>
            <h2 className="mb-10 text-3xl font-bold dark:text-rose-500">
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
                    className="size-10 transition hover:size-12 dark:text-teal-100 hover:dark:text-teal-500"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="mb-4 text-3xl font-bold italic dark:text-white">
              Hi, I&apos;m Judith.
            </h3>
            <p className=" text text-lg dark:text-white ">
              Heres comes some text about me me. I shall describe my freelance
              services. And tell a bit about myself. Mention how I can help
              teams and projects. Some personal stuff as well. Here is more text
              so we can test t the scrolling. And More. And more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
