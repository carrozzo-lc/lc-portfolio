'use client';

import { useLocale } from 'next-intl';
import Button from '@/components/ui/Button';
import type { ButtonProps } from '@/components/ui/Button/Button';
import {
  trackLandingCtaClick,
  type LandingCtaTracking,
} from '@/lib/analytics';

// ----------------------------------------------------------------------

type LinkButtonProps = Extract<ButtonProps, { as: 'a' }>;

type TrackedCtaButtonProps = Omit<LinkButtonProps, 'as' | 'href'> & {
  href: string;
  tracking: LandingCtaTracking;
};

const TrackedCtaButton = ({
  href,
  tracking,
  onClick,
  ...props
}: TrackedCtaButtonProps) => {
  const locale = useLocale();

  return (
    <Button
      as="a"
      href={href}
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          trackLandingCtaClick({ tracking, locale, destination: href });
        }
      }}
      {...props}
    />
  );
};

export default TrackedCtaButton;
