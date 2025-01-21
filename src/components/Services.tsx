
import { Card, CardContent, CardHeader } from '@mui/material'
import { Lightbulb, Globe, BarChart, Smartphone, Users, Code, PenTool, Share2 } from 'lucide-react'

const services = [
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description: "Crafting unique brand identities and strategic positioning"
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing solutions and campaigns"
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description: "Advanced analytics and insights for informed decision making"
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Custom mobile applications for iOS and Android platforms"
  },
  {
    icon: Users,
    title: "Social Media",
    description: "Strategic social media management and engagement"
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom website development and optimization"
  },
  {
    icon: PenTool,
    title: "Creative Design",
    description: "Innovative design solutions across all platforms"
  },
  {
    icon: Share2,
    title: "Content Marketing",
    description: "Strategic content creation and distribution"
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 aurora-bg">
      <div className="aurora"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="service-card text-white">
              <CardHeader>
                <service.icon className="h-8 w-8 text-blue-400 mb-4" />
                {/* <CardTitle>{service.title}</CardTitle> */}
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

