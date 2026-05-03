import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from 'lenis/react';

const ScrollToTop = () => {
  const location = useLocation();
  const { pathname } = location;
  const lenis = useLenis();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        // Longer timeout to allow page layout and images to load
        const timer = setTimeout(() => {
          if (lenis) {
            lenis.scrollTo(el, { 
              offset: -100,
              duration: 2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
          } else {
            const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - 100,
              behavior: 'smooth'
            });
          }
        }, 500);
        return () => clearTimeout(timer);
      }
    } else {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, location.hash, lenis]);

  return null;
};

export default ScrollToTop;
