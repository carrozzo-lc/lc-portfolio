import Container from '@/components/ui/Container';
import { css } from '@/styled-system/css';
import CtaButton from '@/components/analytics/CtaButton';
import type { LandingCtaTracking } from '@/lib/analytics';

// ----------------------------------------------------------------------

const styles = {
  root: css({
    pt: { base: 16, lg: 28 },
    pb: { base: 16, lg: 28 },
  }),

  box: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'primary.500',
    color: 'white',
    borderRadius: '2xl',
    py: { base: 14, sm: 24, lg: 28 },
    px: { base: 4, sm: 20, lg: 24 },

    '& h3': {
      fontSize: '4xl',
      lineHeight: 'tight',
      fontWeight: 'medium',
      color: 'white',
    },

    '& p': {
      maxWidth: 480,
      fontSize: { base: 'lg', sm: 'xl' },
    },

    '& a': {
      width: '100%',
      maxWidth: 320,
    },
  }),
};

type ContactCTAProps = {
  title?: string;
  subtitle?: string;
  button?: {
    text: string;
    link: string;
  };
  tracking?: LandingCtaTracking;
};

const ContactCTA = ({ title, subtitle, button, tracking }: ContactCTAProps) => {
  return (
    <Container as="section" id="how-i-work" innerClassName={styles.root}>
      <div className={styles.box}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        {button ? (
          <CtaButton
            visual="solid"
            size="lg"
            href={button.link}
            target="_blank"
            rel="noopener noreferrer"
            tracking={tracking}
          >
            {button.text}
          </CtaButton>
        ) : null}
      </div>
    </Container>
  );
};

export default ContactCTA;
