import React from 'react';
import './Message.css';

type MessageType = 'Error' | 'Success' | 'Info' | 'Warning';

export interface MessageProps {
  type: MessageType;
  message: string;
}

export const Message: React.FC<MessageProps> = ({ type, message }) => {
  return (
    <div data-testid="Message-Container" className={`Message Message--${type}`}>
      <p>{message}</p>
    </div>
  );
};
