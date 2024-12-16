'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Search, Users, Radio, Flame, Gamepad2, ShoppingBag } from 'lucide-react';

const navItems = [
  { icon: Home, label: '首页', path: '/' },
  { icon: Search, label: '探索', path: '/explore' },
  { icon: Users, label: '关注', path: '/following' },
  { icon: Radio, label: '直播', path: '/live' },
];

const categories = [
  { icon: Flame, label: '热门', path: '/hot' },
  { icon: Gamepad2, label: '游戏', path: '/gaming' },
  { icon: ShoppingBag, label: '购物', path: '/shopping' },
];

export default function Sidebar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pathname = usePathname();

  const getLinkClassName = (itemPath: string) => {
    const baseClass = "flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg";
    return pathname === itemPath ? `${baseClass} text-primary` : baseClass;
  };

  return (
    <div className="w-[240px] fixed left-0 top-0 bottom-0 bg-white border-r">
      <div className="flex flex-col p-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={getLinkClassName(item.path)}
          >
            <item.icon size={24} />
            <span>{item.label}</span>
          </Link>
        ))}
        
        <div className="mt-4 pt-4 border-t">
          <div className="px-3 text-sm text-gray-500">推荐分类</div>
          {categories.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={getLinkClassName(item.path)}
            >
              <item.icon size={24} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 