import { getProjectById } from "@/lib/data"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Calendar, Clock, MessageSquare, Share2, Heart, ChevronLeft } from "lucide-react"
import Link from "next/link"
import BackProjectForm from "@/components/back-project-form"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectById(params.id)

  if (!project) {
    notFound()
  }

  const percentFunded = Math.min(Math.round((project.fundingRaised / project.fundingGoal) * 100), 100)

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <Link href="/projects" className="inline-flex items-center text-purple-700 hover:text-purple-900 mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <Badge className="bg-purple-600">{project.category}</Badge>
              <span className="text-gray-500 text-sm">
                <Calendar className="inline h-4 w-4 mr-1" />
                Created {new Date(project.createdAt).toLocaleDateString()}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>

            <p className="text-gray-600 mb-6">{project.description}</p>

            <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
              <img
                src={project.image || "/placeholder.svg?height=400&width=800"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="updates">Updates</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Project Overview</h3>
                <p className="text-gray-600">
                  {project.longDescription ||
                    "This innovative project aims to revolutionize how we interact with decentralized technologies. By combining cutting-edge blockchain solutions with user-friendly interfaces, we're creating a platform that empowers creators and communities alike."}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Goals</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Build a sustainable platform for community-driven innovation</li>
                  <li>Create fair and transparent governance mechanisms</li>
                  <li>Develop a token economy that rewards all participants</li>
                  <li>Launch the first community-selected projects by Q3</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Team</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.team?.map((member, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src={member.avatar || "/placeholder.svg?height=48&width=48"}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{member.name}</h4>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </div>
                    </div>
                  )) || (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                          <img
                            src="/placeholder.svg?height=48&width=48"
                            alt="Team Member"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">Alex Rivera</h4>
                          <p className="text-sm text-gray-500">Project Lead</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                          <img
                            src="/placeholder.svg?height=48&width=48"
                            alt="Team Member"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">Jamie Chen</h4>
                          <p className="text-sm text-gray-500">Tech Lead</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="updates" className="space-y-6">
              <div className="space-y-6">
                <div className="border-b pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Milestone 1 Completed!</h3>
                    <span className="text-sm text-gray-500">2 weeks ago</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We're excited to announce that we've completed our first milestone ahead of schedule. The core smart
                    contracts have been developed and audited, and we're now moving on to the frontend development.
                  </p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4 mr-1" />
                      Like
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Comment
                    </Button>
                  </div>
                </div>

                <div className="border-b pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Project Launch Announcement</h3>
                    <span className="text-sm text-gray-500">1 month ago</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Today marks the official launch of our project on the InnovationDAO platform. We're thrilled to have
                    you all on this journey with us as we build something truly revolutionary.
                  </p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4 mr-1" />
                      Like
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Comment
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="comments" className="space-y-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Community Discussion</h3>
                <div className="border rounded-lg p-4">
                  <textarea
                    className="w-full border rounded-md p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Share your thoughts on this project..."
                    rows={3}
                  ></textarea>
                  <div className="flex justify-end">
                    <Button>Post Comment</Button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-b pb-6">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">Taylor Kim</h4>
                        <span className="text-sm text-gray-500">3 days ago</span>
                      </div>
                      <p className="text-gray-600 mb-3">
                        This is exactly the kind of project I've been waiting for! The focus on community governance is
                        what sets this apart from other platforms.
                      </p>
                      <div className="flex items-center gap-3 text-sm">
                        <button className="text-gray-500 hover:text-purple-700">Like</button>
                        <button className="text-gray-500 hover:text-purple-700">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b pb-6">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">Jordan Lee</h4>
                        <span className="text-sm text-gray-500">1 week ago</span>
                      </div>
                      <p className="text-gray-600 mb-3">
                        I have a few questions about the token distribution. Will there be a vesting period for team
                        tokens? And what percentage is allocated to the community treasury?
                      </p>
                      <div className="flex items-center gap-3 text-sm">
                        <button className="text-gray-500 hover:text-purple-700">Like</button>
                        <button className="text-gray-500 hover:text-purple-700">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{percentFunded}% Funded</span>
                  <span>
                    {project.fundingRaised.toLocaleString()} / {project.fundingGoal.toLocaleString()} INOV
                  </span>
                </div>
                <Progress value={percentFunded} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="h-4 w-4 text-purple-700 mr-1" />
                    <span className="font-bold">{project.backers}</span>
                  </div>
                  <p className="text-xs text-gray-500">Backers</p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="h-4 w-4 text-purple-700 mr-1" />
                    <span className="font-bold">{project.daysLeft}</span>
                  </div>
                  <p className="text-xs text-gray-500">Days Left</p>
                </div>
              </div>
            </div>

            <BackProjectForm projectId={project.id} />

            <div className="flex justify-between mt-6 pt-4 border-t">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-1" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold mb-4">Rewards</h3>

            <div className="space-y-4">
              <div className="border rounded-lg p-4 hover:border-purple-300 transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Early Supporter</h4>
                  <span className="font-bold">50 INOV</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Get early access to the platform and a special badge on your profile.
                </p>
                <div className="text-xs text-gray-500">Limited (143/200 left)</div>
              </div>

              <div className="border rounded-lg p-4 hover:border-purple-300 transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Premium Backer</h4>
                  <span className="font-bold">200 INOV</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  All Early Supporter benefits plus exclusive NFT and voting power boost.
                </p>
                <div className="text-xs text-gray-500">Limited (78/100 left)</div>
              </div>

              <div className="border rounded-lg p-4 hover:border-purple-300 transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Founding Member</h4>
                  <span className="font-bold">1000 INOV</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  All Premium benefits plus direct access to the team, name in credits, and governance committee
                  invitation.
                </p>
                <div className="text-xs text-gray-500">Limited (12/20 left)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

