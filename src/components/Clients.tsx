import Image from "next/image"

const clients = [
  { name: "Client 1", logo: "/placeholder.svg" },
  { name: "Client 2", logo: "/placeholder.svg" },
  { name: "Client 3", logo: "/placeholder.svg" },
  { name: "Client 4", logo: "/placeholder.svg" },
  { name: "Client 5", logo: "/placeholder.svg" },
  { name: "Client 6", logo: "/placeholder.svg" },
]

export default function Clients() {
  return (
    <section id="clients" className="relative py-20 aurora-bg">
      <div className="aurora"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Clients</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Trusted by leading brands and organizations
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={80}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

