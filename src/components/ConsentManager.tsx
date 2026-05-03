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
              askConsentAtCookiePolicyUpdate: true,
              floatingPreferencesButtonDisplay: 'bottom-left',
              perPurposeConsent: true,
              siteId: ${iubendaConfig.siteId},
              whitelabel: false,
              cookiePolicyId: ${iubendaConfig.cookiePolicyId},
              banner: {
                acceptButtonDisplay: true,
                closeButtonDisplay: false,
                customizeButtonDisplay: true,
                explicitWithdrawal: true,
                listPurposes: true,
                position: 'float-bottom-left',
                rejectButtonDisplay: true
              }
            };
            _iub.csLangConfiguration = {
              'en-GB': {
                cookiePolicyId: ${iubendaConfig.cookiePolicyId}
              }
            };
          `,
        }}
      />
      <Script
        id="iubenda-cs-autoblocking"
        src={`https://cs.iubenda.com/autoblocking/${iubendaConfig.siteId}.js`}
        strategy="afterInteractive"
      />
      <Script
        id="iubenda-cs-main"
        src="https://cdn.iubenda.com/cs/iubenda_cs.js"
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
