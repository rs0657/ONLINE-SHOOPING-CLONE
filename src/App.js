import logo from './logo.svg';
import './App.css';
import Buttonpannel from './Buttonpannel';
import Imagegallery from './Imagegallery';
import Sample from './Sample';
import { useState } from 'react';
function App() {

  const [name, setName] = useState("all");

  function handlestatus(status){
    setName(status);
  };

  return (
    <div className="App">

      <Buttonpannel onStatusChange={(status)=>{handlestatus(status)}}/>
      <Imagegallery name={name}/>
    </div>
  );
}

export default App;

