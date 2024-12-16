import { 
  Search, 
  Upload, 
  Bell, 
  Home, 
  Compass, 
  Users, 
  Video, 
  Flame,
  Gamepad,
  ShoppingBag 
} from 'lucide-react'
import VideoCard from '@/components/VideoCard'
import SidebarItem from '@/components/SidebarItem'
import CategoryTag from '@/components/CategoryTag'
import { videos } from '@/lib/data'

export default function HomePage() {
  const categories = [
    "推荐", "舞蹈", "音乐", "游戏", "美食", "旅行", "动漫", "宠物", "体育"
  ]
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* 侧边栏 */}
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <div className="p-4 space-y-6">
          <div className="space-y-2">
            <SidebarItem icon={<Home />} text="首页" active />
            <SidebarItem icon={<Compass />} text="探索" />
            <SidebarItem icon={<Users />} text="关注" />
            <SidebarItem icon={<Video />} text="直播" />
          </div>
          
          <div className="border-t pt-4">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">推荐分类</h3>
            <div className="space-y-2">
              <SidebarItem icon={<Flame />} text="热门" />
              <SidebarItem icon={<Gamepad />} text="游戏" />
              <SidebarItem icon={<ShoppingBag />} text="购物" />
            </div>
          </div>
          
          <div className="border-t pt-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">登录后查看更多精彩内容</p>
              <button className="mt-2 w-full bg-primary text-white py-2 rounded-lg">
                立即登录
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* 主内容区域 */}
      <main className="flex-1 overflow-auto">
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
                <CategoryTag key={category} text={category} />
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
                likes={video.likes}
                comments={video.comments}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
