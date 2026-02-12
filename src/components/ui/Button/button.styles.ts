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
    lineHeight: 'none',
    transition: 'border-color 200ms',
    zIndex: 0, // testo sopra il background
    transitionProperty:
      'color, box-shadow, border, border-color, background-color',
    transitionDuration: '100ms',

    '& span': {
      height: '4',
      verticalAlign: 'middle',
      //lineHeight: 1,
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

    _hover: {
      color: 'gray.950',
      boxShadow: 'lg',
      borderColor: 'white',
      transition: 'border-color 200ms',
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
        borderWidth: '1px',
        borderColor: 'gray.950',
      },
      outline: {
        bg: 'transparent',
        color: 'white',
        borderWidth: '1px',
        borderColor: 'white',
      },
      outlineBlack: {
        bg: 'transparent',
        color: 'black',
        borderWidth: '1px',
        borderColor: 'black',
        _before: {
          backgroundColor: 'transparent',
        },
        _hover: {
          color: 'black',
          borderColor: 'black',
          boxShadow: 'none',
          _before: {
            backgroundColor: 'gray.50',
            transform: 'translateX(0)',
          },
        },
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
        pt: '7px',
        pb: '7px',
        fontSize: 'md',
        '& span': {
          lineHeight: '1.1',
        },
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
          borderWidth: '1px',
          borderColor: 'gray.800',
          backgroundColor: 'gray.800',
          transition: 'all 200ms',
          _before: {
            transform: 'translateX(-100%)',
          },
        },
      },
    },

    radius: {
      rounded: { borderRadius: 'xl' },
      full: { borderRadius: 'full' },
    },
  },

  defaultVariants: {
    visual: 'solid',
    size: 'lg',
    hover: 'on',
    radius: 'rounded',
  },
});
