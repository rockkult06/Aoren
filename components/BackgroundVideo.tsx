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

    const handleTimeUpdate = () => {
      // Video bitmesinden 2 saniye önce sıradaki videoya geç
      if (video.duration && video.currentTime >= video.duration - 2) {
        const nextIndex = (currentVideoIndex + 1) % videos.length
        setCurrentVideoIndex(nextIndex)
      }
    }

    const handleVideoEnd = () => {
      // Fallback: Video bittiyse sıradaki videoya geç
      const nextIndex = (currentVideoIndex + 1) % videos.length
      setCurrentVideoIndex(nextIndex)
    }

    const handleLoadStart = () => {
      console.log(`Video yükleniyor: ${videos[currentVideoIndex]}`)
    }

    const handleCanPlay = () => {
      console.log(`Video oynatılabilir: ${videos[currentVideoIndex]}`)
      video.play().catch((error) => {
        console.error(`Video oynatma hatası: ${videos[currentVideoIndex]}`, error)
      })
    }

    const handleError = () => {
      console.error(`Video yükleme hatası: ${videos[currentVideoIndex]}`)
      // Hata durumunda sonraki videoya geç
      const nextIndex = (currentVideoIndex + 1) % videos.length
      setCurrentVideoIndex(nextIndex)
    }

    // Event listener'ları ekle
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleVideoEnd)
    video.addEventListener('loadstart', handleLoadStart)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('error', handleError)
    
    // Video kaynağını yükle
    video.load()
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleVideoEnd)
      video.removeEventListener('loadstart', handleLoadStart)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
    }
  }, [currentVideoIndex, videos])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="metadata"
        key={currentVideoIndex} // Force re-render on video change
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Tarayıcınız video elementini desteklemiyor.
      </video>
      
      {/* Koyu filtre overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-10"></div>
    </div>
  )
}

export default BackgroundVideo 