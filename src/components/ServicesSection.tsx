const paragraphs = [
  "I have 6+ years of experience as a full-stack developer, working with various technologies and frameworks.",

  "I can support your team as a freelance software engineer and consultant, primarily within the JavaScript/TypeScript ecosystem but I am always open to learning new technologies.",

  "Some of my favourite technologies right now: JavaScript, TypeScript, React, Vue, Node.js, TailwindCSS, GitHub Actions, PostgreSQL, Supabase.",

  "If you want to work with me, contact me at hello@judithboehlert.com. 💌"
];

function ServicesSection() {
  return (
    <div className="flex flex-col items-center rounded-md bg-beige-100 p-12 shadow-lg dark:bg-bluegrey-900">
      <h3 className="my-4 text-center font-serif text-2xl sm:text-3xl">
        Services
      </h3>

      <div className="flex flex-col ">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4 text-justify text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
