'use client'

import { Search } from 'lucide-react'
import VideoCard from '@/components/VideoCard'
import CategoryTag from '@/components/CategoryTag'
import { useState } from 'react'

interface Video {
  id: number
  title: string
  coverUrl: string
  videoUrl: string
  likes: number
  comments: number
}

interface ExploreContentProps {
  searchParams: { category?: string }
  initialVideos: Video[]
}

export default function ExploreContent({ searchParams, initialVideos }: ExploreContentProps) {
  const categories = [
    "推荐", "舞蹈", "音乐", "游戏", "美食", "旅行", "动漫", "宠物", "体育"
  ]
  const currentCategory = searchParams.category || "推荐"
  const [videos] = useState<Video[]>(initialVideos)

  return (
    <>
      {/* 顶部导航栏 */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex-1">
              <div className="max-w-lg">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="搜索视频..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 分类标签栏 */}
      <div className="bg-white border-b sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 py-3 overflow-x-auto">
            {categories.map((category) => (
              <CategoryTag 
                key={category} 
                text={category}
                active={category === currentCategory}
                href={`/explore?category=${encodeURIComponent(category)}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 视频网格 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              coverUrl={video.coverUrl}
              videoUrl={video.videoUrl}
              likes={video.likes.toString()}
              comments={video.comments.toString()}
            />
          ))}
        </div>
      </div>
    </>
  )
} 