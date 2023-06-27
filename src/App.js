import React, {useState}  from 'react';
import Navbar from './Components/Navbar';
import CountDown from './Components/CountDown';
import  "./Components/App.css";
import About from "./Components/About";



export default function App(){
    const [mode, setMode] = useState('light');
    const [countdown, setCountdown] = useState(60);
    const [tenzies, setTenzies] = React.useState(false);
    const [myStyle, setMyStyle] = useState({

    })


  const toggleMode =() =>{
    if(mode === "light"){
        setMode("dark");
         document.body.style.backgroundColor ="#314755";
    }
    else{
        setMode("light")
         document.body.style.backgroundColor = "#bfe9ff"
    
  }
}


    return(
        <div>
            <Navbar title="Game🤠Zone" mode={mode}
             toggleMode={toggleMode}/>
         <About  mystyle ={myStyle} countdown={countdown} tenzies ={tenzies}  setTenzies={setTenzies} />
         <CountDown countdown={countdown} setCountdown = {setCountdown} tenzies={tenzies}/>
        

        </div>
    )
}