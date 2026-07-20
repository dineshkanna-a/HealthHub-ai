'use client'

import { ArrowRight, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-20 pb-20 sm:pt-32 sm:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="space-y-8">

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold">
                Your Smart Healthcare Partner
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Connect with qualified healthcare professionals,
                book appointments online,
                and access AI-powered health insights —
                all in one place.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">

              <Button size="lg">
                Book Appointment
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              <Button variant="outline" size="lg">
                Explore Doctors
              </Button>

            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t">

              <div>
                <h2 className="text-2xl font-bold text-blue-600">
                  500+
                </h2>
                <p className="text-sm text-gray-500">
                  Qualified Doctors
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-green-600">
                  25K+
                </h2>
                <p className="text-sm text-gray-500">
                  Happy Patients
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-purple-600">
                  99%
                </h2>
                <p className="text-sm text-gray-500">
                  Satisfaction
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="hidden lg:flex items-center justify-center">

            <div className="bg-blue-100 rounded-3xl p-16">

              <Stethoscope className="w-24 h-24 text-blue-600" />

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}