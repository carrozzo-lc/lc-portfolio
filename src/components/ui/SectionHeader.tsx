// styles
import { css } from '@/styled-system/css';

// ----------------------------------------------------------------------

const styles = {
  root: css({
    '& h2': {},
    '& p': {},
  }),
};

interface SectionHeaderProps {
  title?: string | null;
  subtitle?: string | null;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  if (!title && !subtitle) return null;

  return (
    <div className={styles.root}>
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
