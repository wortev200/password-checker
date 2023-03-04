import './App.css'
import { useState } from 'react';
import { PasswordCheck } from './features/passwordCheck.jsx';

function App() {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div id="inputs">
      <label htmlFor="name">

        Nombre(s)
        <input type="text" id="name" name="name" value={firstname} onChange={e => setFirstname(e.target.value)}></input>

      </label>
      

      <label htmlFor="lastname">

        Apellido(s)
        <input type="text" id="lastname" name="lastname" value={lastname} onChange={e => setLastname(e.target.value)}></input>
        {lastname}

      </label>
      

      <label htmlFor="username">

        Nombre de usuario
        <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)}></input>

      </label>
      

      <label htmlFor="email">

        Correo Electrónico
        <input type="email" id="email" name="email"></input>

      </label>
      

      <label htmlFor="password">

        Contraseña
        <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)}></input>

      </label>
      

      <label htmlFor="password-confirmation">

        Confirma tu contraseña
        <input type="password" id="password-confirmation" name="password-confirmation"></input>

      </label>

      <PasswordCheck firstname={firstname} lastname={lastname} username={username} password={password} />
      

    </div>
  )
}

export default App