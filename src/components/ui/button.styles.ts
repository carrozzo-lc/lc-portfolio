import { cva } from '@/styled-system/css';
import { type RecipeVariantProps } from '@/styled-system/css';
export type ButtonVariants = RecipeVariantProps<typeof buttonStyles>;

export const buttonStyles = cva({
  base: {
    position: 'relative',
    overflow: 'hidden',

    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',

    fontWeight: '500',
    cursor: 'pointer',
    borderRadius: 'full',
    lineHeight: 'none',

    // testo sopra il background
    zIndex: 0,

    '& span': {
      height: '4',
      verticalAlign: 'middle',
      lineHeight: '1.1',
    },

    // layer animato
    _before: {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundColor: 'white',

      transform: 'translateX(-100%)',
      transitionProperty: 'transform',
      transitionDuration: '200ms',
      transitionTimingFunction: 'ease-out',

      zIndex: -1,
    },

    transitionProperty: 'color, box-shadow',
    transitionDuration: '100ms',

    _hover: {
      color: 'gray.950',
      boxShadow: 'lg',

      _before: {
        transform: 'translateX(0)',
      },
    },

    _active: {
      transform: 'scale(0.98)',
    },

    _focusVisible: {
      outline: '2px solid',
      outlineColor: 'gray.950',
      outlineOffset: '2px',
    },

    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',

      _before: {
        transform: 'none',
      },
    },

    '@media (prefers-reduced-motion: reduce)': {
      _before: {
        transition: 'none',
        transform: 'none',
      },
      transition: 'none',
    },
  },

  variants: {
    visual: {
      solid: {
        bg: 'gray.950',
        color: 'white',
      },
      outline: {
        bg: 'transparent',
        color: 'white',
        borderWidth: '1px',
        borderColor: 'white',
      },
      transparent: {
        bg: 'transparent',
        color: 'gray.950',
        _before: {
          backgroundColor: 'transparent',
        },
        _hover: {
          boxShadow: 'none',
          color: 'gray.950',
        },
      },
    },

    size: {
      sm: {
        px: '4',
        pt: '2',
        pb: '2',
        fontSize: 'md',
      },
      lg: {
        px: '5',
        py: '3',
        fontSize: 'lg',
      },
    },

    hover: {
      on: {},
      off: {
        _hover: {
          color: 'white',
          boxShadow: 'none',
          _before: {
            transform: 'translateX(-100%)',
          },
        },
      },
    },
  },

  defaultVariants: {
    visual: 'solid',
    size: 'lg',
    hover: 'on',
  },
});
