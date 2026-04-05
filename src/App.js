
import './App.css';
import React from 'react';


function App() {
      
 
 function showMessage(){
  alert("login sucessfully") ;
 } 
  return (
    
    <div>
   
      <h2>Login Form</h2>

      <form>
        <label>Email:</label><br />
        <input type="email" /><br /><br />

        <label>Password:</label><br />
        <input type="password" /><br /><br />

        <button onClick={showMessage}>Login</button>
      </form>
  </div>
    




      
   
    
    

  );
}

export default App;
