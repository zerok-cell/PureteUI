import { render } from '@testing-library/react';

import SlidingText from './SlidingText';

describe('SlidingText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SlidingText />);
    expect(baseElement).toBeTruthy();
  });
});
