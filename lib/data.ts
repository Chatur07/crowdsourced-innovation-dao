import type { Project } from "./types"

// Mock data for projects
const projectsData: Project[] = [
  {
    id: "1",
    title: "Decentralized Creative Commons",
    description: "A platform for artists to share and monetize their work while maintaining ownership through NFTs.",
    category: "Art",
    fundingGoal: 50000,
    fundingRaised: 32500,
    backers: 215,
    daysLeft: 12,
    createdAt: "2023-12-15T12:00:00Z",
    image: "/three.svg?height=200&width=400",
  },
  {
    id: "2",
    title: "Community Solar Grid",
    description: "Funding solar panels for local communities with tokenized ownership and energy credits.",
    category: "Community",
    fundingGoal: 75000,
    fundingRaised: 45000,
    backers: 178,
    daysLeft: 21,
    createdAt: "2024-01-05T09:30:00Z",
    image: "/two.svg?height=200&width=400",
  },
  {
    id: "3",
    title: "DeFi Education Platform",
    description: "Interactive learning platform to make decentralized finance accessible to everyone.",
    category: "DeFi",
    fundingGoal: 30000,
    fundingRaised: 28500,
    backers: 310,
    daysLeft: 5,
    createdAt: "2024-01-20T15:45:00Z",
    image: "/five.svg?height=200&width=400",
  },
  {
    id: "4",
    title: "Blockchain Gaming Collective",
    description: "Collaborative game development with shared assets and revenue distribution.",
    category: "Gaming",
    fundingGoal: 100000,
    fundingRaised: 42000,
    backers: 156,
    daysLeft: 30,
    createdAt: "2024-02-01T10:15:00Z",
    image: "/four.svg?height=200&width=400",
  },
  {
    id: "5",
    title: "Decentralized Science Journal",
    description: "Open access research publication with peer review incentives and reproducibility focus.",
    category: "Tech",
    fundingGoal: 45000,
    fundingRaised: 12000,
    backers: 89,
    daysLeft: 25,
    createdAt: "2024-02-10T14:20:00Z",
    image: "/six.svg?height=200&width=400",
  },
  {
    id: "6",
    title: "Local Food Supply Chain",
    description: "Transparent tracking of local produce from farm to table with fair pricing mechanisms.",
    category: "Community",
    fundingGoal: 35000,
    fundingRaised: 18000,
    backers: 124,
    daysLeft: 18,
    createdAt: "2024-02-15T11:30:00Z",
    image: "/seven.svg?height=200&width=400",
  },
]

// Function to get all projects
export async function getProjects(): Promise<Project[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return projectsData
}

// Function to get a project by ID
export async function getProjectById(id: string): Promise<Project | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return projectsData.find((project) => project.id === id)
}

