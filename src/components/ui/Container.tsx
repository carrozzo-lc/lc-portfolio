import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';
// styles
import { css, cx } from '@/styled-system/css';

// ----------------------------------------------------------------------

const styles = {
  root: css({
    px: { base: 4, sm: 6, lg: 8 },
  }),

  inner: css({
    maxWidth: '7xl',
    margin: 'auto',
  }),
};

type ContainerProps<T extends ElementType = 'div'> = {
  as?: T;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  maxW?: string;
} & ComponentPropsWithoutRef<T>;

const Container = <T extends ElementType = 'div'>({
  children,
  className,
  innerClassName,
  maxW = '7xl',
  as,
  ...rest
}: ContainerProps<T>) => {
  const Root = (as || 'div') as ElementType;
  const merged = cx(styles.root, className);
  const innerMerged = cx(styles.inner, css({ maxW }), innerClassName);

  return (
    <Root className={merged} {...rest}>
      <div className={innerMerged}>{children}</div>
    </Root>
  );
};

export default Container;
