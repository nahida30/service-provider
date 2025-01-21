import { Card, CardContent, CardHeader } from "@mui/material"
import Image from "next/image"


const team = [
  {
    name: "John Doe",
    position: "CEO",
    image: "/placeholder.svg"
  },
  {
    name: "Jane Smith",
    position: "Creative Director",
    image: "/placeholder.svg"
  },
  {
    name: "Mike Johnson",
    position: "Technical Lead",
    image: "/placeholder.svg"
  },
  {
    name: "Sarah Williams",
    position: "Marketing Director",
    image: "/placeholder.svg"
  }
]

export default function Team() {
  return (
    <section id="team" className="relative py-20 aurora-bg">
      <div className="aurora"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet our talented team of professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="service-card text-white">
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                {/* <CardTitle>{member.name}</CardTitle> */}
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{member.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

