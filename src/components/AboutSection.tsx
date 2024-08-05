import judiImage from "../assets/judi_couch_square_blurred.webp";

const paragraphs = [
  "I wrote my first line of code the year we sang along to Adele's Rolling In The Deep and Bruno Mars's Grenade.",

  "After a few years of working full-time as a full-stack developer, I have realized that a) working in tech is awesome and b) it can be very exhausting sometimes.",

  "Therefore, I embarked on a self-employment adventure, hoping to find a calm and sustainable approach to working in tech.",

  "I prefer progress over perfection and enjoy building prototypes, releasing MVPs, and shipping things fast. 🚀",

  "While I enjoy discovering and learning new technologies, I am also passionate about Developer Experience and Developer Productivity since how we organise our work is just as important (if not more) than choosing the right tech stack. ✨"
];

function AboutSection() {
  return (
    <div className="my-8 flex flex-col items-center">
      <h3 className="text-center font-serif text-2xl sm:text-3xl">
        Hi, I&apos;m Judith.
      </h3>
      <img
        src={judiImage}
        alt="Portrait Judi."
        className="my-4 aspect-square w-6/12 rounded-full md:w-5/12"
      />
      <div className="flex flex-col rounded-md bg-beige-100 p-8 shadow-lg dark:bg-bluegrey-900">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4 text-justify text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default AboutSection;
