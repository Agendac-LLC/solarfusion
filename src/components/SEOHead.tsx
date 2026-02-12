import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: Record<string, unknown>;
}

/**
 * Sets document title, meta description, canonical, and optional JSON-LD per page.
 * Runs on mount and cleans up on unmount.
 */
const SEOHead = ({ title, description, canonical, jsonLd }: SEOHeadProps) => {
  useEffect(() => {
    const prev = document.title;
    document.title = title;

    // Meta description
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const prevDesc = meta?.content ?? "";
    if (meta) meta.content = description;

    // OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    const ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    const prevOgTitle = ogTitle?.content ?? "";
    const prevOgDesc = ogDesc?.content ?? "";
    if (ogTitle) ogTitle.content = title;
    if (ogDesc) ogDesc.content = description;

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const prevCanonical = link?.href ?? "";
    if (canonical) {
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // JSON-LD
    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      script.dataset.seoPage = "true";
      document.head.appendChild(script);
    }

    return () => {
      document.title = prev;
      if (meta) meta.content = prevDesc;
      if (ogTitle) ogTitle.content = prevOgTitle;
      if (ogDesc) ogDesc.content = prevOgDesc;
      if (link && prevCanonical) link.href = prevCanonical;
      if (script) script.remove();
    };
  }, [title, description, canonical, jsonLd]);

  return null;
};

export default SEOHead;
