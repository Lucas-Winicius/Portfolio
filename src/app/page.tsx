import ArrowToTop from "@/components/ArrowToTop";
import Cookies from "@/components/Cookies";
import About from "@/patterns/About";
import Contact from "@/patterns/Contact";
import Footer from "@/patterns/FooterSimple";
import Landing from "@/patterns/Landing";
import Projects from "@/patterns/Projects";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ArrowToTop />
      <Cookies />
    </>
  );
}
