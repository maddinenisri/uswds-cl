import Alert from './alert/alert';
import { Button, ButtonProps } from './button/button';

export function App() {
  return (
    <div>
      <Alert type='error' message='Validation Error' dismissible={true} heading='Error'/>
      <Alert type='success' message='Success' dismissible={true} heading='Success'/>
      <Alert type='validation' message='Validation' dismissible={true} heading='Validation'/>
      <Alert type='no-icon' message='no icon' dismissible={false} heading='No Icon'/>

      <Button btnStyle={'primary' as ButtonProps["btnStyle"]}>Submit </Button>
    </div>
  );
}

export default App;
