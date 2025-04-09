import { render } from '@testing-library/react';

import Butoon from './Butoon';

describe('Butoon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Butoon />);
    expect(baseElement).toBeTruthy();
  });
});
