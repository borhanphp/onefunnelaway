"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Skip breadcrumbs on home page
  if (pathname === "/") {
    return null;
  }
  
  // Create breadcrumb items
  const pathParts = pathname.split("/").filter(part => part);
  const breadcrumbs = [{ label: "Home", href: "/" }];
  
  pathParts.forEach((part, index) => {
    let href = "/" + pathParts.slice(0, index + 1).join("/");
    let label = part
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
      
    // Handle special cases
    if (part === "vs") {
      label = "Comparisons";
    } else if (part === "blog" && index === 0) {
      label = "Blog";
    } else if (part === "systeme-io") {
      label = "Systeme.io";
    }
    
    breadcrumbs.push({ label, href });
  });
  
  // Create schema data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      "item": `https://www.onefunnelaway.com${crumb.href}`
    }))
  };
  
  return (
    <>
      <Script
        id="breadcrumbs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-100 py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.href} className="flex items-center">
                {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-600" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link href={crumb.href} className="text-blue-600 hover:text-blue-800">
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
} 