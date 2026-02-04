'use client';

import { Drawer } from 'vaul';
import { styles } from './vaul-drawer.styles';

export default function VaulDrawer() {
  return (
    <Drawer.Root direction="top">
      <Drawer.Trigger className={styles.trigger}>Open Drawer</Drawer.Trigger>

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
                Drawer from the top
              </Drawer.Title>

              <Drawer.Description className={styles.description}>
                This drawer slides from the top using Vaul’s native animation
                and respects the 8px gap from the viewport edge.
              </Drawer.Description>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
