import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input } from './components';
import { validatePassword } from './utils';
import './App.css';

const App: React.FC = () => {
  const [password, setPassword] = useState<string>('');

  const handlePasswordChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    setPassword(value);

    const isValidPassword: boolean = validatePassword(value);

    // Debug
    console.log(isValidPassword);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Debug
    console.log('Catch Submit')
  }

  return (
    <div className="App">
      <div className="Container">
        <h1 className="Heading">Reset your password</h1>
        <form onSubmit={handleSubmit}>
          <div className="Card">
            <Input
              label="Password"
              type="password"
              value={password}
              helper="*Please enter a password: min 8 characters, min 1 digit and contains min 2 special characters"
              message="This is an error"
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Reset</button>
        </form>
      </div>
    </div>
  );
}

export default App;
