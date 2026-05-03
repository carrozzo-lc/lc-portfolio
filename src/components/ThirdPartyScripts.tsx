import Script from 'next/script';
import {
  CONSENT_PROVIDERS,
  IUBENDA_PURPOSES,
  consentProvider,
  thirdPartyScriptIds,
} from '@/lib/consent';

// ----------------------------------------------------------------------

const GoogleAnalytics = ({ measurementId }: { measurementId: string }) => {
  return (
    <>
      <Script
        id="google-analytics-src"
        async
        type="text/plain"
        className="_iub_cs_activate"
        data-iub-purposes={IUBENDA_PURPOSES.measurement}
        data-suppressedsrc={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics-init"
        type="text/plain"
        className="_iub_cs_activate"
        data-iub-purposes={IUBENDA_PURPOSES.measurement}
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}');
          `,
        }}
      />
    </>
  );
};

const MicrosoftClarity = ({ projectId }: { projectId: string }) => {
  return (
    <Script
      id="microsoft-clarity-init"
      type="text/plain"
      className="_iub_cs_activate"
      data-iub-purposes={IUBENDA_PURPOSES.measurement}
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${projectId}");
        `,
      }}
    />
  );
};

const IubendaManagedScripts = () => {
  const { googleAnalytics, clarity } = thirdPartyScriptIds;

  return (
    <>
      {googleAnalytics ? (
        <GoogleAnalytics measurementId={googleAnalytics} />
      ) : null}

      {clarity ? <MicrosoftClarity projectId={clarity} /> : null}
    </>
  );
};

const ThirdPartyScripts = () => {
  if (consentProvider === CONSENT_PROVIDERS.iubenda) {
    return <IubendaManagedScripts />;
  }

  return null;
};

export default ThirdPartyScripts;
