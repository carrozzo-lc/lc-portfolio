// next
import Link from 'next/link';
import Image from 'next/image';
import logoDefault from '@/images/logo.svg';

// ----------------------------------------------------------------------

interface LogoProps {
  url?: string;
  imageSrc?: string;
  css?: string;
  hasLink?: boolean;
}

const Logo = ({
  url,
  imageSrc,
  css: cssClassName,
  hasLink = true,
}: LogoProps) => {
  const image = (
    <Image
      src={imageSrc || logoDefault}
      alt="Logo"
      sizes="100vw"
      unoptimized
    />
  );

  return (
    <div className={cssClassName}>
      {hasLink ? (
        <Link href={url || '/'} aria-label="Logo">
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default Logo;
