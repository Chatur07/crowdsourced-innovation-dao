import { NextResponse } from "next/server"
import { getProjects } from "@/lib/data"

export async function GET() {
  try {
    const projects = await getProjects()
    return NextResponse.json({ projects }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}

