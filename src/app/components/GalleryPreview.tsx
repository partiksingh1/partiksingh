"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function GalleryPreview() {
  const navigate = useRouter()

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Through My Eyes</h2>
            <p className="text-lg text-muted-foreground mb-8">
              See the world as I do, through every click.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="p9.jpeg"
              alt="Photo by Drew Beamer"
              className="h-full rounded-lg object-cover"
            />
            <img
              src="p2.jpeg"
              alt="Photo by Drew Beamer"
              className=" rounded-lg object-cover"
            />
            <img
              src="p11.jpeg"
              alt="Photo by Drew Beamer"
              className="rounded-lg object-cover"
            />
          </div>

          <div className="text-center mt-10">
            <Button size="lg" onClick={() => navigate.replace("gallery")}>
              View All
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}