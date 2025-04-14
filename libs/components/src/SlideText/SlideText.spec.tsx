import { render } from '@testing-library/react';

import SlideText from './SlideText';

describe('SlideText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SlideText />);
    expect(baseElement).toBeTruthy();
  });
});
