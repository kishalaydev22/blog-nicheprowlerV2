import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/avatar.png",
  siteUrl: "https://blog.nicheprowler.com",
  siteName: "Nicheprowler Blog",
  siteDescription:
    "Unlock the potential of Software as a Service (SaaS) with Nicheprowler's Blog. Discover expert strategies, innovative ideas, and success stories to elevate your SaaS journey. Join our community and stay ahead in the dynamic world of SaaS innovation!",
  siteThumbnail: "/og-image.png",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ],
};
export default siteConfig;
