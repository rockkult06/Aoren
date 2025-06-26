"use client"

import { useState, useEffect, useRef } from "react"

const BackgroundVideo = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [nextVideoIndex, setNextVideoIndex] = useState(1)
  const [showNextVideo, setShowNextVideo] = useState(false)
  
  const currentVideoRef = useRef<HTMLVideoElement>(null)
  const nextVideoRef = useRef<HTMLVideoElement>(null)
  
  const videos = [
    "/1..mp4",
    "/2.mp4", 
    "/3.mp4",
    "/4.mp4"
  ]

  useEffect(() => {
    const currentVideo = currentVideoRef.current
    if (!currentVideo) return

    const handleTimeUpdate = () => {
      const duration = currentVideo.duration
      const currentTime = currentVideo.currentTime
      const remainingTime = duration - currentTime

      // Son 3 saniyede sonraki videoyu başlat
      if (remainingTime <= 3 && !showNextVideo) {
        setShowNextVideo(true)
        const nextVideo = nextVideoRef.current
        if (nextVideo) {
          nextVideo.currentTime = 0
          nextVideo.play().catch(console.error)
        }
      }
    }

    const handleVideoEnd = () => {
      // Mevcut ve sonraki video indekslerini güncelle
      setCurrentVideoIndex(nextVideoIndex)
      setNextVideoIndex((nextVideoIndex + 1) % videos.length)
      setShowNextVideo(false)
    }

    currentVideo.addEventListener('timeupdate', handleTimeUpdate)
    currentVideo.addEventListener('ended', handleVideoEnd)
    
    return () => {
      currentVideo.removeEventListener('timeupdate', handleTimeUpdate)
      currentVideo.removeEventListener('ended', handleVideoEnd)
    }
  }, [currentVideoIndex, nextVideoIndex, showNextVideo])

  useEffect(() => {
    const currentVideo = currentVideoRef.current
    if (currentVideo) {
      currentVideo.load()
      
      // Video yüklendi mi kontrol et
      const handleLoadedData = () => {
        console.log(`Video yüklendi: ${videos[currentVideoIndex]}`)
        currentVideo.play().catch((error) => {
          console.error(`Video oynatma hatası: ${videos[currentVideoIndex]}`, error)
        })
      }

      const handleError = (error: any) => {
        console.error(`Video yükleme hatası: ${videos[currentVideoIndex]}`, error)
      }

      currentVideo.addEventListener('loadeddata', handleLoadedData)
      currentVideo.addEventListener('error', handleError)
      
      return () => {
        currentVideo.removeEventListener('loadeddata', handleLoadedData)
        currentVideo.removeEventListener('error', handleError)
      }
    }
  }, [currentVideoIndex, videos])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      {/* Mevcut Video */}
      <video
        ref={currentVideoRef}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        autoPlay
        muted
        playsInline
        preload="metadata"
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Tarayıcınız video elementini desteklemiyor.
      </video>

      {/* Sonraki Video (Fade-in) */}
      <video
        ref={nextVideoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          showNextVideo ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        playsInline
        preload="metadata"
      >
        <source src={videos[nextVideoIndex]} type="video/mp4" />
        Tarayıcınız video elementini desteklemiyor.
      </video>
      
      {/* Koyu filtre overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-10"></div>
    </div>
  )
}

export default BackgroundVideo 