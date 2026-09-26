import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  X as CloseIcon,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Phone,
  MessageSquare,
  Layers,
  Sun,
  Moon,
  Calculator,
  HelpCircle,
  Share2,
  Copy,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import {
  salonPlans,
  salonPlansContent,
  comparisonMatrix,
  salonFaq,
  SalonPlan,
  PlanModule
} from '../data/salonPlans';
import { Lang } from '../types';

interface SalonPricingPageProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onNavigateHome: () => void;
}

export const SalonPricingPage: React.FC<SalonPricingPageProps> = ({
  lang,
  setLang,
  theme,
  toggleTheme,
  onNavigateHome
}) => {
  const isRtl = lang === 'fa';
  const t = salonPlansContent[lang];

  // Billing cycle state
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // Mobile active plan filter (specific plan id)
  const [activeMobilePlan, setActiveMobilePlan] = useState<'starter' | 'professional' | 'premium'>('professional');

  // Inquiry Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanForInquiry, setSelectedPlanForInquiry] = useState<SalonPlan | null>(null);

  // Expanded modules per plan
  const [expandedPlanModules, setExpandedPlanModules] = useState<Record<string, boolean>>({
    starter: false,
    professional: false,
    premium: false
  });

  // Comparison matrix category filter
  const [comparisonFilter, setComparisonFilter] = useState<string>('all');

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // ROI Calculator states
  const [dailyClients, setDailyClients] = useState<number>(30);
  const [avgTicket, setAvgTicket] = useState<number>(850000); // 850,000 Tomans
  const [noShowRate, setNoShowRate] = useState<number>(15); // 15%

  // ROI calculation formulas:
  // Monthly appointments = dailyClients * 30
  // Monthly no-shows = Monthly appointments * (noShowRate / 100)
  // Recover ~65% of no-shows with automated 2-step SMS & online booking deposits
  const monthlyAppointments = dailyClients * 30;
  const monthlyNoShows = Math.round(monthlyAppointments * (noShowRate / 100));
  const recoveredClientsPerMonth = Math.round(monthlyNoShows * 0.65);
  const recoveredRevenueTomans = recoveredClientsPerMonth * avgTicket;
  const savedSecretaryHoursPerMonth = Math.round((dailyClients * 30 * 4) / 60);

  const formatNumber = (num: number) => {
    return isRtl ? num.toLocaleString('fa-IR') : num.toLocaleString('en-US');
  };

  const handleToggleModuleAccordion = (planId: string) => {
    setExpandedPlanModules(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }));
  };

  const handleOpenGeneralInquiry = () => {
    setSelectedPlanForInquiry(null);
    setIsModalOpen(true);
  };

  const handleOpenPlanInquiry = (plan: SalonPlan) => {
    setSelectedPlanForInquiry(plan);
    setIsModalOpen(true);
  };

  const handleShareLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setToastMessage(t.copyLinkSuccess);
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const handleSetCalculatorPreset = (clients: number, ticket: number, rate: number) => {
    setDailyClients(clients);
    setAvgTicket(ticket);
    setNoShowRate(rate);
  };

  // Categories in comparison matrix
  const categories = useMemo(() => {
    const list: { fa: string; en: string }[] = [];
    const seen = new Set<string>();
    comparisonMatrix.forEach(row => {
      const key = row.category.en;
      if (!seen.has(key)) {
        seen.add(key);
        list.push(row.category);
      }
    });
    return list;
  }, []);

  const filteredMatrix = useMemo(() => {
    if (comparisonFilter === 'all') return comparisonMatrix;
    return comparisonMatrix.filter(row => row.category.en === comparisonFilter);
  }, [comparisonFilter]);

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen w-full bg-[#f4f4f4] dark:bg-[#09090b] text-black dark:text-white transition-colors duration-300 overflow-x-hidden pb-20 lg:pb-0 ${
        isRtl ? 'font-vazirmatn' : 'font-montserrat'
      }`}
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-none bg-black text-white dark:bg-white dark:text-black text-xs font-semibold shadow-2xl flex items-center gap-2 border border-white/20 dark:border-black/20"
          >
            <Check size={16} />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#f4f4f4]/90 dark:bg-[#09090b]/90 border-b border-black/10 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo & Breadcrumb */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={onNavigateHome}
              className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase hover:opacity-70 transition-opacity focus:outline-none cursor-pointer"
              title="VIBIA Home"
            >
              VIBIA
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-black/40 dark:text-white/40">
              <span>/</span>
              <span className="text-black/80 dark:text-white/80 font-semibold truncate max-w-[200px] md:max-w-none">
                {isRtl ? 'راهکار جامع سالن‌های زیبایی' : 'Beauty Salon Solution'}
              </span>
            </div>
          </div>

          {/* Controls & CTAs */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Share Page Button */}
            <button
              onClick={handleShareLink}
              className="p-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors focus:outline-none cursor-pointer"
              title={isRtl ? 'کپی لینک صفحه' : 'Share link'}
              aria-label="Share"
            >
              <Share2 size={17} />
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'fa' : 'en')}
              className="px-2 py-1 text-xs font-bold hover:opacity-70 transition-opacity focus:outline-none cursor-pointer border border-black/20 dark:border-white/20"
            >
              {lang === 'en' ? 'فا' : 'EN'}
            </button>

            {/* Back to Home Button (Desktop) */}
            <button
              onClick={onNavigateHome}
              className="hidden md:flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white transition-colors cursor-pointer"
            >
              {isRtl ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
              <span>{t.backToHome}</span>
            </button>

            {/* Primary Consultation Button */}
            <button
              onClick={handleOpenGeneralInquiry}
              className="px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-black text-white dark:bg-white dark:text-black hover:opacity-85 active:scale-95 transition-all shadow-sm cursor-pointer shrink-0"
            >
              {isRtl ? 'مشاوره رایگان' : 'Free Demo'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20">
        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          {/* Subtle Editorial Kicker */}
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 text-[11px] sm:text-xs tracking-widest uppercase font-mono text-black/60 dark:text-white/60">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span>{t.heroKicker}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight md:leading-[1.15] mb-4 sm:mb-6 text-balance">
            {t.heroTitle}
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-black/75 dark:text-white/75 leading-relaxed max-w-2xl sm:max-w-3xl mx-auto font-normal mb-8 text-balance">
            {t.heroSubtitle}
          </p>

          {/* Transparent Pricing Model Callout */}
          <div className="p-4 sm:p-6 bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-start max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <ShieldCheck className="shrink-0 text-black dark:text-white mt-0.5" size={18} />
              <div>
                <h2 className="text-xs sm:text-sm font-bold tracking-tight text-black dark:text-white mb-1">
                  {t.transparentPricingTitle}
                </h2>
                <p className="text-[11px] sm:text-xs text-black/70 dark:text-white/70 leading-relaxed">
                  {t.transparentPricingSubtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Billing Cycle Switcher */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-2">
            <div className="inline-flex items-center p-1 border border-black/20 dark:border-white/20 bg-white/60 dark:bg-black/60 backdrop-blur-sm shadow-sm w-full sm:w-auto max-w-sm sm:max-w-none">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`flex-1 sm:flex-initial px-4 sm:px-6 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                    : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
                }`}
              >
                {t.billedMonthly}
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 sm:px-6 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                  billingCycle === 'yearly'
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                    : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
                }`}
              >
                <span>{t.billedYearly}</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-1 py-0.5 font-mono">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* 3 CORE PLANS SECTION */}
        <section className="mb-20 sm:mb-28">
          {/* Mobile Plan Selector Tabs (Visible only on mobile/tablet) */}
          <div className="lg:hidden mb-6">
            <div className="text-[11px] font-mono uppercase tracking-widest text-black/50 dark:text-white/50 mb-2 px-1">
              {isRtl ? 'انتخاب پلن جهت بررسی:' : 'Select Plan to Inspect:'}
            </div>
            <div className="grid grid-cols-3 gap-1 p-1 bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-center">
              <button
                onClick={() => setActiveMobilePlan('starter')}
                className={`py-2 text-[11px] font-bold transition-all cursor-pointer ${
                  activeMobilePlan === 'starter'
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                    : 'text-black/60 dark:text-white/60'
                }`}
              >
                {isRtl ? 'پلن ۱' : 'Plan 1'}
              </button>
              <button
                onClick={() => setActiveMobilePlan('professional')}
                className={`py-2 text-[11px] font-bold transition-all cursor-pointer ${
                  activeMobilePlan === 'professional'
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                    : 'text-black/60 dark:text-white/60'
                }`}
              >
                <span>{isRtl ? 'پلن ۲ (پیشنهادی)' : 'Plan 2 (Pro)'}</span>
              </button>
              <button
                onClick={() => setActiveMobilePlan('premium')}
                className={`py-2 text-[11px] font-bold transition-all cursor-pointer ${
                  activeMobilePlan === 'premium'
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                    : 'text-black/60 dark:text-white/60'
                }`}
              >
                {isRtl ? 'پلن ۳' : 'Plan 3'}
              </button>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {salonPlans.map((plan) => {
              const isPopular = plan.isPopular;
              // Discounted monthly fee for annual billing (20% off)
              const effectiveMonthlyFee =
                billingCycle === 'yearly'
                  ? Math.round(plan.monthlyPrice.irr * 0.8)
                  : plan.monthlyPrice.irr;
              const formattedEffectiveMonthly = isRtl
                ? effectiveMonthlyFee.toLocaleString('fa-IR')
                : effectiveMonthlyFee.toLocaleString('en-US');

              const isExpanded = !!expandedPlanModules[plan.id];

              // Mobile visibility filter
              const isHiddenOnMobile = activeMobilePlan !== plan.id;

              return (
                <div
                  key={plan.id}
                  className={`flex flex-col justify-between transition-all duration-300 relative ${
                    isHiddenOnMobile ? 'hidden lg:flex' : 'flex'
                  } ${
                    isPopular
                      ? 'border-2 border-black dark:border-white bg-white dark:bg-zinc-900 shadow-xl lg:-translate-y-2'
                      : 'border border-black/15 dark:border-white/15 bg-white/70 dark:bg-zinc-900/60'
                  } p-5 sm:p-7 md:p-8`}
                >
                  {/* Flagship Top Ribbon */}
                  {isPopular && (
                    <div className="bg-black text-white dark:bg-white dark:text-black py-1.5 px-4 text-center text-[10px] sm:text-[11px] font-black uppercase tracking-widest -mx-5 sm:-mx-7 md:-mx-8 -mt-5 sm:-mt-7 md:-mt-8 mb-5 sm:mb-6 shadow-sm">
                      <span>{plan.badge?.[lang] || t.popularBadge}</span>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-baseline justify-between mb-3 border-b border-black/10 dark:border-white/10 pb-3">
                      <div>
                        <span className="font-mono text-[11px] font-bold text-black/50 dark:text-white/50 tracking-wider">
                          {isRtl ? `پلن ۰${plan.number}` : `TIER 0${plan.number}`}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
                          {plan.name[lang]}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-black/75 dark:text-white/75 min-h-[38px] mb-5 leading-relaxed">
                      {plan.tagline[lang]}
                    </p>

                    {/* Dual Pricing Structure: Setup + Monthly */}
                    <div className="mb-5 p-4 bg-black/[0.025] dark:bg-white/[0.025] border border-black/10 dark:border-white/10 space-y-3">
                      {/* Setup Fee (One-Time) */}
                      <div className="flex items-baseline justify-between">
                        <div>
                          <div className="text-xs font-bold text-black/80 dark:text-white/80">
                            {t.setupFeeLabel}
                          </div>
                          <div className="text-[10px] text-black/45 dark:text-white/45">
                            {t.oneTime}
                          </div>
                        </div>
                        <div className="text-end">
                          <span className="text-lg sm:text-xl font-black font-mono tabular-nums">
                            {plan.setupPrice[`formatted${isRtl ? 'Fa' : 'En'}` as keyof typeof plan.setupPrice]}
                          </span>{' '}
                          <span className="text-xs text-black/60 dark:text-white/60">{t.tomans}</span>
                        </div>
                      </div>

                      {/* Monthly Maintenance & Infrastructure Fee */}
                      <div className="border-t border-black/10 dark:border-white/10 pt-2.5 flex items-baseline justify-between">
                        <div>
                          <div className="text-xs font-bold text-black/80 dark:text-white/80">
                            {t.monthlyFeeLabel}
                          </div>
                          <div className="text-[10px] text-black/45 dark:text-white/45">
                            {billingCycle === 'yearly' ? (isRtl ? 'با ۲۰٪ تخفیف سالانه' : '20% off annual') : t.perMonth}
                          </div>
                        </div>
                        <div className="text-end">
                          <span className="text-lg sm:text-xl font-black font-mono tabular-nums text-blue-600 dark:text-blue-400">
                            {formattedEffectiveMonthly}
                          </span>{' '}
                          <span className="text-xs text-black/60 dark:text-white/60">{t.tomans}</span>
                        </div>
                      </div>
                    </div>

                    {/* Target Audience Hint */}
                    <div className="text-[11px] sm:text-xs text-black/65 dark:text-white/65 mb-5 border-r-2 rtl:border-r-2 rtl:border-l-0 ltr:border-l-2 ltr:border-r-0 border-black/30 dark:border-white/30 px-3 py-1 bg-black/[0.015] dark:bg-white/[0.015]">
                      {plan.targetAudience[lang]}
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-black/50 dark:text-white/50 mb-2">
                        {isRtl ? 'امکانات و ارزش‌های کلیدی:' : 'Key Capabilities:'}
                      </div>
                      {plan.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <Check size={14} className="shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                          <span className="leading-snug text-black/85 dark:text-white/85">{h[lang]}</span>
                        </div>
                      ))}
                    </div>

                    {/* Accordion Toggle for Detailed Technical Modules */}
                    <div className="border-t border-black/10 dark:border-white/10 pt-3.5 mb-5">
                      <button
                        type="button"
                        onClick={() => handleToggleModuleAccordion(plan.id)}
                        className="w-full flex items-center justify-between text-xs font-bold text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors py-1.5 focus:outline-none cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5">
                          <Layers size={14} />
                          <span>{t.viewModules} ({plan.modules.length} {isRtl ? 'ماژول نرم‌افزاری' : 'modules'})</span>
                        </span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden mt-3 space-y-2.5 pt-1 text-xs"
                          >
                            {plan.modules.map((mod, mIdx) => (
                              <div
                                key={mIdx}
                                className="p-3 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-start"
                              >
                                <div className="font-bold text-black dark:text-white mb-0.5">
                                  {mod.name[lang]}
                                </div>
                                <p className="text-[11px] text-black/65 dark:text-white/65 mb-2 leading-relaxed">
                                  {mod.description[lang]}
                                </p>
                                <ul className="space-y-1 text-[10px] text-black/80 dark:text-white/80">
                                  {mod.features.map((feat, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-1.5">
                                      <span className="w-1 h-1 rounded-full bg-black/40 dark:bg-white/40"></span>
                                      <span>{feat[lang]}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Primary CTA Button for this Plan */}
                  <div className="pt-4 border-t border-black/10 dark:border-white/10">
                    <button
                      type="button"
                      onClick={() => handleOpenPlanInquiry(plan)}
                      className={`w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98] ${
                        isPopular
                          ? 'bg-black text-white dark:bg-white dark:text-black hover:opacity-90 shadow-md'
                          : 'border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                      }`}
                    >
                      <span>{t.orderPlan}</span>
                      {isRtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* INTERACTIVE ROI & REVENUE CALCULATOR */}
        <section className="mb-20 sm:mb-28 p-5 sm:p-8 md:p-10 border border-black/15 dark:border-white/15 bg-white dark:bg-zinc-900 shadow-md">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest font-mono">
              <Calculator size={15} />
              <span>{t.calculatorTitle}</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-2 text-balance">
              {isRtl
                ? 'سامانه هوشمند در عمل چقدر به درآمد ماهانه سالن اضافه می‌کند؟'
                : 'How Much Revenue Does This Automation Actually Recover?'}
            </h3>
            <p className="text-xs sm:text-sm text-black/70 dark:text-white/70 max-w-2xl mx-auto">
              {t.calculatorSubtitle}
            </p>
          </div>

          {/* Quick Presets for Mobile & Desktop */}
          <div className="max-w-5xl mx-auto mb-6">
            <div className="text-[11px] font-mono text-black/50 dark:text-white/50 mb-2 text-center sm:text-start">
              {isRtl ? 'انتخاب سریع حجم کاری سالن:' : 'Quick Salon Presets:'}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleSetCalculatorPreset(15, 650000, 18)}
                className={`py-2 px-3 text-xs font-bold border transition-colors cursor-pointer text-center ${
                  dailyClients === 15
                    ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                    : 'border-black/15 dark:border-white/15 hover:border-black/40'
                }`}
              >
                {isRtl ? 'سالن جمع‌وجور (۱۵ مشتری/روز)' : 'Boutique (15 clients/day)'}
              </button>
              <button
                type="button"
                onClick={() => handleSetCalculatorPreset(35, 950000, 15)}
                className={`py-2 px-3 text-xs font-bold border transition-colors cursor-pointer text-center ${
                  dailyClients === 35
                    ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                    : 'border-black/15 dark:border-white/15 hover:border-black/40'
                }`}
              >
                {isRtl ? 'سالن شلوغ (۳۵ مشتری/روز)' : 'Busy Salon (35 clients/day)'}
              </button>
              <button
                type="button"
                onClick={() => handleSetCalculatorPreset(60, 1400000, 12)}
                className={`py-2 px-3 text-xs font-bold border transition-colors cursor-pointer text-center ${
                  dailyClients === 60
                    ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                    : 'border-black/15 dark:border-white/15 hover:border-black/40'
                }`}
              >
                {isRtl ? 'کلینیک و سالن بزرگ (۶۰+ مشتری/روز)' : 'Large Clinic (60+ clients/day)'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            {/* Sliders Input */}
            <div className="space-y-5 bg-black/[0.02] dark:bg-white/[0.02] p-5 sm:p-6 border border-black/10 dark:border-white/10">
              {/* Daily Clients Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span>{t.calculatorClientsPerDay}</span>
                  <span className="font-mono text-xs sm:text-sm font-black bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 tabular-nums">
                    {formatNumber(dailyClients)} {isRtl ? 'نفر' : 'clients'}
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="80"
                  step="1"
                  value={dailyClients}
                  onChange={(e) => setDailyClients(Number(e.target.value))}
                  className="w-full accent-black dark:accent-white cursor-pointer h-2 bg-black/10 dark:bg-white/10"
                />
                <div className="flex justify-between text-[10px] text-black/40 dark:text-white/40 mt-1 font-mono">
                  <span>5</span>
                  <span>40</span>
                  <span>80+</span>
                </div>
              </div>

              {/* Average Service Ticket Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span>{t.calculatorAverageTicket}</span>
                  <span className="font-mono text-xs sm:text-sm font-black bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 tabular-nums">
                    {formatNumber(avgTicket)} {t.tomans}
                  </span>
                </div>
                <input
                  type="range"
                  min="200000"
                  max="3500000"
                  step="50000"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full accent-black dark:accent-white cursor-pointer h-2 bg-black/10 dark:bg-white/10"
                />
                <div className="flex justify-between text-[10px] text-black/40 dark:text-white/40 mt-1 font-mono">
                  <span>{isRtl ? '۲۰۰ هزار' : '200K'}</span>
                  <span>{isRtl ? '۱.۵ میلیون' : '1.5M'}</span>
                  <span>{isRtl ? '۳.۵ میلیون+' : '3.5M+'}</span>
                </div>
              </div>

              {/* No-show / Cancellation Rate */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span>{t.calculatorNoShowRate}</span>
                  <span className="font-mono text-xs sm:text-sm font-black bg-red-600 text-white px-2 py-0.5 tabular-nums">
                    {formatNumber(noShowRate)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="35"
                  step="1"
                  value={noShowRate}
                  onChange={(e) => setNoShowRate(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer h-2 bg-black/10 dark:bg-white/10"
                />
                <div className="flex justify-between text-[10px] text-black/40 dark:text-white/40 mt-1 font-mono">
                  <span>5% ({isRtl ? 'پایین' : 'low'})</span>
                  <span>15% ({isRtl ? 'میانگین' : 'avg'})</span>
                  <span>35% ({isRtl ? 'بالا' : 'high'})</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Cards */}
            <div className="space-y-4">
              <div className="p-6 bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white shadow-xl">
                <span className="text-[11px] uppercase tracking-wider text-white/70 dark:text-black/70 font-semibold block mb-1">
                  {t.calculatorEstimatedRecovery}
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-mono font-black text-emerald-400 dark:text-emerald-600 tabular-nums">
                    +{formatNumber(recoveredRevenueTomans)}
                  </span>
                  <span className="text-xs font-bold">{t.tomans} / {t.perMonth}</span>
                </div>
                <p className="text-xs text-white/80 dark:text-black/80 leading-relaxed">
                  {isRtl
                    ? `با نجات ماهانه حدود ${formatNumber(recoveredClientsPerMonth)} نوبت از کنسلی به واسطه ارسال ۲ مرحله پیامک هوشمند و پیش‌پرداخت بیعانه اینترنتی!`
                    : `By rescuing approx ${formatNumber(recoveredClientsPerMonth)} missed appointments monthly through automated 2-step SMS & online deposits!`}
                </p>
              </div>

              <div className="p-4 sm:p-5 border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-black/75 dark:text-white/75">
                    {t.calculatorSavedHours}
                  </div>
                  <div className="text-[11px] text-black/50 dark:text-white/50 mt-0.5">
                    {isRtl ? 'عدم نیاز به هماهنگی تلفنی مکرر نوبت‌ها' : 'Eliminates redundant telephone scheduling'}
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-mono font-black tabular-nums">
                  ~{formatNumber(savedSecretaryHoursPerMonth)} {isRtl ? 'ساعت' : 'hrs'}
                </div>
              </div>

              <div className="text-[11px] text-black/50 dark:text-white/50 text-start leading-relaxed px-1">
                * {isRtl
                  ? 'برآوردها بر پایه آمار میدانی سالن‌های زیبایی با سیستم پیامکی خودکار و بیعانه اینترنتی محاسبه شده است.'
                  : 'Estimates based on beauty industry benchmarks implementing automated reminders and booking deposits.'}
              </div>
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE FEATURE COMPARISON MATRIX */}
        <section className="mb-20 sm:mb-28">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-2 text-balance">
              {t.comparisonTitle}
            </h3>
            <p className="text-xs sm:text-sm text-black/70 dark:text-white/70">
              {t.comparisonSubtitle}
            </p>

            {/* Category Filter Tabs */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setComparisonFilter('all')}
                className={`px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer border ${
                  comparisonFilter === 'all'
                    ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                    : 'border-black/10 dark:border-white/10 text-black/70 dark:text-white/70 hover:border-black/40'
                }`}
              >
                {isRtl ? 'همه دسته‌بندی‌ها' : 'All Categories'}
              </button>
              {categories.map((cat, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setComparisonFilter(cat.en)}
                  className={`px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer border ${
                    comparisonFilter === cat.en
                      ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                      : 'border-black/10 dark:border-white/10 text-black/70 dark:text-white/70 hover:border-black/40'
                  }`}
                >
                  {cat[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Matrix Table (Visible on md and larger) */}
          <div className="hidden md:block overflow-x-auto border border-black/15 dark:border-white/15 bg-white dark:bg-zinc-900 shadow-md">
            <table className="w-full text-start text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-black/20 dark:border-white/20 bg-black/[0.04] dark:bg-white/[0.04]">
                  <th className="p-4 sm:p-5 text-start font-bold uppercase tracking-wider text-black/60 dark:text-white/60 w-2/5">
                    {isRtl ? 'ماژول و قابلیت' : 'Module & Capability'}
                  </th>
                  <th className="p-4 sm:p-5 text-center font-bold uppercase tracking-wider text-black dark:text-white w-1/5">
                    {salonPlans[0].name[lang]}
                  </th>
                  <th className="p-4 sm:p-5 text-center font-bold uppercase tracking-wider text-black dark:text-white bg-black/5 dark:bg-white/5 w-1/5">
                    {salonPlans[1].name[lang]}
                  </th>
                  <th className="p-4 sm:p-5 text-center font-bold uppercase tracking-wider text-black dark:text-white w-1/5">
                    {salonPlans[2].name[lang]}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 dark:divide-white/10">
                {filteredMatrix.map((row, idx) => {
                  const renderCell = (val: boolean | string) => {
                    if (val === true) {
                      return <Check size={18} className="mx-auto text-emerald-600 dark:text-emerald-400" />;
                    }
                    if (val === false) {
                      return <CloseIcon size={16} className="mx-auto text-black/20 dark:text-white/20" />;
                    }
                    return <span className="font-medium text-black/90 dark:text-white/90">{val}</span>;
                  };

                  return (
                    <tr
                      key={idx}
                      className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="p-4 sm:p-5 text-start">
                        <div className="font-bold text-black dark:text-white mb-0.5">
                          {row.feature[lang]}
                        </div>
                        <div className="text-[10px] text-black/45 dark:text-white/45 font-mono">
                          {row.category[lang]}
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-center font-mono">
                        {renderCell(row.starter)}
                      </td>
                      <td className="p-4 sm:p-5 text-center font-mono bg-black/[0.02] dark:bg-white/[0.02] font-semibold">
                        {renderCell(row.professional)}
                      </td>
                      <td className="p-4 sm:p-5 text-center font-mono">
                        {renderCell(row.premium)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile-First Comparison Cards (Visible only on mobile screens under md) */}
          <div className="md:hidden space-y-3">
            {filteredMatrix.map((row, idx) => {
              const renderMobileBadge = (val: boolean | string) => {
                if (val === true) {
                  return <Check size={16} className="text-emerald-600 dark:text-emerald-400 mx-auto" />;
                }
                if (val === false) {
                  return <CloseIcon size={14} className="text-black/25 dark:text-white/25 mx-auto" />;
                }
                return <span className="text-[11px] font-bold text-black dark:text-white">{val}</span>;
              };

              return (
                <div
                  key={idx}
                  className="p-4 border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-bold text-xs text-black dark:text-white">
                      {row.feature[lang]}
                    </h4>
                    <span className="text-[10px] font-mono text-black/45 dark:text-white/45 shrink-0">
                      {row.category[lang]}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-black/5 dark:border-white/5 text-center">
                    <div className="p-2 bg-black/[0.02] dark:bg-white/[0.02]">
                      <div className="text-[10px] text-black/50 dark:text-white/50 mb-1">
                        {isRtl ? 'استارتر' : 'Starter'}
                      </div>
                      {renderMobileBadge(row.starter)}
                    </div>
                    <div className="p-2 bg-black/[0.05] dark:bg-white/[0.05] border border-black/10 dark:border-white/10">
                      <div className="text-[10px] font-bold text-black/80 dark:text-white/80 mb-1">
                        {isRtl ? 'حرفه‌ای' : 'Pro'}
                      </div>
                      {renderMobileBadge(row.professional)}
                    </div>
                    <div className="p-2 bg-black/[0.02] dark:bg-white/[0.02]">
                      <div className="text-[10px] text-black/50 dark:text-white/50 mb-1">
                        {isRtl ? 'اینترپرایز' : 'Total'}
                      </div>
                      {renderMobileBadge(row.premium)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="mb-20 sm:mb-28 max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-black/50 dark:text-white/50 tracking-widest font-mono mb-2">
              <HelpCircle size={15} />
              <span>FAQ</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">
              {t.faqTitle}
            </h3>
          </div>

          <div className="space-y-3">
            {salonFaq.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-black/15 dark:border-white/15 bg-white dark:bg-zinc-900 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-start font-bold text-xs sm:text-sm focus:outline-none cursor-pointer"
                  >
                    <span className="leading-snug">{faq.q[lang]}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden px-4 sm:px-5 pb-5 pt-1 text-xs text-black/75 dark:text-white/75 leading-relaxed border-t border-black/5 dark:border-white/5"
                      >
                        {faq.a[lang]}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* FINAL CALL TO ACTION BANNER */}
        <section className="p-6 sm:p-10 md:p-12 bg-black text-white dark:bg-white dark:text-black text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight mb-3 text-balance">
            {t.consultationCta}
          </h3>
          <p className="text-xs sm:text-sm text-white/75 dark:text-black/75 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed font-normal">
            {t.consultationDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="tel:+989964222821"
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-black dark:bg-black dark:text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              <span>{t.callButton}</span>
            </a>
            <a
              href={`sms:+989964222821?body=${encodeURIComponent(
                isRtl
                  ? 'سلام، مایل به دریافت مشاوره در خصوص راهکار سالن زیبایی هستم.'
                  : 'Hello, I would like to inquire about the beauty salon solution.'
              )}`}
              className="w-full sm:w-auto px-6 py-3.5 border border-white dark:border-black text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10 active:scale-95 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} />
              <span>{t.smsButton}</span>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-black/10 dark:border-white/10 py-8 md:py-10 text-center text-xs text-black/50 dark:text-white/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-black text-black dark:text-white tracking-tighter uppercase">VIBIA</span>
            <span>·</span>
            <span>{isRtl ? 'راهکار جامع دیجیتال سالن‌های زیبایی' : 'Beauty Salon Operating System'}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateHome}
              className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              {t.backToHome}
            </button>
            <span>·</span>
            <span>vibia.studio@gmail.com</span>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY QUICK ACTION BAR (Visible only on mobile/tablet) */}
      <div className="fixed bottom-0 inset-x-0 z-30 lg:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-t border-black/10 dark:border-white/10 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex flex-col text-start">
          <span className="text-[10px] text-black/50 dark:text-white/50 uppercase tracking-widest font-mono">
            {isRtl ? 'مشاوره اختصاصی سالن' : 'Salon Consultation'}
          </span>
          <span className="text-xs font-black font-mono">۰۹۹۶۴۲۲۲۸۲۱</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="tel:+989964222821"
            className="h-10 px-3.5 bg-black text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:opacity-90 active:scale-95 transition-all shadow-sm"
            aria-label="Direct Phone Call"
          >
            <Phone size={14} />
            <span>{isRtl ? 'تماس' : 'Call'}</span>
          </a>
          <button
            type="button"
            onClick={handleOpenGeneralInquiry}
            className="h-10 px-3.5 border border-black/30 dark:border-white/30 text-black dark:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-all cursor-pointer"
          >
            <MessageSquare size={14} />
            <span>{isRtl ? 'پیامک' : 'SMS'}</span>
          </button>
        </div>
      </div>

      {/* INQUIRY & CONSULTATION MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#f4f4f4] dark:bg-zinc-900 border border-black/20 dark:border-white/20 p-6 sm:p-8 shadow-2xl text-start"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 end-4 p-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white focus:outline-none cursor-pointer"
                aria-label="Close modal"
              >
                <CloseIcon size={20} />
              </button>

              <div className="text-[11px] uppercase font-mono tracking-widest text-black/50 dark:text-white/50 mb-1">
                {isRtl ? 'مشاوره و ارتباط مستقیم' : 'Direct Consultation'}
              </div>

              <h3 className="text-xl sm:text-2xl font-black mb-3">
                {selectedPlanForInquiry
                  ? (isRtl ? `مشاوره: ${selectedPlanForInquiry.name.fa}` : `Inquiry: ${selectedPlanForInquiry.name.en}`)
                  : (isRtl ? 'دریافت مشاوره رایگان سالن زیبایی' : 'Free Salon Solution Consultation')}
              </h3>

              {/* Informative message - NO DEFAULT FORM */}
              <p className="text-xs sm:text-sm text-black/75 dark:text-white/75 mb-6 leading-relaxed">
                {isRtl
                  ? 'جهت هماهنگی جلسه دمو، مشاوره فنی و انتخاب مناسب‌ترین راهکار برای سالن زیبایی خود، می‌توانید مستقیماً تماس بگیرید یا پیامک ارسال نمایید:'
                  : 'To schedule a live walkthrough, get technical guidance, or discuss custom requirements for your salon, reach out directly via call or SMS:'}
              </p>

              {/* Direct Contact Actions: Phone & SMS */}
              <div className="space-y-3">
                {/* Direct Phone Call */}
                <a
                  href="tel:+989964222821"
                  className="w-full py-3.5 px-4 bg-black text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 hover:opacity-90 active:scale-[0.99] transition-all shadow-sm"
                >
                  <Phone size={17} />
                  <span>{isRtl ? 'تماس تلفنی مستقیم: ۰۹۹۶۴۲۲۲۸۲۱' : 'Call Direct: +989964222821'}</span>
                </a>

                {/* Direct SMS (Native SMS App) */}
                <a
                  href={`sms:+989964222821?body=${encodeURIComponent(
                    selectedPlanForInquiry
                      ? `سلام، مایل به دریافت مشاوره در خصوص ${selectedPlanForInquiry.name.fa} برای سالن زیبایی هستم.`
                      : (isRtl ? 'سلام، مایل به دریافت مشاوره در خصوص راهکار سالن زیبایی هستم.' : 'Hello, I would like to inquire about the beauty salon solution.')
                  )}`}
                  className="w-full py-3.5 px-4 border border-black/30 dark:border-white/30 text-black dark:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 hover:bg-black/5 dark:hover:bg-white/5 active:scale-[0.99] transition-colors"
                >
                  <MessageSquare size={17} />
                  <span>{isRtl ? 'ارسال پیامک (SMS): ۰۹۹۶۴۲۲۲۸۲۱' : 'Send SMS: +989964222821'}</span>
                </a>

                {/* 1-Click Copy Phone Number */}
                <button
                  type="button"
                  onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText('+989964222821');
                      setToastMessage(isRtl ? 'شماره ۰۹۹۶۴۲۲۲۸۲۱ کپی شد' : 'Phone copied: +989964222821');
                      setTimeout(() => setToastMessage(null), 3000);
                    }
                  }}
                  className="w-full py-2.5 px-4 text-xs font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors flex items-center justify-center gap-2 border border-dashed border-black/20 dark:border-white/20 hover:border-black/50 dark:hover:border-white/50 cursor-pointer"
                >
                  <Copy size={14} />
                  <span>{isRtl ? 'کپی شماره تماس (۰۹۹۶۴۲۲۲۸۲۱)' : 'Copy phone number (+989964222821)'}</span>
                </button>

                {/* Email Option */}
                <div className="pt-2 text-center">
                  <a
                    href={`mailto:vibia.studio@gmail.com?subject=${encodeURIComponent(
                      selectedPlanForInquiry ? `Salon Inquiry: ${selectedPlanForInquiry.name.en}` : 'Salon Solution Inquiry'
                    )}`}
                    className="text-xs text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors inline-block"
                  >
                    vibia.studio@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
