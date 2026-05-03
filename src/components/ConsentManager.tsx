import Script from 'next/script';
import {
  CONSENT_PROVIDERS,
  consentProvider,
  hasIubendaConfig,
  iubendaConfig,
} from '@/lib/consent';

// ----------------------------------------------------------------------

const IubendaConsent = () => {
  if (!hasIubendaConfig) {
    return null;
  }

  return (
    <>
      <Script
        id="iubenda-cs-configuration"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var _iub = _iub || [];
            _iub.csConfiguration = {
              siteId: ${iubendaConfig.siteId},
              cookiePolicyId: ${iubendaConfig.cookiePolicyId},
              lang: 'auto',
              enableTcf: false
            };
          `,
        }}
      />
      <Script
        id="iubenda-cs"
        src="https://cs.iubenda.com/autoblocking/0.js"
        strategy="afterInteractive"
      />
      <Script
        id="iubenda-cs-stub"
        src="//cdn.iubenda.com/cs/tcf/stub-v2.js"
        strategy="afterInteractive"
      />
      <Script
        id="iubenda-cs-main"
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        strategy="afterInteractive"
        async
      />
    </>
  );
};

const ConsentManager = () => {
  if (consentProvider === CONSENT_PROVIDERS.iubenda) {
    return <IubendaConsent />;
  }

  return null;
};

export default ConsentManager;
