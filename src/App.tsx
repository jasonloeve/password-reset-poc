import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input, Message } from './components';
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
    console.log(isValidPassword);
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
    console.log('Catch Submit')
  }

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
          <button type="submit">Reset</button>
        </form>
      </div>
    </div>
  );
}

export default App;
