import { render } from '@testing-library/react';

import ThemeLoader from './ThemeLoader';

describe('Providers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemeLoader />);
    expect(baseElement).toBeTruthy();
  });
});
