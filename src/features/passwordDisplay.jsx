export const PasswordDisplay = ({password}) => {

  // Definición de la Expresión Regular General para la verificación de la contraseña.
  const grep = /^(?=(.*[0-9]){1,})(?=.*[a-z])(?=(.*[A-Z]){2,})(?=(.*\W){2,})(?!.* ).{10,15}$/;

  // Definición de las Expresiones Regulares para la subverificación de parámetros. Seccionamos la "grep" en los parámetros que queremos alertar al usuario.
  const numRegex = /^(?=(.*[0-9]){2,}).{1,15}$/;
  const lowerCaseRegex = /^(?=.*[a-z]).{1,15}$/;
  const upperCaseRegex = /^(?=(.*[A-Z]){2,}).{1,15}$/;
  const caractersRegex = /^(?=(.*\W){2,}).{1,15}$/;

  if(password === '') {
    return;
  }
  else if(!password.match(numRegex) || !password.match(lowerCaseRegex) || !password.match(upperCaseRegex) || !password.match(caractersRegex)) {
    return(
      <div>
        <span>Números</span>
        <br/>
        <span>Minúscula</span>
        <br/>
        <span>Mayúscula</span>
        <br/>
        <span>Caracter</span>
      </div>
    )
  }
  else if(password.match(grep)) {
    return;
  }

  /*switch(true) {
    case !password.match(numRegex):
      return <span>* Utiliza por lo menos 2 números.</span>;
    case !password.match(lowerCaseRegex):
      return <span>Utiliza por lo menos 1 letra minúscula.</span>;
    case !password.match(upperCaseRegex):
      return <span>Utiliza por lo menos 2 letras mayúsculas.</span>;
    case !password.match(caractersRegex):
      return <span>Utiliza por lo menos 2 caracteres especiales.</span>
  }*/

}