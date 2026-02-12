import { buttonStyles, ButtonVariants } from './button.styles';
import { cx } from '@/styled-system/css';

type CommonProps = ButtonVariants & {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
  };

type ButtonAsLink = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = ({
  as = 'button',
  hover,
  visual,
  size,
  radius,
  children,
  startIcon,
  endIcon,
  className,
  ...props
}: ButtonProps) => {
  const base = buttonStyles({ hover, visual, size, radius });
  const merged = cx(base, className);

  if (as === 'a') {
    return (
      <a
        className={merged}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {startIcon}
        <span>{children}</span>
        {endIcon}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={merged}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </button>
  );
};

export default Button;
