export const PasswordConfirmation = (props) => {

  const { password, passConfirmation } = props

  if(password === '' || passConfirmation === '') {
    return;
  }
  else if(password !== passConfirmation) {
    return (
      <div>
        <span>Las contraseñas no coinciden</span>
      </div>
      
    )
  }
    

}