'use client';
import { ReactNode, useState, useSyncExternalStore } from 'react';
// panda css
import { css, cx } from '@/styled-system/css';
// radix ui
import { Collapsible } from 'radix-ui';
// ui
import Button from './Button';
// hooks
import { useMediaQuery } from '@/hooks/useMediaQuery';

// ----------------------------------------------------------------------

const styles = {
  root: css({}),

  trigger: css({
    display: { base: 'inline-block', lg: 'none' },
    mb: { base: 4, sm: 0 },
  }),

  content: css({
    overflow: 'hidden',

    '&[data-state="open"]': {
      animation: 'collapsibleDown',
    },
    '&[data-state="closed"]': {
      animation: 'collapsibleUp',
    },
  }),
};

type CollapsibleTextProps = {
  children: ReactNode;
  classNameRoot?: string;
  classNameContent?: string;
};

const CollapsibleText = ({
  children,
  classNameRoot,
  classNameContent,
}: CollapsibleTextProps) => {
  const [open, setOpen] = useState(false);
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const merged = cx(styles.root, classNameRoot);
  const mergedContent = cx(styles.content, classNameContent);

  const effectiveIsDesktop = isMounted ? isDesktop : true;
  const resolvedOpen = effectiveIsDesktop ? true : open;

  return (
    <Collapsible.Root
      className={merged}
      open={resolvedOpen}
      onOpenChange={effectiveIsDesktop ? undefined : setOpen}
    >
      <Collapsible.Content className={mergedContent}>
        {children}
      </Collapsible.Content>

      {!effectiveIsDesktop && (
        <div className={css({ display: 'flex', justifyContent: 'center' })}>
          <Collapsible.Trigger asChild className={styles.trigger}>
            <Button
              visual="outlineBlack"
              size="sm"
              className={css({
                width: '100%',
                maxWidth: 360,
                marginTop: open ? 5 : 0,
              })}
            >
              {open ? 'Chiudi dettagli' : 'Mostra dettagli'}
            </Button>
          </Collapsible.Trigger>
        </div>
      )}
    </Collapsible.Root>
  );
};

export default CollapsibleText;
