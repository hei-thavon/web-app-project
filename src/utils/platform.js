// Cross-platform utility functions

/**
 * Detect the current platform
 * @returns {string} Platform identifier
 */
export const getPlatform = () => {
  if (typeof window === 'undefined') return 'server';
  
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (/android/.test(userAgent)) return 'android';
  if (/iphone|ipad|ipod/.test(userAgent)) return 'ios';
  if (/windows/.test(userAgent)) return 'windows';
  if (/macintosh|mac os x/.test(userAgent)) return 'macos';
  if (/linux/.test(userAgent)) return 'linux';
  
  return 'unknown';
};

/**
 * Check if the device supports touch
 * @returns {boolean}
 */
export const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

/**
 * Check if the device is mobile
 * @returns {boolean}
 */
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return /android|iphone|ipad|ipod|blackberry|windows phone/i.test(navigator.userAgent);
};

/**
 * Check if the device is tablet
 * @returns {boolean}
 */
export const isTablet = () => {
  if (typeof window === 'undefined') return false;
  return /ipad|android(?=.*\b(?!.*\b(?:mobile|phone|watch|tv|car|console|tablet)\b))/.test(navigator.userAgent);
};

/**
 * Check if the device is desktop
 * @returns {boolean}
 */
export const isDesktop = () => {
  if (typeof window === 'undefined') return false;
  return !isMobile() && !isTablet();
};

/**
 * Get screen dimensions
 * @returns {Object} Screen dimensions
 */
export const getScreenDimensions = () => {
  if (typeof window === 'undefined') return { width: 0, height: 0 };
  
  return {
    width: window.screen.width,
    height: window.screen.height,
    availWidth: window.screen.availWidth,
    availHeight: window.screen.availHeight
  };
};

/**
 * Get viewport dimensions
 * @returns {Object} Viewport dimensions
 */
export const getViewportDimensions = () => {
  if (typeof window === 'undefined') return { width: 0, height: 0 };
  
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

/**
 * Check if the device supports PWA features
 * @returns {boolean}
 */
export const supportsPWA = () => {
  if (typeof window === 'undefined') return false;
  return 'serviceWorker' in navigator && 'PushManager' in window;
};

/**
 * Get device pixel ratio
 * @returns {number}
 */
export const getDevicePixelRatio = () => {
  if (typeof window === 'undefined') return 1;
  return window.devicePixelRatio || 1;
};

/**
 * Check if the device is in landscape mode
 * @returns {boolean}
 */
export const isLandscape = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth > window.innerHeight;
};

/**
 * Check if the device is in portrait mode
 * @returns {boolean}
 */
export const isPortrait = () => {
  if (typeof window === 'undefined') return false;
  return window.innerHeight > window.innerWidth;
};

/**
 * Get CSS custom property value
 * @param {string} property - CSS custom property name
 * @param {string} fallback - Fallback value
 * @returns {string}
 */
export const getCSSVariable = (property, fallback = '') => {
  if (typeof window === 'undefined') return fallback;
  
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(property)
    .trim();
  
  return value || fallback;
};

/**
 * Set CSS custom property value
 * @param {string} property - CSS custom property name
 * @param {string} value - Value to set
 */
export const setCSSVariable = (property, value) => {
  if (typeof window === 'undefined') return;
  document.documentElement.style.setProperty(property, value);
};

/**
 * Check if the browser supports a specific feature
 * @param {string} feature - Feature to check
 * @returns {boolean}
 */
export const supportsFeature = (feature) => {
  if (typeof window === 'undefined') return false;
  
  const featureMap = {
    'flexbox': 'flexBasis' in document.documentElement.style,
    'grid': 'gridTemplateColumns' in document.documentElement.style,
    'css-variables': CSS.supports('color', 'var(--test)'),
    'intersection-observer': 'IntersectionObserver' in window,
    'resize-observer': 'ResizeObserver' in window,
    'webp': false, // You can implement WebP detection here
    'avif': false  // You can implement AVIF detection here
  };
  
  return featureMap[feature] || false;
};

/**
 * Get preferred color scheme
 * @returns {string} 'light', 'dark', or 'no-preference'
 */
export const getPreferredColorScheme = () => {
  if (typeof window === 'undefined') return 'no-preference';
  
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  
  return 'no-preference';
};

/**
 * Check if the device supports reduced motion
 * @returns {boolean}
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export default {
  getPlatform,
  isTouchDevice,
  isMobile,
  isTablet,
  isDesktop,
  getScreenDimensions,
  getViewportDimensions,
  supportsPWA,
  getDevicePixelRatio,
  isLandscape,
  isPortrait,
  getCSSVariable,
  setCSSVariable,
  supportsFeature,
  getPreferredColorScheme,
  prefersReducedMotion
};





