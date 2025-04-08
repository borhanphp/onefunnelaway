import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "One Funnel Away | ClickFunnels Affiliate Resources",
  description: "Discover how ClickFunnels can transform your business with powerful sales funnels, marketing automation, and conversion-focused tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="font-bold text-xl text-blue-600">
                    OneFunnelAway
                  </Link>
                </div>
                <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    Home
                  </Link>
                  <Link href="/review" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    Review
                  </Link>
                  <div className="relative group inline-flex items-center">
                    <span className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                      Comparisons
                    </span>
                    <div className="absolute hidden group-hover:block top-full left-0 z-10 bg-white shadow-lg rounded-lg py-1 w-48">
                      <Link href="/vs/kartra" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        vs Kartra
                      </Link>
                      <Link href="/vs/systeme-io" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        vs Systeme.io
                      </Link>
                    </div>
                  </div>
                  <Link href="/resources" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    Resources
                  </Link>
                  <Link href="/blog" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    Blog
                  </Link>
                  <Link href="/about" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    About
                  </Link>
                  <Link href="/contact" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                    Contact
                  </Link>
                </nav>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Link 
                  href="https://www.onefunnelaway.com/?aff=5ddd14e32a877af1ba3e6964c49d7eea61e5821c045136ec432dfda3e34e5c9c"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm"
                >
                  Try ClickFunnels Free
                </Link>
              </div>
            </div>
          </div>
          
          {/* Mobile menu, show/hide based on menu state */}
          <div className="sm:hidden border-t border-gray-200 pt-2 pb-3 space-y-1">
            <Link href="/" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              Home
            </Link>
            <Link href="/review" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              Review
            </Link>
            <Link href="/vs/kartra" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              vs Kartra
            </Link>
            <Link href="/vs/systeme-io" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              vs Systeme.io
            </Link>
            <Link href="/resources" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              Resources
            </Link>
            <Link href="/blog" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/about" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </header>

        {children}
        
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
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link href="/review" className="text-gray-400 hover:text-white">ClickFunnels Review</Link></li>
                  <li><Link href="/resources" className="text-gray-400 hover:text-white">Resources</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Disclosure</h3>
                <p className="text-gray-400">
                  This site contains affiliate links. If you purchase through these links, we may earn a commission at no additional cost to you.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} OneFunnelAway. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
