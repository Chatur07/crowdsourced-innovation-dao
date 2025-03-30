import { CheckCircle, Lightbulb, Users, Vote, Award } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Lightbulb className="h-8 w-8 text-purple-600" />,
      title: "Submit Your Idea",
      description: "Share your innovative concept with our community and explain how it can make an impact.",
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Gather Support",
      description: "Build a community of backers who believe in your vision and want to help bring it to life.",
    },
    {
      icon: <Vote className="h-8 w-8 text-blue-600" />,
      title: "Community Voting",
      description: "DAO members vote on which projects to fund based on potential impact and feasibility.",
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Receive Funding",
      description: "Successful projects receive funding in stages as they hit predetermined milestones.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our DAO makes it simple to bring your ideas to life through community support and decentralized governance.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>

          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:order-first" : "md:order-last"}`}>
                  <div
                    className={`bg-white p-6 rounded-lg shadow-md inline-block max-w-md ${index % 2 === 0 ? "md:ml-auto" : ""}`}
                  >
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center bg-white rounded-full p-4 border-2 border-purple-100 z-20">
                  {step.icon}
                </div>

                <div className="md:w-1/2 md:hidden"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full">
            <CheckCircle className="h-5 w-5 mr-2" />
            <span className="font-medium">Transparent & Secure</span>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            All voting and funding distribution is handled through smart contracts on the blockchain, ensuring complete
            transparency and security.
          </p>
        </div>
      </div>
    </section>
  )
}

