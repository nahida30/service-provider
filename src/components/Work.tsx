import { Card, CardContent } from "@mui/material"
import Image from "next/image"


const works = [
  {
    title: "Digital Campaign",
    client: "Major Brand",
    image: "/placeholder.svg"
  },
  {
    title: "App Development",
    client: "Tech Startup",
    image: "/placeholder.svg"
  },
  {
    title: "Brand Strategy",
    client: "Global Corporation",
    image: "/placeholder.svg"
  },
  {
    title: "Social Media",
    client: "Retail Chain",
    image: "/placeholder.svg"
  }
]

export default function Work() {
  return (
    <section id="work" className="relative py-20 aurora-bg">
      <div className="aurora"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Work</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Showcasing our best projects and success stories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work, index) => (
            <Card key={index} className="service-card text-white overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-1">{work.title}</h3>
                <p className="text-gray-300">{work.client}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

