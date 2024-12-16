'use client'

import Link from 'next/link'

interface CategoryTagProps {
  text: string
  active?: boolean
  href: string
}

export default function CategoryTag({ text, active = false, href }: CategoryTagProps) {
  return (
    <Link
      href={href}
      className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors
        ${active 
          ? 'bg-primary text-white' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
    >
      {text}
    </Link>
  )
} 