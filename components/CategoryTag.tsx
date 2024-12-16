interface CategoryTagProps {
  text: string
  active?: boolean
}

export default function CategoryTag({ text, active = false }: CategoryTagProps) {
  return (
    <button
      className={`px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap
        ${active 
          ? 'bg-primary text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
    >
      {text}
    </button>
  )
} 