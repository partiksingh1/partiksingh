"use client"
import { ArrowLeft, ExternalLink, Github, CheckCircle } from 'lucide-react'
import type { ReactElement, ReactNode, ReactPortal, Key } from 'react'
import { getProject } from '@/data/mockData'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import { notFound } from 'next/navigation'

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const { id } = React.use(params); // Unwrap the params Promise
    if (!id) {
        notFound()
    }

    const handleGoBack = () => {
        if (window.history.length > 3) {
            router.back()
        } else {
            router.push('/')
        }
    }
    const project = getProject(id);
    if (!project) {
        notFound()
    }
    if (!project) {
        return (
            <div className="min-h-screen pt-24 pb-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl mb-4">Project Not Found</h1>
                        <p className="text-muted-foreground mb-8">
                            The project you are looking for doesnt exist.
                        </p>
                        <Button onClick={handleGoBack}>
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Go Back
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Back Button */}
                    <Button
                        variant="ghost"
                        onClick={handleGoBack}
                        className="mb-8 hover:bg-muted"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Projects
                    </Button>

                    {/* Project Header */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-12">
                        <div>
                            <div className="mb-4">
                                <Badge variant="outline" className="mb-4">
                                    {project.category}
                                </Badge>
                                <h1 className="text-4xl md:text-5xl mb-4">
                                    {project.name}
                                </h1>
                                <p className="text-lg text-muted-foreground mb-6">
                                    {project.longDescription}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech: string | number | bigint | boolean | ReactElement<unknown, string> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
                                    <Badge key={index} variant="secondary">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <Button size="lg" asChild>
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Live Demo
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Github className="w-4 h-4 mr-2" />
                                        View Code
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <div className="relative aspect-video rounded-lg overflow-hidden">
                            <Image
                                fill
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover border-2"
                            />
                        </div>
                    </div>

                    {/* Project Gallery */}
                    <Card className="mb-12">
                        <CardHeader>
                            <CardTitle>Project Gallery</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {project.images.map((image, index) => (
                                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                                        <Image
                                            fill
                                            src={image}
                                            alt={`${project.name} screenshot ${index}`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer border-2"
                                        />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Features and Challenges */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    Key Features
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        {/* Tech Stack Details */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Technology Stack</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div>
                                        <h4 className="text-sm mb-2 text-muted-foreground">Frontend</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.filter((tech: string) =>
                                                ['React', 'Vue.js', 'TypeScript', 'CSS Grid', 'Tailwind CSS'].includes(tech)
                                            ).map((tech, index) => (
                                                <Badge key={index} variant="outline" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm mb-2 text-muted-foreground">Backend</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.filter((tech: string) =>
                                                ['Node.js', 'Firebase', 'PostgreSQL'].includes(tech)
                                            ).map((tech, index) => (
                                                <Badge key={index} variant="outline" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm mb-2 text-muted-foreground">Tools & APIs</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.filter((tech: string) =>
                                                ['Chart.js', 'API Integration', 'Vuex', 'PWA', 'Geolocation API', 'Web Push API'].includes(tech)
                                            ).map((tech, index) => (
                                                <Badge key={index} variant="outline" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}