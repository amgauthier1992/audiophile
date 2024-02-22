import Link from 'next/link';

interface ButtonLinkProps {
  cta: string;
  href: string;
  linkClasses?: string;
  variant: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ cta, href, linkClasses, variant }) => {
  let variantClasses: string = '';

  if (variant === 'primary') {
    variantClasses = 'bg-primary text-white-primary hover:bg-secondary';
  }

  if (variant === 'secondary') {
    variantClasses =
      'bg-white-primary border-2 text-black-primary hover:bg-black-primary hover:text-white-primary';
  }

  if (variant === 'secondary-no-border') {
    variantClasses =
      'bg-white-primary text-black-primary hover:bg-black-primary hover:text-white-primary';
  }

  return (
    <Link
      className={linkClasses ? linkClasses : ''}
      href={href}
      tabIndex={0}
    >
      <button
        className={`h-[48px] w-[160px] text-[.8125rem] font-bold uppercase ${variantClasses}`}
        type='button'
      >
        {cta}
      </button>
    </Link>
  );
};

export default ButtonLink;
