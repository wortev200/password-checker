import zxcvbn from "zxcvbn";

export const PasswordCheck = (props) => {

  const {firstname, lastname, username, email, password} = props;
  
  // Array vacío para traer el estado de los diferentes inputs que vamos a evaluar como strings con la función de la librería zxcvbn. Se utilizan estas palabras para evitar que la contraseña repita patrones como: Nombre, Apellido, Nombre de Usuario, etc.
  let blacklistArray = [];
  blacklistArray.push(firstname, lastname, email, username);

  const scoreDisplay = [
    "Contraseña Insegura",
    "Contraseña Débil",
    "Contraseña Medio / Fuerte",
    "Contraseña Fuerte",
    "Contraseña Muy Fuerte"
  ]
  
  const passCheck = zxcvbn(password, blacklistArray)

  // La función, devuelve un objeto y una propiedad de ese objeto es "score". El "score" se evalúa del 0 - 4 dependiendo de la seguridad con la que cuenta. Utilizo el score para mostrar las diferentes leyendas de acuerdo a la seguridad de la contraseña del usuario.
  if(password === '') {
    return;
  }
  else if(password !== '' && passCheck.score === 0) {
    return (
      <div>
        <span>{scoreDisplay[0]}</span>
        <br />
        <span>Truco: La contraseña debe ser de al menos 10 caracteres. Para hacerla más fuerte, por lo menos usa 2 mayúsculas, 2 números y 2 caracteres especiales</span>
      </div>
    )
  }
  else if(passCheck.score === 1) {
    return (
      <div>
        <span>{scoreDisplay[0]}</span>
        <br />
        <span>Truco: La contraseña debe ser de al menos 10 caracteres. Para hacerla más fuerte, por lo menos usa 2 mayúsculas, 2 números y 2 caracteres especiales</span>
      </div>
    )
  }
  else if(passCheck.score === 2) {
    return <span>{scoreDisplay[2]}</span>
  }
  else if(passCheck.score === 3) {
    return <span>{scoreDisplay[3]}</span>
  }
  else if(passCheck.score === 4) {
    return <span>{scoreDisplay[4]}</span>
  }

}