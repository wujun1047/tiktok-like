'use client'

import { X } from 'lucide-react'
import { useState } from 'react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title: string
}

export default function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 modal-open">
      <div className="relative bg-white rounded-lg w-full max-w-4xl">
        {/* 标题栏 */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-medium text-lg">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
            aria-label="关闭"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* 视频播放器 */}
        <div className="relative aspect-video bg-black">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center text-white">
              视频加载失败，请稍后重试
            </div>
          )}
          <video
            src={videoUrl}
            className="w-full h-full"
            controls
            autoPlay
            playsInline
            onLoadStart={() => setIsLoading(true)}
            onLoadedData={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false)
              setError(true)
            }}
          >
            你的浏览器不支持视频播放。
          </video>
        </div>
      </div>

      {/* 点击遮罩层关闭 */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={onClose}
      />
    </div>
  )
} 