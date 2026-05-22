import { css } from '@/styled-system/css';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import Container from '@/components/ui/Container';
import CtaButton from '@/components/analytics/CtaButton';
import type { LandingCtaTracking } from '@/lib/analytics';

// ----------------------------------------------------------------------

type CareerCTAProps = {
  title?: string;
  link?: string;
  textLink?: string;
  tracking?: LandingCtaTracking;
};

const CareerCTA = ({ title, link, textLink, tracking }: CareerCTAProps) => {
  return (
    <Container>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        })}
      >
        {title && <p className={css({ mb: 4 })}>{title}</p>}
        {link ? (
          <CtaButton
            startIcon={<LinkedInLogoIcon style={{ width: 18, height: 18 }} />}
            visual="outlineBlack"
            size="sm"
            radius="full"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            tracking={tracking}
          >
            {textLink}
          </CtaButton>
        ) : null}
      </div>
    </Container>
  );
};

export default CareerCTA;
