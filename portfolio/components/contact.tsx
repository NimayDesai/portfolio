"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Create mailto URL with form data
      const subject = encodeURIComponent(formData.subject || "Portfolio Contact")
      const body = encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
      )
      
      const mailtoUrl = `mailto:desainimay08@gmail.com?subject=${subject}&body=${body}`
      
      // Open email client
      window.location.href = mailtoUrl
      
      // Reset form and show success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      })
      setSubmitStatus("success")
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "desainimay08@gmail.com",
      href: "mailto:desainimay08@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (647)-270-3007",
      href: "tel:+16472703007",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Toronto, Canada",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let&apos;s start a conversation</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I&apos;m always interested in hearing about new projects and opportunities. Whether you&apos;re a company looking to
              hire, or you&apos;re a fellow developer wanting to collaborate, I&apos;d love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      name="firstName"
                      value={formData.firstName || ""}
                      onChange={handleInputChange}
                      placeholder="John" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName || ""}
                      onChange={handleInputChange}
                      placeholder="Doe" 
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    value={formData.email || ""}
                    onChange={handleInputChange}
                    placeholder="john@example.com" 
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject"
                    value={formData.subject || ""}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry" 
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message || ""}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..." 
                    className="min-h-[120px]" 
                    required
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="text-green-600 text-sm">
                    Email client opened! Please send the email from your email application.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="text-red-600 text-sm">
                    Something went wrong. Please try again or email me directly at desainimay08@gmail.com
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Opening Email Client..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
