"use client"

import { Badge } from "@/components/ui/badge"

export function About() {

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>

        </div>

        <div className="lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Hey there! 👋  I&apos;m a Grade 11 IB Student with a passion for backend web development especially on web platforms, aiming to use technology to improve our day-to-day lives.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              I specialize in backend web development utilizing TypeScript, Node.js, Flask, PostgreSQL and GraphQL, though I dabble in frontend development with Next.js and TailwindCSS
            </p>

            <div className="flex flex-wrap gap-2">
              {["TypeScript", "Node.js", "Flask", "PostgreSQL", "GraphQL", "Express.js/Fastify/Hono", "Docker", "Git", "Bash/Zsh", "Next.js", "TailwindCSS", "Framer motion"].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
