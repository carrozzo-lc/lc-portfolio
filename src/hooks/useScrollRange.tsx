import * as React from 'react';

type UseScrollRangeParams = {
  showAfter: number; // px oltre i quali MOSTRARE
  hideBefore: number; // px sotto i quali NASCONDERE
};

export function useScrollRange({
  showAfter,
  hideBefore,
}: UseScrollRangeParams): boolean {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      setVisible((prev) => {
        // entra nello stato visibile
        if (!prev && y > showAfter) return true;

        // esce dallo stato visibile
        if (prev && y < hideBefore) return false;

        // zona neutra (isteresi)
        return prev;
      });
    };

    onScroll(); // sync iniziale
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [showAfter, hideBefore]);

  return visible;
}
