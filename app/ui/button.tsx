interface ButtonProps {
  cta: string;
  disabled?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
  ) => void;
  otherClasses?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  variant: string;
}

const Button: React.FC<ButtonProps> = ({ cta, disabled, onClick, otherClasses, type, variant }) => {
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
        className={`disabled pointer-events-none h-[48px] w-[160px] cursor-not-allowed bg-black-primary text-[.8125rem] font-bold uppercase text-white-primary opacity-25 ${otherClasses ? otherClasses : ''} `}
        disabled
        type={type || 'button'}
      >
        {cta}
      </button>
    );
  }

  return (
    <button
      className={`h-[48px] w-[160px] text-[.8125rem] font-bold uppercase ${variantClasses} ${otherClasses ? otherClasses : ''}`}
      onClick={onClick}
      type={type || 'button'}
    >
      {cta}
    </button>
  );
};

export default Button;
