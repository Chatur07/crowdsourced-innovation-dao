import { NextResponse } from "next/server"

// Mock authentication - in a real app, this would use a database and proper auth
export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // This is just a mock - in a real app, you would validate credentials
    if (email && password) {
      // Mock successful login
      return NextResponse.json(
        {
          user: {
            id: "123",
            email,
            name: "Demo User",
          },
          token: "mock-jwt-token",
        },
        { status: 200 },
      )
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}

