import { CONSENT_PROVIDERS, consentProvider } from '@/lib/consent';

// ----------------------------------------------------------------------

const ThirdPartyScripts = () => {
  if (consentProvider === CONSENT_PROVIDERS.iubenda) {
    return null;
  }

  return null;
};

export default ThirdPartyScripts;
