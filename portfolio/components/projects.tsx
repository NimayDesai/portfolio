"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import { PinContainer } from "@/components/ui/3d-pin"

export function Projects() {
  const projects = [
    {
      title: "Numina",
      description:
        "Numina instantly turns any topic into a narrated math animation and launches a live AI tutor that knows the material, all in one seamless web app.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Flask", "Next.js", "TypeScript", "Socket.io", "WebRTC", "SQLite"],
      liveUrl: "#",
      githubUrl: "https://github.com/NimayDesai/Numina",
    },
    {
      title: "Nutrimind",
      description:
        "Revolutinize recipe browsing with our AI-powered app that suggests personalized recipes based on your preferences and dietary needs.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Node.js", "GraphQL (Apollo)", "LangChainJS", "PostgreSQL w/ Prisma"],
      liveUrl: "#",
      githubUrl: "https://github.com/NimayDesai/NutriMind",
    },
    {
      title: "Portfolio",
      description: "The website you're currently on!.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn/ui", "Framer motion"],
      liveUrl: "#",
      githubUrl: "https://github.com/NimayDesai/portfolio",
    },
  ]

  return (
    <section id="projects" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {projects.map((project, index) => (
            <PinContainer
              key={index}
              title={project.title}
              href={project.liveUrl}
              className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[24rem] h-[24rem]"
            >
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 rounded-lg" />                
                <div className="absolute top-0 left-0 right-0 bottom-0 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl text-slate-100 mb-4">
                      {project.title}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-300 text-sm leading-relaxed">
                        {project.description}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-center">
                      <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </section>
  )
}
