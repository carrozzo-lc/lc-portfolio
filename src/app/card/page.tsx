import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

// ----------------------------------------------------------------------

const campaignParams = new URLSearchParams({
  utm_source: 'business-card',
  utm_medium: 'qr',
  utm_campaign: 'networking',
});

export default async function CardRedirectPage() {
  const acceptLanguage = (await headers()).get('accept-language');
  const preferredLanguage = acceptLanguage
    ?.split(',')[0]
    ?.trim()
    .toLowerCase();
  const destination = preferredLanguage?.startsWith('it')
    ? '/clear-web-presence'
    : '/en/clear-web-presence';

  // This campaign entry point must remain flexible, so use a temporary redirect.
  redirect(`${destination}?${campaignParams.toString()}`);
}
