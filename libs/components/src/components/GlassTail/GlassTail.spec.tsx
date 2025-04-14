import { render } from '@testing-library/react';

import GlassTail from './GlassTail';

describe('GlassTail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GlassTail />);
    expect(baseElement).toBeTruthy();
  });
});
