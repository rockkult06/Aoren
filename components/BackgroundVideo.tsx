"use client"

import { useState, useEffect, useRef } from "react"

const BackgroundVideo = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  const currentVideoRef = useRef<HTMLVideoElement>(null)
  const nextVideoRef = useRef<HTMLVideoElement>(null)
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  const videos = [
    "/1..mp4",
    "/2.mp4", 
    "/3.mp4",
    "/4.mp4"
  ]

  // Bir sonraki video indeksini hesapla
  const nextVideoIndex = (currentVideoIndex + 1) % videos.length

  useEffect(() => {
    const currentVideo = currentVideoRef.current
    const nextVideo = nextVideoRef.current
    
    if (!currentVideo || !nextVideo) return

    // Mevcut video event'lerini temizle
    const cleanup = () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current)
        transitionTimeoutRef.current = null
      }
    }

    const handleTimeUpdate = () => {
      if (isTransitioning) return // Geçiş sırasında tekrar tetiklemeyi engelle
      
      const duration = currentVideo.duration
      const currentTime = currentVideo.currentTime
      const remainingTime = duration - currentTime

      // Son 2 saniyede geçişi başlat
      if (remainingTime <= 2 && remainingTime > 0) {
        setIsTransitioning(true)
        
        // Sonraki videoyu hazırla ve başlat
        nextVideo.currentTime = 0
        nextVideo.load()
        
        const playNext = () => {
          nextVideo.play().catch(console.error)
        }
        
        // Küçük bir gecikme ile sonraki videoyu başlat
        transitionTimeoutRef.current = setTimeout(playNext, 100)
      }
    }

    const handleVideoEnd = () => {
      if (!isTransitioning) return // Sadece geçiş sırasında çalışsın
      
      // Video geçişini tamamla
      setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
        setIsTransitioning(false)
      }, 500) // Smooth geçiş için kısa gecikme
    }

    // Event listener'ları ekle
    currentVideo.addEventListener('timeupdate', handleTimeUpdate)
    currentVideo.addEventListener('ended', handleVideoEnd)
    
    return () => {
      cleanup()
      currentVideo.removeEventListener('timeupdate', handleTimeUpdate)
      currentVideo.removeEventListener('ended', handleVideoEnd)
    }
  }, [currentVideoIndex, isTransitioning, videos.length])

  // Ana video yüklemesi
  useEffect(() => {
    const currentVideo = currentVideoRef.current
    if (!currentVideo) return

    let hasStarted = false // Çift başlatmayı engelle

    const handleCanPlay = () => {
      if (hasStarted) return
      hasStarted = true
      
      console.log(`Video hazır: ${videos[currentVideoIndex]}`)
      currentVideo.play().catch((error) => {
        console.error(`Video oynatma hatası: ${videos[currentVideoIndex]}`, error)
      })
    }

    const handleError = (error: any) => {
      console.error(`Video yükleme hatası: ${videos[currentVideoIndex]}`, error)
    }

    // Video'yu yükle
    currentVideo.load()
    currentVideo.addEventListener('canplay', handleCanPlay)
    currentVideo.addEventListener('error', handleError)
    
    return () => {
      currentVideo.removeEventListener('canplay', handleCanPlay)
      currentVideo.removeEventListener('error', handleError)
    }
  }, [currentVideoIndex])

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
          isTransitioning ? 'opacity-100' : 'opacity-0'
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