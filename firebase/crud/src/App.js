import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { collection, getDocs,addDoc, doc, updateDoc, deleteDoc } from '@firebase/firestore';
import { db } from './firebase-config';
import { async } from '@firebase/util';
function App() {
  const [newName,setnewName]=useState("");
  const [newAge,setnewAge]=useState("");
const [user,setUser]=useState([]);
const userCollectionRef=collection(db,"users");
  useEffect(()=>{
    getUsers();
  },[])

  const getUsers=async()=>{
    const data=await getDocs(userCollectionRef);
    setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
   };

  const createUser=async()=>{
    await addDoc(userCollectionRef,{name:newName,age:Number(newAge)});
    getUsers();
  }

  const updateUser=async(id,age)=>{
   const userDoc=doc(db,"users",id);
   await updateDoc(userDoc,{age:age+1});
   getUsers();
  };

  const DeleUser=async(id)=>{
    const userDoc=doc(db,"users",id);
    await deleteDoc(userDoc);
    getUsers();
  }

  return (
    <div className="App">
      <input type="text" onChange={(e)=>setnewName(e.target.value)} placeholder='Enter Name...'/>
      <input type="text" onChange={(e)=>setnewAge(e.target.value)} placeholder='Enter Age....' />
      <button onClick={createUser}>Create User</button>
      {
        user.map((user)=>{
          return <div key={user.id}>
            {/* {" "} */}
            <h1>Name:{user.name}</h1>
            <h1>Age:{user.age}</h1>
            <button onClick={()=>{updateUser(user.id,user.age);}}>increase Age</button>
            <button onClick={()=>DeleUser(user.id)}>DeleteUser</button>
          </div>
        })
      }
    </div>
  );
}

export default App;
