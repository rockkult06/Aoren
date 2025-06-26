"use client"

import type React from "react"
import styled from "styled-components"
// Import `useRef` from React
import { useRef, useEffect } from "react"

const HeroContainer = styled.section`
position: relative;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
text-align: center;
overflow: hidden; /* Ensure video doesn't overflow */
`

const BackgroundVideo = styled.video`
position: absolute;
top: 50%;
left: 50%;
min-width: 100%;
min-height: 100%;
width: auto;
height: auto;
z-index: 0;
transform: translateX(-50%) translateY(-50%);
background-size: cover;
background-position: center;
`

const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.3); /* Semi-transparent overlay */
z-index: 1;
`

const BoxContainer = styled.div`
display: flex;
gap: 40px;
z-index: 2;
margin-top: 80px;

@media (max-width: 1024px) {
  gap: 30px;
}

@media (max-width: 768px) {
  flex-direction: column;
  gap: 25px;
  margin-top: 60px;
  padding: 0 20px;
}
`

const InfoBox = styled.div`
background-color: rgba(255, 255, 255, 0.15);
backdrop-filter: blur(10px);
padding: 40px 30px;
border-radius: 12px;
cursor: pointer;
transition: all 0.3s ease;
width: 320px;
min-height: 220px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

&:hover {
  background-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

h2 {
  font-size: 1.3em;
  margin-bottom: 20px;
  color: white;
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

p {
  font-size: 1em;
  opacity: 0.9;
  color: white;
  margin: 0;
  font-weight: 500;
}

@media (max-width: 768px) {
  width: 100%;
  padding: 30px 25px;
  min-height: auto;
}
`

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  return (
    <HeroContainer>
      <BackgroundVideo autoPlay loop muted playsInline ref={videoRef}>
        <source src="/videos/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <Overlay />
      <BoxContainer>
        <InfoBox>
          <h2>TÜRKİYE'NİN ÖNDE GELEN HUKUK BÜROLARINDAN BİRİ</h2>
          <p>Tüm ekibi görün</p>
        </InfoBox>
        <InfoBox>
          <h2>MÜVEKKİLLERİMİZE TÜM OFİSLERİMİZDE HİZMET VERİYORUZ</h2>
          <p>Ofislerimizi görün</p>
        </InfoBox>
        <InfoBox>
          <h2>TÜM HUKUKİ UZMانLIK ALANLARINI KAPSIYORUZ</h2>
          <p>Uzmanlık alanlarımızı görün</p>
        </InfoBox>
      </BoxContainer>
    </HeroContainer>
  )
}

export default HeroSection
