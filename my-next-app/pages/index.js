import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message:', message);
  };

  return (
    <div>
      <h1>Testowa aplikacja</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Wiadomość: </label>
          <input
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Wpisz swoją wiadomość..."
          />
        </div>
        <button type="submit">Wyślij</button>
      </form>
      {message && (
        <div>
          <h2>Wiadomość:</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;