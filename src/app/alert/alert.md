# Alert Component

The `Alert` component is a customizable alert box that can be used to display different types of messages to the user.

## Props

- `id` (optional): A string that specifies a unique identifier for the alert. Default is 'alert'.
- `children` (optional): ReactNode elements that will be rendered as children of the alert.
- `dismissible` (optional): A boolean that determines whether the alert can be dismissed by the user. Default is false.
- `heading` (optional): A string that represents the heading of the alert.
- `message`: A string that represents the main message of the alert. This is a required prop.
- `type`: A string that represents the type of the alert. It can be one of the following: 'success', 'warning', 'error', 'info', 'slim', 'no-icon', 'validation'. This is a required prop.

## Usage

```typescriptreact
<Alert
  id="my-alert"
  type="success"
  heading="Success!"
  message="Your operation was successful."
  dismissible={true}
/>
```