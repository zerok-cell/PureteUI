import { render } from '@testing-library/react';

import SkeletonBlock from './SkeletonBlock';

describe('SkeletonBlock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SkeletonBlock />);
    expect(baseElement).toBeTruthy();
  });
});
