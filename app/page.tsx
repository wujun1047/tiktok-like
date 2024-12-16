'use client';

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Button 
        onClick={() => {
          alert('点击了按钮！')
        }}
      >
        点击我
      </Button>
    </div>
  )
}
