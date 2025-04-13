import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { expect } from '@storybook/jest';

describe('Button test', () => {
  it('Zero render', () => {
    render(<Button data-testid={'btn1'} />);
    expect(screen.getByTestId('btn1')).toBeInTheDocument();
  });
  it('Text correct', () => {
    render(<Button data-testid={'btn1'}>Button click!</Button>);
    expect(screen.getByTestId('btn1')).toHaveTextContent('Button click!');
  });
});
