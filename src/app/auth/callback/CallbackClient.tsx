'use client'

import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export default function CallbackClient() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const token = searchParams.get('token')
    const next = searchParams.get('next') || '/dashboard'

    useEffect(() => {
        if (!token) {
            window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google?redirect=${next}`
        } else {
            fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token }),
            }).then(() => {
                router.push(next)
            })
        }
    }, [token, next, router])

    return (
        <div className="min-h-screen flex flex-col items-center gap-y-12 justify-center bg-[#f8f9fa] text-gray-700">
            <div className="relative w-10 h-10">
                <div className="absolute w-full h-full border-4 border-gray-300 rounded-full"></div>
                <div className="absolute w-full h-full border-4 border-t-[#4285F4] border-r-[#EA4335] border-b-[#FBBC05] border-l-[#34A853] rounded-full animate-spin"></div>
            </div>
            <p className="mt-4 text-base font-medium tracking-wide">Logging you in…</p>
        </div>
    )
}
