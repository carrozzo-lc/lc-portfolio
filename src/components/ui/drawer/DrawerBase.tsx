'use client';

import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { Drawer, type DialogProps } from 'vaul';
import { Cross1Icon } from '@radix-ui/react-icons';
import { css, cx } from '@/styled-system/css';
import Button from '@/components/ui/Button/Button';

// ----------------------------------------------------------------------

type DrawerDirection = NonNullable<DialogProps['direction']>;

type DrawerClassNames = {
  trigger?: string;
  overlay?: string;
  content?: string;
  panel?: string;
  header?: string;
  title?: string;
  description?: string;
  body?: string;
  footer?: string;
  close?: string;
};

type DrawerRootOptions = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onAnimationEnd?: (open: boolean) => void;
  onClose?: () => void;
  direction?: DrawerDirection;
  modal?: boolean;
  dismissible?: boolean;
  handleOnly?: boolean;
  shouldScaleBackground?: boolean;
  noBodyStyles?: boolean;
  closeThreshold?: number;
  scrollLockTimeout?: number;
  preventScrollRestoration?: boolean;
  autoFocus?: boolean;
};

type DrawerBaseProps = DrawerRootOptions & {
  trigger: ReactElement;
  title?: ReactNode;
  children: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  classNames?: DrawerClassNames;
  contentStyle?: CSSProperties;
  showHandle?: boolean;
  showClose?: boolean;
  closeLabel?: string;
};

const getInitialTransform = (direction: DrawerDirection) => {
  if (direction === 'top' || direction === 'left') {
    return 'calc(-100% - 8px)';
  }

  return 'calc(100% + 8px)';
};

const contentByDirection: Record<DrawerDirection, string> = {
  top: css({
    top: 0,
    left: 0,
    right: 0,
  }),
  bottom: css({
    bottom: 0,
    left: 0,
    right: 0,
  }),
  left: css({
    top: 0,
    bottom: 0,
    left: 0,
    width: 'min(420px, 100vw)',
  }),
  right: css({
    top: 0,
    right: 0,
    bottom: 0,
    width: 'min(420px, 100vw)',
  }),
};

export const styles = {
  trigger: css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }),

  overlay: css({
    position: 'fixed',
    inset: 0,
    zIndex: 40,
    bg: 'black/60',
  }),

  content: css({
    position: 'fixed',
    zIndex: 50,
    display: 'flex',
    outline: 'none',
  }),

  panel: css({
    width: 'full',
    maxHeight: '98.3dvh',
    bg: 'white',
    color: 'gray.950',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    boxShadow: '2xl',
  }),

  handle: css({
    my: 3,
    mx: 'auto',
  }),

  header: css({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 4,
    px: 5,
    pt: 5,
    pb: 4,
  }),

  headerText: css({
    minWidth: 0,
  }),

  title: css({
    fontSize: 'xl',
    fontWeight: '500',
    lineHeight: 'tight',
  }),

  description: css({
    mt: 2,
    color: 'gray.600',
    fontSize: 'sm',
  }),

  descriptionLineHeight: css({
    lineHeight: 'relaxed',
  }),

  body: css({
    overflowY: 'auto',
  }),

  bodyPadding: css({
    px: 5,
    pb: 5,
  }),

  footer: css({
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 3,
    px: 5,
    py: 4,
    borderTopWidth: '1px',
    borderColor: 'gray.200',
  }),

  close: css({
    flexShrink: 0,
    p: '0 !important',
    width: '32px',
    height: '32px',
    borderRadius: 'full',
    '& span': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'full',
      height: 'full',
    },
  }),
};

const DrawerBase = ({
  trigger,
  title,
  description,
  children,
  footer,
  classNames,
  contentStyle,
  showHandle = false,
  showClose = true,
  closeLabel = 'Chiudi drawer',
  direction = 'bottom',
  ...rootProps
}: DrawerBaseProps) => {
  const initialTransform = getInitialTransform(direction);

  return (
    <Drawer.Root direction={direction} {...rootProps}>
      <Drawer.Trigger
        asChild
        className={cx(styles.trigger, classNames?.trigger)}
      >
        {trigger}
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className={cx(styles.overlay, classNames?.overlay)} />

        <Drawer.Content
          className={cx(
            styles.content,
            contentByDirection[direction],
            classNames?.content
          )}
          style={
            {
              '--initial-transform': initialTransform,
              ...contentStyle,
            } as CSSProperties
          }
        >
          <div className={cx(styles.panel, classNames?.panel)}>
            {showHandle ? <Drawer.Handle className={styles.handle} /> : null}

            <header className={cx(styles.header, classNames?.header)}>
              <div className={styles.headerText}>
                <Drawer.Title className={cx(styles.title, classNames?.title)}>
                  {title}
                </Drawer.Title>

                {description ? (
                  <Drawer.Description
                    className={cx(
                      styles.description,
                      !classNames?.description && styles.descriptionLineHeight,
                      classNames?.description
                    )}
                  >
                    {description}
                  </Drawer.Description>
                ) : null}
              </div>

              {showClose ? (
                <Drawer.Close asChild>
                  <Button
                    visual="transparent"
                    aria-label={closeLabel}
                    className={cx(styles.close, classNames?.close)}
                  >
                    <Cross1Icon width={18} height={18} />
                  </Button>
                </Drawer.Close>
              ) : null}
            </header>

            <div
              className={cx(
                styles.body,
                !classNames?.body && styles.bodyPadding,
                classNames?.body
              )}
            >
              {children}
            </div>

            {footer ? (
              <footer className={cx(styles.footer, classNames?.footer)}>
                {footer}
              </footer>
            ) : null}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default DrawerBase;
