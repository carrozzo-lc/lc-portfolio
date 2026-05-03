export const CONSENT_PROVIDERS = {
  iubenda: 'iubenda',
  none: 'none',
} as const;

export type ConsentProvider =
  (typeof CONSENT_PROVIDERS)[keyof typeof CONSENT_PROVIDERS];

export const CONSENT_CATEGORIES = {
  necessary: 'necessary',
  analytics: 'analytics',
} as const;

export const IUBENDA_PURPOSES = {
  measurement: '4',
} as const;

export type ConsentCategory =
  (typeof CONSENT_CATEGORIES)[keyof typeof CONSENT_CATEGORIES];

const getConsentProvider = (): ConsentProvider => {
  const provider = process.env.NEXT_PUBLIC_CONSENT_PROVIDER;

  if (provider === CONSENT_PROVIDERS.iubenda) {
    return provider;
  }

  return CONSENT_PROVIDERS.none;
};

export const consentProvider = getConsentProvider();

export const iubendaConfig = {
  siteId: process.env.NEXT_PUBLIC_IUBENDA_SITE_ID,
  cookiePolicyId: process.env.NEXT_PUBLIC_IUBENDA_COOKIE_POLICY_ID,
};

export const thirdPartyScriptIds = {
  googleAnalytics: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  clarity: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
};

export const hasIubendaConfig = Boolean(
  iubendaConfig.siteId && iubendaConfig.cookiePolicyId
);
