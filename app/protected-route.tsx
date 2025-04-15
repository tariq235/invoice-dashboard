"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user")
      if (!user) {
        router.push("/login")
      }
    }
  }, [router])
  return <>{children}</>
}
