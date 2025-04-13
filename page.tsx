import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-red-900 to-red-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">Your AI-Powered Elite Startup Coach</h1>
              <p className="text-xl md:text-2xl opacity-90">
                Get on-demand guidance from AI specialists tailored to your startup's unique challenges.
              </p>
              <div className="pt-4">
                <Link href="/signup">
                  <Button size="lg" className="bg-white text-red-900 hover:bg-gray-100 font-medium text-lg px-8">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-md">
                <Image src="/logo.png" alt="Co-Founder Logo" width={500} height={200} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">How Co-Founder Works</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-red-900 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Sign Up & Share Your Vision</h3>
              <p className="text-gray-600">Tell us about your startup, your goals, and the challenges you're facing.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-red-900 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Choose Your Specialists</h3>
              <p className="text-gray-600">
                Select from our team of AI specialists with expertise in different business domains.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-red-900 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Get Expert Guidance</h3>
              <p className="text-gray-600">
                Receive personalized advice and actionable strategies to grow your startup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">What Founders Say</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-600 italic mb-6">
                "Co-Founder's AI specialists helped me refine my business model and prepare for my first funding round.
                The guidance was invaluable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-red-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Founder, TechSolutions</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-600 italic mb-6">
                "Having access to specialists across different domains helped me address blind spots in my business
                strategy. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-red-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-500">CEO, GrowthLabs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-red-900 to-red-700 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Startup?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join Co-Founder today and get the guidance you need to take your startup to the next level.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-red-900 hover:bg-gray-100 font-medium text-lg px-8">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
