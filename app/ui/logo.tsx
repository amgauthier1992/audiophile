import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link
      href='/'
      tabIndex={0}
    >
      <Image
        src='/assets/shared/desktop/logo.svg'
        alt='Audiophile Logo'
        width={143}
        height={25}
      />
    </Link>
  );
};

export default Logo;
