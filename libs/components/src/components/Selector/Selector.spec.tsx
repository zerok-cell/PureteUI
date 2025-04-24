import { render } from '@testing-library/react';

import Selector from './Selector';

describe('Selector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Selector />);
    expect(baseElement).toBeTruthy();
  });
});
