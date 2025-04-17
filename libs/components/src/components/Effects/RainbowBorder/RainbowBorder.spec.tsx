import { render } from '@testing-library/react';

import RainbowBorder from './RainbowBorder';

describe('RainbowBorder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RainbowBorder />);
    expect(baseElement).toBeTruthy();
  });
});
