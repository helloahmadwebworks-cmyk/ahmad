export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  iconName: string;
  meta: PageMeta;
  heroText: string;
  contentSections: { title: string; body: string | string[] }[];
  features?: string[];
  faqs: { question: string; answer: string }[];
}

export interface CityItem {
  slug: string;
  cityName: string;
  meta: PageMeta;
  intro: string;
  citySpecificText: string;
  services: { title: string; description: string }[];
  whyChoose: string[];
  faqs: { question: string; answer: string }[];
}

export interface IndustryItem {
  slug: string;
  industryName: string;
  meta: PageMeta;
  heroText: string;
  challenges: string[];
  solutions: string[];
  keyFeatures: string[];
  faqs: { question: string; answer: string }[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  client: string;
  location: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  description: string;
  imageAlt: string;
  tag: string;
}

export const siteConfig = {
  name: "Ahmad Web Works",
  founder: "Mohd Ahmad",
  phone: "+91 9084326728",
  whatsappNumber: "919084326728",
  web3FormsKey: "90b83b7b-11f8-4f87-b436-def787f2e56c",
  domain: "ahmadwebworks.com",
  baseUrl: "https://ahmadwebworks.com",
  location: "Aligarh, Uttar Pradesh, India",
  email: "helloahmadwebworks@gmail.com",
  defaultMeta: {
    title: "Expert Website Developer & SEO Services in India | Ahmad Web Works",
    description: "Ahmad Web Works by Mohd Ahmad offers professional website development, Shopify store setup, SEO, Digital Marketing, and Google Business Profile optimization across India.",
  }
};

export const mainServices: ServiceItem[] = [
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development Services",
    shortDesc: "Fast, mobile-friendly, and SEO-ready business websites built to turn visitors into paying customers.",
    iconName: "HiOutlineCode",
    meta: {
      title: "Professional Website Development Services in India | Ahmad Web Works",
      description: "Get a custom, fast, and SEO-optimised business website by Mohd Ahmad. Responsive website design for all industries across India. Free consultation.",
      keywords: ["website development services", "business website design", "custom website developer India", "freelance web developer"],
      h1: "High-Performance Website Development Services in India"
    },
    heroText: "Your website is your 24/7 salesperson. I build fast, mobile-friendly, and SEO-ready business websites that load in under 3 seconds, rank on Google, and guide visitors toward taking action — calling you, filling a form, or messaging you on WhatsApp.",
    contentSections: [
      {
        title: "Why Your Business Needs a Professional Website in 2026",
        body: "A social media page is not enough. Your customers expect a professional website that loads instantly, displays your services clearly, and gives them trust to contact you. Without a high-converting website, you lose ground every day to competitors who appear on page 1 of Google."
      },
      {
        title: "What is Included in Every Website Development Project",
        body: [
          "100% Mobile & Responsive Design for all screen sizes",
          "Built-in On-Page SEO (Meta tags, schema markup, header structure)",
          "Sub-3 Second Load Speed & Core Web Vitals Optimization",
          "WhatsApp Direct Lead Integration & Web3Forms Contact Form",
          "SSL Certificate Security & Domain Configuration",
          "1 Year Free Support & Guidance"
        ]
      }
    ],
    features: [
      "Mobile-First Responsive Layouts",
      "SEO Ready from Day 1",
      "WhatsApp Direct Messaging Integration",
      "Fast 7-14 Day Delivery",
      "Transparent Pricing With Zero Hidden Fees"
    ],
    faqs: [
      {
        question: "How long does it take to complete a business website?",
        answer: "Most standard business websites are completed within 7 to 14 working days once all content and images are provided."
      },
      {
        question: "Will my website be mobile friendly?",
        answer: "Yes, 100%. Every website is tested and optimized across mobile, tablet, and desktop screens for flawless user experience."
      },
      {
        question: "Do you provide hosting and domain assistance?",
        answer: "Yes. I assist you with domain registration, high-speed hosting setup, SSL configuration, and custom email accounts."
      }
    ]
  },
  {
    id: "shopify-development",
    slug: "shopify-development",
    title: "Shopify Store Development",
    shortDesc: "Complete Shopify eCommerce store design, product setup, payment integration, and conversion optimization.",
    iconName: "HiOutlineShoppingBag",
    meta: {
      title: "Shopify Store Development Services India | eCommerce Expert — Ahmad Web Works",
      description: "Launch your online shop with expert Shopify store development by Mohd Ahmad. Custom Shopify design, payment gateway setup, and SEO optimization.",
      keywords: ["Shopify developer India", "Shopify store setup", "eCommerce web development", "Shopify SEO expert"],
      h1: "High-Converting Shopify Store Development in India"
    },
    heroText: "Want to sell products online across India or globally? I build complete, high-converting Shopify eCommerce stores ready to take orders from day one.",
    contentSections: [
      {
        title: "Build an Online Store Built to Sell, Not Just Sit Online",
        body: "From product upload and payment gateway setup to high-converting checkout flows and mobile speed optimization, I craft custom Shopify stores tailored for Indian and international buyers."
      }
    ],
    features: [
      "Custom Shopify Theme Customization",
      "Payment Gateway Integration (Razorpay, PhonePe, Paytm, Stripe, COD)",
      "Product Upload & Category Structuring",
      "Mobile Checkout Optimization",
      "Shopify On-Page SEO"
    ],
    faqs: [
      {
        question: "How long does a Shopify store setup take?",
        answer: "A standard Shopify eCommerce store generally takes 10 to 20 days depending on the catalog size and custom requirements."
      },
      {
        question: "Can you connect Indian payment gateways like Razorpay or PhonePe?",
        answer: "Yes, I integrate Razorpay, PhonePe, Paytm, Cash on Delivery (COD), UPI, and international credit cards seamlessly."
      }
    ]
  },
  {
    id: "seo-services",
    slug: "seo-services",
    title: "Search Engine Optimization (SEO)",
    shortDesc: "Data-driven SEO strategies including Keyword Research, On-Page SEO, Technical SEO, and Content Optimization.",
    iconName: "HiOutlineChartBar",
    meta: {
      title: "Professional SEO Services India | Rank Page 1 Google — Ahmad Web Works",
      description: "Boost your Google rankings with result-driven SEO services by Mohd Ahmad. Technical SEO, on-page optimization, local SEO, and content strategies.",
      keywords: ["SEO services India", "SEO expert India", "rank page 1 Google", "local SEO services"],
      h1: "Results-Driven SEO Services That Bring Page 1 Google Rankings"
    },
    heroText: "Search Engine Optimization is the most powerful long-term marketing investment for your business. I bring targeted organic traffic to your website by ranking your pages on Google Page 1.",
    contentSections: [
      {
        title: "Complete On-Page, Technical & Local SEO",
        body: "A beautiful website without SEO is like a store in the desert. I perform deep keyword research, optimize meta headings, code schema JSON-LD data, fix crawl errors, and build rank-ready content."
      }
    ],
    features: [
      "Comprehensive Keyword Strategy & Competitor Analysis",
      "On-Page Content & Heading Optimization",
      "Technical SEO Audit & Schema Markup Setup",
      "Google Search Console & GA4 Setup",
      "Monthly Traffic & Keyword Ranking Reports"
    ],
    faqs: [
      {
        question: "How long does it take to see SEO results?",
        answer: "SEO is a medium-to-long term strategy. Noticeable ranking improvements usually start appearing within 3 to 6 months depending on competition."
      },
      {
        question: "Do you guarantee Page 1 ranking?",
        answer: "While no honest developer or SEO expert can guarantee exact rank positions (as Google algorithms evolve constantly), I follow proven white-hat SEO methodologies that consistently achieve Page 1 results for clients."
      }
    ]
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing Services",
    shortDesc: "Data-driven ROI campaigns including Google PPC Search Ads, Meta Facebook/Instagram Ads, and Performance Marketing.",
    iconName: "HiOutlineRocketLaunch",
    meta: {
      title: "Digital Marketing Services India | High ROAS PPC & Social Ads — Ahmad Web Works",
      description: "Scale your business lead volume with data-driven digital marketing by Mohd Ahmad. Google Search Ads, Meta Facebook Ads, & performance marketing across India.",
      keywords: ["digital marketing services India", "PPC expert India", "Google ads specialist", "Meta ads agency"],
      h1: "High ROAS Digital Marketing & PPC Ad Campaigns in India"
    },
    heroText: "Drive instant, qualified customer inquiries to your business. I craft and manage data-driven Google PPC Ads and Meta Facebook/Instagram campaigns optimized for maximum return on ad spend (ROAS).",
    contentSections: [
      {
        title: "Turn Ad Spend Into High-Converting Customer Leads",
        body: "Stop wasting money on vague ad campaigns. I build hyper-targeted Google PPC Search campaigns and Meta Lead Ads matched directly with dedicated, high-converting landing pages."
      }
    ],
    features: [
      "Google Search PPC & Display Campaigns",
      "Meta Facebook & Instagram Lead Ads",
      "Conversion Tracking & GA4 Event Analytics",
      "High-Converting Landing Page Alignment",
      "Weekly Ad Performance & ROAS Reporting"
    ],
    faqs: [
      {
        question: "How quickly can digital marketing generate leads?",
        answer: "Paid ad campaigns on Google Ads and Meta can start generating qualified customer leads within 24 to 48 hours of campaign launch."
      },
      {
        question: "Do you set up conversion tracking?",
        answer: "Yes, 100%. I configure Google Tag Manager, GA4 event tracking, Meta Pixel, and form submission events so you can measure exact cost-per-lead."
      }
    ]
  },
  {
    id: "google-business-profile-optimization",
    slug: "google-business-profile-optimization",
    title: "Google Business Profile Optimization",
    shortDesc: "Dominate Google Maps local search in your city. Attract direct customer calls, directions, and walk-in leads.",
    iconName: "HiOutlineMapPin",
    meta: {
      title: "Google Business Profile Optimization India | Rank Google Maps — Ahmad Web Works",
      description: "Optimize your Google Business Profile (GMB) to dominate local Google Maps search, gain customer phone calls, and get walk-in clients.",
      keywords: ["Google Business Profile optimization", "GMB expert India", "rank Google Maps", "local SEO Aligarh"],
      h1: "Google Business Profile (GMB) Optimization for Local Dominance"
    },
    heroText: "If you run a local business — clinic, restaurant, gym, salon, or service store — your Google Business Profile is your most valuable lead generation channel.",
    contentSections: [
      {
        title: "Get Found When Local Customers Search 'Near Me'",
        body: "I fully optimize your Google Business Profile with accurate category selection, geotagged photos, keyword-rich services, product listings, Q&As, and a review growth system."
      }
    ],
    features: [
      "GMB Profile Setup & Verification Guidance",
      "Category & Keyword Optimization",
      "Geotagged Photo Uploads & Visual Enhancement",
      "Services & Product Showcase Setup",
      "Review Management & QR Code Strategy"
    ],
    faqs: [
      {
        question: "Can GMB help me get more phone calls directly from Google?",
        answer: "Yes! A fully optimized Google Business Profile displays your call button, directions link, and customer reviews prominently in the 3-Pack Maps local result."
      }
    ]
  },
  {
    id: "landing-page-design",
    slug: "landing-page-design",
    title: "Landing Page Design",
    shortDesc: "High-converting, distraction-free landing pages built to turn ad traffic from Google & Facebook into leads.",
    iconName: "HiOutlineCursorArrowRays",
    meta: {
      title: "High-Converting Landing Page Design India | Ahmad Web Works",
      description: "Boost your Google & Facebook ad conversions with custom landing page design by Mohd Ahmad. Fast loading, high converting, and mobile ready.",
      keywords: ["landing page design India", "conversion rate optimization", "PPC landing page developer"],
      h1: "High-Converting Landing Pages Built to Maximize Ad ROI"
    },
    heroText: "Running Google Ads or Facebook Meta Ads? Sending ad traffic to your homepage wastes money. You need a dedicated, distraction-free landing page designed for conversions.",
    contentSections: [
      {
        title: "Turn Ad Clicks Into Paying Clients",
        body: "I craft landing pages with compelling headlines, strong trust proof, clear benefit breakdowns, friction-free forms, and prominent WhatsApp CTA triggers."
      }
    ],
    features: [
      "Distraction-Free Conversion Focused Design",
      "Sub-2 Second Lightning Fast Load Time",
      "A/B Test Ready Page Structure",
      "WhatsApp & Lead Form Trigger Integration",
      "Mobile Optimized Micro-Interactions"
    ],
    faqs: [
      {
        question: "Why can't I just send ad traffic to my homepage?",
        answer: "Homepages have multiple links and general information, which distracts paid traffic. A landing page has one focused message and one clear call-to-action."
      }
    ]
  },
  {
    id: "website-speed-optimization",
    slug: "website-speed-optimization",
    title: "Website Speed Optimization",
    shortDesc: "Drastically speed up slow WordPress or Shopify sites, improve PageSpeed scores, and pass Core Web Vitals.",
    iconName: "HiOutlineBolt",
    meta: {
      title: "Website Speed Optimization Services India | Pass Core Web Vitals — Ahmad Web Works",
      description: "Fix slow website speeds on WordPress & Shopify. Improve Google PageSpeed scores to 90+, lower bounce rates, and boost rankings.",
      keywords: ["website speed optimization", "fix slow WordPress site", "Google Core Web Vitals expert"],
      h1: "Speed Up Your Website & Pass Google Core Web Vitals"
    },
    heroText: "A slow website kills your Google rankings and drives 53% of mobile visitors away before the page even loads. I optimize your website code, images, and server response.",
    contentSections: [
      {
        title: "Get 90+ PageSpeed Scores & Sub-2s Load Times",
        body: "I perform deep code optimization: compressing media, minifying JS/CSS assets, implementing advanced caching, cleaning database bloat, and deferring non-critical scripts."
      }
    ],
    features: [
      "Image WebP Compression & Lazy Loading",
      "Minification of HTML, CSS, and JS Files",
      "Browser Caching & CDN Setup",
      "Database Optimization & Plugin Audit",
      "Core Web Vitals LCP, CLS, and INP Fixes"
    ],
    faqs: [
      {
        question: "What PageSpeed score can I expect after optimization?",
        answer: "I aim for 90+ performance scores on desktop and mobile, with load times under 2.5 seconds."
      }
    ]
  },
  {
    id: "website-redesign",
    slug: "website-redesign",
    title: "Website Redesign Services",
    shortDesc: "Modernize your outdated site into a sleek, high-performing, mobile-first lead engine with modern aesthetics.",
    iconName: "HiOutlineSparkles",
    meta: {
      title: "Website Redesign Services India | Modernize Your Site — Ahmad Web Works",
      description: "Upgrade your outdated website with a modern redesign by Mohd Ahmad. Improve visual design, mobile speed, SEO rankings, and conversion rates.",
      keywords: ["website redesign services", "modernize business website", "redesign website India"],
      h1: "Transform Your Outdated Site Into a Modern Lead Engine"
    },
    heroText: "Is your existing website outdated, slow, or failing to generate leads? Upgrade to a modern, world-class light-themed digital experience built to convert.",
    contentSections: [
      {
        title: "Rebuild From the Ground Up with SEO & Conversions in Mind",
        body: "A website redesign is not just a fresh coat of paint. We audit existing URL structures to preserve rankings, upgrade UI spacing and typography, and build a conversion framework."
      }
    ],
    features: [
      "Complete UI/UX Visual Modernization",
      "SEO URL Structure & 301 Redirect Preservation",
      "Mobile-First Responsive Framework",
      "Enhanced Content Formatting & Typography",
      "Improved Conversion Pathways"
    ],
    faqs: [
      {
        question: "Will redesigning my website affect my existing Google rankings?",
        answer: "I implement strict 301 redirect mapping and preserve your meta tags so your existing Google rankings are protected and boosted."
      }
    ]
  }
];

export const citiesList: CityItem[] = [
  {
    slug: "website-developer-aligarh",
    cityName: "Aligarh",
    meta: {
      title: "Website Developer in Aligarh | SEO & Web Development Services — Ahmad Web Works",
      description: "Looking for the best website developer in Aligarh? Mohd Ahmad offers website design, SEO, Shopify stores, digital marketing, and Google Maps optimization in Aligarh.",
      keywords: ["website developer Aligarh", "web designer in Aligarh", "SEO expert Aligarh", "Shopify developer Aligarh"],
      h1: "Website Developer in Aligarh — Custom Web Design, SEO & Digital Growth"
    },
    intro: "Are you a business owner in Aligarh looking for a reliable, results-driven website developer? Whether you run a shop in Centre Point, a clinic near Dodhpur, a manufacturing unit, or a university service around AMU — Ahmad Web Works is your direct local partner.",
    citySpecificText: "Based right here in Aligarh, Mohd Ahmad offers face-to-face or WhatsApp-first support to help Aligarh businesses establish a top-ranking digital presence across Uttar Pradesh and India.",
    services: [
      { title: "Website Development in Aligarh", description: "Custom business websites for Aligarh retail shops, doctors, consultants, and manufacturers." },
      { title: "Local SEO & Google Maps in Aligarh", description: "Rank your Aligarh business in the Google Maps 3-Pack so local customers call you first." },
      { title: "Shopify Store Setup in Aligarh", description: "Sell products made in Aligarh directly to buyers across India with automated shipping & UPI payments." },
      { title: "Digital Marketing in Aligarh", description: "Run high ROAS Google Ads & Meta Facebook campaigns to reach Aligarh customers." }
    ],
    whyChoose: [
      "Direct Founder Interaction: Work directly with Mohd Ahmad without middleman agencies.",
      "Local Aligarh Market Knowledge: We know how local customers in Aligarh search and choose businesses.",
      "Fast 7 to 14 Days Delivery & Transparent Pricing."
    ],
    faqs: [
      { question: "Can we meet in person in Aligarh to discuss my project?", answer: "Yes! As an Aligarh-based developer, we can connect over coffee or coordinate via WhatsApp." }
    ]
  },
  {
    slug: "website-developer-delhi",
    cityName: "Delhi",
    meta: {
      title: "Website Developer in Delhi | SEO & Web Development Services — Ahmad Web Works",
      description: "Professional website developer serving businesses in Delhi NCR. Get fast, SEO-optimized websites, Shopify store setup, digital marketing, and Google ranking services.",
      keywords: ["website developer Delhi", "web development company Delhi", "SEO expert Delhi"],
      h1: "Website Developer in Delhi — High-Performance Web Design & SEO"
    },
    intro: "Are you a business owner in Delhi looking for a senior website developer who delivers agency quality without agency pricing? With millions of daily searches in Delhi, appearing on Google Page 1 is critical.",
    citySpecificText: "In a competitive market like Delhi NCR, a fast-loading, SEO-tuned website gives your brand an instant edge over competitors.",
    services: [
      { title: "Website Development in Delhi", description: "Custom websites for Delhi startups, agencies, retail brands, and professional services." },
      { title: "SEO & Digital Marketing in Delhi", description: "Target competitive Delhi keywords and gain qualified organic & paid inquiries." }
    ],
    whyChoose: ["Direct communication on WhatsApp", "Proven SEO methodology", "Fast delivery"],
    faqs: [{ question: "How do you serve clients in Delhi?", answer: "All project deliverables, updates, and reviews happen seamlessly via WhatsApp, video call, and staging links." }]
  },
  {
    slug: "website-developer-noida",
    cityName: "Noida",
    meta: {
      title: "Website Developer in Noida | SEO & Custom Web Design — Ahmad Web Works",
      description: "Top-rated website developer for Noida businesses and tech startups. Custom Next.js & WordPress web development, SEO, digital marketing, and Shopify solutions.",
      keywords: ["website developer Noida", "web design company Noida", "SEO expert Noida"],
      h1: "Website Developer in Noida — Modern Web Development & SEO Solutions"
    },
    intro: "Noida is a thriving hub for tech startups, real estate firms, and commercial services. Stand out in Noida with a ultra-fast, modern light-themed website.",
    citySpecificText: "Whether you operate in Sector 62, Expressway, or Greater Noida, we craft digital platforms designed for growth.",
    services: [{ title: "Startup & Business Websites", description: "Modern Web platforms for Noida enterprises." }],
    whyChoose: ["Modern UI Aesthetics", "SEO-First Codebase"],
    faqs: [{ question: "Do you build custom web apps?", answer: "Yes, we specialize in Next.js and custom web development." }]
  },
  {
    slug: "website-developer-gurugram",
    cityName: "Gurugram",
    meta: {
      title: "Website Developer in Gurugram | SEO & Web Design — Ahmad Web Works",
      description: "Get a corporate-grade website built for your Gurugram business. Mohd Ahmad provides modern web development, SEO, digital marketing, and conversion optimization.",
      keywords: ["website developer Gurugram", "web developer Gurgaon", "SEO expert Gurugram"],
      h1: "Website Developer in Gurugram — Premium Web Design for Enterprises"
    },
    intro: "Gurugram demands corporate-grade digital excellence. We build premium, world-class websites that reflect your brand authority.",
    citySpecificText: "Matching the aesthetic and functional standards of corporate Cyber City and Golf Course Road businesses.",
    services: [{ title: "Corporate Web Design & Marketing", description: "Ultra-sleek, light-mode corporate websites for Gurugram firms." }],
    whyChoose: ["World-class Framer/Stripe level aesthetics", "High conversions"],
    faqs: [{ question: "What is your pricing model?", answer: "Transparent fixed quotes with clear deliverables." }]
  },
  {
    slug: "website-developer-mumbai",
    cityName: "Mumbai",
    meta: {
      title: "Website Developer in Mumbai | SEO & Shopify Expert — Ahmad Web Works",
      description: "Freelance website developer serving Mumbai brands. High-converting Shopify eCommerce stores, business web design, digital marketing, and SEO services.",
      keywords: ["website developer Mumbai", "web design Mumbai", "Shopify developer Mumbai"],
      h1: "Website Developer in Mumbai — High-Converting Web & Shopify Solutions"
    },
    intro: "In India's financial and fashion capital, your brand needs a digital presence that stands out immediately.",
    citySpecificText: "Helping Mumbai D2C brands, financial advisors, and boutique businesses achieve maximum online reach.",
    services: [{ title: "Shopify & D2C Stores in Mumbai", description: "Built for speed and high conversion rates." }],
    whyChoose: ["Direct access to founder", "Lightning-fast turnaround"],
    faqs: [{ question: "Can you handle high-traffic eCommerce stores?", answer: "Yes, our Shopify and Next.js builds are engineered for high scalability." }]
  },
  {
    slug: "website-developer-bengaluru",
    cityName: "Bengaluru",
    meta: {
      title: "Website Developer in Bengaluru | Tech & Startup Web Design — Ahmad Web Works",
      description: "Expert website development and SEO for Bengaluru startups, SaaS, and businesses. Modern tech stack, digital marketing, and sub-2 second performance.",
      keywords: ["website developer Bengaluru", "web developer Bangalore", "SEO expert Bengaluru"],
      h1: "Website Developer in Bengaluru — Next-Gen Web Design for Startups"
    },
    intro: "Serving India's Silicon Valley with ultra-fast Next.js and clean modern frontend engineering.",
    citySpecificText: "Build websites that meet the tech-savvy standards of Bengaluru founders and customers.",
    services: [{ title: "High-Speed Web Development & Marketing", description: "Sub-2s load times and Core Web Vitals optimization." }],
    whyChoose: ["Modern Tech Stack (Next.js 15, Tailwind, Framer Motion)", "Clean Code"],
    faqs: [{ question: "Why choose custom web dev over basic WordPress templates?", answer: "Custom Next.js provides unmatched speed, security, and ranking capabilities." }]
  },
  {
    slug: "website-developer-hyderabad",
    cityName: "Hyderabad",
    meta: {
      title: "Website Developer in Hyderabad | SEO & Web Services — Ahmad Web Works",
      description: "Professional website developer serving Hyderabad businesses, pharma, real estate, and retail. SEO-ready websites and digital marketing that generate leads.",
      keywords: ["website developer Hyderabad", "web design Hyderabad", "SEO expert Hyderabad"],
      h1: "Website Developer in Hyderabad — Business Websites & SEO"
    },
    intro: "From HITEC City tech firms to local healthcare clinics in Hyderabad, we build websites that rank and convert.",
    citySpecificText: "Tailored digital strategies for Hyderabad's expanding market.",
    services: [{ title: "Business Web Development", description: "SEO-ready lead generation websites." }],
    whyChoose: ["Direct WhatsApp communication", "Results guaranteed focus"],
    faqs: [{ question: "How long does a website take?", answer: "7 to 14 days standard delivery." }]
  },
  {
    slug: "website-developer-chennai",
    cityName: "Chennai",
    meta: {
      title: "Website Developer in Chennai | Custom Web Design & SEO — Ahmad Web Works",
      description: "Freelance web developer for Chennai enterprises, healthcare providers, and eCommerce stores. Professional SEO, digital marketing, and Google Maps optimization.",
      keywords: ["website developer Chennai", "web designer Chennai", "SEO expert Chennai"],
      h1: "Website Developer in Chennai — Reliable Digital Services for Growth"
    },
    intro: "Empowering Chennai businesses with fast, secure, and SEO-optimized web solutions.",
    citySpecificText: "Build long-term digital authority in the Chennai marketplace.",
    services: [{ title: "SEO & Web Development", description: "Comprehensive search engine optimization and responsive design." }],
    whyChoose: ["Transparent quotes", "SEO built-in"],
    faqs: [{ question: "Do you handle multilingual content?", answer: "Yes, we structure websites for multi-language audience support." }]
  },
  {
    slug: "website-developer-pune",
    cityName: "Pune",
    meta: {
      title: "Website Developer in Pune | SEO & Web Development — Ahmad Web Works",
      description: "Looking for a top website developer in Pune? Custom web development, digital marketing, SEO services, and Shopify setup for Pune businesses.",
      keywords: ["website developer Pune", "web design Pune", "SEO services Pune"],
      h1: "Website Developer in Pune — Modern Web Design & SEO"
    },
    intro: "Helping Pune's educational institutes, IT consultancies, manufacturing firms, and startups grow online.",
    citySpecificText: "Stand out in Pune with clean light-theme design and proven Google ranking tactics.",
    services: [{ title: "Web Design & Speed Optimization", description: "Pass Core Web Vitals and attract Pune clients." }],
    whyChoose: ["Dedicated founder support", "Proven lead generation"],
    faqs: [{ question: "What support is provided after launch?", answer: "We provide post-launch maintenance, updates, and SEO expansion." }]
  },
  {
    slug: "website-developer-ahmedabad",
    cityName: "Ahmedabad",
    meta: {
      title: "Website Developer in Ahmedabad | SEO & Shopify Stores — Ahmad Web Works",
      description: "Get high-converting website development, digital marketing & SEO in Ahmedabad. Custom Shopify store creation, business websites, and Google Maps optimization.",
      keywords: ["website developer Ahmedabad", "web design Ahmedabad", "Shopify developer Ahmedabad"],
      h1: "Website Developer in Ahmedabad — eCommerce & Web Solutions"
    },
    intro: "Ahmedabad is a powerhouse of commerce, textiles, and manufacturing. We build websites that turn digital traffic into business revenue.",
    citySpecificText: "Helping Gujarat business owners take their products and services to national and global markets.",
    services: [{ title: "eCommerce & Business Web Design", description: "Shopify and custom business portals." }],
    whyChoose: ["Business-focused ROI", "No agency overhead costs"],
    faqs: [{ question: "How do I get started?", answer: "Simply send a message on WhatsApp +91 9084326728 for a free quote." }]
  }
];

export const industriesList: IndustryItem[] = [
  {
    slug: "website-for-coaches",
    industryName: "Coaches & Consultants",
    meta: {
      title: "Website Development for Coaches & Consultants | Ahmad Web Works",
      description: "Get a high-converting website for your coaching or consulting business. Personal branding, lead capture, appointment booking & SEO by Mohd Ahmad.",
      keywords: ["website for coaches", "consultant website design", "personal branding website India"],
      h1: "High-Converting Websites for Coaches & Consultants"
    },
    heroText: "Position yourself as an authority in your niche. We build sleek, personal-brand websites equipped with lead magnets, appointment scheduling, and WhatsApp consultation booking.",
    challenges: ["Getting client trust online", "Low booking conversions", "Relying solely on social media"],
    solutions: ["Authority-building layout with client testimonials", "Direct Calendly/WhatsApp appointment booking", "SEO to get discovered by clients searching on Google"],
    keyFeatures: ["Personal Brand Story Section", "Video Testimonial Highlights", "Lead Magnet / Free Resource Download", "Instant WhatsApp / Call Booking CTA"],
    faqs: [{ question: "Can I connect my Calendly or booking software?", answer: "Yes! We integrate Calendly, Google Calendar, or direct WhatsApp scheduling forms." }]
  },
  {
    slug: "website-for-clinics",
    industryName: "Clinics, Doctors & Healthcare",
    meta: {
      title: "Website Development for Clinics & Doctors India | Ahmad Web Works",
      description: "Professional clinic website design and Google Maps local SEO for doctors & healthcare providers across India. Drive patient appointments.",
      keywords: ["clinic website design", "doctor website developer India", "healthcare SEO"],
      h1: "Medical & Clinic Website Design That Drives Patient Appointments"
    },
    heroText: "Patients search Google before visiting a doctor. We build trustworthy, easy-to-navigate clinic websites that rank in Google Maps and make booking appointments effortless.",
    challenges: ["Lack of online patient trust", "Missing from local Google Maps 3-Pack", "Outdated clinic information"],
    solutions: ["Clean medical layout displaying treatments, doctor credentials, and clinic timings", "Google Maps 3-Pack Local SEO optimization", "One-tap call and WhatsApp appointment triggers"],
    keyFeatures: ["Doctor Profiles & Qualification Showcase", "Treatment & Specialty Pages", "Interactive Patient Reviews", "Direct Call & Map Directions Buttons"],
    faqs: [{ question: "Will my clinic show up when local patients search 'doctor near me'?", answer: "Yes, we combine clinic website design with Google Business Profile local SEO." }]
  },
  {
    slug: "website-for-restaurants",
    industryName: "Restaurants, Cafes & Food",
    meta: {
      title: "Website Development for Restaurants & Cafes India | Ahmad Web Works",
      description: "Stunning website design for restaurants, cafes, and food businesses. Online digital menus, Google Maps ranking, and table reservations.",
      keywords: ["restaurant website design India", "cafe website developer", "food business SEO"],
      h1: "Visually Stunning Websites for Restaurants, Cafes & Food Brands"
    },
    heroText: "Whet your customers' appetite before they walk through your doors. We build mobile-first restaurant websites featuring digital menus, food photography showcases, and Google Maps local ranking.",
    challenges: ["Dependence on food delivery apps with high commissions", "Outdated paper menus", "Low local foot traffic"],
    solutions: ["Mobile-friendly interactive digital QR menu", "Google Maps optimization for local food searches", "Direct WhatsApp food ordering system"],
    keyFeatures: ["Interactive Digital Menu", "High-Resolution Food Gallery", "Location, Hours & Google Map Link", "WhatsApp Order & Table Reservation Button"],
    faqs: [{ question: "Can customers view my menu on their mobile phones easily?", answer: "Yes, our mobile digital menus load in under 2 seconds and look stunning on smartphone screens." }]
  },
  {
    slug: "website-for-gyms",
    industryName: "Gyms & Fitness Studios",
    meta: {
      title: "Website Development for Gyms & Fitness Studios | Ahmad Web Works",
      description: "Attract new gym members with a high-energy fitness website design. Local SEO, membership plans showcase, free trial booking by Mohd Ahmad.",
      keywords: ["gym website design India", "fitness trainer website", "gym local SEO"],
      h1: "High-Energy Websites for Gyms & Fitness Studios"
    },
    heroText: "Turn local fitness enthusiasts into paying gym members. We build vibrant, high-energy websites showcasing gym facilities, trainer credentials, membership pricing, and free pass signups.",
    challenges: ["High local competition", "Low membership inquiries", "Difficulty promoting membership offers"],
    solutions: ["High-impact visual gym tour gallery", "Clear membership pricing tier cards", "Free 1-Day Pass lead capture form"],
    keyFeatures: ["Facility & Equipment Photo Gallery", "Trainer Profiles & Specializations", "Transparent Membership Pricing Grid", "Free Trial Pass Lead Form"],
    faqs: [{ question: "How can a website help my gym get more members?", answer: "By ranking on Google when people search 'best gym near me' and offering an irresistible Free Day Pass download." }]
  },
  {
    slug: "website-for-real-estate",
    industryName: "Real Estate & Builders",
    meta: {
      title: "Website Development for Real Estate Agents & Builders | Ahmad Web Works",
      description: "High-converting property website design for real estate agents, property dealers, and property developers. Showcase listings and capture buyer leads.",
      keywords: ["real estate website design India", "property portal developer", "real estate lead generation"],
      h1: "Lead-Generating Websites for Real Estate Agents & Developers"
    },
    heroText: "In real estate, lead quality is everything. We design high-converting property showcase websites that capture serious buyers and tenants with detailed property features and direct WhatsApp inquiries.",
    challenges: ["Relying on expensive third-party property portals", "Low quality property leads", "Unorganized property portfolio"],
    solutions: ["Custom branded property showcase portal", "Filterable property listings with photo & video tours", "Instant WhatsApp lead capture triggers"],
    keyFeatures: ["Filterable Property Catalog", "High-Res Image Carousel & Floor Plans", "Interactive Map Location Highlights", "Direct Buyer Inquiry & Brochure Request Form"],
    faqs: [{ question: "Can prospective buyers request property brochures directly?", answer: "Yes, we set up automated lead capture forms and instant PDF/WhatsApp brochure downloads." }]
  }
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "project-1",
    title: "Dr. Healthcare Specialty Clinic",
    category: "Clinic & Healthcare Website",
    client: "Dr. Healthcare",
    location: "Aligarh / Delhi",
    deliverables: ["Custom Web Design", "Local SEO", "Google Business Profile", "WhatsApp Booking"],
    metrics: [
      { label: "Google Maps Rank", value: "#1 in 3-Pack" },
      { label: "Monthly Patient Inquiries", value: "140+" },
      { label: "Load Speed", value: "1.2 Seconds" }
    ],
    description: "Built a mobile-first clinic website with treatment breakdowns, doctor credentials, direct phone call triggers, and Google Maps local SEO optimization.",
    imageAlt: "Dr Healthcare Clinic Website Mockup",
    tag: "Healthcare & Local SEO"
  },
  {
    id: "project-2",
    title: "Urban Fit Studio & Gym",
    category: "Gym & Fitness Website",
    client: "Urban Fit Studio",
    location: "Noida",
    deliverables: ["Next.js Web Design", "Membership Pricing Grid", "Free Day Pass Lead Capture"],
    metrics: [
      { label: "Conversion Rate", value: "14.2%" },
      { label: "Lead Inquiries", value: "95+/month" },
      { label: "PageSpeed Score", value: "98/100" }
    ],
    description: "High-energy gym website featuring facility photo galleries, trainer profiles, interactive membership tier cards, and free pass lead triggers.",
    imageAlt: "Urban Fit Studio Gym Website Mockup",
    tag: "Fitness & Lead Gen"
  },
  {
    id: "project-3",
    title: "Spicy Bites Fine Dining",
    category: "Restaurant Digital Menu & Web",
    client: "Spicy Bites Cafe",
    location: "Aligarh",
    deliverables: ["Mobile Digital Menu", "Google Business Profile", "Table Reservation Form"],
    metrics: [
      { label: "Menu QR Views", value: "5,000+/mo" },
      { label: "Direct Map Calls", value: "210+/mo" },
      { label: "Google Rating", value: "4.9 Stars" }
    ],
    description: "Designed a mobile-first digital menu website for a leading local cafe, integrated with Google Maps local SEO and WhatsApp food ordering.",
    imageAlt: "Spicy Bites Restaurant Website Mockup",
    tag: "Food & Local Business"
  },
  {
    id: "project-4",
    title: "Apex Luxe Properties",
    category: "Real Estate Property Portal",
    client: "Apex Realtors",
    location: "Gurugram / Noida",
    deliverables: ["Property Listing Catalog", "High-Res Image Gallery", "Brochure Lead Capture"],
    metrics: [
      { label: "Buyer Lead Inquiries", value: "85+/month" },
      { label: "Avg Session Duration", value: "3m 45s" },
      { label: "Google Page 1 Ranking", value: "8 Keywords" }
    ],
    description: "Built a luxury property showcase website with filterable residential listings, downloadable floor plans, and instant WhatsApp inquiry triggers.",
    imageAlt: "Apex Luxe Properties Web Design Mockup",
    tag: "Real Estate & Lead Gen"
  },
  {
    id: "project-5",
    title: "Pure Organics D2C Shopify Store",
    category: "Shopify eCommerce Setup",
    client: "Pure Organics India",
    location: "Mumbai / All India",
    deliverables: ["Shopify Store Setup", "Razorpay Payment Gateway", "Product SEO", "COD Integration"],
    metrics: [
      { label: "Monthly Orders", value: "450+" },
      { label: "Mobile Checkout Speed", value: "1.8s" },
      { label: "Return on Ad Spend", value: "4.2x" }
    ],
    description: "Complete Shopify eCommerce store launch with UPI and Razorpay payments, automated order notifications, mobile speed optimization, and product SEO.",
    imageAlt: "Pure Organics Shopify Store Mockup",
    tag: "Shopify & eCommerce"
  }
];

export const globalFaqs = [
  {
    question: "How much does a website cost in India with Ahmad Web Works?",
    answer: "Pricing depends on the type and scope of the website. A standard business website starts from an affordable baseline, while custom Shopify eCommerce platforms or large portals vary based on features. Contact Mohd Ahmad on WhatsApp at +91 9084326728 or email helloahmadwebworks@gmail.com for a free, transparent quote."
  },
  {
    question: "How long does it take to build a complete business website?",
    answer: "Most standard business websites are completed within 7 to 14 working days. Shopify stores take 10 to 20 days. Timelines are communicated upfront before work begins."
  },
  {
    question: "Will my website rank on Google search results?",
    answer: "Every website built by Ahmad Web Works includes built-in on-page SEO, speed optimization, and schema markup as standard. For competitive keywords and dedicated ranking campaigns, I also offer monthly SEO & Digital Marketing service plans."
  },
  {
    question: "Do you work with clients outside Aligarh?",
    answer: "Yes! I work with business clients across India including Delhi, Noida, Gurugram, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, and Ahmedabad. All project communication and delivery happen smoothly via WhatsApp, email (helloahmadwebworks@gmail.com), and video calls."
  },
  {
    question: "Why should I work with Mohd Ahmad instead of an agency?",
    answer: "When you choose Ahmad Web Works, you work directly with founder Mohd Ahmad — no project managers, no junior hand-offs, and no agency overhead costs. You get senior expertise, direct WhatsApp updates, and faster execution."
  }
];
