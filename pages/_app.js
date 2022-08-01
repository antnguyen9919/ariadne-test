import "../styles/globals.css";
import "tailwindcss/tailwind.css";
// import { AnimatePresence } from "framer-motion";

// import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <AnimatePresence initial={true} exitBeforeEnter> */}
      <Component {...pageProps} />
      {/* </AnimatePresence> */}
    </>
  );
}

export default MyApp;
