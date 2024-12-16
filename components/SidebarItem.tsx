'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarItemProps {
  icon: ReactNode
  text: string
  href: string
}

export default function SidebarItem({ 
  icon, 
  text, 
  href 
}: SidebarItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  
  return (
    <Link
      href={href}
      className={`flex items-center space-x-3 w-full p-2 rounded-lg transition-colors
        ${isActive ? 'bg-primary text-white' : 'hover:bg-gray-100 text-gray-700'}`}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </Link>
  )
} 