import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Users } from "lucide-react"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { id, title, description, category, fundingGoal, fundingRaised, backers, daysLeft, image } = project

  const percentFunded = Math.min(Math.round((fundingRaised / fundingGoal) * 100), 100)

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg?height=200&width=400"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-3 right-3 bg-purple-600">{category}</Badge>
      </div>

      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold line-clamp-1">{title}</h3>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">{percentFunded}% Funded</span>
            <span>
              {fundingRaised.toLocaleString()} / {fundingGoal.toLocaleString()} INOV
            </span>
          </div>
          <Progress value={percentFunded} className="h-2" />
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{backers} Backers</span>
          </div>
          <div>{daysLeft} Days Left</div>
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/projects/${id}`}>
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

