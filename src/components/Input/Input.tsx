import React, { ChangeEvent, useState } from 'react';
import './Input.css';

export interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  helper?: string | null;
  message?: string | null;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputFieldProps> = ({label, type, value, helper, message, onChange}) => {
  const inputId = `${label.toLowerCase().replace(/\s/g, '-')}-Input`;
  const [inputValue, setInputValue] = useState<string>(value);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(e);
  };

  return (
    <div className="Input-Container">
      <div className="Input-Field">
        <label htmlFor={inputId} className="Label">
          {label}
        </label>
        <input
          type={type}
          className="Field"
          id={inputId}
          value={inputValue}
          onChange={handleInputChange}
        />
        {message && message}
        {helper && (
          <p className="Helper">
            <small>{helper}</small>
          </p>
        )}
      </div>
    </div>
  );
};
