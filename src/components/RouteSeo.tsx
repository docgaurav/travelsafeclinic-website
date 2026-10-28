import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import seo from "../seo-routes.json";

const NOT_FOUND = {
  title: "Page not found | TravelSafe Clinic",
  description: "This page does not exist. Return to the TravelSafe Clinic home page.",
};

function upsert(tag: "meta" | "link", key: string, keyValue: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(`${tag}[${key}="${keyValue}"]`);
  if (!el) {
    el = document.createElement(tag);
    el.setAttribute(key, keyValue);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
    const route = seo.routes.find((r) => r.path === path);
    const meta = route ?? NOT_FOUND;
    const url = seo.origin + (route ? route.path : "/");

    document.title = meta.title;
    upsert("meta", "name", "description", "content", meta.description);
    upsert("link", "rel", "canonical", "href", url);
    upsert("meta", "property", "og:title", "content", meta.title);
    upsert("meta", "property", "og:description", "content", meta.description);
    upsert("meta", "property", "og:url", "content", url);
    upsert("meta", "name", "robots", "content", route ? "index,follow" : "noindex,follow");

    const id = "route-breadcrumb";
    document.getElementById(id)?.remove();
    if (route && route.path !== "/") {
      const s = document.createElement("script");
      s.id = id;
      s.type = "application/ld+json";
      s.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: seo.origin + "/" },
          { "@type": "ListItem", position: 2, name: route.name, item: url },
        ],
      });
      document.head.appendChild(s);
    }
  }, [pathname]);

  return null;
}
