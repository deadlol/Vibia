export interface PlanModule {
  name: { fa: string; en: string };
  description: { fa: string; en: string };
  features: { fa: string; en: string }[];
}

export interface SalonPlan {
  id: 'starter' | 'professional' | 'premium';
  number: number;
  badge?: { fa: string; en: string };
  name: { fa: string; en: string };
  tagline: { fa: string; en: string };
  targetAudience: { fa: string; en: string };
  setupPrice: {
    irr: number; // in Tomans
    formattedFa: string;
    formattedEn: string;
  };
  monthlyPrice: {
    irr: number; // in Tomans
    formattedFa: string;
    formattedEn: string;
  };
  modules: PlanModule[];
  highlights: { fa: string; en: string }[];
  isPopular?: boolean;
}

export interface MatrixRow {
  category: { fa: string; en: string };
  feature: { fa: string; en: string };
  starter: boolean | string;
  professional: boolean | string;
  premium: boolean | string;
}

export const salonPlansContent = {
  fa: {
    pageTitle: 'راهکار جامع دیجیتال سالن‌های زیبایی',
    heroKicker: 'فراتر از طراحی سایت — سیستم عامل هوشمند سالن زیبایی شما',
    heroTitle: 'راهکار کامل سالن زیبایی؛ نوبت‌دهی آنلاین، CRM و مدیریت هوشمند',
    heroSubtitle:
      'ما در ویبیا صرفاً یک وب‌سایت تحویل نمی‌دهیم؛ بلکه زیرساخت نرم‌افزاری کاملی برای نوبت‌دهی، اتوماسیون پیامکی، مدیریت پرسنل، پرونده مشتریان و حسابداری سالن شما راه‌اندازی و پشتیبانی می‌کنیم.',
    transparentPricingTitle: 'مدل شفاف هزینه‌ها',
    transparentPricingSubtitle:
      'هزینه یکپارچه استقرار و راه‌اندازی اختصاصی + اشتراک ماهانه برای سرور ابری، شارژ پیامک، مانیتورینگ ۲۴/۷، امنیت و پشتیبانی پیوسته فنی.',
    setupFeeLabel: 'هزینه راه‌اندازی و استقرار اختصاصی',
    monthlyFeeLabel: 'اشتراک ماهانه نگهداری و زیرساخت',
    billedMonthly: 'پرداخت ماهانه',
    billedYearly: 'پرداخت سالانه (۲۰٪ تخفیف اشتراک)',
    perMonth: 'ماهانه',
    oneTime: 'یک‌بار پرداخت',
    tomans: 'تومان',
    popularBadge: 'محبوب‌ترین و کامل‌ترین',
    orderPlan: 'درخواست مشاوره و سفارش',
    viewModules: 'مشاهده ماژول‌ها و جزئیات',
    allPreviousFeaturesIncluded: 'شامل تمام امکانات پلن‌های قبلی',
    featuresCount: 'ویژگی فعال',
    comparisonTitle: 'مقایسه جامع ماژول‌ها و قابلیت‌ها',
    comparisonSubtitle: 'بررسی دقیق تفاوت پلن‌ها در لاین‌های عملیاتی سالن',
    calculatorTitle: 'محاسبه‌گر بازگشت سرمایه (ROI) برای سالن شما',
    calculatorSubtitle: 'ببینید این سیستم با کاهش کنسلی نوبت و اتوماسیون، چقدر درآمد ماهانه شما را افزایش می‌دهد.',
    calculatorClientsPerDay: 'میانگین تعداد مشتری روزانه سالن:',
    calculatorAverageTicket: 'میانگین هزینه هر خدمت (تومان):',
    calculatorNoShowRate: 'درصد کنسلی و غیبت فعلی:',
    calculatorEstimatedRecovery: 'درآمد بازیافتی ماهانه با یادآوری پیامکی:',
    calculatorSavedHours: 'ساعت صرفه‌جویی زمان منشی در ماه:',
    addonsTitle: 'خدمات تکمیلی و سفارشی',
    faqTitle: 'پرسش‌های متداول مدیران سالن‌ها',
    backToHome: 'بازگشت به سایت اصلی ویبیا',
    consultationCta: 'دریافت دموی زنده و مشاوره تلفنی',
    consultationDesc: 'برای مشاهده دموی پنل نوبت‌دهی و نرم‌افزار، با کارشناسان فنی ما در تماس باشید.',
    callButton: 'تماس فوری: ۰۹۹۶۴۲۲۲۸۲۱',
    smsButton: 'ارسال پیامک: ۰۹۹۶۴۲۲۲۸۲۱',
    copyLinkSuccess: 'لینک این صفحه کپی شد',
  },
  en: {
    pageTitle: 'Comprehensive Beauty Salon Digital Solution',
    heroKicker: 'Beyond Web Design — The Intelligent Operating System for Your Salon',
    heroTitle: 'All-in-One Beauty Salon Solution: Booking, CRM & Management',
    heroSubtitle:
      'At VIBIA, we do not just design websites; we deliver end-to-end digital infrastructure covering online appointments, SMS automation, staff management, customer retention, and accounting.',
    transparentPricingTitle: 'Transparent Pricing Model',
    transparentPricingSubtitle:
      'Turnkey setup fee for custom deployment + continuous monthly subscription covering cloud hosting, SMS gateway, 24/7 monitoring, security, and technical maintenance.',
    setupFeeLabel: 'Custom Setup & Deployment Fee',
    monthlyFeeLabel: 'Monthly Maintenance & Infrastructure',
    billedMonthly: 'Monthly Billing',
    billedYearly: 'Annual Billing (20% Off Subscription)',
    perMonth: 'month',
    oneTime: 'one-time fee',
    tomans: 'Tomans',
    popularBadge: 'Most Popular',
    orderPlan: 'Request Consultation & Order',
    viewModules: 'View Modules & Details',
    allPreviousFeaturesIncluded: 'Includes all features from previous plans',
    featuresCount: 'active features',
    comparisonTitle: 'Complete Feature Comparison Matrix',
    comparisonSubtitle: 'A granular breakdown of capabilities across all tiers',
    calculatorTitle: 'Interactive ROI & Value Estimator',
    calculatorSubtitle: 'See how automated reminders and online scheduling recover lost revenue for your salon.',
    calculatorClientsPerDay: 'Average daily salon clients:',
    calculatorAverageTicket: 'Average ticket price (Tomans):',
    calculatorNoShowRate: 'Current no-show / cancellation rate:',
    calculatorEstimatedRecovery: 'Recovered monthly revenue via SMS reminders:',
    calculatorSavedHours: 'Receptionist hours saved per month:',
    addonsTitle: 'Custom Add-ons & Services',
    faqTitle: 'Frequently Asked Questions',
    backToHome: 'Back to VIBIA Agency',
    consultationCta: 'Schedule a Live Demo & Consultation',
    consultationDesc: 'Get in touch with our technical leads to explore a live demonstration tailored to your salon.',
    callButton: 'Direct Call: +989964222821',
    smsButton: 'Send SMS: +989964222821',
    copyLinkSuccess: 'Page link copied to clipboard',
  }
};

export const salonPlans: SalonPlan[] = [
  {
    id: 'starter',
    number: 1,
    name: { fa: 'پلن ۱: استارتر (Starter)', en: 'Plan 1: Starter' },
    tagline: {
      fa: 'حضور دیجیتال لوکس و سیستم پایه‌ای نوبت‌دهی آنلاین',
      en: 'Luxury digital presence & core online booking calendar'
    },
    targetAudience: {
      fa: 'مناسب سالن‌های تازه‌تاسیس یا تک‌شعبه که می‌خواهند وب‌سایتی شیک و نوبت‌دهی ۲۴ ساعته داشته باشند.',
      en: 'Ideal for boutique or single-location salons launching their online booking.'
    },
    setupPrice: {
      irr: 15000000,
      formattedFa: '۱۵,۰۰۰,۰۰۰',
      formattedEn: '15,000,000'
    },
    monthlyPrice: {
      irr: 1500000,
      formattedFa: '۱,۵۰۰,۰۰۰',
      formattedEn: '1,500,000'
    },
    highlights: [
      { fa: 'وبسایت اختصاصی با ویترین خدمات و گالری', en: 'Custom website with showcase gallery' },
      { fa: 'رزرو آنلاین نوبت با انتخاب ساعت و خدمات', en: 'Online booking with time & service selector' },
      { fa: 'تقویم ساده مدیریت نوبت‌ها (ثبت، لغو، تغییر)', en: 'Simple appointment calendar (view/edit/cancel)' },
      { fa: 'سئو پایه گوگل و اتصال به شبکه‌های اجتماعی', en: 'Core Google SEO & social media linking' },
      { fa: 'پنل مدیریت تحت وب ساده و واکنش‌گرا', en: 'Responsive web admin management portal' },
      { fa: 'دامنه اختصاصی و استقرار اولیه کامل', en: 'Custom domain and cloud deployment' }
    ],
    modules: [
      {
        name: { fa: 'وبسایت اختصاصی', en: 'Custom Website' },
        description: {
          fa: 'صفحه اصلی مدرن، بخش خدمات با قیمت‌ها، درباره سالن، معرفی پرسنل و لاین‌های کاری، گالری عکس و نمونه کارها، تماس و لوکیشن نقشه.',
          en: 'Modern landing page, service catalog with prices, about us, staff showcase, high-res photo gallery, and map contact.'
        },
        features: [
          { fa: 'طراحی واکنش‌گرا (موبایل، تبلت، دسکتاپ)', en: 'Responsive design across all devices' },
          { fa: 'معرفی پرسنل سالن و نمونه کارهای هر متخصص', en: 'Staff profiles and portfolio showcases' },
          { fa: 'فرم تماس و اتصال به نقشه و مسیریاب‌ها', en: 'Contact forms & location map integration' }
        ]
      },
      {
        name: { fa: 'رزرو آنلاین', en: 'Online Booking' },
        description: {
          fa: 'مشتریان در هر ساعت از شبانه‌روز خدمات، متخصص دلخواه، تاریخ و ساعت آزاد را انتخاب و اطلاعاتشان را ثبت می‌کنند.',
          en: '24/7 client booking with service, specialist, and available slot selection.'
        },
        features: [
          { fa: 'انتخاب خدمات و لاین آرایشی', en: 'Select services & beauty lines' },
          { fa: 'انتخاب متخصص و اپراتور دلخواه', en: 'Choose preferred specialist' },
          { fa: 'تقویم روزها و بازه‌های زمانی خالی', en: 'Calendar of available booking slots' },
          { fa: 'ثبت خودکار اطلاعات و شماره تماس مشتری', en: 'Automatic client detail capture' }
        ]
      },
      {
        name: { fa: 'مدیریت نوبت', en: 'Appointment Management' },
        description: {
          fa: 'مشاهده تقویم نوبت‌ها، تغییر زمان نوبت توسط منشی، ثبت نوبت‌های تلفنی و لغو نوبت.',
          en: 'Calendar view for reception, manual appointment creation, rescheduling, and cancellations.'
        },
        features: [
          { fa: 'نمای روزانه و هفتگی نوبت‌ها', en: 'Daily & weekly schedule view' },
          { fa: 'ثبت، ویرایش و ابطال سریع نوبت', en: 'Fast add, edit, and cancel actions' }
        ]
      },
      {
        name: { fa: 'SEO و آنلاین بودن', en: 'SEO & Online Presence' },
        description: {
          fa: 'بهینه‌سازی مقدماتی برای موتور جستجوی گوگل، نمایه تجاری، و اتصال مستقیم به اینستاگرام سالن.',
          en: 'Search engine optimization for local Google ranking and direct Instagram links.'
        },
        features: [
          { fa: 'دیده‌شدن در جستجوهای نام و محله سالن', en: 'Visibility in localized Google searches' },
          { fa: 'اتصال لینک‌های اینستاگرام و پیام‌رسان‌ها', en: 'Social & messaging platform links' }
        ]
      },
      {
        name: { fa: 'پنل مدیریت', en: 'Admin Panel' },
        description: {
          fa: 'مدیریت متون، تصاویر، لیست خدمات، تعرفه‌ها و نوبت‌های رزرو شده در پنلی سبک و امن.',
          en: 'Manage texts, photos, service prices, and registered appointments securely.'
        },
        features: [
          { fa: 'ویرایش اطلاعات و ساعات کاری سالن', en: 'Update salon hours & content easily' },
          { fa: 'مشاهده فهرست نوبت‌ها با فیلتر تاریخ', en: 'Filter and inspect booked appointments' }
        ]
      },
      {
        name: { fa: 'استقرار و زیرساخت', en: 'Deployment & Setup' },
        description: {
          fa: 'خرید و اتصال دامنه اختصاصی سالن، استقرار اولیه روی سرور ابری پایدار و گواهی امنیتی SSL.',
          en: 'Custom domain connection (.ir / .com), SSL certificate, and cloud hosting initialization.'
        },
        features: [
          { fa: 'دامنه اختصاصی سالن', en: 'Dedicated salon domain' },
          { fa: 'سرور امن با مانیتورینگ اولیه', en: 'Secure cloud hosting with uptime checks' }
        ]
      }
    ]
  },
  {
    id: 'professional',
    number: 2,
    badge: { fa: 'انتخاب اکثر سالن‌ها', en: 'Most Popular' },
    isPopular: true,
    name: { fa: 'پلن ۲: حرفه‌ای (Professional)', en: 'Plan 2: Professional' },
    tagline: {
      fa: 'اتوماسیون کامل نوبت‌دهی، پیامک، مدیریت پرسنل و CRM',
      en: 'Complete automation for scheduling, SMS, staff & customer CRM'
    },
    targetAudience: {
      fa: 'سالن‌های پرمشتری با چندین پرسنل و لاین‌های تخصصی که می‌خواهند از تداخل نوبت، کنسلی و خطاهای دستی منشی خلاص شوند.',
      en: 'Busy salons with multiple stylists wanting to eliminate no-shows and reception chaos.'
    },
    setupPrice: {
      irr: 35000000,
      formattedFa: '۳۵,۰۰۰,۰۰۰',
      formattedEn: '35,000,000'
    },
    monthlyPrice: {
      irr: 3200000,
      formattedFa: '۳,۲۰۰,۰۰۰',
      formattedEn: '3,200,000'
    },
    highlights: [
      { fa: 'تمام قابلیت‌های پلن ۱ (استارتر)', en: 'All features from Plan 1 (Starter)' },
      { fa: 'مدیریت پرسنل، شیفت‌ها، مرخصی و پورسانت آرایشگران', en: 'Staff roster, shifts, time-offs & commissions' },
      { fa: 'رزرو پیشرفته با بیعانه آنلاین و لیست انتظار هوشمند', en: 'Advanced booking with deposits & waitlist' },
      { fa: 'CRM مشتریان: پرونده، تاریخچه خدمات و یادداشت خصوصی', en: 'Client CRM: history, formulas, notes & visits' },
      { fa: 'سامانه پیامکی: تایید نوبت، یادآوری قبل از موعد و پیگیری', en: 'Automated SMS: confirmation, reminders & follow-up' },
      { fa: 'پکیج‌های خدماتی، کدهای تخفیف و کمپین‌های فصلی', en: 'Service packages, coupons & discount campaigns' },
      { fa: 'گزارش‌های آماری نوبت‌ها، ریزش مشتریان و درآمد پرسنل', en: 'Performance analytics on no-shows & staff revenue' },
      { fa: 'ثبت مالی: بیعانه‌ها، تسویه‌ها و پورسانت پرسنل', en: 'Financial logging: prepayments & commission rates' }
    ],
    modules: [
      {
        name: { fa: 'مدیریت پرسنل و آرایشگران', en: 'Staff & Shift Management' },
        description: {
          fa: 'تعریف تک‌تک آرایشگران و متخصصان، تعیین تخصص‌ها، تقویم کاری، شیفت‌های چرخشی، تعطیلات و زمان‌های عدم دسترسی.',
          en: 'Define each stylist, service specialization, work hours, shifts, leaves, and blockout times.'
        },
        features: [
          { fa: 'پروفایل و تقویم مجزا برای هر پرسنل', en: 'Individual calendar per staff member' },
          { fa: 'تنظیم شیفت کاری و زمان استراحت', en: 'Configure shift schedules and breaks' },
          { fa: 'جلوگیری خودکار از نوبت‌دهی در ایام مرخصی', en: 'Automatic blackout on approved time-off' }
        ]
      },
      {
        name: { fa: 'رزرو پیشرفته و هوشمند', en: 'Advanced Smart Booking' },
        description: {
          fa: 'محاسبه دقیق مدت زمان هر خدمت برای جلوگیری از تداخل، دریافت بیعانه اینترنتی جهت قطعی‌سازی، و لیست انتظار برای زمان‌های پر.',
          en: 'Automatic service duration buffering, online deposit payments, and automated client waitlists.'
        },
        features: [
          { fa: 'اتصال به درگاه پرداخت برای دریافت بیعانه', en: 'Online payment gateway for deposits' },
          { fa: 'لیست انتظار هوشمند با اطلاع‌رسانی خودکار پیامکی', en: 'Waitlist alerting clients on openings' },
          { fa: 'بافر زمانی بین خدمات جهت آماده‌سازی سالن', en: 'Buffer times between back-to-back services' }
        ]
      },
      {
        name: { fa: 'CRM و پرونده مشتریان', en: 'Customer CRM & History' },
        description: {
          fa: 'پرونده الکترونیک برای هر مشتری شامل تاریخچه مراجعات، خدمات دریافت شده، رنگ یا فرمول‌های استفاده‌شده، یادداشت‌های آرایشگر، تاریخ آخرین و نوبت بعدی.',
          en: 'Electronic client dossiers with service history, formula notes, last visit date, and scheduled appointments.'
        },
        features: [
          { fa: 'ثبت جزئیات و ترجیحات خاص مشتری', en: 'Record client preferences & color formulas' },
          { fa: 'مشاهده چرخه مراجعات و فواصل بین خدمات', en: 'Inspect visit intervals and loyalty patterns' },
          { fa: 'یادداشت‌های خصوصی فقط قابل رویت برای پرسنل', en: 'Private staff notes per customer' }
        ]
      },
      {
        name: { fa: 'سامانه ارتباط و یادآوری پیامکی (SMS)', en: 'SMS Notifications & Follow-ups' },
        description: {
          fa: 'ارسال خودکار پیامک تایید فوری هنگام رزرو، یادآوری نوبت ۲۴ ساعت و ۲ ساعت قبل برای کاهش کنسلی، پیامک نظرسنجی و کمپین‌های تبریک تولد.',
          en: 'Instant SMS confirmation, dual reminders (24h & 2h before), feedback request, and birthday greetings.'
        },
        features: [
          { fa: 'کاهش تا ۶۰٪ در عدم حضور (No-Show) مشتریان', en: 'Reduces salon no-shows by up to 60%' },
          { fa: 'ارسال با خط خدماتی (حتی برای شماره‌های بلک‌لیست)', en: 'Direct delivery through dedicated gateway' },
          { fa: 'کمپین‌های پیامکی برای مشتریانی که مدتی مراجعه نکرده‌اند', en: 'Win-back campaigns for lapsed clients' }
        ]
      },
      {
        name: { fa: 'پکیج و تخفیف', en: 'Packages & Discount Campaigns' },
        description: {
          fa: 'تعریف بسته‌های خدماتی ترکیبی (مانند پکیج عروس یا مراقبت مو)، کدهای تخفیف درصدی یا مبلغی با تاریخ انقضا.',
          en: 'Create bundled beauty packages, promo codes with expiration dates, and festive campaigns.'
        },
        features: [
          { fa: 'پکیج‌های ترکیبی لاین‌های زیبایی', en: 'Multi-service bundled promotions' },
          { fa: 'کدهای تخفیف با محدودیت تعداد و تاریخ', en: 'Coupons with usage limits and dates' }
        ]
      },
      {
        name: { fa: 'گزارش‌ها و آمار عملکرد', en: 'Reports & Analytics' },
        description: {
          fa: 'تحلیل تعداد نوبت‌های موفق، کنسلی‌ها، پرسنل پردرآمد، ساعات شلوغ سالن، تعداد مشتریان جدید در برابر مشتریان برگشتی.',
          en: 'Detailed metrics on bookings, cancellations, top-earning stylists, and new vs returning guests.'
        },
        features: [
          { fa: 'گزارش راندمان کاری هر آرایشگر', en: 'Stylist efficiency and volume stats' },
          { fa: 'تحلیل نرخ بازگشت مشتریان', en: 'Customer retention rate metrics' }
        ]
      },
      {
        name: { fa: 'مدیریت مالی و پورسانت پرسنل', en: 'Financials & Commissions' },
        description: {
          fa: 'ثبت مبالغ خدمات، مبالغ بیعانه، گزارش پایه درآمد روزانه و ماهانه سالن، و محاسبه پورسانت هر پرسنل بر اساس درصد قرارداد.',
          en: 'Record revenue, deposits, daily turnover, and automatic stylist commission calculations.'
        },
        features: [
          { fa: 'محاسبه پورسانت پرسنل با درصدهای متغیر', en: 'Tiered commission calculations' },
          { fa: 'گزارش مالی تفکیکی به تفکیک روش پرداخت', en: 'Financial summaries categorized by payment type' }
        ]
      }
    ]
  },
  {
    id: 'premium',
    number: 3,
    badge: { fa: 'سازمانی و فول‌آپشن', en: 'Enterprise / Total Solution' },
    name: { fa: 'پلن ۳: جامع و پیشرفته (Premium / Total Solution)', en: 'Plan 3: Premium / Total Solution' },
    tagline: {
      fa: 'سیستم جامع سازمانی، حسابداری، باشگاه وفاداری، انبار و چند شعبه',
      en: 'Enterprise ERP for salon chains, loyalty club, inventory & multi-branch'
    },
    targetAudience: {
      fa: 'کلینیک‌های زیبایی، سالن‌های زنجیره‌ای، برندهای نام‌آشنا و مراکز لوکس که نیازمند کنترل انبار، باشگاه مشتریان، گزارش‌های هوش تجاری و شعب متعدد هستند.',
      en: 'Chains, luxury clinics, and premier beauty brands requiring multi-branch control & ERP.'
    },
    setupPrice: {
      irr: 75000000,
      formattedFa: '۷۵,۰۰۰,۰۰۰',
      formattedEn: '75,000,000'
    },
    monthlyPrice: {
      irr: 6500000,
      formattedFa: '۶,۵۰۰,۰۰۰',
      formattedEn: '6,500,000'
    },
    highlights: [
      { fa: 'تمام قابلیت‌های پلن‌های قبلی (استارتر و حرفه‌ای)', en: 'All features from Starter & Professional' },
      { fa: 'مالی پیشرفته: صندوق، هزینه، درآمد، تسویه و فیش حقوقی', en: 'Advanced finance: cash drawers, expenses & payouts' },
      { fa: 'CRM پیشرفته: دسته‌بندی VIP، وفادار، غیرفعال و تحلیل ارزش', en: 'Advanced CRM: VIP tiers, churn risk & LTV analysis' },
      { fa: 'باشگاه مشتریان و وفاداری: کارت دیجیتال، امتیاز و رفرال', en: 'Loyalty club: digital rewards card & referral bonuses' },
      { fa: 'انبارداری و مواد مصرفی: کنترل رنگ، اکسیدان، کسر خودکار و هشدار', en: 'Inventory: track consumables, usage & auto alerts' },
      { fa: 'پکیج‌ها و اشتراک جلسه‌ای (لیزر، پوست، تراپی مو)', en: 'Multi-session plans with balance tracking' },
      { fa: 'مدیریت یکپارچه چند شعبه با گزارش‌های تفکیکی', en: 'Multi-branch control with unified oversight' },
      { fa: 'امنیت و سطوح دسترسی پیشرفته، مانیتورینگ اختصاصی و بک‌آپ ابری', en: 'Enterprise RBAC, dedicated SLA & daily cloud backup' }
    ],
    modules: [
      {
        name: { fa: 'مالی و حسابداری پیشرفته', en: 'Advanced Financial Accounting' },
        description: {
          fa: 'مدیریت چند صندوق نقدی و پوز، ثبت هزینه‌های روزانه سالن (اجاره، مواد، قبوض)، فرمول‌های منعطف پورسانت، تسویه‌حساب دوره‌ای پرسنل و صدور فیش.',
          en: 'Multi-till cash management, operational expense tracking, complex commission models, and staff payslips.'
        },
        features: [
          { fa: 'محاسبه سود خالص سالن پس از کسر هزینه‌ها و پورسانت', en: 'Net salon profit calculation after expenses' },
          { fa: 'فیش تسویه‌حساب دقیق برای هر پرسنل با ریز فاکتورها', en: 'Detailed itemized payout statements per staff' },
          { fa: 'گزارش سود و زیان (P&L) دوره‌ای سالن', en: 'Periodic Profit & Loss statements' }
        ]
      },
      {
        name: { fa: 'CRM پیشرفته و سگمنتیشن مشتریان', en: 'Advanced CRM & Segmentation' },
        description: {
          fa: 'گروه‌بندی هوشمند مشتریان به دسته‌های مشتریان VIP، پردرآمد، منظم، وفادار، مشتریان جدید و مشتریان غیرفعال (خاموش)، با تحلیل ارزش طول عمر (LTV).',
          en: 'Automated client clustering (VIP, regulars, at-risk, churned) with predictive Lifetime Value metrics.'
        },
        features: [
          { fa: 'شناسایی خودکار مشتریان در معرض ریزش', en: 'Automated churn risk detection' },
          { fa: 'تحلیل سبد خرید و خدمات مکمل هر مشتری', en: 'Cross-sell and beauty basket analysis' }
        ]
      },
      {
        name: { fa: 'باشگاه مشتریان و وفاداری (Loyalty Club)', en: 'Loyalty Club & Referral Rewards' },
        description: {
          fa: 'کارت وفاداری دیجیتال، اعطای امتیاز به ازای هر خرید، تبدیل امتیاز به تخفیف در مراجعات بعدی، و سیستم معرفی دوستان (Referral) با هدایای دوطرفه.',
          en: 'Digital loyalty cards, purchase points redemption, and viral friend referral rewards.'
        },
        features: [
          { fa: 'امتیازدهی خودکار به ازای هر سفارش', en: 'Automated points per transaction' },
          { fa: 'لینک اختصاصی دعوت دوستان با پاداش خودکار', en: 'Personal referral links with bonuses' }
        ]
      },
      {
        name: { fa: 'انبارداری و کنترل مواد مصرفی', en: 'Inventory & Consumables Tracking' },
        description: {
          fa: 'تعریف انبار مواد اولیه و محصولات مصرفی (تیوب رنگ، دکلره، مواد احیا و کراتین، مواد مراقبت پوست)، کسر خودکار با هر خدمت و هشدار اتمام موجودی.',
          en: 'Track supplies (hair dyes, keratins, skincare products), auto-deduct per service, and low-stock alerts.'
        },
        features: [
          { fa: 'فرمول مصرف مواد به ازای هر خدمت', en: 'Recipe-based material usage per service' },
          { fa: 'هشدار پیامکی و سیستمی به مدیر هنگام کمبود موجودی', en: 'Immediate low inventory notifications' }
        ]
      },
      {
        name: { fa: 'پکیج‌ها و اشتراک جلسه‌ای', en: 'Multi-Session Service Subscriptions' },
        description: {
          fa: 'مدیریت خدماتی که نیاز به چندین جلسه دارند (مانند لیزر، فیشیال، کراتینه و ماساژ)، کسر خودکار تعداد جلسات مصرف‌شده و ارسال پیامک وضعیت جلسات باقیمانده به مشتری.',
          en: 'Package subscriptions for multi-visit treatments (laser, facials) with remaining session trackers.'
        },
        features: [
          { fa: 'کیف جلسات اختصاصی برای هر مشتری', en: 'Session balance wallet per client' },
          { fa: 'پیامک خودکار پس از هر جلسه با اعلام باقیمانده', en: 'SMS alert of remaining sessions after each visit' }
        ]
      },
      {
        name: { fa: 'مدیریت چند شعبه (Multi-Branch)', en: 'Multi-Branch Management' },
        description: {
          fa: 'مدیریت متمرکز شعب مختلف سالن یا کلینیک در شهرهای گوناگون، انتخاب شعبه توسط مشتری هنگام رزرو، و گزارش‌های آماری تفکیکی و تجمیعی برای مدیر ارشد.',
          en: 'Centralized control for salon chains with branch selector on booking and consolidated headquarter BI.'
        },
        features: [
          { fa: 'داشبورد تجمیعی مدیر کل برای مقایسه شعب', en: 'HQ comparison dashboard across branches' },
          { fa: 'جداسازی حسابداری، پرسنل و نوبت‌های هر شعبه', en: 'Segregated branch ledger, staff, and schedules' }
        ]
      },
      {
        name: { fa: 'سطوح دسترسی و امنیت سازمانی', en: 'Role-Based Access & Enterprise Security' },
        description: {
          fa: 'تعریف نقش‌های کاربری با اختیارات محدود (مدیر ارشد، مدیر شعبه، منشی، حسابدار، آرایشگر)، لاگ کامل فعالیت‌ها، مانیتورینگ اختصاصی، بک‌آپ روزانه ابری و توافق SLA پشتیبانی.',
          en: 'Granular permissions (CEO, Branch Manager, Receptionist, Stylist), audit trail, daily backups, and SLA.'
        },
        features: [
          { fa: 'عدم دسترسی پرسنل به شماره تماس یا اطلاعات محرمانه مشتریان', en: 'Data privacy shields masking client phones from staff' },
          { fa: 'بک‌آپ خودکار و بازیابی اضطراری بدون وقفه', en: 'Redundant cloud backups with instant restore' }
        ]
      },
      {
        name: { fa: 'گزارش‌های پیشرفته و هوش تجاری (BI)', en: 'Advanced Business Intelligence' },
        description: {
          fa: 'تحلیل روند درآمدی، سودآورترین لاین‌های خدماتی سالن، نرخ بازگشت مشتریان (Retention Rate)، سنجش اثربخشی کمپین‌ها و پیش‌بینی تقاضای فصلی.',
          en: 'Actionable BI on highest-margin services, customer retention graphs, and seasonal revenue forecasting.'
        },
        features: [
          { fa: 'نمودارهای تعاملی درآمد و رشد سالانه', en: 'Interactive charts for yearly growth' },
          { fa: 'شناسایی لاین‌های پرهزینه یا کم‌بازده سالن', en: 'Identify high-cost vs high-profit beauty lines' }
        ]
      }
    ]
  }
];

export const comparisonMatrix: MatrixRow[] = [
  // Website & Digital Presence
  {
    category: { fa: 'وبسایت و پرزنت دیجیتال', en: 'Website & Digital Showcase' },
    feature: { fa: 'صفحه اختصاصی سالن با ویترین خدمات، عکس‌ها و بیوگرافی', en: 'Custom branded showcase page with gallery & staff bios' },
    starter: true,
    professional: true,
    premium: true,
  },
  {
    category: { fa: 'وبسایت و پرزنت دیجیتال', en: 'Website & Digital Showcase' },
    feature: { fa: 'دامنه اختصاصی (.ir / .com) و میزبانی ابری امن SSL', en: 'Custom domain and dedicated cloud hosting with SSL' },
    starter: true,
    professional: true,
    premium: true,
  },
  {
    category: { fa: 'وبسایت و پرزنت دیجیتال', en: 'Website & Digital Showcase' },
    feature: { fa: 'سئو محلی و تکنیکال برای دیده‌شدن در رتبه‌های بالای گوگل', en: 'Local & technical SEO for high Google search ranking' },
    starter: 'پایه (نام سالن)',
    professional: 'پیشرفته (خدمات و محله)',
    premium: 'جامع (تمام لاین‌ها و کلمات کلیدی رقابتی)',
  },

  // Appointments & Booking
  {
    category: { fa: 'نوبت‌دهی و تقویم', en: 'Appointments & Scheduling' },
    feature: { fa: 'رزرو آنلاین ۲۴ ساعته با انتخاب خدمات و زمان خالی', en: '24/7 online booking with real-time slot selection' },
    starter: true,
    professional: true,
    premium: true,
  },
  {
    category: { fa: 'نوبت‌دهی و تقویم', en: 'Appointments & Scheduling' },
    feature: { fa: 'مدیریت زمان هر خدمت و بافر برای جلوگیری از تداخل نوبت', en: 'Service duration & buffer times preventing double booking' },
    starter: 'دستی',
    professional: true,
    premium: true,
  },
  {
    category: { fa: 'نوبت‌دهی و تقویم', en: 'Appointments & Scheduling' },
    feature: { fa: 'دریافت آنلاین بیعانه جهت تضمین حضور مشتری', en: 'Online deposit payments to secure bookings' },
    starter: false,
    professional: true,
    premium: true,
  },
  {
    category: { fa: 'نوبت‌دهی و تقویم', en: 'Appointments & Scheduling' },
    feature: { fa: 'لیست انتظار خودکار در روزهای پر و ساعات شلوغ', en: 'Automated waitlist for fully-booked days' },
    starter: false,
    professional: true,
    premium: true,
  },

  // Staff & Shifts
  {
    category: { fa: 'مدیریت پرسنل و شیفت‌ها', en: 'Staff & Shift Management' },
    feature: { fa: 'تعریف آرایشگران با تخصص‌ها و تقویم کاری اختصاصی', en: 'Stylist profiles with custom schedules' },
    starter: 'تا ۳ پرسنل',
    professional: 'نامحدود',
    premium: 'نامحدود با دسترسی مجزا',
  },
  {
    category: { fa: 'مدیریت پرسنل و شیفت‌ها', en: 'Staff & Shift Management' },
    feature: { fa: 'ثبت شیفت‌های چرخشی، تعطیلات و مرخصی‌ها', en: 'Rotating shifts, days off & blackout dates' },
    starter: false,
    professional: true,
    premium: true,
  },
  {
    category: { fa: 'مدیریت پرسنل و شیفت‌ها', en: 'Staff & Shift Management' },
    feature: { fa: 'محاسبه خودکار پورسانت بر اساس درصد توافقی هر پرسنل', en: 'Automated tiered commission calculations' },
    starter: false,
    professional: 'پایه',
    premium: 'پیشرفته با فیش حقوقی',
  },

  // Customer Management & SMS
  {
    category: { fa: 'ارتباط با مشتری (CRM) و پیامک', en: 'Customer CRM & SMS' },
    feature: { fa: 'پرونده الکترونیکی، تاریخچه مراجعات و فرمول رنگ مو', en: 'Electronic client cards with treatment notes & hair formulas' },
    starter: 'لیست ساده',
    professional: true,
    premium: true,
  },
  {
    category: { fa: 'ارتباط با مشتری (CRM) و پیامک', en: 'Customer CRM & SMS' },
    feature: { fa: 'ارسال پیامک تایید آنی و ۲ مرحله یادآوری قبل از نوبت', en: 'Instant booking SMS & 2-stage reminder prior to visit' },
    starter: false,
    professional: true,
    premium: true,
  },
  {
    category: { fa: 'ارتباط با مشتری (CRM) و پیامک', en: 'Customer CRM & SMS' },
    feature: { fa: 'دسته‌بندی هوشمند مشتریان (VIP، وفادار، غیرفعال و در معرض ریزش)', en: 'AI Customer segmentation (VIP, Regulars, Churn risk)' },
    starter: false,
    professional: false,
    premium: true,
  },
  {
    category: { fa: 'ارتباط با مشتری (CRM) و پیامک', en: 'Customer CRM & SMS' },
    feature: { fa: 'باشگاه مشتریان، کارت وفاداری دیجیتال و رفرال دوستان', en: 'Digital loyalty club, points system & referral gifts' },
    starter: false,
    professional: false,
    premium: true,
  },

  // Packages & Multi-session
  {
    category: { fa: 'پکیج‌ها و خدمات جلسه‌ای', en: 'Packages & Multi-Session Treatments' },
    feature: { fa: 'پکیج‌های تخفیفی و کدهای تبلیغاتی فصلی', en: 'Discount packages & seasonal promo vouchers' },
    starter: false,
    professional: true,
    premium: true,
  },
  {
    category: { fa: 'پکیج‌ها و خدمات جلسه‌ای', en: 'Packages & Multi-Session Treatments' },
    feature: { fa: 'پکیج‌های چند جلسه‌ای (لیزر، فیشیال، احیا) با رهگیری جلسات', en: 'Multi-session tracking with automated remaining alerts' },
    starter: false,
    professional: false,
    premium: true,
  },

  // Finance & Inventory
  {
    category: { fa: 'مالی، انبار و گزارش‌گیری', en: 'Finance, Stock & Analytics' },
    feature: { fa: 'گزارش‌های آماری نوبت‌ها، کنسلی‌ها و درآمد روزانه', en: 'Statistical reports on appointments & revenue' },
    starter: 'پایه',
    professional: 'کامل',
    premium: 'پیشرفته (هوش تجاری BI)',
  },
  {
    category: { fa: 'مالی، انبار و گزارش‌گیری', en: 'Finance, Stock & Analytics' },
    feature: { fa: 'مدیریت هزینه‌های سالن، چند صندوق و محاسبه سود خالص', en: 'Expense ledger, multi-tills & net margin tracking' },
    starter: false,
    professional: false,
    premium: true,
  },
  {
    category: { fa: 'مالی، انبار و گزارش‌گیری', en: 'Finance, Stock & Analytics' },
    feature: { fa: 'انبارداری، کنترل مواد مصرفی سالن و کسر خودکار با هر خدمت', en: 'Supply inventory with auto-deduct per beauty service' },
    starter: false,
    professional: false,
    premium: true,
  },

  // Scaling & Security
  {
    category: { fa: 'مقیاس‌پذیری، امنیت و پشتیبانی', en: 'Scalability, Security & Support' },
    feature: { fa: 'مدیریت چندین شعبه در پنل متمرکز', en: 'Multi-branch centralized management' },
    starter: false,
    professional: false,
    premium: true,
  },
  {
    category: { fa: 'مقیاس‌پذیری، امنیت و پشتیبانی', en: 'Scalability, Security & Support' },
    feature: { fa: 'سطوح دسترسی امنیتی مجزا (منشی، پرسنل، حسابدار، مدیر)', en: 'Role-based access security (masking private numbers)' },
    starter: 'تک کاربر',
    professional: '۲ سطح دسترسی',
    premium: 'چندسطحی نامحدود',
  },
  {
    category: { fa: 'مقیاس‌پذیری، امنیت و پشتیبانی', en: 'Scalability, Security & Support' },
    feature: { fa: 'پشتیبانی فنی اختصاصی، مانیتورینگ ۲۴/۷ و بک‌آپ ابری', en: 'Dedicated technical SLA, 24/7 monitoring & daily cloud backup' },
    starter: 'استاندارد',
    professional: 'اولویت‌دار',
    premium: 'VIP ویژه با مدیر حساب اختصاصی',
  },
];

export const salonAddons = [
  {
    title: { fa: 'عکاسی و تولید محتوای پرسنلی و سالن', en: 'Professional Salon Photography & Content' },
    desc: {
      fa: 'اعزام تیم عکاسی صنعتی و فیلمبرداری برای ثبت عکس‌های ژورنالی از محیط سالن، نمونه کارهای آرایشگران و تهیه ویدیوی معرفی.',
      en: 'High-end studio photography & reel production of your salon space and stylist work.'
    },
    tag: { fa: 'سفارشی', en: 'Custom' }
  },
  {
    title: { fa: 'ارسال پیامک با نام تجاری سالن (Sender ID)', en: 'Custom Branded SMS Sender ID' },
    desc: {
      fa: 'ارسال تمام پیامک‌های نوبت و یادآوری با نام مستقیم برند سالن شما به جای شماره‌های عمومی اپراتور.',
      en: 'Send all booking alerts directly with your salon brand name instead of generic numbers.'
    },
    tag: { fa: 'پرطرفدار', en: 'Popular' }
  },
  {
    title: { fa: 'آموزش حضوری و استقرار در محل سالن', en: 'On-site Salon Staff Training & Onboarding' },
    desc: {
      fa: 'حضور کارشناس فنی در محل سالن جهت آموزش کاربری منشی، مدیران و پرسنل و انتقال فایل‌های نوبت‌های قبلی.',
      en: 'Hands-on in-person onboarding for your receptionists, managers, and staff.'
    },
    tag: { fa: 'پشتیبانی VIP', en: 'VIP Support' }
  },
  {
    title: { fa: 'اتصال به سیستم تلفنی ابری و کال‌سنتر (VoIP)', en: 'Cloud VoIP & Call Center Integration' },
    desc: {
      fa: 'هوشمندسازی تماس‌های سالن، پاپ‌آپ پرونده مشتری هنگام تماس منشی، و صف انتظار تلفنی.',
      en: 'Smart salon telephony with automatic client popups upon incoming calls.'
    },
    tag: { fa: 'پیشرفته', en: 'Advanced' }
  }
];

export const salonFaq = [
  {
    q: {
      fa: 'چرا علاوه بر هزینه راه‌اندازی، اشتراک ماهانه دریافت می‌شود؟',
      en: 'Why is there a monthly subscription in addition to the setup fee?'
    },
    a: {
      fa: 'هزینه راه‌اندازی شامل طراحی اختصاصی، برنامه‌نویسی، پیکربندی سرور و شخصی‌سازی ماژول‌ها برای سالن شماست. اشتراک ماهانه تمام هزینه‌های مداوم را پوشش می‌دهد: سرور ابری پرسرعت، بسته‌های شارژ پیامک خدماتی، مانیتورینگ ۲۴ ساعته جهت جلوگیری از قطعی، به‌روزرسانی‌های امنیتی و پشتیبانی فنی مستقیم تا سالن شما هیچ‌گاه با وقفه مواجه نشود.',
      en: 'The setup fee covers turnkey custom configuration, domain connection, and data modeling. The monthly subscription covers ongoing cloud hosting, high-throughput SMS credit, 24/7 uptime monitoring, security patches, and direct developer support.'
    }
  },
  {
    q: {
      fa: 'آیا برای کار با این سیستم، پرسنل سالن نیاز به دانش فنی خاصی دارند؟',
      en: 'Does our salon staff need technical expertise to operate the system?'
    },
    a: {
      fa: 'خیر، رابط کاربری این سامانه بر اساس ساده‌ترین استانداردهای تجربه کاربری (UX) طراحی شده است. منشی و پرسنل شما ظرف کمتر از ۳۰ دقیقه کار با تقویم، ثبت نوبت و پرونده مشتریان را فرا می‌گیرند. علاوه بر این، ویدیوهای آموزشی گام‌به‌گام و پشتیبانی در دسترس شماست.',
      en: 'Not at all. The interface is engineered for maximum simplicity and zero learning curve. Stylists and receptionists master appointment entries and client cards within 30 minutes.'
    }
  },
  {
    q: {
      fa: 'آیا پیامک‌های یادآوری برای شماره‌هایی که پیامک تبلیغاتی‌شان بسته است ارسال می‌شود؟',
      en: 'Do reminder SMS get delivered to clients who blocked promotional messages?'
    },
    a: {
      fa: 'بله، صد درصد. تمامی پیامک‌های نوبت، تایید و یادآوری از طریق خطوط خدماتی بدون فیلتر ارسال می‌شوند و تمام مشتریان، حتی کسانی که پیامک‌های تبلیغاتی را مسدود کرده‌اند، پیامک‌ها را فوراً دریافت خواهند کرد.',
      en: 'Yes. All operational confirmations and reminder alerts are routed through verified transactional gateways, ensuring 100% delivery even to DND-blocked numbers.'
    }
  },
  {
    q: {
      fa: 'فرآیند راه‌اندازی سیستم برای سالن چقدر زمان می‌برد؟',
      en: 'How long does the setup and deployment process take?'
    },
    a: {
      fa: 'برای پلن استارتر بین ۳ تا ۵ روز کاری، برای پلن حرفه‌ای ۵ تا ۷ روز کاری، و برای پلن جامع سازمانی بین ۱۰ تا ۱۴ روز کاری زمان نیاز است تا تمام تنظیمات، دامنه، درگاه پرداخت و لاین‌های خدمات به طور کامل مستقر شوند.',
      en: 'Starter plans deploy in 3-5 business days; Professional plans in 5-7 business days; and Enterprise plans in 10-14 business days including full data onboarding and payment gateway setups.'
    }
  }
];
