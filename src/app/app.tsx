import Alert from './alert/alert';
import { Button } from './button/button';

export function App() {
  return (
    <div>
      <Alert type='error' message='Validation Error' dismissible={true} heading='Error'/>
      <Alert type='success' message='Validation Error' dismissible={true} heading='Success'/>
      <Alert type='validation' message='Validation Error' dismissible={true} heading='Error'/>
      <Alert type='no-icon' message='Validation Error' dismissible={true} heading='Success'/>

      <Button>Submit </Button>
    </div>
  );
}

export default App;
