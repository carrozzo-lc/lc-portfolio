import Button from '@/components/ui/Button';
import { css } from '@/styled-system/css';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';

// ----------------------------------------------------------------------

type CareerCTAProps = {
  title?: string;
  link?: string;
  textLink?: string;
};

const CareerCTA = ({ title, link, textLink }: CareerCTAProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      })}
    >
      {title && <p className={css({ mb: 4 })}>{title}</p>}
      {link && (
        <Button
          startIcon={<LinkedInLogoIcon style={{ width: 18, height: 18 }} />}
          as="a"
          visual="outlineBlack"
          size="sm"
          className={css({ borderRadius: 'full' })}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {textLink}
        </Button>
      )}
    </div>
  );
};

export default CareerCTA;
