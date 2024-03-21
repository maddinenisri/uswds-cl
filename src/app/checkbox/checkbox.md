# Checkbox Component

The `Checkbox` component is a customizable checkbox that can be used in forms.

## Props

- `id` (required): A string that specifies a unique identifier for the checkbox.
- `name` (required): A string that specifies the name of the checkbox.
- `className` (optional): A string that specifies CSS classes to be added to the checkbox.
- `label` (optional): A string that represents the label of the checkbox.
- `checked` (optional): A boolean that determines whether the checkbox is checked. Default is false.
- `disabled` (optional): A boolean that determines whether the checkbox is disabled. Default is false.
- `tile` (optional): A boolean that determines whether the checkbox is displayed as a tile. Default is false.
- `labelDescription` (optional): A string that provides additional descriptive text for the checkbox label.
- `inputRef` (optional): A ref that will be passed to the checkbox input element. It can be a string, a function, a RefObject, or null.
- `onChange` (optional): A function that will be called when the checkbox value changes. It receives the change event as a parameter.

## Usage

```typescriptreact
<Checkbox
  id="my-checkbox"
  name="myCheckbox"
  label="Check me"
  checked={true}
  onChange={(event) => console.log(event.target.checked)}
/>
```
