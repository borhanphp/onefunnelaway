import Link from "next/link";
import Script from "next/script";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <Script
        id="footer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "One Funnel Away",
            "url": "https://www.onefunnelaway.com/",
            "logo": "https://www.onefunnelaway.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/onefunnelaway",
              "https://www.twitter.com/onefunnelaway",
              "https://www.instagram.com/onefunnelaway"
            ]
          })
        }}
      />
      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About OneFunnelAway</h3>
              <p className="text-gray-400">
                OneFunnelAway is an affiliate site providing resources, reviews, and guides for entrepreneurs interested in using ClickFunnels to grow their business.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav aria-label="Footer Navigation">
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link href="/review" className="text-gray-400 hover:text-white">ClickFunnels Review</Link></li>
                  <li><Link href="/resources" className="text-gray-400 hover:text-white">Resources</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                  <li><Link href="/sitemap.xml" className="text-gray-400 hover:text-white">Sitemap</Link></li>
                  <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                </ul>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Disclosure</h3>
              <p className="text-gray-400">
                This site contains affiliate links. If you purchase through these links, we may earn a commission at no additional cost to you.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {currentYear} OneFunnelAway. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
} 