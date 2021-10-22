
import './App.css';
import {useState} from 'react';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [Address, setAddress] = useState('')
  const [rollNo, setrollNo] = useState('')
  const [user1, setUser] = useState({})

  let sbmt = () => {
   
    let obj = {
      name,
      email,
      Address,
      rollNo
    }
    setUser(obj)
    console.log(user1)
  
  }
  let showDiv=()=> {
    document.getElementById('welcomeDiv').style.display = "block";
    document.getElementById('showcard').style.display = "none";
    
 }
 let message="welcome" +user1.name+"\n"+ user1.Address+"\n"+user1.email


  return (
    <>
    <input style={{display:'block'}}value={name}  onChange={(e) => setName(e.target.value)} placeholder='Name' />
    <input  style={{display:'block'}}value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
    <input  style={{display:'block'}}value={Address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' />
    <input  style={{display:'block'}}value={rollNo} onChange={(e) => setrollNo(e.target.value)} placeholder='rollno' />
    
    <button onClick={sbmt} >submit</button>
    <div id="welcomeDiv"  style={{display:'none'}}>{message}</div>
    <button  id="showcard" onClick={showDiv}>show card</button>
    </>
  );
}

export default App;
