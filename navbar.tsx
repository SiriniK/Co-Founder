"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react"

const specialists = [
  { name: "Management Specialist", href: "/specialists/management" },
  { name: "Finance Specialist", href: "/specialists/finance" },
  { name: "Business Analytics Specialist", href: "/specialists/analytics" },
  { name: "Marketing Specialist", href: "/specialists/marketing" },
  { name: "Technology Specialist", href: "/specialists/technology" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo.png" alt="Co-Founder Logo" width={150} height={40} className="h-10 w-auto" />
            </Link>

            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <Link href="/" className="text-gray-700 hover:text-red-800 font-medium">
                Home
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-gray-700 hover:text-red-800 font-medium flex items-center">
                    Our Specialists <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {specialists.map((specialist) => (
                    <DropdownMenuItem key={specialist.name} asChild>
                      <Link href={specialist.href} className="w-full">
                        {specialist.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/about" className="text-gray-700 hover:text-red-800 font-medium">
                About
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-red-800 font-medium">
                Pricing
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" className="border-red-800 text-red-800 hover:bg-red-50">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-red-900 to-red-700 text-white hover:from-red-800 hover:to-red-600">
                Sign Up
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4 space-y-1">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div className="py-2">
              <div className="flex items-center justify-between text-gray-700 hover:bg-gray-50 rounded-md px-3 py-2">
                <span>Our Specialists</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="pl-4 mt-1 space-y-1">
                {specialists.map((specialist) => (
                  <Link
                    key={specialist.name}
                    href={specialist.href}
                    className="block py-2 text-gray-600 hover:bg-gray-50 rounded-md pl-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {specialist.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="block py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>

            <div className="pt-4 pb-2 border-t border-gray-200 flex flex-col space-y-2">
              <Link
                href="/login"
                className="block w-full text-center py-2 text-gray-700 hover:bg-gray-50 rounded-md border border-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="block w-full text-center py-2 text-white bg-gradient-to-r from-red-900 to-red-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
