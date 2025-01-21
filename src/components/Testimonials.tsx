import { Avatar, Card, CardHeader, CardContent, Typography } from "@mui/material"


const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Innovators Inc.",
    testimonial: "Analyzen's insights have been instrumental in our growth strategy. Their team's expertise is unmatched.",
    avatar: "/avatar1.png",
  },
  {
    name: "Michael Chen",
    company: "Global Solutions Co.",
    testimonial: "The level of detail in their analytics has transformed our decision-making process. Highly recommended!",
    avatar: "/avatar2.png",
  },
]

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar alt={testimonial.name} src={testimonial.avatar}>
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </Avatar>
                <div>
                  <Typography variant="h6">{testimonial.name}</Typography>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">"{testimonial.testimonial}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

