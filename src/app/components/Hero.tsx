"use client"
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'
const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
};
export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16">
      <div className="container mx-auto px-6 text-center">
        <img
          src="pic.jpeg"
          alt="Portrait of Partik Singh Tanwer"
          className="w-40 h-40 sm:w-60 sm:h-60 mx-auto mb-8 rounded-full object-cover bg-muted"
        />


        <h1 className="text-3xl font-bold mb-4">Partik Singh Tanwer</h1>
        <p className="text-lg font-light italic mb-2">Software Developer</p>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Building modern web applications with clean code and thoughtful design.
        </p>

        <div className="flex gap-4 justify-center mb-8">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/partiksingh1" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.linkedin.com/in/partik-singh-473805206/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:partiktanwar30402@gmail.com">
              <Mail className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <Button size="lg" asChild onClick={scrollToProjects}>
          <span className='bg-scroll'>View My Work</span>
        </Button>
      </div>
    </section >
  )
}