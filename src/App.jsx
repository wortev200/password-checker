import './App.css'
import { useState } from 'react';
import { PasswordCheck } from './features/password/passwordCheck.jsx';
import { PasswordConfirmation } from './features/password/passwordConfirmation.jsx';
import { SortCountries } from './features/countries/sortCountries.jsx';;

function App() {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passConfirmation, setPassConfirmation] = useState('');

  return (
    <form action='' id="inputs">


      <label htmlFor="name" className='name'>

        Nombre(s)
        <input type="text" id="name" name="name" value={firstname} onChange={e => setFirstname(e.target.value)}></input>

      </label>

      <label htmlFor="lastname">

        Apellido(s)
        <input type="text" id="lastname" name="lastname" value={lastname} onChange={e => setLastname(e.target.value)}></input>

      </label>

      <label htmlFor="username">

        Nombre de usuario
        <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)}></input>

      </label>
      
      <label htmlFor="email">

        Correo Electrónico
        <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)}></input>

      </label>
      
      <label htmlFor="password">

        Contraseña
        <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)}></input>

        <PasswordCheck firstname={firstname} lastname={lastname} username={username} email={email} password={password} />

      </label>
      
      <label htmlFor="password-confirmation">

        Confirma tu contraseña
        <input type="password" id="password-confirmation" name="password-confirmation" value={passConfirmation} onChange={e => setPassConfirmation(e.target.value)}></input>

        <PasswordConfirmation password={password} passConfirmation={passConfirmation} />

      </label>

      <SortCountries />


    </form>
  )
}

export default App