import { useState, useEffect } from 'react';
import { 
  getViewportDimensions, 
  isMobile, 
  isTablet, 
  isDesktop,
  getPreferredColorScheme,
  prefersReducedMotion
} from '../utils/platform.js';

/**
 * Custom hook for responsive design
 * @returns {Object} Responsive state and utilities
 */
export const useResponsive = () => {
  const [viewport, setViewport] = useState(getViewportDimensions());
  const [isMobileDevice, setIsMobileDevice] = useState(isMobile());
  const [isTabletDevice, setIsTabletDevice] = useState(isTablet());
  const [isDesktopDevice, setIsDesktopDevice] = useState(isDesktop());
  const [colorScheme, setColorScheme] = useState(getPreferredColorScheme());
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion());

  useEffect(() => {
    const handleResize = () => {
      const newViewport = getViewportDimensions();
      setViewport(newViewport);
      
      // Update device type based on viewport
      setIsMobileDevice(newViewport.width < 768);
      setIsTabletDevice(newViewport.width >= 768 && newViewport.width < 1024);
      setIsDesktopDevice(newViewport.width >= 1024);
    };

    const handleColorSchemeChange = (e) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    };

    const handleReducedMotionChange = (e) => {
      setReducedMotion(e.matches);
    };

    // Add event listeners
    window.addEventListener('resize', handleResize);
    
    // Listen for color scheme changes
    const colorSchemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeMedia.addEventListener('change', handleColorSchemeChange);
    
    // Listen for reduced motion changes
    const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotionMedia.addEventListener('change', handleReducedMotionChange);

    // Initial call
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      colorSchemeMedia.removeEventListener('change', handleColorSchemeChange);
      reducedMotionMedia.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

  // Breakpoint helpers
  const breakpoints = {
    xs: viewport.width < 576,
    sm: viewport.width >= 576 && viewport.width < 768,
    md: viewport.width >= 768 && viewport.width < 992,
    lg: viewport.width >= 992 && viewport.width < 1200,
    xl: viewport.width >= 1200
  };

  // Responsive utilities
  const responsive = {
    // Device type
    isMobile: isMobileDevice,
    isTablet: isTabletDevice,
    isDesktop: isDesktopDevice,
    
    // Breakpoints
    ...breakpoints,
    
    // Viewport
    viewport,
    
    // Color scheme
    isDark: colorScheme === 'dark',
    isLight: colorScheme === 'light',
    
    // Motion
    prefersReducedMotion: reducedMotion,
    
    // Orientation
    isLandscape: viewport.width > viewport.height,
    isPortrait: viewport.height > viewport.width
  };

  return responsive;
};

/**
 * Hook for detecting when element is in viewport
 * @param {Object} options - IntersectionObserver options
 * @returns {Object} Ref and visibility state
 */
export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: 0.1,
      ...options
    });

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, isInView];
};

/**
 * Hook for touch gestures
 * @returns {Object} Touch gesture handlers
 */
export const useTouchGestures = () => {
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd({ x: 0, y: 0 });
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const onTouchMove = (e) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distanceX = touchStart.x - touchEnd.x;
    const distanceY = touchStart.y - touchEnd.y;
    const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);

    if (isHorizontalSwipe) {
      if (Math.abs(distanceX) > minSwipeDistance) {
        if (distanceX > 0) {
          // Swiped left
          return { direction: 'left', distance: distanceX };
        } else {
          // Swiped right
          return { direction: 'right', distance: Math.abs(distanceX) };
        }
      }
    } else {
      if (Math.abs(distanceY) > minSwipeDistance) {
        if (distanceY > 0) {
          // Swiped up
          return { direction: 'up', distance: distanceY };
        } else {
          // Swiped down
          return { direction: 'down', distance: Math.abs(distanceY) };
        }
      }
    }

    return null;
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    touchStart,
    touchEnd
  };
};

export default {
  useResponsive,
  useInView,
  useTouchGestures
};





