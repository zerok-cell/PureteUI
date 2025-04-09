import { render } from '@testing-library/react';

import DialogWindow from './DialogWindow';

describe('DialogWindow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DialogWindow />);
    expect(baseElement).toBeTruthy();
  });
});
