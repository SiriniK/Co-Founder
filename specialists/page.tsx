import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const specialists = [
  {
    id: "management",
    name: "Management Specialist",
    description: "Expert guidance on leadership, team building, and organizational structure.",
    expertise: ["Leadership Development", "Team Management", "Strategic Planning", "Operational Efficiency"],
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "finance",
    name: "Finance Specialist",
    description: "Strategic financial planning, fundraising strategies, and financial modeling.",
    expertise: ["Fundraising", "Financial Modeling", "Valuation", "Cash Flow Management"],
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "analytics",
    name: "Business Analytics Specialist",
    description: "Data-driven insights to optimize your business model and growth strategy.",
    expertise: ["Market Analysis", "Growth Metrics", "User Analytics", "Competitive Intelligence"],
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "marketing",
    name: "Marketing Specialist",
    description: "Customer acquisition strategies, branding, and go-to-market planning.",
    expertise: ["Brand Strategy", "Digital Marketing", "Customer Acquisition", "Content Strategy"],
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "technology",
    name: "Technology Specialist",
    description: "Technical architecture, product development, and technology stack guidance.",
    expertise: ["Tech Stack Selection", "Product Development", "Technical Architecture", "Engineering Team Building"],
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function SpecialistsPage() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Our AI Specialists</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our team of AI specialists with expertise in different business domains to get personalized
            guidance for your startup.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map((specialist) => (
            <Card key={specialist.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative">
                <Image
                  src={specialist.image || "/placeholder.svg"}
                  alt={specialist.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{specialist.name}</CardTitle>
                <CardDescription>{specialist.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium text-sm text-gray-500 mb-2">EXPERTISE</h4>
                <ul className="space-y-1">
                  {specialist.expertise.map((item) => (
                    <li key={item} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-red-700 mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href={`/specialists/${specialist.id}`} className="w-full">
                  <Button className="w-full bg-gradient-to-r from-red-900 to-red-700 text-white hover:from-red-800 hover:to-red-600">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
