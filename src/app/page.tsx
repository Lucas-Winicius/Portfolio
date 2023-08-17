import ArrowToTop from "@/components/ArrowToTop";
import Cookies from "@/components/Cookies";
import About from "@/patterns/About";
import Landing from "@/patterns/Landing";
import Projects from "@/patterns/Projects";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <ArrowToTop />
      <Cookies />
    </>
  );
}
