import type { MouseEvent } from 'react';

export const handleAnchorClick = (
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) => {
  if (!href.startsWith('#')) return;
  const target = document.getElementById(href.slice(1));
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.replaceState(null, '', href);
};
