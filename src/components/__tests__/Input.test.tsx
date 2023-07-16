import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { Input } from '../index';

describe('Input', () => {
  const onChangeMock = jest.fn();

  it('renders input field with label', () => {
    const label = 'Test Label';
    const { getByLabelText }: RenderResult = render(
      <Input label={label} type="text" value="" onChange={onChangeMock} />
    );

    const input: HTMLInputElement = getByLabelText(label) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('text');
    expect(input.value).toBe('');
  });

  it('triggers onChange callback when input value changes', () => {
    const { getByLabelText }: RenderResult = render(
      <Input label="Test Label" type="text" value="" onChange={onChangeMock} />
    );

    const input: HTMLInputElement = getByLabelText('Test Label') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Updated Value' } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(input.value).toBe('Updated Value');
  });

  it('renders helper if provided', () => {
    const helper = 'Test Helper';
    const { getByText }: RenderResult = render(
      <Input label="Test Label" type="text" value="" helper={helper} onChange={onChangeMock} />
    );

    const helperElement: HTMLElement = getByText(helper);
    expect(helperElement).toBeInTheDocument();
  });

  it('renders error message if provided', () => {
    const errorMessage = 'Test Error Message';
    const { getByText }: RenderResult = render(
      <Input label="Test Label" type="text" value="" message={errorMessage} onChange={onChangeMock} />
    );

    const errorElement: HTMLElement = getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });
});
