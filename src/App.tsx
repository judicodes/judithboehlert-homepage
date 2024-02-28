import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Suspense, lazy, useState } from "react";
import AboutSection from "./components/AboutSection";
import HeaderSection from "./components/HeaderSection";
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
      <div className="min-w-screen min-h-screen bg-gradient-to-br from-pink-100 via-neutral-100 via-40% to-white bg-fixed dark:from-blue-900 dark:via-neutral-900 dark:via-40% dark:to-black">
        <div className="flex h-10 flex-row justify-end px-12 pt-12">
          <button onClick={toggleDarkLightMode}>
            <FontAwesomeIcon
              icon={faCircleHalfStroke}
              className="size-8 text-pink-900 transition hover:size-9 hover:text-pink-500 dark:text-blue-100 hover:dark:text-blue-500"
            />
          </button>
        </div>
        <div className="container mx-auto w-10/12 md:w-8/12 lg:w-5/12 2xl:w-4/12">
          <HeaderSection />
          <AboutSection />
        </div>
        <div className="dark pb-4 pt-8 text-center">
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
