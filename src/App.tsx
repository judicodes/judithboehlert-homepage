import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AboutSection from "./components/AboutSection";
import HeaderSection from "./components/HeaderSection";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkLightMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-w-screen min-h-screen  bg-gradient-to-tl from-white from-30% via-blue-100 via-80% to-rose-100 dark:from-black dark:via-neutral-900 dark:to-teal-900 ">
        <div className="flex h-10 flex-row justify-end px-12 pt-12">
          <button onClick={toggleDarkLightMode}>
            <FontAwesomeIcon
              icon={faCircleHalfStroke}
              className="size-8 text-teal-500 transition hover:size-9 hover:text-blue-500 dark:text-blue-100 hover:dark:text-teal-100"
            />
          </button>
        </div>
        <div className="container mx-auto w-11/12 md:w-8/12 lg:w-5/12 2xl:w-4/12">
          <HeaderSection />
          <AboutSection />
        </div>
      </div>
    </div>
  );
}

export default App;
