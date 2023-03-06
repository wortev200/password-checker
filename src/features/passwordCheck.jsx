import zxcvbn from "zxcvbn";

export const PasswordCheck = (props) => {

  const {firstname, lastname, username, email, password} = props;
  
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
  console.log(passCheck)

  if(password === '') {
    return;
  }
  else if(password !== '' && passCheck.score === 0) {
    return <span>{scoreDisplay[0]}</span>
  }
  else if(passCheck.score === 1) {
    return <span>{scoreDisplay[1]}</span>
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