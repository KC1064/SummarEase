import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight, SparklesIcon } from 'lucide-react'
import { Badge } from '../ui/badge'

const HeroSection = () => {
  return (
    <section className=" flex flex-col justify-center items-center h-[70vh] px-4 text-center">
      <Badge className='border border-red-400 mb-4' variant={"outline"}>
        <div className='flex px-2 py-1 gap-2'>
          <SparklesIcon size={16} className="text-rose-500 animate-pulse" />
          <span className='text-rose-400 text-[12px] font-bold'> AI-Powered</span>
        </div>
      </Badge>
      <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
        Turn PDFs into Engaging Slide Reels
      </h1>

      <h2 className="max-w-lg tracking-tight leading-tight text-sm sm:text-base md:text-lg text-gray-600 mt-4">
        AI-powered summaries that transform long documents into concise, visually captivating slides perfect for quick understanding and presentations.
      </h2>

      <div className="relative mt-4 p-[2px]  rounded-full bg-gradient-to-r from-green-500 via-yellow-400 to-red-400 animate-border">
        <Button variant={"link"} className="relative rounded-full px-10 py-1 bg-white text-black font-medium flex items-center gap-2 group transition-all duration-300">
          <span className='font-semibold'>
            Try ReelRead
          </span>
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </Button>
      </div>
    </section>
  )
}

export default HeroSection
