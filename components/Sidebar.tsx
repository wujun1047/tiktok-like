'use client'

import { 
  Home, 
  Compass, 
  Users, 
  Video, 
  Flame,
  Gamepad,
  ShoppingBag 
} from 'lucide-react'
import SidebarItem from '@/components/SidebarItem'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg hidden md:block">
      <div className="p-4 space-y-6">
        <div className="space-y-2">
          <SidebarItem icon={<Home />} text="首页" href="/" />
          <SidebarItem icon={<Compass />} text="探索" href="/explore" />
          <SidebarItem icon={<Users />} text="关注" href="/following" />
          <SidebarItem icon={<Video />} text="直播" href="/live" />
        </div>
        
        <div className="border-t pt-4">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">推荐分类</h3>
          <div className="space-y-2">
            <SidebarItem icon={<Flame />} text="热门" href="/hot" />
            <SidebarItem icon={<Gamepad />} text="游戏" href="/gaming" />
            <SidebarItem icon={<ShoppingBag />} text="购物" href="/shopping" />
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
  )
} 