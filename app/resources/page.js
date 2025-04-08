import Link from "next/link";

export default function ResourcesPage() {
  const resources = [
    {
      id: 'funnel-checklist',
      title: 'Ultimate Funnel Optimization Checklist',
      description: '21-point checklist to ensure your sales funnel is fully optimized for maximum conversions. Use this before launching any new funnel.',
      type: 'PDF Checklist',
      category: 'Funnel Strategy'
    },
    {
      id: 'headline-swipe-file',
      title: 'High-Converting Headline Swipe File',
      description: '50+ proven headline templates that you can adapt for any niche or product. Copy, paste, and customize to boost your conversion rates.',
      type: 'PDF Guide',
      category: 'Copywriting'
    },
    {
      id: 'funnel-templates',
      title: 'Premium ClickFunnels Templates Bundle',
      description: '5 ready-to-import ClickFunnels templates for different business models: lead generation, product sales, webinar registration, and more.',
      type: 'Template Pack',
      category: 'Templates'
    },
    {
      id: 'email-sequence',
      title: '7-Day Email Follow-Up Sequence',
      description: 'Pre-written email templates designed to nurture leads and drive sales. Just customize with your details and import into your email provider.',
      type: 'Email Templates',
      category: 'Email Marketing'
    },
    {
      id: 'analytics-dashboard',
      title: 'Funnel Analytics Tracking Dashboard',
      description: 'Custom Google Analytics dashboard template to track and analyze your funnel performance with clear visuals and actionable metrics.',
      type: 'Template',
      category: 'Analytics'
    },
    {
      id: 'case-study',
      title: '$100K Product Launch Blueprint',
      description: 'Complete case study of a successful six-figure product launch, including the exact funnel structure, emails, and traffic strategy.',
      type: 'PDF Case Study',
      category: 'Case Study'
    }
  ];

  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            ClickFunnels Resources & Tools
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Free and premium resources to help you build better sales funnels and grow your business
          </p>
        </div>
      </section>

      {/* Email Capture Box */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-50 p-6 sm:p-10 rounded-lg border border-blue-100 shadow-md">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Get All Resources in One Package
                </h2>
                <p className="text-gray-700 mb-6">
                  Enter your email below to get instant access to our entire library of ClickFunnels resources, templates, and swipe files (worth $297) for FREE.
                </p>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email Address" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                    >
                      Get Instant Access
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
              <div className="hidden md:block">
                <div className="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Resource Bundle Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Free Resources
            </h2>
            <p className="text-gray-600">
              These resources are 100% free when you sign up for a ClickFunnels trial through our affiliate link.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map(resource => (
              <div key={resource.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 flex flex-col">
                <div className="bg-blue-100 px-4 py-2">
                  <span className="text-xs font-semibold text-blue-800">{resource.category}</span>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{resource.type}</span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <a 
                    href="#email-capture" 
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                  >
                    Download Resource
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg p-6 sm:p-10 text-white shadow-xl">
            <div className="grid md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-3">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Exclusive Bonus: One Funnel Away Challenge
                </h2>
                <p className="mb-6">
                  Join Russell Brunson's 30-day challenge to build your first (or next) profitable funnel. Get daily training, coaching calls, and a proven framework for success.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>30 Days of Step-by-Step Training</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Live Coaching & Support</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Workbook & Actionable Tasks</span>
                  </li>
                </ul>
                <Link 
                  href="https://www.onefunnelaway.com/?aff=5ddd14e32a877af1ba3e6964c49d7eea61e5821c045136ec432dfda3e34e5c9c"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg inline-block transition duration-300"
                >
                  Learn More About OFA Challenge
                </Link>
              </div>
              <div className="md:col-span-2">
                <div className="bg-white/10 p-1 rounded-lg">
                  <div className="bg-gray-200 w-full h-48 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">OFA Challenge Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">How do I access these resources?</h3>
              <p className="text-gray-700">
                After signing up with our affiliate link and subscribing to our email list, you'll receive immediate access to download all resources directly to your device.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Can I use these resources for client projects?</h3>
              <p className="text-gray-700">
                Yes! All resources are licensed for both personal and client use. The only restriction is that you cannot resell or distribute them as your own products.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Do I need to have ClickFunnels to use these resources?</h3>
              <p className="text-gray-700">
                While some resources like the funnel templates require a ClickFunnels account, many resources like the checklists, swipe files, and guides can be used with any platform.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">How often do you add new resources?</h3>
              <p className="text-gray-700">
                We add new resources monthly. Subscribers to our email list are the first to know about new tools, templates, and guides as soon as they're available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Building Better Funnels?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Try ClickFunnels today and get access to all our premium resources as a special bonus
          </p>
          <Link 
            href="https://www.onefunnelaway.com/?aff=5ddd14e32a877af1ba3e6964c49d7eea61e5821c045136ec432dfda3e34e5c9c"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg inline-block transition duration-300"
          >
            Start Your Free Trial
          </Link>
          <p className="mt-4 text-sm opacity-90">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>
    </main>
  );
} 