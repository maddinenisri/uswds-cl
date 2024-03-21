# Radiobutton Component

The `Radiobutton` component is a customizable radio button that can be used in forms.

## Props

- `id` (required): A string that specifies a unique identifier for the radio button.
- `name` (required): A string that specifies the name of the radio button. All radio buttons in a group should have the same name.
- `className` (optional): A string that specifies CSS classes to be added to the radio button.
- `label` (optional): A string that represents the label of the radio button.
- `checked` (optional): A boolean that determines whether the radio button is checked. Default is false.
- `disabled` (optional): A boolean that determines whether the radio button is disabled. Default is false.
- `tile` (optional): A boolean that determines whether the radio button is displayed as a tile. Default is false.
- `labelDescription` (optional): A string that provides additional descriptive text for the radio button label.
- `inputRef` (optional): A ref that will be passed to the radio button input element. It can be a string, a function, a RefObject, or null.
- `onChange` (optional): A function that will be called when the radio button value changes. It receives the change event as a parameter.

## Usage

```typescriptreact
<Radiobutton
  id="my-radiobutton"
  name="myRadiobutton"
  label="Select me"
  checked={true}
  onChange={(event) => console.log(event.target.checked)}
/>
```
