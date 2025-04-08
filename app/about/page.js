import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            About OneFunnelAway
          </h1>
          <p className="text-xl mb-8 max-w-3xl">
            My journey from struggling entrepreneur to successful funnel builder and how I can help you achieve the same
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div>
              <div className="bg-gray-200 w-full h-72 rounded-lg mb-6 flex items-center justify-center">
                <p className="text-gray-500">Your Photo</p>
              </div>
              <h2 className="text-xl font-bold mb-2 text-gray-900">Your Name</h2>
              <p className="text-gray-600 mb-4">Certified ClickFunnels Partner & Digital Marketing Consultant</p>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-bold text-blue-800 mb-2">Get in Touch</h3>
                <p className="text-blue-800 text-sm mb-3">
                  Have questions about ClickFunnels or need help with your funnels? Feel free to reach out!
                </p>
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded inline-block w-full text-center"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">My Story</h2>
            <p className="text-gray-700 mb-6">
              Hi there! I'm [Your Name], a digital marketer and certified ClickFunnels partner. My journey into the world of online marketing and sales funnels began in [year], when I was struggling to grow my first online business.
            </p>
            <p className="text-gray-700 mb-6">
              Like many entrepreneurs, I started with a great product but no clear way to market it effectively online. I built a traditional website, ran some ads, and hoped for the best – but sales were inconsistent and marketing costs were eating into my profits.
            </p>
            <p className="text-gray-700 mb-6">
              Everything changed when I discovered ClickFunnels and the concept of sales funnels. Within just 30 days of implementing my first funnel, my conversion rate doubled and my cost per acquisition dropped by 40%. I was hooked.
            </p>

            <h2 className="text-2xl font-bold mb-4">My Experience with ClickFunnels</h2>
            <p className="text-gray-700 mb-6">
              Over the past [X] years, I've built hundreds of funnels for both my own businesses and clients across various industries – from e-commerce and coaching to SaaS and local services. Through this experience, I've developed a deep understanding of what makes a funnel convert and how to optimize every step of the customer journey.
            </p>
            <p className="text-gray-700 mb-6">
              I've personally generated over $[amount] in revenue using ClickFunnels, and have helped my clients collectively achieve over $[amount] in sales. I've also earned recognition as a ClickFunnels Two Comma Club member for building a funnel that generated over a million dollars.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold mb-4">My ClickFunnels Credentials:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certified ClickFunnels Partner</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Two Comma Club Member</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>ClickFunnels Affiliate Top 100</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">Why I Created This Site</h2>
            <p className="text-gray-700 mb-6">
              I created OneFunnelAway with a simple mission: to help entrepreneurs and marketers harness the power of ClickFunnels to grow their businesses more effectively. I remember how overwhelming it felt when I was starting out, and I want to provide the guidance I wish I had back then.
            </p>
            <p className="text-gray-700 mb-6">
              On this site, you'll find honest reviews, detailed tutorials, valuable resources, and practical advice based on my real-world experience with ClickFunnels. My goal is to help you avoid costly mistakes and accelerate your success.
            </p>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 mb-8">
              <p className="text-gray-700 italic">
                "Yes, I am a ClickFunnels affiliate, which means I earn a commission if you purchase through my links. However, my recommendations are based on genuine experience and results. I only promote tools I personally use and believe in."
              </p>
            </div>

            <p className="text-gray-700 mb-2">
              To your success,
            </p>
            <p className="text-gray-900 font-bold">
              [Your Name]
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">
            What People Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <p className="text-gray-700 italic mb-4">
                "[Your Name] helped me implement my first ClickFunnels sales funnel, and the results were immediate. My conversion rate increased by 267% in the first month alone!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <h4 className="font-semibold">John Smith</h4>
                  <p className="text-gray-500 text-sm">CEO, Example Company</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <p className="text-gray-700 italic mb-4">
                "The free resources on this site have been invaluable for my business. I've implemented several of the strategies and have seen a 43% increase in leads."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">Marketing Director, Example Inc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Your ClickFunnels Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who are growing their businesses with effective sales funnels
          </p>
          <Link 
            href="https://www.onefunnelaway.com/?aff=5ddd14e32a877af1ba3e6964c49d7eea61e5821c045136ec432dfda3e34e5c9c"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg inline-block transition duration-300"
          >
            Try ClickFunnels For Free
          </Link>
          <p className="mt-4 text-sm opacity-90">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>
    </main>
  );
} 