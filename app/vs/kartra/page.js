import Link from "next/link";

export default function KartraComparisonPage() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            ClickFunnels vs Kartra (2023): Which is Better?
          </h1>
          <p className="text-xl mb-8 max-w-3xl">
            An honest, in-depth comparison to help you choose the right platform for your business
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-xl font-bold mb-3">Quick Answer:</h2>
            <p className="text-gray-800">
              <span className="font-semibold">ClickFunnels is better for</span> entrepreneurs focused on sales funnels who want simplicity and proven templates. 
              <span className="font-semibold ml-2">Kartra is better for</span> businesses wanting an all-in-one platform with more robust email marketing and membership capabilities.
            </p>
            <div className="mt-4 text-center">
              <Link 
                href="https://www.onefunnelaway.com/?aff=5ddd14e32a877af1ba3e6964c49d7eea61e5821c045136ec432dfda3e34e5c9c"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg inline-block transition duration-300 text-sm"
              >
                Try ClickFunnels Free for 14 Days
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">ClickFunnels vs Kartra: Feature Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border border-gray-200">Feature</th>
                  <th className="py-3 px-4 text-center font-semibold text-blue-700 border border-gray-200">ClickFunnels</th>
                  <th className="py-3 px-4 text-center font-semibold text-purple-700 border border-gray-200">Kartra</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border border-gray-200 font-medium">Starting Price</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">$97/month</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">$99/month</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border border-gray-200 font-medium">Free Trial</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">14 days</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">14 days ($1)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border border-gray-200 font-medium">Funnel Building</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★★★</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★★☆</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border border-gray-200 font-medium">Email Marketing</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★☆☆</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★★★</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border border-gray-200 font-medium">Membership Sites</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★☆☆</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★★★</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border border-gray-200 font-medium">Ease of Use</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★★☆</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★★☆</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border border-gray-200 font-medium">Templates & Design</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★★★</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★★☆</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border border-gray-200 font-medium">Affiliate Management</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★☆☆</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★★★</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold mb-3 text-blue-700">ClickFunnels Highlights</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Specialized in sales funnel creation</li>
                <li>More proven, high-converting templates</li>
                <li>Stronger focus on conversion optimization</li>
                <li>Huge community and training resources</li>
                <li>FunnelFlix training library</li>
              </ul>
              <div className="mt-4 text-center">
                <Link 
                  href="https://www.onefunnelaway.com/?aff=5ddd14e32a877af1ba3e6964c49d7eea61e5821c045136ec432dfda3e34e5c9c"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg inline-block transition duration-300 text-sm"
                >
                  Try ClickFunnels
                </Link>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <h3 className="text-lg font-bold mb-3 text-purple-700">Kartra Highlights</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>More comprehensive all-in-one solution</li>
                <li>Advanced email marketing automation</li>
                <li>Superior membership site capabilities</li>
                <li>Better affiliate management system</li>
                <li>Video hosting included</li>
              </ul>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg inline-block transition duration-300 text-sm"
                >
                  Learn More About Kartra
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections would continue here */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <p className="text-gray-500">Additional comparison content will be added here...</p>
      </div>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Make Your Decision?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            After comparing both platforms, ClickFunnels offers the best combination of ease-of-use and proven templates for most businesses
          </p>
          <Link 
            href="https://www.onefunnelaway.com/?aff=5ddd14e32a877af1ba3e6964c49d7eea61e5821c045136ec432dfda3e34e5c9c"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg inline-block transition duration-300"
          >
            Start Your ClickFunnels Free Trial
          </Link>
          <p className="mt-4 text-sm opacity-90">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>
    </main>
  );
} 