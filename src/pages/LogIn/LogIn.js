import { useState } from 'react';
import'./LogIn.css'
const LogIn = () => {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }
  return (
  <div className='container'>


<form onSubmit={handleSubmit}>
<div className='form-header'>Login</div>
  <div className='form-group'> 
      <input placeholder="Email"
          type="email" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
  </div>
  <div className='form-group'>

      <input placeholder="Password"
          type="password" 
        />
    </div>
      <button type="submit"  value="Log In" >Log In</button>
    </form>
    </div>

  )
  };
  
  export default LogIn;