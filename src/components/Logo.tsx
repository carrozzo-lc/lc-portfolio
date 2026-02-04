// next
import Link from 'next/link';
import Image from 'next/image';
import logoDefault from '@/images/logo.svg';

// ----------------------------------------------------------------------

interface LogoProps {
  url?: string;
  imageSrc?: string;
  css?: string;
}

const Logo = ({ url, imageSrc, css: cssClassName }: LogoProps) => {
  return (
    <div className={cssClassName}>
      <Link href={url || '/'} aria-label="Logo">
        <Image
          src={imageSrc || logoDefault}
          alt="Logo"
          sizes="100vw"
          unoptimized
        />
      </Link>
    </div>
  );
};

export default Logo;
