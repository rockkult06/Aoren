"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: "Hizmetler", href: "/#services" },
    { name: "Hakkımızda", href: "/#about" },
    { name: "Ekibimiz", href: "/employees" },
    { name: "İletişim", href: "/#contact" },
  ]

  return (
    <header className={`fixed top-0 w-full transition-all duration-300 z-50 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-200' 
        : 'bg-transparent border-b border-white/20'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="relative h-12 w-auto">
              <Image
                src={isScrolled ? "/aoren-logo1.png" : "/aoren-logo.png"}
                alt="AOREN Logo"
                width={150}
                height={48}
                className="h-12 w-auto object-contain transition-all duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700">Ücretsiz Danışmanlık</Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className={isScrolled ? 'text-gray-700' : 'text-white'}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-6 mt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="bg-blue-600 hover:bg-blue-700 mt-4">Ücretsiz Danışmanlık</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
