/**
 * Utility for tracking custom events with Umami Analytics.
 * Safely executes only if Umami script is loaded.
 *
 * @param {string} eventName - Name of the event to track (e.g., 'Resume Click', 'Project Modal Open')
 * @param {Record<string, any>} [eventData] - Optional metadata/properties associated with the event
 */
export const trackEvent = (eventName, eventData = {}) => {
  if (typeof window !== 'undefined' && window.umami && typeof window.umami.track === 'function') {
    try {
      window.umami.track(eventName, eventData);
    } catch (err) {
      console.debug('[Umami] Error tracking event:', err);
    }
  }
};
