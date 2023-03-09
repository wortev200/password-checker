export const PasswordDisplay = ({ password }) => {

  // Definición de la Expresión Regular General para la verificación de la contraseña.
  const grep = /^(?=(.*[0-9]){1,})(?=.*[a-z])(?=(.*[A-Z]){2,})(?=(.*\W){2,})(?!.* ).{10,15}$/;

  // Definición de las Expresiones Regulares para la subverificación de parámetros. Seccionamos la "grep" en los parámetros que queremos alertar al usuario.
  const numRegex = /^(?=(.*[0-9]){2,}).{1,15}$/;
  const lowerCaseRegex = /^(?=.*[a-z]).{1,15}$/;
  const upperCaseRegex = /^(?=(.*[A-Z]){2,}).{1,15}$/;
  const caractersRegex = /^(?=(.*\W){2,}).{1,15}$/;

  return(

    <div>
      {password === '' || password.match(grep) ? null : (<span>Tip: utiliza por lo menos 10 caracteres, máximo 15.</span>)}
      <br/>
      {password === '' || password.match(numRegex) ? null : (<span>Utiliza por lo menos 2 números.</span>)}
      <br/>
      {password === '' || password.match(lowerCaseRegex) ? null : (<span>Utiliza por lo menos 1 letra minúscula.</span>)}
      <br/>
      {password === '' || password.match(upperCaseRegex) ? null : (<span>Utiliza por lo menos 2 letras mayúsculas.</span>)}
      <br/>
      {password === '' || password.match(caractersRegex) ? null : (<span>Utiliza por lo menos 2 caracteres especiales.</span>)}
    </div>

  );

}