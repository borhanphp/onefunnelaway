import Link from "next/link";

export default function ReviewPage() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Honest ClickFunnels Review 2023
          </h1>
          <p className="text-xl mb-8 max-w-3xl">
            Is ClickFunnels worth the investment? My complete breakdown after using the platform for 3+ years
          </p>
        </div>
      </section>

      {/* Review Navigation */}
      <section className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto py-4 gap-x-6 text-sm whitespace-nowrap">
            <a href="#overview" className="font-medium text-blue-600">Overview</a>
            <a href="#pricing" className="font-medium text-gray-600 hover:text-blue-600">Pricing</a>
            <a href="#features" className="font-medium text-gray-600 hover:text-blue-600">Key Features</a>
            <a href="#templates" className="font-medium text-gray-600 hover:text-blue-600">Templates</a>
            <a href="#pros-cons" className="font-medium text-gray-600 hover:text-blue-600">Pros & Cons</a>
            <a href="#alternatives" className="font-medium text-gray-600 hover:text-blue-600">Alternatives</a>
            <a href="#conclusion" className="font-medium text-gray-600 hover:text-blue-600">Conclusion</a>
          </nav>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">ClickFunnels Overview</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-4">
              In this comprehensive review, I&apos;ll share my honest thoughts about ClickFunnels after using it for over 3 years to build sales funnels for both my own business and my clients.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              ClickFunnels is a web-based software that allows you to create complete sales funnels without needing a team of developers, designers, or marketers. Founded by Russell Brunson in 2014, it has grown to become one of the most popular sales funnel builders in the world.
            </p>
            <p className="text-lg text-gray-700">
              If you&apos;re considering investing in ClickFunnels, this review will help you decide if it&apos;s the right platform for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary Box */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold mb-4">Quick Summary</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">What I Like</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Intuitive drag-and-drop editor</li>
                  <li>All-in-one solution (pages, email, payments)</li>
                  <li>High-converting templates</li>
                  <li>Built-in A/B testing</li>
                  <li>Active community and support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">What Could Be Better</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Higher price point than some competitors</li>
                  <li>Learning curve for beginners</li>
                  <li>Limited design flexibility compared to WordPress</li>
                  <li>Email automation could be more robust</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="font-semibold">My Verdict: 4.5/5 ⭐️⭐️⭐️⭐️½</p>
              <p className="text-gray-700 mt-2">
                ClickFunnels is an excellent platform for entrepreneurs and marketers who want to quickly create high-converting sales funnels without technical skills.
              </p>
            </div>
            <div className="mt-6 text-center">
              <Link 
                href="https://www.onefunnelaway.com/?aff=5ddd14e32a877af1ba3e6964c49d7eea61e5821c045136ec432dfda3e34e5c9c"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition duration-300"
              >
                Try ClickFunnels Free for 14 Days
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections would continue here */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <p className="text-gray-500">Additional review content will be added here...</p>
      </div>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Try ClickFunnels For Yourself?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start building high-converting sales funnels today with their 14-day free trial
          </p>
          <Link 
            href="https://www.onefunnelaway.com/?aff=5ddd14e32a877af1ba3e6964c49d7eea61e5821c045136ec432dfda3e34e5c9c"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg inline-block transition duration-300"
          >
            Start Your Free Trial Now
          </Link>
          <p className="mt-4 text-sm opacity-90">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>
    </main>
  );
} 