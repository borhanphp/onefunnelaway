"use client";

import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Script
        id="header-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "One Funnel Away",
            "url": "https://www.onefunnelaway.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.onefunnelaway.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="font-bold text-xl text-blue-600" aria-label="One Funnel Away Home">
                  OneFunnelAway
                </Link>
              </div>
              <nav className="hidden sm:ml-6 sm:flex sm:space-x-8" aria-label="Main Navigation">
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
                    <Link href="/vs/unbounce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      vs Unbounce
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

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button 
                type="button" 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu, show/hide based on menu state */}
        {isMobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="pt-2 pb-3 space-y-1">
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
              <Link href="/vs/unbounce" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                vs Unbounce
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
              <div className="pt-2 pl-3 pr-4">
                <Link 
                  href="https://www.onefunnelaway.com/?aff=5ddd14e32a877af1ba3e6964c49d7eea61e5821c045136ec432dfda3e34e5c9c"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm block text-center"
                >
                  Try ClickFunnels Free
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
} 