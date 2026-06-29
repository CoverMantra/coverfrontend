import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  // Construct the JSON-LD BreadcrumbList schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `https://www.covermantra.com${item.url}`,
    })),
  };

  return (
    <>
      {/* ⚠️ JSON-LD Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 🗺️ Semantic visual breadcrumb navigation */}
      <nav 
        aria-label="Breadcrumb" 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-4 select-none"
      >
        <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-bold text-gray-500">
          <li className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center gap-1 hover:text-[#FF7819] transition-colors"
            >
              <Home size={14} className="shrink-0" />
              <span>Home</span>
            </Link>
          </li>
          
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            // Skip home if already represented
            if (item.url === "/" || item.name.toLowerCase() === "home") return null;

            return (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight size={12} className="text-gray-400 shrink-0" />
                {isLast ? (
                  <span 
                    aria-current="page" 
                    className="text-[#FF7819] font-black truncate max-w-[200px] sm:max-w-xs"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link 
                    href={item.url} 
                    className="hover:text-[#FF7819] transition-colors whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
