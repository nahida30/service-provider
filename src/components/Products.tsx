
import { Card, CardContent, CardHeader } from "@mui/material"
import Image from "next/image"

const products = [
  {
    title: "Digital Platform",
    description: "Enterprise-grade solutions for digital transformation",
    image: "/placeholder.svg"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time insights and data visualization",
    image: "/placeholder.svg"
  },
  {
    title: "Social Media Suite",
    description: "Comprehensive social media management tools",
    image: "/placeholder.svg"
  }
]

export default function Products() {
  return (
    <section id="products" className="relative py-20 aurora-bg">
      <div className="aurora"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Innovative solutions designed to transform your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="service-card text-white overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                {/* <CardTitle>{product.title}</CardTitle> */}
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

