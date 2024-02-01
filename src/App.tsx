import judiImage from "./assets/judi_couch_square_blurred.webp";

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
            <h2 className="text-3xl font-bold dark:text-rose-500 ">
              Freelance Sofware Engineer
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="mb-4 text-3xl font-bold dark:text-white">
              Hi, I&apos;m Judith.
            </h3>
            <p className=" text dark:text-white">
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
