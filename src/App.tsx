import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Suspense, lazy, useState } from "react";
import AboutSection from "./components/AboutSection";
import HeaderSection from "./components/HeaderSection";

const LegalModal = lazy(() => import("./components/LegalModal"));

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkLightMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const openLegalModal = () => setIsLegalModalOpen(true);
  const closeLegalModal = () => setIsLegalModalOpen(false);

  return (
    <>
      <div className={isDarkMode ? "dark" : ""}>
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
          <div className="pb-4 pt-8 text-center text-neutral-500 ">
            <button onClick={openLegalModal}>Legal Notice</button>
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {isLegalModalOpen && (
            <LegalModal open={isLegalModalOpen} handleClose={closeLegalModal} />
          )}
        </Suspense>
      </div>
    </>
  );
}

export default App;
