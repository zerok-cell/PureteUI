import { render } from '@testing-library/react';

import RainbowButton from './RainbowButton';

describe('RainbowButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RainbowButton />);
    expect(baseElement).toBeTruthy();
  });
});
