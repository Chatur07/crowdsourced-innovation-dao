export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  category: string
  fundingGoal: number
  fundingRaised: number
  backers: number
  daysLeft: number
  createdAt: string
  image?: string
  team?: TeamMember[]
}

export interface TeamMember {
  name: string
  role: string
  avatar?: string
}

