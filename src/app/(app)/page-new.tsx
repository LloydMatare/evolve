import { Navbar } from '@/components/navbar'
import { CountdownTimer } from '@/components/countdown-timer'
import { PricingCard } from '@/components/pricing-card'
import { StatsCounter } from '@/components/stats-counter'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Users, Lightbulb, Target, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-16 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden"
      >
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 border-4 border-purple-400 rotate-45" />
          <div className="absolute bottom-0 right-0 w-96 h-96 border-4 border-purple-400 rotate-12" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border-4 border-white" />
        </div>

        <div className="text-center text-white max-w-6xl mx-auto relative z-10">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center space-x-4">
              <div className="text-4xl md:text-6xl font-bold">
                <span className="text-purple-400">EVO</span>
                <span className="text-white">LVE</span>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="mb-8">
            <span className="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide leading-tight">
              ICT SUMMIT
            </span>
            <span className="block text-6xl md:text-8xl lg:text-9xl font-bold tracking-widest leading-tight mt-4 text-purple-400">
              2026
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest mb-12 uppercase">
            Empowering Africa&apos;s Digital Leap
          </h2>

          {/* Date and Location */}
          <div className="space-y-6 mt-16">
            <div className="flex items-center justify-center space-x-3">
              <Calendar className="w-6 h-6 text-purple-400" />
              <p className="text-2xl md:text-4xl font-bold tracking-wide">11-12 JUNE 2026</p>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6 text-purple-400" />
              <p className="text-lg md:text-xl lg:text-2xl font-light tracking-wide">
                Harare International Conference Centre (HICC)
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold text-lg px-12 py-6"
            >
              Register Now
            </Button>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-12 py-6"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 px-4">
        <CountdownTimer />
      </section>

      {/* Quick Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Why Attend Evolve ICT Summit 2026?
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-8" />
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Join Africa&apos;s premier digital transformation forum bringing together leaders in
              policy, business, academia, and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all">
              <Lightbulb className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Innovation</h3>
              <p className="text-gray-700">
                Discover cutting-edge technologies and African-led innovations shaping the digital
                future.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all">
              <Users className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Networking</h3>
              <p className="text-gray-700">
                Connect with 2000+ delegates, industry leaders, and decision-makers from across
                Africa.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all">
              <TrendingUp className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Growth</h3>
              <p className="text-gray-700">
                Access opportunities for partnerships, investment, and technology transfer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <StatsCounter end={2000} label="Delegates" suffix="+" />
            <StatsCounter end={100} label="Exhibitors" suffix="+" />
            <StatsCounter end={30} label="Sponsors" suffix="+" />
          </div>
        </div>
      </section>

      {/* Ticket Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Secure Your Spot
            </h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-8" />
            <p className="text-xl text-gray-700">
              Early bird tickets available now. Registration closes June 30, 2026.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <PricingCard
              title="Early Bird"
              price="150"
              period="Before April 30, 2026"
              features={[
                'Full event access',
                'Regular seating',
                'Lunch provided',
                'Networking sessions',
                'Conference materials',
              ]}
            />
            <PricingCard
              title="Early Bird"
              price="175"
              period="Before May 30, 2026"
              features={[
                'Full event access',
                'Regular seating',
                'Lunch provided',
                'Networking sessions',
                'Conference materials',
              ]}
              highlighted
            />
            <PricingCard
              title="Regular"
              price="200"
              period="From June 1, 2026"
              features={[
                'Full event access',
                'Regular seating',
                'Lunch provided',
                'Networking sessions',
                'Conference materials',
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to be Part of Africa&apos;s Digital Revolution?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join us for two days of innovation, collaboration, and transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold text-lg px-12 py-6"
            >
              Register Now
            </Button>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-12 py-6"
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-purple-400">EVOLVE</span> ICT
              </div>
              <p className="text-blue-200 text-sm">
                Empowering Africa&apos;s Digital Leap
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <Link href="/" className="hover:text-purple-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-purple-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-purple-400 transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-purple-400 transition-colors">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Event Info</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>
                  <Link href="/previous-summit" className="hover:text-purple-400 transition-colors">
                    Previous Summit
                  </Link>
                </li>
                <li>Speakers</li>
                <li>Schedule</li>
                <li>Sponsors</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li>info@evolveictsummit.com</li>
                <li>+263 XXX XXX XXX</li>
                <li>HICC, Harare, Zimbabwe</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center">
            <p className="text-sm text-blue-300">
              © 2026 Evolve Africa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
