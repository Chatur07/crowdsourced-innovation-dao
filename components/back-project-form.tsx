"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { backProject } from "@/lib/actions"
import { useToast } from "@/hooks/use-toast"

interface BackProjectFormProps {
  projectId: string
}

export default function BackProjectForm({ projectId }: BackProjectFormProps) {
  const [amount, setAmount] = useState<number>(50)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await backProject(projectId, amount)
      toast({
        title: "Thank you for your support!",
        description: `You've successfully backed this project with ${amount} INOV tokens.`,
      })
      setAmount(50)
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "There was an error processing your contribution. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const presetAmounts = [10, 50, 100, 500]

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium mb-1">
            Contribution Amount (INOV)
          </label>
          <Input
            id="amount"
            type="number"
            min="1"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {presetAmounts.map((preset) => (
            <Button
              key={preset}
              type="button"
              variant="outline"
              size="sm"
              className={`flex-1 min-w-[60px] ${amount === preset ? "bg-purple-50 border-purple-300" : ""}`}
              onClick={() => setAmount(preset)}
            >
              {preset}
            </Button>
          ))}
        </div>

        <Button type="submit" className="w-full" disabled={isLoading || amount <= 0}>
          {isLoading ? "Processing..." : "Back This Project"}
        </Button>
      </div>
    </form>
  )
}

