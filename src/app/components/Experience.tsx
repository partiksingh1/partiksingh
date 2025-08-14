import { Card, CardContent } from '@/components/ui/card'
import { Calendar, MapPin } from 'lucide-react'

const experiences = [

  {
    title: 'FullStack Web Developer',
    company: 'Needibay Internet Pvt Ltd',
    link: 'https://www.linkedin.com/company/needibay/',
    location: 'Bengaluru , KA',
    period: 'Apr 2024 - Feb 2025',
    description: "During my internship at Needibay Internet Private Limited, I built responsive web features with React and Next.js, and developed backend services using Java Spring Boot and RESTful APIs. I also created a cross-platform mobile app with React Native, working with Node.js and Express for the backend. I used Prisma ORM and PostgreSQL for database management and gained experience with CI/CD pipelines.",
    technologies: [
      "React",
      "Next.js",
      "Java Spring Boot",
      "RESTful APIs",
      "React Native",
      "Node.js",
      "Express",
      "Prisma ORM",
      "PostgreSQL",
      "CI/CD"
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground">
              My professional journey
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-2 md:mb-0">
                      <h3 className="text-xl mb-1">{exp.title}</h3>
                      <a href="https://www.linkedin.com/company/needibay/" target="_blank" rel="noopener noreferrer">
                        <p className="text-lg text-primary cursor-pointer underline">{exp.company}</p>
                      </a>
                    </div>
                    <div className="flex flex-col md:text-right text-sm text-muted-foreground">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}