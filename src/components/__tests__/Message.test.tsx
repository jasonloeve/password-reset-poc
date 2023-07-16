import React from 'react';
import { render, screen } from '@testing-library/react';
import { Message, MessageProps } from '../Message/Message';

describe('Message', () => {
  it('renders with correct type and message', () => {
    const props: MessageProps = {
      type: 'Success',
      message: 'Operation successful',
    };

    render(<Message {...props} />);

    const messageElement = screen.getByText(props.message);
    expect(messageElement).toBeInTheDocument();

    const messageContainer = screen.getByTestId('Message-Container');
    expect(messageContainer).toHaveClass(`Message Message--${props.type}`);
  });
});