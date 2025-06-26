import Head from "next/head"
import Header from "@/components/header"
import HeroSection from "@/components/HeroSection"
import MainContent from "@/components/MainContent"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Aoren - Türkiye'nin Önde Gelen Hukuk Bürosu</title>
        <meta name="description" content="Aoren Hukuk Bürosu" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <Header />
      <HeroSection />
      <MainContent />
      <Footer />
    </>
  )
}
