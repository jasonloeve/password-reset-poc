/**
 * Reset Password Component
 *
 * This component renders a form to reset the user's password. It includes an input field for entering the new password,
 * a submit button, and a message component to display success or error messages. The password entered is validated
 * against requested criteria, and appropriate messages are displayed accordingly.
 *
 * TODO:
 * - Consider internationalization of hardcoded content such as titles, labels, and messages.
 * - Refactor the form into a reusable component.
 * - Refactor the card into a reusable component.
 * - Optimize the code by combining password states into a single state object.
 * - Move the code to its own page component, e.g., pages/Account/Reset.tsx.
 * - Add functionality to unhide password in the Input component.
 * - Add functionality to include a helper popup in the Input component (The current helper text is slightly long).
 */

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input, Button, Message } from './components';
import { validatePassword } from './utils';
import './App.css';

const App: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handlePasswordChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    setPassword(value);

    const isValidPassword: boolean = validatePassword(value);
    const isValidLength: boolean = value.length >= 15;

    if (isValidPassword || isValidLength) {
      setErrorMessage('');
      setIsValid(true);
    } else {
      setErrorMessage("Password doesn't match require criteria");
      setIsValid(false);
    }

    // Debug
    // console.log(isValid);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!isValid) {
      return; // Prevent form submission if not valid
    }

    // Continue with form submission logic
    // ......

    setSuccessMessage('Your password has been reset');

    // Clear input field and error message
    setPassword('');
    setErrorMessage('');

    // Debug
    // console.log('Form submitted');
  };

  return (
    <div className="App">
      <div className="Container">
        <h1 className="Heading">Reset your password</h1>
        <form onSubmit={handleSubmit}>
          <div className="Card">
            {successMessage ? (
              <Message type="Success" message={successMessage} />
            ) : (
              <Input
                label="Password"
                type="password"
                value={password}
                helper="*Please enter a password: min 8 characters, min 1 digit and contains min 2 special characters"
                message={errorMessage}
                onChange={handlePasswordChange}
              />
            )}
          </div>
          <div className="Button-Group">
            <Button className="Button Button--Primary" type="submit" disabled={!isValid}>
              <span>Reset password</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
