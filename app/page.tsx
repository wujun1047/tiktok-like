import { Search, Upload, Bell } from 'lucide-react'
import VideoCard from '@/components/VideoCard'
import CategoryTag from '@/components/CategoryTag'
import { searchVideos } from '@/lib/pixabay'
import { Video } from '@/types/video'
import { PageProps } from '@/types/page'


export default async function HomePage({ searchParams }: PageProps) {
  const categories = [
    "推荐", "舞蹈", "音乐", "游戏", "美食", "旅行", "动漫", "宠物", "体育"
  ]

  let currentCategory = "推荐"
  if (searchParams instanceof Promise) {
    const params = await searchParams
    currentCategory = params?.category || "推荐"
  }
  console.log('HomePage currentCategory:', currentCategory)
  const videos = await searchVideos(currentCategory === "推荐" ? "" : currentCategory)
  console.log('HomePage videos:', videos)
  return (
    <>
      {/* 顶部导航栏 */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 flex items-center">
              <div className="flex-1 flex items-center">
                <div className="max-w-lg w-full lg:max-w-xs">
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
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 rounded-lg hover:bg-gray-100"
                aria-label="上传视频"
              >
                <Upload className="h-6 w-6" />
              </button>
              <button 
                className="p-2 rounded-lg hover:bg-gray-100"
                aria-label="消息通知"
              >
                <Bell className="h-6 w-6" />
              </button>
              <button className="bg-primary text-white px-4 py-2 rounded-lg">
                登录
              </button>
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
                href={`/?category=${encodeURIComponent(category)}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 视频网格 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video: Video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              coverUrl={video.coverUrl}
              videoUrl={video.videoUrl}
              likes={video.likes}
              comments={video.comments}
            />
          ))}
        </div>
      </div>
    </>
  )
}
