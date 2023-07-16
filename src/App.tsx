import React, { ChangeEvent, FormEvent } from 'react';
import './App.css';

const App: React.FC = () => {
  const handlePasswordChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;

    // Debug
    console.log(value);
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
          <input type="password" onChange={handlePasswordChange}/>
          <button type="submit">Click me</button>
        </form>
      </div>
    </div>
  );
}

export default App;
