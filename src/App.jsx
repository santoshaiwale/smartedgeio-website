import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

export default function App() {
  return (
    <div className="min-h-screen bg-[#020817]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <WhyUs />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}