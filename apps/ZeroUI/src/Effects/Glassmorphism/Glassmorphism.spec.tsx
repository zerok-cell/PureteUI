import { render } from '@testing-library/react';

import Glassmorphism from './Glassmorphism';

describe('Glassmorphism', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Glassmorphism />);
    expect(baseElement).toBeTruthy();
  });
});
