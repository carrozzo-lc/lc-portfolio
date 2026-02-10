// styles
import { css, cx } from '@/styled-system/css';

// ----------------------------------------------------------------------

const styles = {
  root: css({
    '& h2': {
      fontSizeRem: { base: 36, sm: 40 },
      fontWeight: 'medium',
      lineHeight: 1.2,
      mb: 4,
    },
    '& p': {
      fontSize: { base: 'lg', sm: 'xl' },
    },
  }),
};

interface SectionHeaderProps {
  title?: string | null;
  subtitle?: string | null;
  className?: string;
}

const SectionHeader = ({ title, subtitle, className }: SectionHeaderProps) => {
  const merged = cx(styles.root, className);

  if (!title && !subtitle) return null;

  return (
    <div className={merged}>
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
