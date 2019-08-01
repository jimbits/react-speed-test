import React from 'react';

function LoginForm({ onSetLabel, label, onRequestLogin }) {
  return (
    <header className="login-form">
      <h2>Login Form </h2>

      <input type="text" value={label} onChange={onSetLabel} />
      <div>
        <button onClick={onRequestLogin}>Login In Success</button>
      </div>
    </header>
  );
}

export default LoginForm