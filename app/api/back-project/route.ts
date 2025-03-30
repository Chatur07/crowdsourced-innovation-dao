import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { projectId, amount } = await request.json()

    // Validate input
    if (!projectId || !amount || amount <= 0) {
      return NextResponse.json({ error: "Invalid project ID or amount" }, { status: 400 })
    }

    // In a real app, this would update a database and interact with blockchain
    // This is just a mock response
    return NextResponse.json(
      {
        success: true,
        transaction: {
          id: `tx-${Date.now()}`,
          projectId,
          amount,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Failed to process transaction" }, { status: 500 })
  }
}

