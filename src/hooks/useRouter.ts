import { useState, useEffect, useCallback } from 'react';

export type AppRoute = 'home' | 'pricing';

export function useRouter() {
  const getRouteFromUrl = useCallback((): AppRoute => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    if (
      path.startsWith('/pricing') ||
      path.startsWith('/plans') ||
      path.startsWith('/salon') ||
      path.startsWith('/tariffs') ||
      hash.includes('pricing') ||
      hash.includes('plans') ||
      hash.includes('salon')
    ) {
      return 'pricing';
    }
    return 'home';
  }, []);

  const [route, setRoute] = useState<AppRoute>(getRouteFromUrl);

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(getRouteFromUrl());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, [getRouteFromUrl]);

  const navigateTo = useCallback((newRoute: AppRoute) => {
    const targetPath = newRoute === 'pricing' ? '/pricing' : '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
    setRoute(newRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { route, navigateTo };
}
