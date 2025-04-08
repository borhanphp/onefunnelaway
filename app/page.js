import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Build Profitable Funnels That Convert
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            Discover how ClickFunnels can transform your business with the most powerful sales funnel builder on the market
          </p>
          <Link 
            href="https://www.onefunnelaway.com/?aff=5ddd14e32a877af1ba3e6964c49d7eea61e5821c045136ec432dfda3e34e5c9c"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg inline-block transition duration-300"
          >
            Try ClickFunnels For Free
          </Link>
        </div>
      </section>

      {/* What is ClickFunnels Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            What is ClickFunnels?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                ClickFunnels is an all-in-one marketing solution that allows entrepreneurs and businesses to create beautiful sales funnels to sell their products and services online.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Unlike traditional websites, ClickFunnels is specifically designed to guide visitors through a carefully planned journey that maximizes conversions and sales.
              </p>
              <p className="text-lg text-gray-700">
                With its drag-and-drop editor, pre-built templates, and integrated features like email automation and payment processing, ClickFunnels makes it easy to launch effective marketing campaigns without technical skills.
              </p>
            </div>
            <div className="rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gray-200 w-full h-64 flex items-center justify-center">
                <p className="text-gray-500 text-lg">ClickFunnels Dashboard Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Me Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Trust Me?
          </h2>
          <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 flex-shrink-0">
                {/* Profile image placeholder */}
              </div>
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  As a certified ClickFunnels partner and successful digital marketer, I've helped dozens of businesses implement effective sales funnels that drive real results.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  I've personally generated over $XXX,XXX in revenue using the exact strategies I share on this website.
                </p>
                <p className="text-lg text-gray-700">
                  My goal is simple: to provide you with honest, practical advice about using ClickFunnels to grow your business, based on real-world experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Benefits of Using ClickFunnels
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">All-In-One Solution</h3>
              <p className="text-gray-700">
                Landing pages, sales funnels, upsells, order forms, and email marketing - everything you need in one platform.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Easy To Use</h3>
              <p className="text-gray-700">
                Drag-and-drop editor makes it simple to create professional-looking funnels without coding skills.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Proven Templates</h3>
              <p className="text-gray-700">
                Start with battle-tested funnel templates that have already generated millions in sales.
              </p>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Conversion Focused</h3>
              <p className="text-gray-700">
                Every element is designed to maximize conversions and guide visitors toward your desired action.
              </p>
            </div>
            
            {/* Benefit 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Time-Saving</h3>
              <p className="text-gray-700">
                Launch complete marketing campaigns in days, not weeks or months, with ready-to-go funnels.
              </p>
            </div>
            
            {/* Benefit 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Community & Support</h3>
              <p className="text-gray-700">
                Join a thriving community of entrepreneurs and get access to world-class support and training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-lg">Sarah Johnson</h4>
                  <p className="text-gray-600">eCommerce Entrepreneur</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "After following the strategies on this site, I was able to set up my ClickFunnels sales process in just two days. My conversion rates increased by 34% in the first month alone!"
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-lg">Mark Thompson</h4>
                  <p className="text-gray-600">Digital Course Creator</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I was skeptical about ClickFunnels at first, but after reading the detailed reviews and guides here, I decided to give it a try. Six months later, my online course is generating $20K/month in passive income."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Building Your Profitable Sales Funnel?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs who are growing their businesses with ClickFunnels
          </p>
          <Link 
            href="https://www.onefunnelaway.com/?aff=5ddd14e32a877af1ba3e6964c49d7eea61e5821c045136ec432dfda3e34e5c9c"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg inline-block transition duration-300"
          >
            Start Your 14-Day Free Trial
          </Link>
          <p className="mt-4 text-sm opacity-90">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>
    </main>
  );
}
