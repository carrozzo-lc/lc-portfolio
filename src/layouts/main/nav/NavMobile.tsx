'use client';
import { useEffect, useState } from 'react';
// panda css
import { Drawer } from 'vaul';
import { css, cx } from '@/styled-system/css';
// icons
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
// assets
import logoImage from '@/images/logo2.svg';
// next
import Link from 'next/link';
// components
import Logo from '@/components/Logo';
import Button from '@/components/ui/Button/Button';
import CtaButton from '@/components/analytics/CtaButton';
import { useTranslations } from 'next-intl';
import type { LandingName } from '@/lib/analytics';

// ----------------------------------------------------------------------

export const styles = {
  trigger: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '2',
    pl: '3',
    fontSize: 'sm',
    fontWeight: '500',
    cursor: 'pointer',
    transitionProperty: 'background-color',
    transitionDuration: '200ms',
    height: '100%',
    color: 'white',
    display: { base: 'inline-flex', md: 'none' },
  },

  closeBtn: css({
    padding: '0 !important',
    margin: 0,
    marginLeft: 2,
    marginTop: 1.5,
    cursor: 'pointer',
    width: '24px',
    height: 'auto',
    borderRadius: 0,
    '& span': {
      padding: 0,
      margin: 0,
      display: 'block',
      width: '24px',
      height: 'auto',
    },
  }),

  overlay: css({
    position: 'fixed',
    inset: 0,
    bg: 'black/70',
  }),

  content: css({
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: 12,
    display: 'flex',
    outline: 'none',
  }),

  panel: css({
    width: 'full',
    bg: 'white',
    p: '5',
    display: 'flex',
    flexDirection: 'column',
  }),

  body: css({
    pb: 5,
  }),

  title: css({
    display: 'flex',
    justifyContent: 'space-between',
    mb: '4',
  }),

  nav: css({
    mt: 14,
  }),

  link: css({
    my: 7,
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
    titleKey: string;
    path: string;
  }>;
  triggerClassName?: string;
  logoLinkEnabled?: boolean;
  landing: LandingName;
}

const NavMobile = ({
  navData,
  triggerClassName,
  logoLinkEnabled = true,
  landing,
}: NavMobileProps) => {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [pendingAnchor, setPendingAnchor] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen || !pendingAnchor) return;

    const timeoutId = window.setTimeout(() => {
      const target = document.getElementById(pendingAnchor.slice(1));

      if (!target) {
        setPendingAnchor(null);
        return;
      }

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', pendingAnchor);
      setPendingAnchor(null);
    }, 320);

    return () => window.clearTimeout(timeoutId);
  }, [isOpen, pendingAnchor]);

  return (
    <Drawer.Root direction="top" open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Trigger className={cx(css(styles.trigger), triggerClassName)}>
        <HamburgerMenuIcon style={{ width: 24, height: 24 }} />
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className={styles.overlay} />

        <Drawer.Content
          className={styles.content}
          onCloseAutoFocus={(event) => event.preventDefault()}
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
                  css={css({ w: '10', '& img': { width: '28px' } })}
                  hasLink={logoLinkEnabled}
                />

                <div
                  className={css({
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                  })}
                >
                  <CtaButton
                    visual="solid"
                    size="sm"
                    radius="full"
                    href="mailto:me@lucacarrozzo.com"
                    hover="off"
                    tracking={{
                      landing,
                      ctaId: 'mobile_header_contact',
                      ctaType: 'contact',
                    }}
                  >
                    {t('Nav.contact')}
                  </CtaButton>

                  <Button
                    visual="transparent"
                    onClick={() => setIsOpen(false)}
                    className={styles.closeBtn}
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
                        href={item.path}
                        onClick={(event) => {
                          if (item.path.startsWith('#')) {
                            event.preventDefault();
                            setPendingAnchor(item.path);
                          }

                          setIsOpen(false);
                        }}
                      >
                        {t(item.titleKey)}
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
