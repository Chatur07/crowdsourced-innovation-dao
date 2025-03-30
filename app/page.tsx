import Link from "next/link"
import { ArrowRight, Lightbulb, Vote, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import HowItWorks from "@/components/how-it-works"
import { getProjects } from "@/lib/data"

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">Crowdsourced Innovation DAO</h1>
              <p className="text-xl opacity-90">
                A decentralized autonomous organization empowering creators and backers to shape the future of tech,
                art, and community projects.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-purple-800 hover:bg-gray-100">
                  <Link href="/projects">
                    Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/submit">Submit Idea</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Collaborative innovation illustration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Join Our DAO?</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-6">
                <Lightbulb className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fund Ideas</h3>
              <p className="text-gray-600">
                Back innovative projects and ideas that align with your vision for the future.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-fit mb-6">
                <Vote className="h-6 w-6 text-indigo-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vote on Development</h3>
              <p className="text-gray-600">
                Have a direct say in project direction and important decisions through governance tokens.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Coins className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">Share in Success</h3>
              <p className="text-gray-600">
                Receive rewards and benefits when projects you've backed succeed and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <Button asChild variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-purple-700 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Movement</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Where innovation is built by the crowd, for the crowd. Become part of a community that's shaping the future
            together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-purple-800 hover:bg-gray-100">
              <Link href="/register">
                Become a Member <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/learn-more">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

