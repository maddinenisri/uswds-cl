import { render } from '@testing-library/react';

import Radiobutton from './radiobutton';

describe('Radiobutton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Radiobutton id='test' name='test' />);
    expect(baseElement).toBeTruthy();
  });
});
