import { ReactNode, HTMLAttributes } from 'react';
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

type ContainerElement = 'div' | 'section';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  maxW?: string;
  as?: ContainerElement;
}

const Container = ({
  children,
  className,
  innerClassName,
  maxW = '7xl',
  as: Root = 'div',
  ...rest
}: ContainerProps) => {
  const merged = cx(styles.root, className);
  const innerMerged = cx(styles.inner, css({ maxW }), innerClassName);

  return (
    <Root className={merged} {...rest}>
      <div className={innerMerged}>{children}</div>
    </Root>
  );
};

export default Container;
