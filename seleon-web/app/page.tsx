import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { MountainIcon, LightbulbIcon, BarChartIcon, ShieldCheckIcon, CheckCircleIcon, ActivityIcon, CloudIcon, LineChartIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">AI Utility Solutions</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Case Studies
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-100 via-blue-50 to-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI-Powered Solutions for Public Utilities
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400">
                    Revolutionize your utility operations with our cutting-edge machine learning models. Enhance
                    efficiency, reduce costs, and improve service delivery.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                alt="AI for Utilities"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg?height=550&width=550"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transforming Utilities with AI</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our machine learning models are designed to tackle the unique challenges faced by water, electricity,
                  and gas providers. Discover how we're revolutionizing the industry.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <LightbulbIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Predictive Maintenance</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Anticipate equipment failures and optimize maintenance schedules to reduce downtime and costs.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <BarChartIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Demand Forecasting</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Accurately predict resource demand to optimize distribution and reduce waste.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ShieldCheckIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Fraud Detection</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Identify and prevent fraudulent activities to protect revenue and ensure fair service.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Story</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See how we helped a major water utility reduce costs and improve service quality.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Water Utility Case Study"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="310"
                src="/placeholder.svg?height=310&width=550"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">WaterCorp Optimization Project</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  By implementing our AI-driven leak detection and predictive maintenance systems, WaterCorp achieved:
                </p>
                <ul className="grid gap-6">
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-6 w-6 text-green-600" />
                    <span>30% reduction in water loss</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-6 w-6 text-green-600" />
                    <span>25% decrease in maintenance costs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircleIcon className="h-6 w-6 text-green-600" />
                    <span>15% improvement in customer satisfaction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Comprehensive AI solutions tailored for public utility organizations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ActivityIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Custom ML Model Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Tailored machine learning models designed to address your specific utility challenges.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <CloudIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Cloud Integration</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Seamless deployment of AI models into your existing cloud infrastructure.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <LineChartIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Ongoing Optimization</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Continuous monitoring and refinement of models to ensure peak performance.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Utility?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with our team of experts to discover how AI can revolutionize your operations.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-gray-900"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-white text-blue-600 hover:bg-gray-200" type="submit">
                    Contact Us
                  </Button>
                </form>
                <p className="text-xs">
                  By submitting, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AI Utility Solutions. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}