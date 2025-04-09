import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: 'ClickFunnels vs Unbounce (2023) - Ultimate Comparison',
  description: 'Compare ClickFunnels vs Unbounce side-by-side. See which platform is better for sales funnels, landing pages, features, pricing, and ease of use.',
  keywords: ['ClickFunnels vs Unbounce', 'Unbounce comparison', 'landing page builders', 'sales funnel tools', 'marketing software comparison'],
  alternates: {
    canonical: 'https://www.onefunnelaway.com/vs/unbounce'
  }
};

export default function UnbounceComparisonPage() {
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ClickFunnels vs Unbounce (2023): The Ultimate Comparison",
    "image": "https://www.onefunnelaway.com/comparison-banner.jpg",
    "author": {
      "@type": "Organization",
      "name": "One Funnel Away"
    },
    "publisher": {
      "@type": "Organization",
      "name": "One Funnel Away",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.onefunnelaway.com/logo.png"
      }
    },
    "datePublished": "2023-05-15",
    "dateModified": "2023-11-01",
    "description": "Detailed feature analysis and pricing breakdown to help you choose the right landing page and funnel builder"
  };

  return (
    <main className="font-sans">
      <Script
        id="comparison-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(comparisonSchema)
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            ClickFunnels vs Unbounce (2023): The Ultimate Comparison
          </h1>
          <p className="text-xl mb-8 max-w-3xl">
            Detailed feature analysis and pricing breakdown to help you choose the right landing page and funnel builder
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-xl font-bold mb-3">Quick Answer:</h2>
            <p className="text-gray-800">
              <span className="font-semibold">ClickFunnels is better for</span> entrepreneurs who need complete sales funnels with checkout capabilities and advanced marketing tools. 
              <span className="font-semibold ml-2">Unbounce is better for</span> marketers focused on high-converting landing pages with advanced A/B testing and AI-powered optimization.
            </p>
            <div className="mt-4 text-center">
              <Link 
                href="https://www.onefunnelaway.com/?aff=5ddd14e32a877af1ba3e6964c49d7eea61e5821c045136ec432dfda3e34e5c9c"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg inline-block transition duration-300 text-sm"
                aria-label="Try ClickFunnels with a free 14-day trial"
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
          <h2 className="text-2xl font-bold mb-8 text-center">ClickFunnels vs Unbounce: Feature Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left font-semibold text-gray-700 border border-gray-200">Feature</th>
                  <th className="py-3 px-4 text-center font-semibold text-blue-700 border border-gray-200">ClickFunnels</th>
                  <th className="py-3 px-4 text-center font-semibold text-purple-700 border border-gray-200">Unbounce</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border border-gray-200 font-medium">Starting Price</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">$97/month</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">$90/month</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border border-gray-200 font-medium">Free Trial</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">14-day free trial</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">14-day free trial</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border border-gray-200 font-medium">Funnel Building</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★★★</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★☆☆</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border border-gray-200 font-medium">Landing Page Creation</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★★☆</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★★★</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border border-gray-200 font-medium">A/B Testing</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★☆☆</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★★★</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border border-gray-200 font-medium">Checkout Capabilities</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★★★</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★☆☆☆☆</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border border-gray-200 font-medium">AI Features</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★☆☆</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★★★</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border border-gray-200 font-medium">Ease of Use</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★★☆</td>
                  <td className="py-3 px-4 border border-gray-200 text-center">★★★★☆</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-lg font-bold mb-3 text-blue-700">ClickFunnels Highlights</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Complete sales funnel solution</li>
                <li>Built-in payment processing</li>
                <li>Membership site capabilities</li>
                <li>Email and marketing automation</li>
                <li>Extensive training resources (FunnelFlix)</li>
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
              <h3 className="text-lg font-bold mb-3 text-purple-700">Unbounce Highlights</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Advanced A/B testing capabilities</li>
                <li>AI-powered conversion intelligence</li>
                <li>Smart Traffic automatic optimization</li>
                <li>Superior landing page templates</li>
                <li>Dynamic text replacement for PPC campaigns</li>
              </ul>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg inline-block transition duration-300 text-sm"
                >
                  Learn More About Unbounce
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Pricing Comparison</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-blue-700">ClickFunnels</h3>
              </div>
              
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="font-semibold mb-2">Basic Plan: $97/month</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>20 funnels</li>
                  <li>100 pages</li>
                  <li>3 payment gateways</li>
                  <li>3 domains</li>
                  <li>Limited email marketing</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Platinum Plan: $297/month</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Unlimited funnels</li>
                  <li>Unlimited pages</li>
                  <li>9 payment gateways</li>
                  <li>9 domains</li>
                  <li>Priority support</li>
                  <li>Full access to FunnelFlix training</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-purple-700">Unbounce</h3>
              </div>
              
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="font-semibold mb-2">Launch Plan: $90/month</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>500 conversions</li>
                  <li>20,000 visitors</li>
                  <li>1 domain</li>
                  <li>Basic Smart Builder</li>
                  <li>Basic A/B testing</li>
                </ul>
              </div>
              
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="font-semibold mb-2">Optimize Plan: $135/month</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>1,000 conversions</li>
                  <li>30,000 visitors</li>
                  <li>5 domains</li>
                  <li>Advanced Smart Builder features</li>
                  <li>Smart Traffic optimization</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Accelerate Plan: $225/month</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>2,500 conversions</li>
                  <li>50,000 visitors</li>
                  <li>10 domains</li>
                  <li>Full AI capabilities</li>
                  <li>Priority support</li>
                </ul>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Choose Your Page Builder?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            While Unbounce excels at landing page optimization, ClickFunnels provides a complete sales funnel solution for serious marketers
          </p>
          <Link 
            href="https://www.onefunnelaway.com/?aff=5ddd14e32a877af1ba3e6964c49d7eea61e5821c045136ec432dfda3e34e5c9c"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg inline-block transition duration-300"
            aria-label="Start your free ClickFunnels trial now"
          >
            Try ClickFunnels Free for 14 Days
          </Link>
          <p className="mt-4 text-sm opacity-90">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>
    </main>
  );
} 