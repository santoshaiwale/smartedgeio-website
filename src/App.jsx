import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Technologies from "./components/Technologies";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

function getCurrentPage() {
  return window.location.hash === "#technologies" ? "technologies" : "home";
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getCurrentPage());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (currentPage === "technologies") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const hash = window.location.hash.replace("#", "");

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-[#020817]">
      <Navbar currentPage={currentPage} />
      <main>
        {currentPage === "technologies" ? (
          <Technologies />
        ) : (
          <>
            <Hero />
            <Services />
            <Industries />
            <WhyUs />
          </>
        )}
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}