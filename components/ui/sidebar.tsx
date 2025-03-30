"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface SidebarContextProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarContext = React.createContext<SidebarContextProps>({
  open: false,
  setOpen: () => {},
})

export function SidebarProvider({
  children,
  defaultOpen = false,
}: {
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = React.useState(defaultOpen)
  const isMobile = useMobile()

  React.useEffect(() => {
    if (!isMobile && !open) {
      setOpen(true)
    }
    if (isMobile && open) {
      setOpen(false)
    }
  }, [isMobile, open])

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] h-screen">{children}</div>
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

export function SidebarTrigger({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
  const { open, setOpen } = useSidebar()

  return (
    <button
      onClick={() => setOpen(!open)}
      className={cn("h-9 w-9 flex items-center justify-center", className)}
      {...props}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
      >
        <path
          d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  )
}

export function Sidebar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open } = useSidebar()

  return (
    <div
      data-state={open ? "open" : "closed"}
      className={cn(
        "fixed inset-y-0 left-0 z-20 flex w-[280px] flex-col border-r bg-background data-[state=closed]:hidden md:data-[state=closed]:block",
        className,
      )}
      {...props}
    />
  )
}

export function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-1 flex-col overflow-hidden", className)} {...props} />
}

export function SidebarHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("h-14 flex items-center border-b px-4", className)} {...props} />
}

export function SidebarFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("h-14 flex items-center border-t px-4", className)} {...props} />
}

export function SidebarGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("py-2", className)} {...props} />
}

export function SidebarGroupLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-4 py-1 text-xs font-medium text-muted-foreground", className)} {...props} />
}

export function SidebarGroupContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pb-1", className)} {...props} />
}

export function SidebarMenu({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid", className)} {...props} />
}

export function SidebarMenuItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid", className)} {...props} />
}

export function SidebarMenuButton({
  className,
  isActive = false,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean
}) {
  return (
    <button
      data-active={isActive}
      className={cn(
        "flex items-center gap-2 rounded-md px-4 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted data-[active=true]:bg-muted data-[active=true]:text-foreground",
        className,
      )}
      {...props}
    />
  )
}

export function SidebarMenuLink({
  className,
  isActive = false,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  isActive?: boolean
}) {
  return (
    <a
      data-active={isActive}
      className={cn(
        "flex items-center gap-2 rounded-md px-4 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted data-[active=true]:bg-muted data-[active=true]:text-foreground",
        className,
      )}
      {...props}
    />
  )
}

export function SidebarMenuSub({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("ml-6 grid", className)} {...props} />
}

export function SidebarMenuBadge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "ml-auto flex h-6 items-center justify-center rounded-md bg-muted px-1.5 text-xs font-medium",
        className,
      )}
      {...props}
    />
  )
}

export function SidebarRail({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background md:flex", className)}
      {...props}
    />
  )
}

export function SidebarInset({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open } = useSidebar()

  return (
    <div
      data-state={open ? "open" : "closed"}
      className={cn("flex flex-1 flex-col md:data-[state=open]:ml-[280px]", className)}
      {...props}
    />
  )
}

