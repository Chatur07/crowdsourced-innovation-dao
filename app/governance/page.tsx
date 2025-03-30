import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Vote, Users, FileText, Clock } from "lucide-react"
import Link from "next/link"

export default function GovernancePage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Governance</h1>
        <p className="text-gray-600">
          Participate in shaping the future of our DAO through transparent and decentralized decision-making.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Vote className="h-5 w-5 mr-2 text-purple-600" />
              Active Proposals
            </CardTitle>
            <CardDescription>Vote on current proposals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href="/governance/proposals">View All Proposals</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-indigo-600" />
              Your Voting Power
            </CardTitle>
            <CardDescription>Based on token holdings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,250</div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href="/governance/voting-power">Increase Voting Power</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              Create Proposal
            </CardTitle>
            <CardDescription>Submit new ideas for voting</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600">Requires 500 INOV tokens to create a proposal</div>
          </CardContent>
          <CardFooter>
            <Button asChild size="sm" className="w-full">
              <Link href="/governance/create">Create New Proposal</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="active" className="mb-12">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="active">Active Proposals</TabsTrigger>
          <TabsTrigger value="passed">Passed Proposals</TabsTrigger>
          <TabsTrigger value="rejected">Rejected Proposals</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          {activeProposals.map((proposal) => (
            <ProposalCard key={proposal.id} proposal={proposal} status="active" />
          ))}
        </TabsContent>

        <TabsContent value="passed" className="space-y-6">
          {passedProposals.map((proposal) => (
            <ProposalCard key={proposal.id} proposal={proposal} status="passed" />
          ))}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-6">
          {rejectedProposals.map((proposal) => (
            <ProposalCard key={proposal.id} proposal={proposal} status="rejected" />
          ))}
        </TabsContent>
      </Tabs>

      <div className="bg-gray-50 rounded-lg p-6 mb-12">
        <h2 className="text-xl font-bold mb-4">Governance Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium mb-3">How Governance Works</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                  1
                </span>
                <span>Proposals are submitted by community members with at least 500 INOV tokens</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                  2
                </span>
                <span>Discussion period lasts for 3 days to refine the proposal</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                  3
                </span>
                <span>Voting period lasts for 5 days with one token equaling one vote</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                  4
                </span>
                <span>Proposals require a 60% majority and 10% quorum to pass</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">
                  5
                </span>
                <span>Passed proposals are implemented by the core team or community</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Governance Statistics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Participation Rate</span>
                  <span className="font-medium">42%</span>
                </div>
                <Progress value={42} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Proposal Success Rate</span>
                  <span className="font-medium">68%</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Token Distribution</span>
                  <span className="font-medium">Fair</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="pt-2">
                <Button asChild variant="outline" size="sm">
                  <Link href="/governance/stats">View Detailed Statistics</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Ready to participate?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join our governance process to help shape the future of InnovationDAO. Your voice matters in our decentralized
          community.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/governance/proposals">Browse Proposals</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/governance/guide">Governance Guide</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

interface Proposal {
  id: string
  title: string
  description: string
  proposer: string
  votesFor: number
  votesAgainst: number
  votesTotal: number
  timeRemaining?: string
  dateEnded?: string
}

interface ProposalCardProps {
  proposal: Proposal
  status: "active" | "passed" | "rejected"
}

function ProposalCard({ proposal, status }: ProposalCardProps) {
  const percentFor = Math.round((proposal.votesFor / proposal.votesTotal) * 100) || 0
  const percentAgainst = Math.round((proposal.votesAgainst / proposal.votesTotal) * 100) || 0

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-1">{proposal.title}</CardTitle>
            <CardDescription>Proposed by {proposal.proposer}</CardDescription>
          </div>
          {status === "active" && (
            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {proposal.timeRemaining} left
            </div>
          )}
          {status === "passed" && (
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Passed</div>
          )}
          {status === "rejected" && (
            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">Rejected</div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600">{proposal.description}</p>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="flex items-center text-green-600">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                For ({percentFor}%)
              </span>
              <span>{proposal.votesFor.toLocaleString()} votes</span>
            </div>
            <Progress value={percentFor} className="h-2 bg-gray-100" indicatorClassName="bg-green-500" />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="flex items-center text-red-600">
                <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                Against ({percentAgainst}%)
              </span>
              <span>{proposal.votesAgainst.toLocaleString()} votes</span>
            </div>
            <Progress value={percentAgainst} className="h-2 bg-gray-100" indicatorClassName="bg-red-500" />
          </div>

          <div className="text-sm text-gray-500 pt-1">
            Total votes: {proposal.votesTotal.toLocaleString()}
            {status !== "active" && proposal.dateEnded && <span className="ml-4">Ended on {proposal.dateEnded}</span>}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-between">
          <Button asChild variant="outline" size="sm">
            <Link href={`/governance/proposals/${proposal.id}`}>View Details</Link>
          </Button>
          {status === "active" && (
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:text-green-800"
              >
                Vote For
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-red-50 text-red-700 border-red-200 hover:bg-red-100 hover:text-red-800"
              >
                Vote Against
              </Button>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

// Sample data
const activeProposals: Proposal[] = [
  {
    id: "prop-1",
    title: "Increase Funding for Community Projects",
    description:
      "Proposal to allocate an additional 5% of the treasury to community-driven initiatives focused on education and outreach.",
    proposer: "0x1a2b...3c4d",
    votesFor: 125000,
    votesAgainst: 45000,
    votesTotal: 170000,
    timeRemaining: "2 days",
  },
  {
    id: "prop-2",
    title: "Implement Quadratic Voting for Project Selection",
    description:
      "Change the voting mechanism for project funding to use quadratic voting to better represent community preferences.",
    proposer: "0x5e6f...7g8h",
    votesFor: 98000,
    votesAgainst: 102000,
    votesTotal: 200000,
    timeRemaining: "4 days",
  },
]

const passedProposals: Proposal[] = [
  {
    id: "prop-3",
    title: "Reduce Proposal Submission Threshold",
    description:
      "Lower the token requirement for submitting proposals from 1000 INOV to 500 INOV to increase participation.",
    proposer: "0x9i0j...1k2l",
    votesFor: 230000,
    votesAgainst: 70000,
    votesTotal: 300000,
    dateEnded: "Mar 15, 2024",
  },
  {
    id: "prop-4",
    title: "Establish Grants Committee",
    description:
      "Create a specialized committee to review and approve smaller grants without requiring a full DAO vote.",
    proposer: "0x3m4n...5o6p",
    votesFor: 185000,
    votesAgainst: 65000,
    votesTotal: 250000,
    dateEnded: "Feb 28, 2024",
  },
]

const rejectedProposals: Proposal[] = [
  {
    id: "prop-5",
    title: "Increase Token Emission Rate",
    description:
      "Proposal to increase the rate of new token emissions by 10% to fund additional development initiatives.",
    proposer: "0x7q8r...9s0t",
    votesFor: 110000,
    votesAgainst: 190000,
    votesTotal: 300000,
    dateEnded: "Mar 5, 2024",
  },
]

