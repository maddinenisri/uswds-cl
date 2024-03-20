import classnames from 'classnames';

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

export default Checkbox;
