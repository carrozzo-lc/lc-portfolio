export const LANDING_CTA_EVENT = 'landing_cta_click';

export type LandingName = 'home' | 'clear_web_presence';
export type LandingCtaType = 'anchor' | 'contact' | 'external';

export type LandingCtaTracking = {
  landing: LandingName;
  ctaId: string;
  ctaType: LandingCtaType;
};

type Gtag = (
  command: 'event',
  eventName: typeof LANDING_CTA_EVENT,
  params: {
    landing: LandingName;
    cta_id: string;
    cta_type: LandingCtaType;
    locale: string;
    destination: string;
  }
) => void;

export const trackLandingCtaClick = ({
  tracking,
  locale,
  destination,
}: {
  tracking: LandingCtaTracking;
  locale: string;
  destination: string;
}) => {
  const gtag = (window as Window & { gtag?: Gtag }).gtag;

  if (!gtag) {
    return;
  }

  gtag('event', LANDING_CTA_EVENT, {
    landing: tracking.landing,
    cta_id: tracking.ctaId,
    cta_type: tracking.ctaType,
    locale,
    destination,
  });
};
