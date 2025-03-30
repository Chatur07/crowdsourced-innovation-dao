import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitProject } from "@/lib/actions"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SubmitProjectPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="inline-flex items-center text-purple-700 hover:text-purple-900 mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Home
      </Link>

      <div className="bg-white border rounded-lg p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Submit Your Project</h1>
        <p className="text-gray-600 mb-8">Share your innovative idea with our community and start gathering support.</p>

        <form action={submitProject}>
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                Project Title
              </label>
              <Input id="title" name="title" placeholder="Enter a clear, descriptive title" required />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium mb-1">
                Category
              </label>
              <Select name="category" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="art">Art & Culture</SelectItem>
                  <SelectItem value="community">Community</SelectItem>
                  <SelectItem value="defi">DeFi</SelectItem>
                  <SelectItem value="gaming">Gaming</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="shortDescription" className="block text-sm font-medium mb-1">
                Short Description
              </label>
              <Textarea
                id="shortDescription"
                name="shortDescription"
                placeholder="Provide a brief summary of your project (max 200 characters)"
                maxLength={200}
                rows={2}
                required
              />
            </div>

            <div>
              <label htmlFor="longDescription" className="block text-sm font-medium mb-1">
                Detailed Description
              </label>
              <Textarea
                id="longDescription"
                name="longDescription"
                placeholder="Explain your project in detail, including goals, impact, and implementation plan"
                rows={6}
                required
              />
            </div>

            <div>
              <label htmlFor="fundingGoal" className="block text-sm font-medium mb-1">
                Funding Goal (INOV tokens)
              </label>
              <Input
                id="fundingGoal"
                name="fundingGoal"
                type="number"
                min="100"
                placeholder="Minimum 100 INOV"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Set a realistic goal based on your project needs. Projects are funded only if they reach their goal.
              </p>
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-medium mb-1">
                Campaign Duration (days)
              </label>
              <Select name="duration" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select campaign duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 days</SelectItem>
                  <SelectItem value="30">30 days</SelectItem>
                  <SelectItem value="45">45 days</SelectItem>
                  <SelectItem value="60">60 days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium mb-1">
                Project Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <div className="space-y-2">
                  <div className="text-gray-600">Drag and drop an image, or click to browse</div>
                  <div className="text-xs text-gray-500">Recommended: 1200 x 675px (16:9 ratio), PNG or JPG</div>
                  <Button type="button" variant="outline" size="sm">
                    Browse Files
                  </Button>
                  <input id="image" name="image" type="file" accept="image/*" className="hidden" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h3 className="font-bold mb-4">Team Information</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="teamName" className="block text-sm font-medium mb-1">
                    Team Lead Name
                  </label>
                  <Input id="teamName" name="teamName" placeholder="Your name or team lead's name" required />
                </div>

                <div>
                  <label htmlFor="teamEmail" className="block text-sm font-medium mb-1">
                    Contact Email
                  </label>
                  <Input id="teamEmail" name="teamEmail" type="email" placeholder="email@example.com" required />
                </div>

                <div>
                  <label htmlFor="teamBio" className="block text-sm font-medium mb-1">
                    Team Bio
                  </label>
                  <Textarea
                    id="teamBio"
                    name="teamBio"
                    placeholder="Tell us about your team, experience, and why you're the right people for this project"
                    rows={3}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button type="submit" className="w-full">
                Submit Project for Review
              </Button>
              <p className="text-xs text-gray-500 text-center mt-3">
                By submitting, you agree to our{" "}
                <Link href="/terms" className="text-purple-700 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/guidelines" className="text-purple-700 hover:underline">
                  Project Guidelines
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

