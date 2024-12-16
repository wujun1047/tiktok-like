import Image from 'next/image'
import { Heart, MessageCircle, Play } from 'lucide-react'

interface VideoCardProps {
  title: string
  coverUrl: string
  videoUrl: string
  likes: string
  comments: string
}

export default function VideoCard({ title, coverUrl, videoUrl, likes, comments }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="relative aspect-[9/16] bg-gray-100 group-hover:cursor-pointer">
        <Image
          src={coverUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Play className="w-12 h-12 text-white" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 truncate">{title}</h3>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <div className="flex items-center">
            <Heart className="h-4 w-4 mr-1" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center ml-4">
            <MessageCircle className="h-4 w-4 mr-1" />
            <span>{comments}</span>
          </div>
        </div>
      </div>
    </div>
  )
} 