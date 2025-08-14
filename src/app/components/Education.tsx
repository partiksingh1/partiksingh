import { Card, CardContent } from '@/components/ui/card'
import { Calendar, GraduationCap } from 'lucide-react'

const education = [
  {
    degree: 'Bachelor in Computer Science & Technology',
    school: 'Jain University, Bangalore',
    period: '2020 - 2024',
    description: 'I focused on core subjects like Java, DBMS, Networking, and Data Structures, while also spending a lot of time playing Ultimate Frisbee. It kept me active, helped me work with teams, and taught me how to think on my feet!',
  },
  {
    degree: 'High School',
    school: 'Springdales School, Jaipur',
    period: '2020',
    description: 'It was FUN. Good school days !',

  }
]

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Education</h2>
            <p className="text-lg text-muted-foreground">
              My academic background
            </p>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-2 md:mb-0">
                      <h3 className="text-xl mb-1">{edu.degree}</h3>
                      <p className="text-lg text-primary flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2" />
                        {edu.school}
                      </p>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}