// import "./style.css"
import {useEffect, useRef, useState} from 'react';

const formatTime = (time) => {

   let minutes =Math.floor (time / 60)  

   let seconds = Math.floor(time - minutes * 60)

   if (minutes <= 10) minutes = '0' + minutes;
   if (seconds <= 10) seconds = '0' + seconds;
   return minutes + ':' + seconds
}

export default function CountDown({countdown,setCountdown,tenzies}){
   // const [countdown, setCountdown] = useState(seconds)

  
   const timerId = useRef()
  

   useEffect(() => {
     let timerId = setInterval(() => {
       setCountdown((prev) => prev - 1);
     }, 1000);
   
     if (tenzies) {
       clearInterval(timerId);
     }
   
     return () => clearInterval(timerId);
   }, [countdown, tenzies]);
     
   
     useEffect(()=>{
       if(countdown <=0) {
         clearInterval(timerId.current)
         // alert("END")
         
         
       }
     }, [countdown])
     
     return(
       <h2 className="count">
         Count Down:{formatTime(countdown)}
         </h2>
   )
   }
   