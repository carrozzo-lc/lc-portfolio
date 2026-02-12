// styles
import { css } from '@/styled-system/css';
// ui
import Container from '@/components/ui/Container';
import LanguageSwitcher from '@/components/LanguageSwitcher';
// intl
import { useTranslations } from 'next-intl';
// components
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons';

// ----------------------------------------------------------------------

const styles = {
  root: css({
    py: 8,
    backgroundColor: 'gray.50',
    color: 'gray.900',
    borderTopWidth: 3,
    borderColor: 'gray.100',
    '& > div': {
      display: 'flex',
      flexDirection: { base: 'column', sm: 'row' },
      justifyContent: 'space-between',
      alignItems: { base: 'center', sm: 'center' },
      gap: 7,
    },
  }),

  copyright: css({
    textAlign: 'center',
    sm: {
      textAlign: 'left',
    },
  }),

  social: css({
    textAlign: 'center',
    sm: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
    },
  }),
  socialLabel: css({
    fontSize: 'sm',
    color: 'gray.900',
    mb: { base: 2, sm: 0 },
  }),
  socialList: css({
    display: 'flex',
    gap: 3,
  }),
  socialItem: css({
    width: 9,
    height: 9,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray.900',
    borderRadius: 'full',
    color: 'gray.900',
    transitionProperty: 'colors',
    transitionDuration: '200ms',
    '&:hover': {
      borderColor: 'gray.500',
      color: 'gray.500',
    },
  }),
};

const Footer = () => {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  const social = t.raw('social') as {
    linkedin?: string;
    github?: string;
    xTwitter?: string;
  };

  const items = [
    {
      key: 'xTwitter',
      label: 'xTwitter',
      href: social.xTwitter,
      Icon: EnvelopeClosedIcon,
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      href: social.linkedin,
      Icon: LinkedInLogoIcon,
    },
    {
      key: 'github',
      label: 'GitHub',
      href: social.github,
      Icon: GitHubLogoIcon,
    },
  ];

  const toHref = (value?: string) => {
    if (!value) return '';
    if (value.includes('@') && !value.startsWith('mailto:'))
      return `mailto:${value}`;
    return value;
  };

  return (
    <Container as="footer" className={styles.root}>
      <div className={styles.copyright}>
        <div className={css({ mb: 2 })}>
          {t('copyright', { currentYear: currentYear })}
        </div>
        <LanguageSwitcher />
      </div>

      <div className={styles.social}>
        <div className={styles.socialLabel}>Social:</div>
        <div className={styles.socialList}>
          {items.map(({ key, label, href, Icon }) => {
            const resolved = toHref(href);
            if (!resolved) {
              return (
                <span
                  key={key}
                  className={styles.socialItem}
                  aria-hidden="true"
                >
                  <Icon />
                </span>
              );
            }
            return (
              <a
                key={key}
                href={resolved}
                aria-label={label}
                className={styles.socialItem}
                target="_blank"
                rel="noreferrer"
              >
                <Icon style={{ width: 18, height: 18 }} />
              </a>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Footer;
