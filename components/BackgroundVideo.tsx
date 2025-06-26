"use client"

import { useState, useEffect, useRef } from "react"

const BackgroundVideo = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [nextVideoIndex, setNextVideoIndex] = useState(1)
  const videoRef = useRef<HTMLVideoElement>(null)
  const nextVideoRef = useRef<HTMLVideoElement>(null)
  
  const videos = [
    "/1.mp4",
    "/2.mp4", 
    "/3.mp4",
    "/4.mp4"
  ]

  useEffect(() => {
    const video = videoRef.current
    const nextVideo = nextVideoRef.current
    if (!video || !nextVideo) return

    const handleTimeUpdate = () => {
      // Video bitmesinden 1 saniye önce sıradaki videoya geç
      if (video.duration && video.currentTime >= video.duration - 1) {
        // Sonraki videoyu başlat
        nextVideo.currentTime = 0
        nextVideo.play().catch(console.error)
        
        // Geçişi hemen yap
        const nextIndex = (currentVideoIndex + 1) % videos.length
        setCurrentVideoIndex(nextIndex)
        setNextVideoIndex((nextIndex + 1) % videos.length)
      }
    }

    const handleVideoEnd = () => {
      // Fallback: Video bittiyse sıradaki videoya geç
      const nextIndex = (currentVideoIndex + 1) % videos.length
      setCurrentVideoIndex(nextIndex)
      setNextVideoIndex((nextIndex + 1) % videos.length)
    }

    const handleCanPlay = () => {
      video.play().catch(console.error)
    }

    const handleError = () => {
      console.error(`Video yükleme hatası: ${videos[currentVideoIndex]}`)
      // Hata durumunda sonraki videoya geç
      const nextIndex = (currentVideoIndex + 1) % videos.length
      setCurrentVideoIndex(nextIndex)
      setNextVideoIndex((nextIndex + 1) % videos.length)
    }

    // Event listener'ları ekle
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleVideoEnd)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('error', handleError)
    
    // Video kaynağını yükle
    video.load()
    nextVideo.load() // Sonraki videoyu da önceden yükle
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleVideoEnd)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
    }
  }, [currentVideoIndex, nextVideoIndex, videos])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      {/* Current Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        key={`current-${currentVideoIndex}`}
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Tarayıcınız video elementini desteklemiyor.
      </video>
      
      {/* Next Background Video (preloaded) */}
      <video
        ref={nextVideoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
        muted
        playsInline
        preload="auto"
        key={`next-${nextVideoIndex}`}
      >
        <source src={videos[nextVideoIndex]} type="video/mp4" />
      </video>
      
      {/* Koyu filtre overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-10"></div>
    </div>
  )
}

export default BackgroundVideo 