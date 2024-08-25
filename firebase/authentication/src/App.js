import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { auth } from './firebase/config';
import { createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
function App() {

  const [Regemail,setRegEmail]=useState("");
  const [Regpassword,setRegPassword]=useState("");
  const [Logemail,setLogEmail]=useState("");
  const [Logpassword,setLogPassword]=useState("");

  const [user,setUser]=useState(auth.currentUser);

  // onAuthStateChanged(auth,(currentUser)=>{
  //      if (currentUser) {
  //       setUser(currentUser);
  //      } else {
  //       setUser("");
  //      }   
  // })
  const register = async () => {
    const user= await createUserWithEmailAndPassword(auth,Regemail,Regpassword);
    console.log(user);

  }

  const login = async () => {
  const user=await signInWithEmailAndPassword(auth,Logemail,Logpassword)
  console.log(user);
  }

  const logout = async () => {
    if (auth.currentUser!=null) {
      await signOut(auth);
      console.log('success');
    }else{
      console.log('user is not present');
    }

  }

  return (
    <div className="App">
      <div>
        <h3>Register User</h3>
        <input type="text" value={Regemail} placeholder='Enter email' onChange={(e)=>setRegEmail(e.target.value)} />
        <input type="text" value={Regpassword} placeholder='Enter Password...'onChange={(e)=>setRegPassword(e.target.value)}/>
        <button onClick={register}>Create User</button>
      </div>
      <div>
        <h3>Login User</h3>
        <input type="text" placeholder='Enter Email...' onChange={(e)=>setLogEmail(e.target.value)} />
        <input type="text" placeholder='Enter Password...' onChange={(e)=>setLogPassword(e.target.value)} />
        <button onClick={login}>Login</button>
      </div>
      <div>
        <h3>Logout User</h3>
         <p>{user?user.email:""}</p>
         <button onClick={logout}>Logout </button>
      </div>
    </div>
  );
}

export default App;
