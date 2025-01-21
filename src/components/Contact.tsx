'use client'

import { useState } from 'react'
import { Button, Card, CardContent, CardHeader, Input } from '@mui/material'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="relative py-20 aurora-bg">
      <div className="aurora"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for any inquiries
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="service-card text-white">
              <CardHeader>
                {/* <CardTitle className="flex items-center">
                  <Mail className="mr-2" /> Email
                </CardTitle> */}
              </CardHeader>
              <CardContent>
                <p>info@analyzen.com</p>
              </CardContent>
            </Card>
            
            <Card className="service-card text-white">
              <CardHeader>
                {/* <CardTitle className="flex items-center">
                  <Phone className="mr-2" /> Phone
                </CardTitle> */}
              </CardHeader>
              <CardContent>
                <p>+1 234 567 890</p>
              </CardContent>
            </Card>
            
            <Card className="service-card text-white">
              <CardHeader>
                {/* <CardTitle className="flex items-center">
                  <MapPin className="mr-2" /> Address
                </CardTitle> */}
              </CardHeader>
              <CardContent>
                <p>123 Business Street, Tech City, TC 12345</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="service-card text-white">
            <CardHeader>
              {/* <CardTitle>Send us a message</CardTitle> */}
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border-gray-600"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border-gray-600"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                />
                <textarea
                  placeholder="Your Message"
                  className="bg-transparent border-gray-600"
                  value={formData.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

