import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: 'ClickFunnels Blog - Sales Funnel Tips, Guides & Tutorials',
  description: 'Learn how to build effective sales funnels with ClickFunnels. Get actionable tips, step-by-step tutorials, case studies, and expert guides.',
  keywords: ['ClickFunnels blog', 'sales funnel tips', 'funnel marketing', 'ClickFunnels tutorials', 'digital marketing guides'],
  alternates: {
    canonical: 'https://www.onefunnelaway.com/blog'
  }
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'clickfunnels-beginners-guide',
      title: 'The Ultimate Beginner\'s Guide to ClickFunnels in 2023',
      excerpt: 'Learn how to set up your first sales funnel from scratch and start generating leads and sales right away, even if you have zero technical skills.',
      date: 'June 20, 2023',
      category: 'Tutorials',
      imageUrl: '/blog-placeholder.jpg',
      slug: 'clickfunnels-beginners-guide'
    },
    {
      id: 'clickfunnels-vs-builderall',
      title: 'ClickFunnels vs BuilderAll: Which is Better for Digital Marketers?',
      excerpt: 'A comprehensive comparison of features, pricing, and use cases to help you choose the right platform for your business needs.',
      date: 'May 15, 2023',
      category: 'Comparisons',
      imageUrl: '/blog-placeholder.jpg',
      slug: 'clickfunnels-vs-builderall'
    },
    {
      id: 'best-clickfunnels-templates',
      title: '10 Best ClickFunnels Templates That Convert Like Crazy',
      excerpt: 'Discover high-converting funnel templates for different industries and business models, with real-world examples and conversion rates.',
      date: 'April 8, 2023',
      category: 'Resources',
      imageUrl: '/blog-placeholder.jpg',
      slug: 'best-clickfunnels-templates'
    },
    {
      id: 'clickfunnels-email-automation',
      title: 'How to Set Up Powerful Email Automation in ClickFunnels',
      excerpt: 'Step-by-step guide to creating automated email sequences that nurture leads, close sales, and create repeat customers.',
      date: 'March 22, 2023',
      category: 'Tutorials',
      imageUrl: '/blog-placeholder.jpg',
      slug: 'clickfunnels-email-automation'
    },
    {
      id: 'clickfunnels-case-study',
      title: 'Case Study: How I Generated $50,000 in 30 Days with ClickFunnels',
      excerpt: 'A detailed breakdown of my most successful funnel, including the exact pages, copy, and traffic sources that led to massive success.',
      date: 'February 14, 2023',
      category: 'Case Studies',
      imageUrl: '/blog-placeholder.jpg',
      slug: 'clickfunnels-case-study'
    },
    {
      id: 'clickfunnels-affiliate-bootcamp',
      title: 'My Honest Review of the ClickFunnels Affiliate Bootcamp',
      excerpt: 'Is the One Funnel Away Challenge worth it? Here\'s my experience going through the program and the results I achieved.',
      date: 'January 5, 2023',
      category: 'Reviews',
      imageUrl: '/blog-placeholder.jpg',
      slug: 'clickfunnels-affiliate-bootcamp'
    }
  ];
  
  // Create schema data for blog posts
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "headline": "ClickFunnels Blog - Sales Funnel Tips & Resources",
    "description": "Learn how to build effective sales funnels with ClickFunnels. Get actionable tips, step-by-step tutorials, case studies, and expert guides.",
    "url": "https://www.onefunnelaway.com/blog",
    "author": {
      "@type": "Person",
      "name": "One Funnel Away Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "One Funnel Away",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.onefunnelaway.com/logo.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": new Date(post.date).toISOString(),
      "url": `https://www.onefunnelaway.com/blog/${post.slug}`,
      "author": {
        "@type": "Person",
        "name": "One Funnel Away Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "One Funnel Away",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.onefunnelaway.com/logo.png"
        }
      },
      "image": {
        "@type": "ImageObject",
        "url": `https://www.onefunnelaway.com${post.imageUrl}`
      }
    }))
  };

  return (
    <main className="font-sans">
      <Script
        id="blog-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogListSchema)
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            ClickFunnels Blog
          </h1>
          <p className="text-xl mb-8 max-w-3xl">
            Actionable tips, tutorials, and resources to help you build successful sales funnels
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="bg-white border-b py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-6 text-sm">
            <Link href="/blog" className="whitespace-nowrap font-medium text-blue-600 border-b-2 border-blue-600 pb-1" aria-current="page">
              All Posts
            </Link>
            <Link href="/blog?category=tutorials" className="whitespace-nowrap font-medium text-gray-600 hover:text-blue-600 pb-1">
              Tutorials
            </Link>
            <Link href="/blog?category=comparisons" className="whitespace-nowrap font-medium text-gray-600 hover:text-blue-600 pb-1">
              Comparisons
            </Link>
            <Link href="/blog?category=case-studies" className="whitespace-nowrap font-medium text-gray-600 hover:text-blue-600 pb-1">
              Case Studies
            </Link>
            <Link href="/blog?category=resources" className="whitespace-nowrap font-medium text-gray-600 hover:text-blue-600 pb-1">
              Resources
            </Link>
            <Link href="/blog?category=reviews" className="whitespace-nowrap font-medium text-gray-600 hover:text-blue-600 pb-1">
              Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Post List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                <div className="relative h-48 w-full">
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={blogPosts.indexOf(post) < 3}
                    loading={blogPosts.indexOf(post) < 3 ? "eager" : "lazy"}
                  />
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-medium hover:text-blue-800"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to Start Building Your Own Funnels?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Join thousands of entrepreneurs who are growing their businesses with ClickFunnels
          </p>
          <Link 
            href="https://www.onefunnelaway.com/?aff=5ddd14e32a877af1ba3e6964c49d7eea61e5821c045136ec432dfda3e34e5c9c"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition duration-300"
          >
            Start Your 14-Day Free Trial
          </Link>
        </div>
      </section>
    </main>
  );
} 