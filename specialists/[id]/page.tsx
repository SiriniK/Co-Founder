import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageCircle, Check } from "lucide-react"
import { notFound } from "next/navigation"

// This would typically come from a database or API
const specialistsData = {
  management: {
    name: "Management Specialist",
    title: "Strategic Leadership & Team Building Expert",
    description:
      "Our Management Specialist provides guidance on leadership development, team building, organizational structure, and strategic planning to help you build and lead a high-performing team.",
    expertise: [
      "Leadership Development",
      "Team Management",
      "Strategic Planning",
      "Operational Efficiency",
      "Company Culture",
      "Hiring & Retention",
      "Performance Management",
      "Scaling Operations",
    ],
    image: "/placeholder.svg?height=600&width=600",
    benefits: [
      "Build a strong leadership foundation for your startup",
      "Create effective organizational structures that scale",
      "Develop strategies for hiring and retaining top talent",
      "Implement efficient operational processes",
      "Foster a productive company culture",
    ],
    testimonial: {
      quote:
        "The Management Specialist helped me transform my leadership approach and build a team structure that could scale with our rapid growth.",
      author: "Sarah Johnson, CEO of GrowthTech",
    },
  },
  finance: {
    name: "Finance Specialist",
    title: "Startup Finance & Fundraising Expert",
    description:
      "Our Finance Specialist provides strategic financial planning, fundraising strategies, financial modeling, and cash flow management guidance to help you build a financially sustainable business.",
    expertise: [
      "Fundraising Strategy",
      "Financial Modeling",
      "Valuation",
      "Cash Flow Management",
      "Unit Economics",
      "Investor Relations",
      "Financial Planning",
      "Equity Structure",
    ],
    image: "/placeholder.svg?height=600&width=600",
    benefits: [
      "Develop a comprehensive fundraising strategy",
      "Create financial models that impress investors",
      "Understand and optimize your unit economics",
      "Manage cash flow effectively to extend runway",
      "Structure equity and cap table for future rounds",
    ],
    testimonial: {
      quote:
        "The Finance Specialist helped us prepare for our Series A, from financial modeling to pitch deck review. We raised $4M, exceeding our target.",
      author: "Michael Chen, Founder of DataSync",
    },
  },
  analytics: {
    name: "Business Analytics Specialist",
    title: "Data-Driven Growth & Market Analysis Expert",
    description:
      "Our Business Analytics Specialist provides data-driven insights to optimize your business model, understand market dynamics, and develop growth strategies based on metrics that matter.",
    expertise: [
      "Market Analysis",
      "Growth Metrics",
      "User Analytics",
      "Competitive Intelligence",
      "Cohort Analysis",
      "A/B Testing",
      "Data Visualization",
      "KPI Development",
    ],
    image: "/placeholder.svg?height=600&width=600",
    benefits: [
      "Identify the key metrics that drive your business",
      "Develop data-driven growth strategies",
      "Understand user behavior and optimize conversion",
      "Gain insights into market trends and competition",
      "Make informed decisions based on analytics",
    ],
    testimonial: {
      quote:
        "The Analytics Specialist transformed how we look at our data. We identified key growth levers we hadn't considered and doubled our conversion rate.",
      author: "Alex Rivera, Co-founder of ConvertFlow",
    },
  },
  marketing: {
    name: "Marketing Specialist",
    title: "Customer Acquisition & Brand Strategy Expert",
    description:
      "Our Marketing Specialist provides guidance on customer acquisition strategies, branding, content marketing, and go-to-market planning to help you attract and retain customers.",
    expertise: [
      "Brand Strategy",
      "Digital Marketing",
      "Customer Acquisition",
      "Content Strategy",
      "Social Media",
      "SEO & SEM",
      "Marketing Analytics",
      "Product Marketing",
    ],
    image: "/placeholder.svg?height=600&width=600",
    benefits: [
      "Develop a compelling brand identity and messaging",
      "Create cost-effective customer acquisition strategies",
      "Build a content marketing plan that drives growth",
      "Optimize marketing channels for your target audience",
      "Measure and improve marketing ROI",
    ],
    testimonial: {
      quote:
        "The Marketing Specialist helped us refine our messaging and identify the right channels. Our CAC dropped by 40% while conversion improved.",
      author: "Emma Thompson, Founder of NutriTech",
    },
  },
  technology: {
    name: "Technology Specialist",
    title: "Technical Architecture & Product Development Expert",
    description:
      "Our Technology Specialist provides guidance on technical architecture, product development, technology stack selection, and engineering team building to help you build scalable products.",
    expertise: [
      "Tech Stack Selection",
      "Product Development",
      "Technical Architecture",
      "Engineering Team Building",
      "DevOps & Infrastructure",
      "Security & Compliance",
      "Scalability Planning",
      "Technical Debt Management",
    ],
    image: "/placeholder.svg?height=600&width=600",
    benefits: [
      "Choose the right technology stack for your product",
      "Design scalable technical architecture",
      "Build and lead high-performing engineering teams",
      "Implement effective development processes",
      "Balance speed and technical debt in product development",
    ],
    testimonial: {
      quote:
        "The Technology Specialist guided us through critical architecture decisions that allowed us to scale from 100 to 10,000 users without major refactoring.",
      author: "David Kim, CTO of CloudStack",
    },
  },
}

export default function SpecialistPage({ params }: { params: { id: string } }) {
  const specialist = specialistsData[params.id as keyof typeof specialistsData]

  if (!specialist) {
    notFound()
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 to-red-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link href="/specialists" className="inline-flex items-center text-white hover:text-gray-200 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Specialists
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{specialist.name}</h1>
              <p className="text-xl opacity-90 mb-6">{specialist.title}</p>
              <p className="opacity-80 mb-8">{specialist.description}</p>
              <Button size="lg" className="bg-white text-red-900 hover:bg-gray-100">
                <MessageCircle className="mr-2 h-5 w-5" /> Start Consulting
              </Button>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src={specialist.image || "/placeholder.svg"}
                  alt={specialist.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Areas of Expertise</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialist.expertise.map((item) => (
              <div key={item} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="w-3 h-3 bg-red-700 rounded-full mx-auto mb-3"></div>
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">How This Specialist Can Help You</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <ul className="space-y-4">
                {specialist.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-br from-red-900 to-red-700 rounded-full flex items-center justify-center text-white mr-3 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-900 to-red-700 p-8 rounded-xl text-white flex flex-col justify-center">
              <p className="text-xl italic mb-6">"{specialist.testimonial.quote}"</p>
              <p className="font-medium">— {specialist.testimonial.author}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Begin your consultation with our {specialist.name} and take your startup to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-900 to-red-700 text-white hover:from-red-800 hover:to-red-600"
            >
              <MessageCircle className="mr-2 h-5 w-5" /> Start Consulting Now
            </Button>
            <Button size="lg" variant="outline" className="border-red-800 text-red-800 hover:bg-red-50">
              Learn About Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
