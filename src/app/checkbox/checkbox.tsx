import classnames from 'classnames';

/**
 * Checkbox component properties
 */
export type CheckboxProps = {
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
 * Checkbox component
 */
export function Checkbox({
  id,
  name,
  className,
  label,
  labelDescription,
  checked,
  disabled,
  tile,
  onChange,
  inputRef,
  ...inputProps
}: CheckboxProps) {
  // Set the classnames for the checkbox
  const divClassnames = classnames('usa-checkbox', className);
  const checkboxClasses = classnames(
    'usa-checkbox__input',
    {
      'usa-checkbox__input--tile': tile,
    },
    className
  );

  return (
    <div className={divClassnames} data-testid={id}>
      <input
        className={checkboxClasses}
        id={id}
        type="checkbox"
        name={name}
        ref={inputRef}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        {...inputProps}
      />
      <label className="usa-checkbox__label" htmlFor={id}>
        {label}
        {labelDescription && (
          <span className="usa-checkbox__label-description">
            {labelDescription}
          </span>
        )}
      </label>
    </div>
  );
}

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  tile: false,
}; 

export default Checkbox;
