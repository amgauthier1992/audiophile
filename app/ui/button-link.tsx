import Link from 'next/link';

interface ButtonLinkProps {
  cta: string;
  disabled?: boolean;
  href: string;
  linkClasses?: string;
  onClick?: () => void;
  otherClasses?: string;
  variant: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  cta,
  disabled,
  href,
  linkClasses,
  onClick,
  otherClasses,
  variant,
}) => {
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

  if (disabled) {
    return (
      <button
        className={`h-[48px] w-[160px] text-[.8125rem] font-bold uppercase ${variantClasses} ${otherClasses ? otherClasses : ''} pointer-events-none bg-[#CCCCCC]`}
        disabled
        type='button'
      >
        {cta}
      </button>
    );
  }

  return (
    <Link
      className={linkClasses ? linkClasses : ''}
      href={href}
      tabIndex={0}
    >
      <button
        className={`h-[48px] w-[160px] text-[.8125rem] font-bold uppercase ${variantClasses} ${otherClasses ? otherClasses : ''}`}
        onClick={onClick}
        type='button'
      >
        {cta}
      </button>
    </Link>
  );
};

export default ButtonLink;
