import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Suspense, lazy, useState } from "react";
import AboutSection from "./components/AboutSection";
import HeaderSection from "./components/HeaderSection";
import ServicesSection from "./components/ServicesSection";
import { Button } from "./components/ui/button";
import { Dialog, DialogTrigger } from "./components/ui/dialog";

const LegalModal = lazy(() => import("./components/LegalModal"));

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkLightMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className="min-w-screen min-h-screen bg-gradient-to-br from-pink-100 via-neutral-100 via-40% to-white bg-fixed dark:from-green-900 dark:via-neutral-900 dark:via-40% dark:to-black">
        <div className="flex h-10 flex-row justify-end px-12 pt-12">
          <button
            onClick={toggleDarkLightMode}
            type="button"
            title="Toggle dark/light mode"
          >
            <FontAwesomeIcon
              icon={faCircleHalfStroke}
              className="size-8 text-pink-900 transition-all duration-500 hover:size-9 hover:text-pink-500 dark:text-pink-500 hover:dark:text-pink-300"
            />
          </button>
        </div>
        <div className="container mx-auto w-11/12 md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12">
          <div className=" flex h-[100vh] flex-col items-center justify-center text-center">
            <HeaderSection />
          </div>
          <ServicesSection />
          <AboutSection />
        </div>
        <div className="pb-4 pt-8 text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-neutral-500">
                Legal Notice
              </Button>
            </DialogTrigger>
            <Suspense fallback={<div>Loading...</div>}>
              <LegalModal />
            </Suspense>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default App;
