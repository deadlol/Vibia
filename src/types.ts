export type ActivePanel = 'home' | 'works' | 'about' | 'contact';
export type Lang = 'en' | 'fa';

export interface Service {
  id: string;
  title: { en: string; fa: string };
  category: { en: string; fa: string };
  description: { en: string; fa: string };

  image: string;
  bgHex: string;
  accentColor: string;
  tags: string[];
}

export interface ContentDictionary {
  homeTitle: string;
  homeSubtitle: string;
  navWorks: string;
  navAbout: string;
  navContact: string;
  selectedProjects: string;
  viewProject: string;
  close: string;
  aboutTitle: string;
  aboutBigTitle: string;
  aboutBioPara1: string;
  aboutBioPara2: string;
  prj1: string;
  prj2: string;
  prj3: string;
  prj4: string;
  projectsHeader: string;
  getInTouch: string;
  phoneLabel: string;
  emailLabel: string;
  creditsLabel: string;
  phoneValue: string;
  emailValue: string;
  creditsValue: string;
  copied: string;
}
