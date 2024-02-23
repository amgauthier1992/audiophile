interface ButtonProps {
  cta: string;
  onClick: (
    event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
  ) => void;
  otherClasses?: string;
  variant: string;
}

const Button: React.FC<ButtonProps> = ({ cta, onClick, otherClasses, variant }) => {
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
    <button
      className={`h-[48px] w-[160px] text-[.8125rem] font-bold uppercase ${variantClasses} ${otherClasses ? otherClasses : ''}`}
      onClick={onClick}
      type='button'
    >
      {cta}
    </button>
  );
};

export default Button;
