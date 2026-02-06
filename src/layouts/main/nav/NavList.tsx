// panda css
import { css } from '@/styled-system/css';
// Next
import Link from 'next/link';

// ----------------------------------------------------------------------

const styles = {
  nav: css({
    display: { base: 'none', md: 'block' },
    '& ul': {
      display: 'flex',
      gap: { base: 9, lg: 16 },
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
  }),
  link: css({
    textDecoration: 'none',
    color: 'white',
    fontWeight: '500',
    fontSize: { base: 'lg', lg: 'xl' },
    transitionProperty: 'color',
    transitionDuration: '200ms',
    _hover: {
      color: 'gray.900',
    },
  }),
};

interface NavListProps {
  navData?: Array<{
    title: string;
  }>;
}

const NavList = ({ navData }: NavListProps) => {
  return (
    <nav className={styles.nav} aria-label="Navigazione principale">
      <ul>
        {navData?.map((item, index) => (
          <li key={index}>
            <Link
              className={styles.link}
              href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
