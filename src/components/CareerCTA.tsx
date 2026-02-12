import Button from '@/components/ui/Button';
import { css } from '@/styled-system/css';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import Container from '@/components/ui/Container';

// ----------------------------------------------------------------------

type CareerCTAProps = {
  title?: string;
  link?: string;
  textLink?: string;
};

const CareerCTA = ({ title, link, textLink }: CareerCTAProps) => {
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
        {link && (
          <Button
            startIcon={<LinkedInLogoIcon style={{ width: 18, height: 18 }} />}
            as="a"
            visual="outlineBlack"
            size="sm"
            radius="full"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {textLink}
          </Button>
        )}
      </div>
    </Container>
  );
};

export default CareerCTA;
