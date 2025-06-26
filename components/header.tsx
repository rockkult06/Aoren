"use client"

import { useState } from "react"
import { Menu, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link" // Link bileşenini içe aktar

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Hizmetler", href: "/#services" }, // Ana sayfa ve hizmetler bölümüne yönlendirme
    { name: "Hakkımızda", href: "/#about" }, // Ana sayfa ve hakkımızda bölümüne yönlendirme
    { name: "Ekibimiz", href: "/employees" }, // Ekibimiz sayfasına yönlendirme
    { name: "İletişim", href: "/#contact" }, // Ana sayfa ve iletişim bölümüne yönlendirme
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">AOREN</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link // <a> yerine Link kullan
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
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
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-6 mt-6">
                {navigation.map((item) => (
                  <Link // <a> yerine Link kullan
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)} // Menü öğesine tıklandığında menüyü kapat
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
