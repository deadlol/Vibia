import { useEffect } from 'react';
import { Lang } from '../types';
import { AppRoute } from './useRouter';

export function useSEO(lang: Lang, route: AppRoute = 'home') {
  useEffect(() => {
    const isFa = lang === 'fa';
    
    document.documentElement.lang = isFa ? 'fa' : 'en';
    document.documentElement.dir = isFa ? 'rtl' : 'ltr';

    let title = '';
    let description = '';
    let keywords = '';

    if (route === 'pricing') {
      title = isFa
        ? 'ویبیا — راهکار جامع سالن زیبایی؛ نوبت‌دهی آنلاین، CRM و تعرفه پلن‌ها'
        : 'VIBIA — Beauty Salon Digital Operating System & Pricing Plans';
      description = isFa
        ? 'راهکار کامل سالن‌های زیبایی ویبیا؛ سیستم نوبت‌دهی آنلاین، اتوماسیون پیامک، مدیریت پرسنل، CRM و پرونده مشتریان، انبارداری و مقایسه پلن‌های استارتر، حرفه‌ای و پیشرفته.'
        : 'Explore Vibia’s turnkey digital solution for beauty salons: 24/7 online booking, SMS automation, staff rosters, CRM, and transparent modular pricing.';
      keywords = isFa
        ? 'پلن سالن زیبایی, تعرفه نرم افزار آرایشگاه, سیستم نوبت دهی سالن زیبایی, رزرو آنلاین آرایشگاه, CRM سالن زیبایی, اتوماسیون سالن, ویبیا'
        : 'Beauty salon software, salon booking system, salon CRM, appointment scheduling, salon digital transformation, Vibia';
    } else {
      title = isFa 
        ? 'ویبیا — آژانس تحول دیجیتال و هوش مصنوعی B2B' 
        : 'VIBIA — B2B Digital Transformation & AI Agency';
      description = isFa 
        ? 'ویبیا یک آژانس تحول دیجیتال سازمانی است که بر توسعه نرم‌افزارهای اختصاصی، اتوماسیون هوش مصنوعی و پلتفرم‌های سازمانی با تضمین کیفیت دقیق (QA) و گارانتی SLA تمرکز دارد.' 
        : 'Vibia is an enterprise digital transformation agency specializing in custom software, AI automation, and high-performance web platforms with rigorous QA and SLA guarantees.';
      keywords = isFa
        ? 'آژانس ویبیا, تحول دیجیتال, اتوماسیون هوش مصنوعی, توسعه نرم‌افزار سازمانی, پلتفرم B2B, طراحی داشبورد مدیریتی, تضمین کیفیت نرم‌افزار, خدمات ابری, توسعه API'
        : 'Vibia Agency, Digital Transformation, AI Automation, B2B Software Agency, Custom Web Development, Enterprise Dashboards, API Integration, Tech QA, Enterprise Software';
    }
    
    document.title = title;

    const updateMeta = (nameOrProperty: string, value: string, content: string) => {
      let element = document.querySelector(`meta[${nameOrProperty}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameOrProperty, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('name', 'title', title);
    updateMeta('name', 'description', description);
    updateMeta('name', 'keywords', keywords);

    updateMeta('property', 'og:title', title);
    updateMeta('property', 'og:description', description);
    updateMeta('property', 'og:site_name', isFa ? 'آژانس ویبیا' : 'VIBIA Agency');

    updateMeta('property', 'twitter:title', title);
    updateMeta('property', 'twitter:description', description);
    
  }, [lang, route]);
}
