type EventPayload = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: EventPayload }) => void;
    gtag?: (command: 'event', eventName: string, params?: EventPayload) => void;
  }
}

export const trackEvent = (eventName: string, payload: EventPayload = {}) => {
  if (typeof window === 'undefined') {
    return;
  }

  if (typeof window.plausible === 'function') {
    window.plausible(eventName, { props: payload });
    return;
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
  }
};
