import { CheckCircle } from 'lucide-react'

const features = [
  "Real-time data processing",
  "Advanced machine learning algorithms",
  "Customizable dashboards",
  "Seamless integration with existing systems",
  "Multi-channel marketing analytics",
  "Predictive modeling",
]

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Features that Set Us Apart
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our platform combines cutting-edge technology with user-friendly interfaces to deliver unparalleled insights and results.
            </p>
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

