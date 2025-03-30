"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// Mock function to back a project
export async function backProject(projectId: string, amount: number) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real application, this would interact with a database and blockchain
  console.log(`Backing project ${projectId} with ${amount} INOV tokens`)

  // Revalidate the project page to show updated funding
  revalidatePath(`/projects/${projectId}`)

  return { success: true }
}

// Mock function to submit a new project
export async function submitProject(formData: FormData) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Extract form data
  const title = formData.get("title") as string
  const category = formData.get("category") as string
  const shortDescription = formData.get("shortDescription") as string
  const fundingGoal = Number(formData.get("fundingGoal"))

  // In a real application, this would save to a database
  console.log("Project submitted:", {
    title,
    category,
    shortDescription,
    fundingGoal,
  })

  // Redirect to a success page
  redirect("/submit/success")
}

