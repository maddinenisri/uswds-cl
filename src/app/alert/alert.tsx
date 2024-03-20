// Importing styles and classnames libraries
import styles from './alert.module.scss';
import classnames from 'classnames';

// Defining the AlertProps type
export type AlertProps ={
  id?: string;
  children?: React.ReactNode;
  dismissible?: boolean;
  heading?: string;
  message: string;
  type:
    | 'success'
    | 'warning'
    | 'error'
    | 'info'
    | 'slim'
    | 'no-icon'
    | 'validation';
};


// Defining the Alert component
export function Alert({
  id,
  type,
  heading,
  message,
  dismissible,
}: AlertProps) {
  // Generating the alert classes based on the type
  const alertClasses = classnames('usa-alert', {
    [`usa-alert--${type}`]: !!type,
  });


  // Function to close the alert
  const closeAlert = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.currentTarget.closest('.usa-alert')?.remove();
  };


  // Rendering the Alert component
  return (
    <div className={alertClasses} title={type} data-testid={id}>
      {dismissible && (
        <form className={styles['form']}>
          <button
            data-testid={`${id}-close-btn`}
            className={`${styles['usa-button-dismiss']} usa-button--unstyled`}
            onClick={closeAlert}
          >
            <span className="usa-sr-only">dismiss</span>
          </button>
        </form>
      )}
      <div className="usa-alert__body">
        {heading && <h1 className="usa-alert__heading">{heading}</h1>}
        <p className="usa-alert__text">{message}</p>
      </div>
    </div>
  );
}

// Defining the optional default props for the Alert component
Alert.defaultProps = {
  id: 'alert',
  type: 'info' as AlertProps['type'],
  dismissible: false,
};

// Exporting the Alert component as default
export default Alert;
