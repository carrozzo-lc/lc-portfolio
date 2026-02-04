// styles
import { css, cx } from '@/styled-system/css';
import { token } from '@/styled-system/tokens';

// ----------------------------------------------------------------------

const styles = {
  root: css({
    height: '90vh',
    maxHeight: { base: '640px', sm: '768px' },
    borderBottom: `10px solid ${token('colors.gray.900')}`,
    backgroundColor: 'primary.500',
    backgroundImage: `
    radial-gradient(at 90% 10%, var(--colors-primary-900) 0%, transparent 45%),
    radial-gradient(at 15% 25%, var(--colors-primary-300) 0%, transparent 50%),
    radial-gradient(at 60% 0%,  var(--colors-primary-400) 0%, transparent 45%),
    radial-gradient(at 10% 80%, var(--colors-primary-800) 0%, transparent 50%),
    radial-gradient(at 85% 90%, var(--colors-primary-500) 0%, transparent 55%)
  `,
    backgroundSize: '200% 200%',
    animation: 'heroFloat',
  }),
};

// ----------------------------------------------------------------------

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const rootClassName = cx('group', styles.root, className);
  return <div className={rootClassName}>Hero</div>;
};

export default Hero;
