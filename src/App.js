import React, {useState}  from 'react';
import Navbar from './Components/Navbar';
import CountDown from './Components/CountDown';
import  "./Components/App.css";
import About from "./Components/About";



export default function App(){
    const [mode, setMode] = useState('light');
    const [countdown, setCountdown] = useState(60);
    const [tenzies, setTenzies] = React.useState(false);

    const [buttonColor, setButtonColor] = useState("#002B5B"); // Default button color for light mode

    const [myStyle, setMyStyle] = useState({

    })


  const toggleMode =() =>{
    if(mode === "light"){
        setMode("dark");
         document.body.style.backgroundColor ="#314755";
         document.body.style.color = "#368B85";
         document.body.style.fontFamily = "'Roboto Mono', monospace";
         
                    

    }
    else{
        setMode("light")
         document.body.style.backgroundColor = "#bfe9ff";
         document.body.style.color = "#74ebd5";
         document.body.style.fontFamily = "'Libre Baskerville', serif";
        
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