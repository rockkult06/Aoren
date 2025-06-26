"use client"

import { useState, useEffect, useRef } from "react"

const BackgroundVideo = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  
  const videos = [
    "/1.mp4",
    "/2.mp4", 
    "/3.mp4",
    "/4.mp4"
  ]

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      setCurrentVideoIndex((prevIndex) => 
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      )
    }

    video.addEventListener('ended', handleVideoEnd)
    
    return () => {
      video.removeEventListener('ended', handleVideoEnd)
    }
  }, [videos.length])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.load()
      video.play().catch(console.error)
    }
  }, [currentVideoIndex])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="metadata"
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Tarayıcınız video elementini desteklemiyor.
      </video>
      
      {/* Koyu filtre overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
    </div>
  )
}

export default BackgroundVideo 