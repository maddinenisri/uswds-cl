import classnames from 'classnames';

// Radiobutton component props
export type RadiobuttonProps = {
  id: string;
  name: string;
  className?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  tile?: boolean;
  labelDescription?: string;
  inputRef?:
    | string
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Radiobutton component
 */
export function Radiobutton({
  id,
  name,
  className,
  checked,
  disabled,
  label,
  tile,
  labelDescription,
  inputRef,
  onChange,
  ...inputProps
}: RadiobuttonProps) {
  // Set the classnames for the radiobutton
  const divClassnames = classnames('usa-radio', className);
  const radioClasses = classnames(
    'usa-radio__input',
    {
      'usa-radio__input--tile': tile,
    },
    className
  );
  return (
    <div data-testid={id} className={divClassnames}>
      <input
        className={radioClasses}
        id={id}
        type="radio"
        name={name}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        ref={inputRef}
        {...inputProps}
      />
      <label className="usa-radio__label" htmlFor={id}>
        {label}
        {labelDescription && (
          <span className="usa-radio__label-description">
            {labelDescription}
          </span>
        )}
      </label>
    </div>
  );
}

// Set the default props for the radiobutton
Radiobutton.defaultProps = {
  checked: false,
  disabled: false,
  tile: false,
};

// Export the radiobutton component
export default Radiobutton;
