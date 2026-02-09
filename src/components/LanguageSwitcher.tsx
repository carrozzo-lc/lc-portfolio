import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { css } from '@/styled-system/css';

// ----------------------------------------------------------------------

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations('LanguageSwitcher');

  const nextLocale = locale === 'it' ? 'en' : 'it';

  return (
    <Link
      href="/"
      locale={nextLocale}
      className={css({
        display: 'inline-block',
        color: 'black',
        textDecoration: 'underline',
      })}
    >
      {t('switchLabel')}
    </Link>
  );
}
