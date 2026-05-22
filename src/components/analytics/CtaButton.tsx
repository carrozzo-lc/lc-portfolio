import Button from '@/components/ui/Button';
import type { ButtonProps } from '@/components/ui/Button/Button';
import TrackedCtaButton from '@/components/analytics/TrackedCtaButton';
import type { LandingCtaTracking } from '@/lib/analytics';

// ----------------------------------------------------------------------

type LinkButtonProps = Extract<ButtonProps, { as: 'a' }>;

type CtaButtonProps = Omit<LinkButtonProps, 'as' | 'href'> & {
  href: string;
  tracking?: LandingCtaTracking;
};

const CtaButton = ({ href, tracking, ...props }: CtaButtonProps) => {
  if (tracking) {
    return <TrackedCtaButton href={href} tracking={tracking} {...props} />;
  }

  return <Button as="a" href={href} {...props} />;
};

export default CtaButton;
