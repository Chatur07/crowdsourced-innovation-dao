import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    // Extract form data
    const title = formData.get("title") as string
    const category = formData.get("category") as string
    const shortDescription = formData.get("shortDescription") as string
    const fundingGoal = Number(formData.get("fundingGoal"))

    // Validate required fields
    if (!title || !category || !shortDescription || !fundingGoal) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, this would save to a database
    // This is just a mock response
    return NextResponse.json(
      {
        success: true,
        project: {
          id: `proj-${Date.now()}`,
          title,
          category,
          description: shortDescription,
          fundingGoal,
          createdAt: new Date().toISOString(),
        },
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit project" }, { status: 500 })
  }
}

