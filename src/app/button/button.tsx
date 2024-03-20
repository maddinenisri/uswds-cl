import classnames from 'classnames';

export type ButtonProps = Readonly<{
  id?: string;
  children?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  // onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  btnStyle?:
    | 'base | primary'
    | 'secondary | accent-cool'
    | 'accent-warm'
    | 'outline'
    | 'inverse'
    | 'big'
    | 'unstyled';
}>;

export function Button({
  id,
  children,
  type,
  className,
  btnStyle,
  onClick,
  ...defaultProps
}: ButtonProps & JSX.IntrinsicElements['button']): React.ReactElement {
  const buttonClasses = classnames(
    'usa-button',
    {
      [`usa-button--${btnStyle}`]: !!btnStyle,
    },
    className
  );
  return (
    <button
      type={type}
      className={buttonClasses}
      data-testid={id}
      {...defaultProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Defining the default props
Button.defaultProps = {
  id: 'button',
  type: 'button' as ButtonProps['type'],
  btnStyle: 'base' as ButtonProps['btnStyle'],
};

export default Button;
