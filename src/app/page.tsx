import { About } from "./components/About"
import { ContactForm } from "./components/ContactForm"
import { Education } from "./components/Education"
import { Experience } from "./components/Experience"
import { GalleryPreview } from "./components/GalleryPreview"
import { Hero } from "./components/Hero"
import { ProjectsPreview } from "./components/ProjectsPreview"


const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <ProjectsPreview />
        <GalleryPreview />
        <ContactForm />
      </main>
    </>
  )
}

export default Home
