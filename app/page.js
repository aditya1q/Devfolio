import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
// import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main className=" bg-black w-[450px] sm:min-w-full">
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Project />
      <Contact />
    </main>
  )
}
