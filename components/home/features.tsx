import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, Users, BarChart3, Smartphone, Globe } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, ensuring your data is always protected.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamlessly collaborate with your team members in real-time, anywhere in the world.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights into your business with comprehensive analytics and reporting tools.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Access your dashboard on any device with our fully responsive mobile-first design.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Scale globally with multi-region deployment and localization support for 50+ languages.",
      color: "bg-indigo-100 text-indigo-600",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful features that make our platform the perfect choice for businesses of all sizes looking
            to accelerate their growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
