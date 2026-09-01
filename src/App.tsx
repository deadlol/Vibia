import React, { useState } from 'react';
import { ActivePanel, Lang } from './types';
import { content, services } from './data/dictionary';
import { Header } from './components/Header';
import { EdgeNav } from './components/EdgeNav';
import { HomeView } from './components/HomeView';
import { WorksPanel } from './components/ServicesPanel';
import { AboutPanel } from './components/AboutPanel';
import { ContactPanel } from './components/ContactPanel';
import { useSEO } from './hooks/useSEO';

export default function App() {
  const [activePanel, setActivePanel] = useState<ActivePanel>('home');
  const [lang, setLang] = useState<Lang>('en');

  const dict = content[lang];
  const isRtl = lang === 'fa';

  useSEO(lang);

  return (
    <main
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`relative w-screen h-screen overflow-hidden bg-[#f4f4f4] text-black select-none ${
        isRtl ? 'font-vazirmatn' : 'font-montserrat'
      }`}
    >
      <Header
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        lang={lang}
        setLang={setLang}
        closeText={dict.close}
      />

      <EdgeNav
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        lang={lang}
        dict={dict}
      />

      <HomeView dict={dict} setActivePanel={setActivePanel} />

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
  );
}
