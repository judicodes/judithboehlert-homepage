const paragraphs = [
  "I have 6+ years of experience as a full-stack developer, working with various technologies and frameworks.",

  "I can support your team as a freelance software engineer and consultant, primarily within the JavaScript/TypeScript ecosystem but I am always open to learning new technologies.",

  "Some of my favourite technologies right now: JavaScript, TypeScript, React, Vue, Node.js, TailwindCSS, GitHub Actions, PostgreSQL, Supabase.",

  "If you want to work with me, contact me at hello@judithboehlert.com. 💌"
];

function ServicesSection() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="my-4 text-center font-mono text-2xl italic text-neutral-700 transition-all duration-500 sm:text-3xl dark:text-neutral-100">
        Services
      </h3>

      <div className="flex flex-col ">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="mb-4 text-justify text-lg text-neutral-900 transition-all duration-500 dark:text-neutral-100 "
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
