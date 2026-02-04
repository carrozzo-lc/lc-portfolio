'use client';
import { useState } from 'react';
// panda css
import { Drawer } from 'vaul';
import { css } from '@/styled-system/css';
// icons
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
// assets
import logoImage from '@/images/logo2.svg';
// next
import Link from 'next/link';
// components
import Logo from '@/components/Logo';
import Button from '@/components/ui/Button';

// ----------------------------------------------------------------------

export const styles = {
  trigger: css({
    position: 'relative',
    display: { base: 'inline-flex', md: 'none' },
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '2',
    pl: '3.5',
    borderRadius: 'full',
    fontSize: 'sm',
    fontWeight: '500',
    cursor: 'pointer',
    transitionProperty: 'background-color',
    transitionDuration: '200ms',
    height: '100%',
  }),

  overlay: css({
    position: 'fixed',
    inset: 0,
    bg: 'blackAlpha.400',
  }),

  content: css({
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: 10,
    display: 'flex',
    outline: 'none',
  }),

  panel: css({
    width: 'full',
    bg: 'zinc.50',
    p: '5',
    display: 'flex',
    flexDirection: 'column',
  }),

  body: css({
    pb: 2,
  }),

  title: css({
    display: 'flex',
    justifyContent: 'space-between',
    mb: '4',
  }),

  nav: css({
    mt: 12,
  }),

  link: css({
    my: 5,
    '& a': {
      display: 'inline-block',
      fontSize: '3xl',
      transitionProperty: 'color',
      transitionDuration: '200ms',
      transitionTimingFunction: 'ease-out',
      _hover: {
        color: 'primary.500',
      },
    },
  }),
};

interface NavMobileProps {
  navData: Array<{
    title: string;
  }>;
}

const NavMobile = ({ navData }: NavMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer.Root direction="top" open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Trigger className={styles.trigger}>
        <HamburgerMenuIcon style={{ width: 24, height: 24 }} />
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className={styles.overlay} />

        <Drawer.Content
          className={styles.content}
          style={
            {
              '--initial-transform': 'calc(100% + 8px)',
            } as React.CSSProperties
          }
        >
          <div className={styles.panel}>
            <div className={styles.body}>
              <Drawer.Title className={styles.title}>
                <Logo
                  imageSrc={logoImage}
                  css={css({ w: '10', '& img': { width: '34px' } })}
                />

                <div
                  className={css({
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  })}
                >
                  <Button
                    visual="solid"
                    size="sm"
                    hover="off"
                    as="a"
                    href="mailto:me@lucacarrozzo.com"
                  >
                    Contattami
                  </Button>

                  <Button
                    visual="transparent"
                    onClick={() => setIsOpen(false)}
                    className={css({ p: 0, pl: '2.5', cursor: 'pointer' })}
                  >
                    <Cross1Icon style={{ width: 24, height: 24 }} />
                  </Button>
                </div>
              </Drawer.Title>

              <nav className={styles.nav} aria-label="Navigazione principale">
                <ul>
                  {navData?.map((item, index) => (
                    <li className={styles.link} key={index}>
                      <Link
                        href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default NavMobile;
