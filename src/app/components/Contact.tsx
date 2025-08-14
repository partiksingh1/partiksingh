import { Button } from '@/components/ui/button'
import { Mail, Github, Linkedin } from 'lucide-react'



export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="mb-6">Get In Touch</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <Button asChild>
              <a href="mailto:alex@example.com">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t text-center">
        <p className="text-sm text-muted-foreground">
          © 2025 Alex Johnson. All rights reserved.
        </p>
      </footer>
    </section>
  )
}