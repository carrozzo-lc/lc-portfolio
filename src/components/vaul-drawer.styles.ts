import { css } from '@/styled-system/css';

export const styles = {
  trigger: css({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    height: '10',
    px: '4',
    borderRadius: 'full',
    bg: 'white',
    fontSize: 'sm',
    fontWeight: '500',
    boxShadow: 'sm',
    cursor: 'pointer',
    transitionProperty: 'background-color',
    transitionDuration: '200ms',
    _hover: { bg: 'gray.50' },
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
    //borderRadius: 'xl',
  }),

  body: css({
    maxWidth: 'md',
    mx: 'auto',
  }),

  title: css({
    fontWeight: '500',
    mb: '2',
    color: 'zinc.900',
  }),

  description: css({
    color: 'zinc.600',
    fontSize: 'sm',
  }),
};
