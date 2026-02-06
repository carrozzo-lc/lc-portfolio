'use client';
// panda css
import { css, cx } from '@/styled-system/css';
// components
import Logo from '@/components/Logo';
// hooks
import { useScrollRange } from '@/hooks/useScrollRange';

// ----------------------------------------------------------------------

const styles = {
  secondary: css({
    position: 'fixed',
    top: 0,
    zIndex: 9,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingX: '16px',

    transform: 'translateY(-100%)',
    opacity: 0,
    pointerEvents: 'none',

    transition: 'transform 200ms ease, opacity 200ms ease',
    willChange: 'transform',
  }),

  secondaryVisible: css({
    transform: 'translateY(0)',
    opacity: 1,
    pointerEvents: 'auto',
  }),

  nav: css({
    '& ul': {
      display: 'flex',
      gap: '24px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
      fontWeight: '500',
    },
  }),
};

const NavSecondary = () => {
  const showSecondary = useScrollRange({
    showAfter: 80,
    hideBefore: 64,
  });

  return (
    <div
      className={cx(styles.secondary, showSecondary && styles.secondaryVisible)}
      aria-hidden={!showSecondary}
    >
      <Logo />

      <nav className={styles.nav} aria-label="Navigazione rapida sticky">
        <ul>
          <li>
            <a href="#">Come lavoro</a>
          </li>
          <li>
            <a href="#">Aree di impatto</a>
          </li>
          <li>
            <a href="#">Esperienze</a>
          </li>
        </ul>
      </nav>

      <div>button</div>
    </div>
  );
};

export default NavSecondary;
