import { ReactNode } from 'react'

interface SidebarItemProps {
  icon: ReactNode
  text: string
  active?: boolean
}

export default function SidebarItem({ icon, text, active = false }: SidebarItemProps) {
  return (
    <button
      className={`flex items-center space-x-3 w-full p-2 rounded-lg transition-colors
        ${active ? 'bg-primary text-white' : 'hover:bg-gray-100 text-gray-700'}`}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </button>
  )
} 