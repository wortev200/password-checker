export const PasswordCheck = (props) => {

  const {firstname, lastname, username, password} = props;
  
  let blacklistArray = [];
  blacklistArray.push(firstname, lastname, username);

  requirejs(["relpath/to/zxcvbn"], function (zxcvbn) {
    console.log(zxcvbn('Tr0ub4dour&3'));
  });

  return(
    
    <section>

      <p>Hello World</p>
      {blacklistArray}
      
    </section>
    
  )
}