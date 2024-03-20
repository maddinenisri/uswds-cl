# Button Component

The `Button` component is a customizable button that can be used in various parts of your application.

## Props

- `id` (optional): A string that specifies a unique identifier for the button. Default is 'button'.
- `children` (optional): ReactNode elements that will be rendered as children of the button.
- `type` (optional): A string that specifies the type of the button. It can be one of the following: 'button', 'submit', 'reset'. Default is 'button'.
- `btnStyle` (optional): A string that specifies the style of the button. It can be one of the following: 'base', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'. Default is 'base'.

## Usage

```typescriptreact
<Button
  id="my-button"
  type="submit"
  btnStyle="primary"
>
  Click me
</Button>
```