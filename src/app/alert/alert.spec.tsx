import { render } from '@testing-library/react';

import Alert from './alert';

describe('Alert', () => {
  it('should render successfully', () => {
    const { baseElement, findAllByText } = render(
      <Alert type="info" message="Test">
        <ul>
          <li>List 1</li>
          <li>List 2</li>
        </ul>
      </Alert>
    );
    expect(baseElement).toBeTruthy();
    expect(findAllByText('List 1')).toBeTruthy();
  });
});
