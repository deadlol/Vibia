import { ContentDictionary, Service } from '../types';

export const content: Record<'en' | 'fa', ContentDictionary> = {
  en: {
    homeTitle: "Enterprise Digital Transformation & Intelligent Software Solutions",
    homeSubtitle: "We engineer secure enterprise platforms, AI automation, and custom software with guaranteed SLA, rigorous code auditing, and seamless delivery.",
    navWorks: "SERVICES",
    navAbout: "ABOUT AGENCY",
    navContact: "CONTACT",
    selectedProjects: "OUR SERVICES",
    viewProject: "VIEW",
    close: "CLOSE",
    aboutTitle: "ABOUT OUR AGENCY",
    aboutBigTitle: "Bridging the gap between complex industrial operations and smart software engineering",
    aboutBioPara1: "We are a B2B digital transformation agency specializing in custom enterprise software and AI integration. We manage the entire technical lifecycle through a strict drop-servicing and QA model, allowing you to focus entirely on scaling your business.",
    aboutBioPara2: "Backed by an internal core of tech leads and elite vetted developers, we strictly oversee code architecture, cybersecurity standards, and timeline compliance to guarantee a flawless product delivery.",
    projectsHeader: "OUR PROJECTS",
    prj1: "Armin Amani's Portfolio",
    prj2: "A Video Game's Landing Page",
    prj3: "Nexus Crypto Tracker",
    prj4: "Xora's Landing Page",
    getInTouch: "Get in touch",
    phoneLabel: "PHONE",
    emailLabel: "EMAIL",
    creditsLabel: "CREDITS",
    phoneValue: "+989964222821",
    emailValue: "vibia.studio@gmail.com",
    creditsValue: "© 2026 VIBIA STUDIO. ALL RIGHTS RESERVED.",
    copied: "COPIED",
  },
  fa: {
    homeTitle: 'تحول دیجیتال سازمانی و راهکارهای هوشمند نرم‌افزاری',
    homeSubtitle: 'توسعه پلتفرم‌های اختصاصی، اتوماسیون‌های هوش مصنوعی و داشبوردهای مدیریتی با تضمین کیفیت حقوقی (SLA) و نظارت فنی چندلایه.',
    navWorks: "خدمات ما",
    navAbout: "درباره آژانس",
    navContact: "تماس با ما",
    selectedProjects: "خدمات ما",
    viewProject: "مشاهده",
    close: "بستن",
    aboutTitle: "درباره آژانس ما",
    aboutBigTitle: "حلقه‌ی اتصال میان چالش‌های پیچیده صنعتی و مهندسی نرم‌افزار هوشمند.",
    aboutBioPara1: "ما یک آژانس تخصصی B2B در حوزه تحول دیجیتال هستیم. با مدیریت صفر تا صد پروژه‌های نرم‌افزاری و پیاده‌سازی ابزارهای هوش مصنوعی بر پایه مدل آربیتراژ مدیریت‌شده، مسیر توسعه مقیاس‌پذیر صنایع را هموار می‌کنیم.",
    aboutBioPara2: "به‌واسطه هسته ارشد فنی مقیم و شبکه نخبگان برنامه‌نویسی غربال‌شده، بالاترین سطح معماری وب، امنیت پایگاه داده و کنترل کیفیت (QA) را پیش از تحویل نهایی تضمین می‌نماییم.",
    projectsHeader: 'پروژه های ما',
    prj1: "پورتفولیو آرمین امانی",
    prj2: "لندینگ پیج یک بازی ویدیویی",
    prj3: "دنبال کننده بازار کریپتو نکسوس",
    prj4: "لندینگ پیج زورا",
    getInTouch: "در تماس باشید",
    phoneLabel: "تلفن",
    emailLabel: "ایمیل",
    creditsLabel: "شناسنامه",
    phoneValue: "+989964222821",
    emailValue: "vibia.studio@gmail.com",
    creditsValue: "© ۲۰۲۶ استودیو ویبیا. تمامی حقوق محفوظ است.",
    copied: "کپی شد",
  }
};

export const services: Service[] = [
  {
    id: 'web',
    title: {
      en: 'Enterprise Web & Dashboard Architecture',
      fa: "معماری وب‌اپلیکیشن و داشبوردهای سازمانی"
    },
    category: {
      en: 'Custom B2B Platforms & Management Dashboards',
      fa: 'توسعه پلتفرم‌های B2B و سامانه‌های مدیریت یکپارچه'
    },
    description: {
      en: 'We architect and deliver custom, high-performance enterprise platforms designed to digitize and scale your industrial operations. From intuitive management dashboards to robust backend architectures, we ensure your organizational data is secure, centralized, and seamlessly accessible.',
      fa: 'ما سامانه‌های اختصاصی و پلتفرم‌های سازمانی با کارایی بالا را برای دیجیتالی کردن و توسعه عملیات صنعتی شما طراحی می‌کنیم. از داشبوردهای مدیریتی هوشمند تا معماری قدرتمند بک‌اند، امنیت، یکپارچگی و دسترسی سریع به داده‌های کلان سازمان شما را تضمین می‌کنیم.'
    },
    image: 'https://iili.io/CtlSCaS.jpg',
    bgHex: '#1a14b5',
    accentColor: '#3b82f6',
    tags: ['EnterpriseWeb', 'B2BPlatforms', 'Dashboards', 'ReactJS', 'NextJS', 'DigitalTransformation']
  },
  {
    id: 'ai',
    title: {
      en: 'AI Automation & Business Intelligence',
      fa: 'هوش مصنوعی و اتوماسیون سازمانی'
    },
    category: {
      en: 'Smart Workflows, AI Bots & Data Analytics',
      fa: 'هوشمندسازی فرآیندها، ربات‌های AI و تحلیل داده'
    },
    description: {
      en: 'We integrate advanced AI solutions and intelligent automation into your legacy systems to eliminate manual bottlenecks. Our data-driven BI tools and custom AI bots optimize resource allocation, reduce operational waste, and provide actionable insights for decision-makers.',
      fa: 'ما با تزریق راهکارهای پیشرفته هوش مصنوعی و اتوماسیون به سیستم‌های سنتی شما، گلوگاه‌های دستی را حذف می‌کنیم. ابزارهای هوش تجاری (BI) و ربات‌های اختصاصی ما با تحلیل دقیق داده‌ها، اتلاف منابع را کاهش داده و بینش‌های عملیاتی دقیقی برای مدیران ارشد فراهم می‌کنند.'
    },
    image: 'https://iili.io/CDH6CKl.jpg',
    bgHex: '#0f172a',
    accentColor: '#fbbf24',
    tags: ['AIAutomation', 'MachineLearning', 'BusinessIntelligence', 'DataAnalytics', 'AIBots', 'Industry4_0']
  },
  {
    id: 'api',
    title: {
      en: 'Cloud Infrastructure & API Integration',
      fa: 'یکپارچه‌سازی ابری و توسعه API'
    },
    category: {
      en: 'Enterprise Integrations & Scalable Backend Systems',
      fa: 'زیرساخت‌های ابری پایدار و اتصال سیستم‌های نرم‌افزاری'
    },
    description: {
      en: 'We design complex API integrations and scalable cloud infrastructures tailored to your enterprise logic. Our modular architecture seamlessly connects your internal software, factory databases, and third-party services, ensuring zero downtime and high security.',
      fa: 'ما معماری‌های پیچیده ابری و APIهای اختصاصی را دقیقاً مطابق با منطق سازمانی شما توسعه می‌دهیم. ساختار ماژولار ما، نرم‌افزارهای داخلی، پایگاه‌های داده صنعتی و سرویس‌های شخص ثالث را با بالاترین سطح امنیت و بدون قطعی به یکدیگر متصل می‌کند.'
    },
    image: 'https://iili.io/CDHihap.jpg',
    bgHex: '#2e1065',
    accentColor: '#a855f7',
    tags: ['CloudArchitecture', 'APIIntegration', 'EnterpriseBackend', 'Microservices', 'DataSecurity']
  },
  {
    id: 'qa',
    title: {
      en: 'Code Auditing & Rigorous QA',
      fa: 'ممیزی کد و تضمین کیفیت (QA)'
    },
    category: {
      en: 'Technical Audits, Security Testing & SLA Guarantees',
      fa: 'بازرسی فنی، تست‌های نفوذ و گارانتی سطح خدمات (SLA)'
    },
    description: {
      en: 'Functioning as your trusted technical layer, our internal core team conducts stringent code reviews, load testing, and security audits (OWASP) on every module before delivery. We eliminate delivery risks and ensure your enterprise software is market-ready and flawless.',
      fa: 'هسته فنی ما به عنوان بازوی امین سازمان شما، پیش از تحویل هر پروژه، ممیزی‌های سخت‌گیرانه کد، تست‌های فشار و بررسی‌های امنیتی (OWASP) را اجرا می‌کند. با ارائه گارانتی رسمی (SLA)، تمامی ریسک‌های فنی را حذف کرده و محصولی کاملاً پایدار و بی‌نقص را به سازمان شما تحویل می‌دهیم.'
    },
    image: 'https://iili.io/CDHZIRV.jpg',
    bgHex: '#022c22',
    accentColor: '#10b981',
    tags: ['QualityAssurance', 'CodeAudit', 'SecurityTesting', 'SLA', 'TechStrategy', 'DropServicing']
  }
];
