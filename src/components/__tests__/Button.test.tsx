import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import { Button } from '../index';

describe('Button', () => {
  it('renders with correct children', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    const buttonElement = getByText('Click Me') as HTMLElement;
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock}>Click Me</Button>);
    const buttonElement = getByText('Click Me') as HTMLElement;
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
