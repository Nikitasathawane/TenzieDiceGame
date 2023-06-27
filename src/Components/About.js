import React, {useEffect, useState} from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"


export default function About({mystyle,countdown,tenzies,setTenzies}) {


    const [dice, setDice] = React.useState(allNewDice())
    //ithe tenzies wali state ithe locally availabale ahe barobar
  
    const [scores, setScores] = useState(0);

    useEffect(() => {
        setScores(countdown)
      }, [tenzies]);

   
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every(die => die.value === firstValue);
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    function rollDice() {
        if(!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }));
        }


        else {
            setTenzies(false)
            setDice(allNewDice());
        }
    }
   
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    const styles={
        width : "50px",
        height : "50px",
    }

    
    return (
        
         
        
            <main  className="style ">
         <label className="form-check-label"
          htmlFor="flexSwitchCheckDefault"></label>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions ">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container ">
                {diceElements}
            </div>
    
            <button 
                className="roll-dice" 
                onClick={rollDice}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
      
        <h2 className="scores">Scores :{tenzies? scores:0}</h2>

        </main>
         
    );
}


