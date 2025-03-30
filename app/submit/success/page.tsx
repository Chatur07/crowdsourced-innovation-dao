import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function SubmitSuccessPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="bg-white border rounded-lg p-8 shadow-sm text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-3 rounded-full">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4">Project Submitted Successfully!</h1>

        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Thank you for submitting your project to InnovationDAO. Our team will review your submission within 2-3
          business days.
        </p>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg max-w-md mx-auto">
            <h3 className="font-medium mb-2">What happens next?</h3>
            <ol className="text-sm text-gray-600 text-left list-decimal pl-5 space-y-2">
              <li>Our team reviews your project for compliance with guidelines</li>
              <li>You'll receive an email with approval status or feedback</li>
              <li>Once approved, your project goes live for community funding</li>
              <li>Start engaging with potential backers and promoting your idea</li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/projects">Explore Other Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

