import { useEffect } from 'react';
import { Lang } from '../types';

export function useSEO(lang: Lang) {
  useEffect(() => {
    const isFa = lang === 'fa';
    
    document.documentElement.lang = isFa ? 'fa' : 'en';
    document.documentElement.dir = isFa ? 'rtl' : 'ltr';

    const title = isFa 
      ? 'ویبیا — آژانس تحول دیجیتال و هوش مصنوعی B2B' 
      : 'VIBIA — B2B Digital Transformation & AI Agency';
      
    const description = isFa 
      ? 'ویبیا یک آژانس تحول دیجیتال سازمانی است که بر توسعه نرم‌افزارهای اختصاصی، اتوماسیون هوش مصنوعی و پلتفرم‌های سازمانی با تضمین کیفیت دقیق (QA) و گارانتی SLA تمرکز دارد.' 
      : 'Vibia is an enterprise digital transformation agency specializing in custom software, AI automation, and high-performance web platforms with rigorous QA and SLA guarantees.';
      
    const keywords = isFa
      ? 'آژانس ویبیا, تحول دیجیتال, اتوماسیون هوش مصنوعی, توسعه نرم‌افزار سازمانی, پلتفرم B2B, طراحی داشبورد مدیریتی, تضمین کیفیت نرم‌افزار, خدمات ابری, توسعه API'
      : 'Vibia Agency, Digital Transformation, AI Automation, B2B Software Agency, Custom Web Development, Enterprise Dashboards, API Integration, Tech QA, Enterprise Software';
    
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
    
  }, [lang]);
}