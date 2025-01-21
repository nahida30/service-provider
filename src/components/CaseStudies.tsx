import { Button } from '@mui/material'
import Image from 'next/image'


const caseStudies = [
  {
    title: "E-commerce Revenue Boost",
    description: "How we helped an online retailer increase sales by 150% through data-driven strategies.",
    image: "/case-study-1.jpg",
  },
  {
    title: "Financial Services Optimization",
    description: "Streamlining operations and improving customer satisfaction for a leading bank.",
    image: "/case-study-2.jpg",
  },
]

export default function CaseStudies() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={study.image}
                alt={study.title}
                width={400}
                height={300}
                className="rounded-lg object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{study.title}</h3>
              <p className="text-gray-600 text-center mb-4">{study.description}</p>
              <Button>Read More</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

