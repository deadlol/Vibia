import React, { useState, useEffect } from 'react';
import { ActivePanel, Lang } from './types';
import { content, services } from './data/dictionary';
import { Header } from './components/Header';
import { EdgeNav } from './components/EdgeNav';
import { HomeView } from './components/HomeView';
import { WorksPanel } from './components/ServicesPanel';
import { AboutPanel } from './components/AboutPanel';
import { ContactPanel } from './components/ContactPanel';
import { Preloader } from './components/Preloader';
import { useSEO } from './hooks/useSEO';
import { useDarkMode } from './hooks/useDarkMode';

export default function App() {
  const [activePanel, setActivePanel] = useState<ActivePanel>('home');
  const [lang, setLang] = useState<Lang>('fa');
  const { theme, toggleTheme } = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);

  // Preload images to ensure instantaneous hovering
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = services.map((service) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = service.image;
          img.onload = resolve;
          img.onerror = resolve; // Resolve even on error to not block the loader forever
        });
      });

      // Artificial minimum delay so the beautiful loader can be appreciated
      const minDelay = new Promise((resolve) => setTimeout(resolve, 2500));

      await Promise.all([...imagePromises, minDelay]);
      setIsLoading(false);
    };

    loadImages();
  }, []);

  const dict = content[lang];
  const isRtl = lang === 'fa';

  useSEO(lang);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <main
        dir={isRtl ? 'rtl' : 'ltr'}
        className={`relative w-screen h-screen overflow-hidden bg-[#f4f4f4] dark:bg-zinc-950 text-black dark:text-white select-none ${
          isRtl ? 'font-vazirmatn' : 'font-montserrat'
        }`}
      >
      <Header
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        lang={lang}
        setLang={setLang}
        closeText={dict.close}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <EdgeNav
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        lang={lang}
        dict={dict}
      />

      <HomeView dict={dict} activePanel={activePanel} setActivePanel={setActivePanel} theme={theme} />

      <WorksPanel
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        lang={lang}
        dict={dict}
        services={services}
      />

      <AboutPanel
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        lang={lang}
        dict={dict}
      />

      <ContactPanel
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        lang={lang}
        dict={dict}
      />
    </main>
    </>
  );
}
