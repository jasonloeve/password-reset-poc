import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  // Test to ensure that the component renders without any errors
  test('renders without errors', () => {
    render(<App />);
    console.log('renders without errors - Passed');
  });

  // Test to ensure that form submission is allowed when the password matches the regex pattern
  test('allows form submission when password is valid regex', () => {
    const { getByLabelText, getByText, queryByText }: RenderResult = render(<App />);

    const passwordInput: HTMLElement = getByLabelText('Password') as HTMLElement;
    fireEvent.change(passwordInput, { target: { value: 'P@ssw0rd!' } });

    expect((passwordInput as HTMLInputElement).value).toBe('P@ssw0rd!');
    expect(queryByText("Password doesn't match require criteria")).toBeNull();

    fireEvent.click(getByText('Reset password'));

    expect(queryByText('Your password has been reset')).toBeInTheDocument();
    console.log('allows form submission when password is valid regex - Passed');
  });

  // Test to ensure that form submission is allowed when the password has a valid length
  test('allows form submission when password is valid length', () => {
    const { getByLabelText, getByText, queryByText }: RenderResult = render(<App />);

    const passwordInput: HTMLElement = getByLabelText('Password') as HTMLElement;
    fireEvent.change(passwordInput, { target: { value: '1234567890abcde' } });

    expect((passwordInput as HTMLInputElement).value).toBe('1234567890abcde');
    expect(queryByText("Password doesn't match require criteria")).toBeNull();

    fireEvent.click(getByText('Reset password'));

    expect(queryByText('Your password has been reset')).toBeInTheDocument();
    console.log('allows form submission when password is valid length - Passed');
  });

  // Test to ensure that form submission is prevented when the password is invalid
  test('prevents form submission when password is invalid', () => {
    const { getByLabelText, getByText, queryByText }: RenderResult = render(<App />);

    const passwordInput: HTMLElement = getByLabelText('Password') as HTMLElement;
    fireEvent.change(passwordInput, { target: { value: 'P@ssw0rd' } });

    expect((passwordInput as HTMLInputElement).value).toBe('P@ssw0rd');
    expect(queryByText("Password doesn't match require criteria")).toBeInTheDocument();

    fireEvent.click(getByText('Reset password'));

    expect(queryByText('Your password has been reset')).toBeNull();
    console.log('prevents form submission when password is invalid - Passed');
  });
});
