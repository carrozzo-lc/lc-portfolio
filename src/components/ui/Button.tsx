import { buttonStyles, ButtonVariants } from './button.styles';

type CommonProps = ButtonVariants & {
  children: React.ReactNode;
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
  children,
  ...props
}: ButtonProps) => {
  const className = buttonStyles({ hover, visual, size });

  if (as === 'a') {
    return (
      <a
        className={className}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
