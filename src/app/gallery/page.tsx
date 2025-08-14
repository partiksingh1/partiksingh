"use client"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    return (
        <section id="gallery" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <Button
                    variant="ghost"
                    onClick={() => router.push('/')}
                    className="mb-8 hover:bg-muted"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                </Button>
                <div className="text-center mb-12">
                    <h2 className="text-3xl mb-4">Gallery of Shots</h2>
                    <p className="text-muted-foreground text-2xl italic">Exploring the world, one photo at a time.</p>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Image Cards */}
                    {[
                        { src: "/p1.jpeg", alt: "Photo 1 by Drew Beamer" },
                        { src: "/p3.jpeg", alt: "Photo 2 by Drew Beamer" },
                        { src: "/p5.jpeg", alt: "Photo 5 by Drew Beamer" },
                        { src: "/p6.jpeg", alt: "Photo 6 by Drew Beamer" },
                        { src: "/p2.jpeg", alt: "Photo 3 by Drew Beamer" },
                        { src: "/p4.jpeg", alt: "Photo 4 by Drew Beamer" },
                    ].map((image, index) => (
                        <div key={index} className="relative w-full h-auto">
                            {/* Use Image component with natural width/height */}
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="rounded-lg object-cover"
                                width={500} // Set the width of the image
                                height={300} // You can dynamically get the original height for each image if necessary
                                objectFit="contain" // Maintain aspect ratio without distortion
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
