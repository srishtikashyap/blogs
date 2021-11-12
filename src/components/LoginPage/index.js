import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

// vik@gmail.com
// Normal User
// abcdef123456
const  Login = () =>{

let history = useHistory();
const [name, setName] = useState('')
const [password , setPassword] = useState('')



    const authenticateUser = () => {
        if(name == 'vik@gmail.com' && password == 'abcdef123456' ){
            history.push({
                pathname: '/blogPage',
                state: { superUser: false }
            });
        }else if(name == 'vicky@gmail.com' && password == 'abcdef123456'){
            history.push({
                pathname: '/blogPage',
                state: { superUser: true }
            });
        }else{
            alert('Invalid user name and password')
        }
    }

        return(
<form>
  <label>
    UserName:
    <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
  </label>
  <label>
    password:
    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
  </label>
  {/* <input type="submit" value="Submit" /> */}
  <button onClick={authenticateUser}>Login</button>
</form>

        )

}

export default Login