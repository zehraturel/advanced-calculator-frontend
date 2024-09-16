
import React, { useEffect, useState } from "react";
import * as math from 'mathjs'
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {

  const [text,setText] =useState("");
  const [result,setResult]= useState("");

  const addToText = (val)=>{
    setText((text) => [...text, val + " "])
  }
  

  const calculateResult= ()=>{
    const input = text.join("") //remove commas
    setResult(math.evaluate(input))

  }
  const resetInput = ()=>{
    setText("");
    setResult("");
  }
  const handleKeyDown = (event) => {
    debugger;
    if(event.key=="Enter"){
      calculateResult();

    }
  
    else
    addToText(event.key);
  };
  
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [text]);
  

  return (
    <div className="App">
      <div className='calc-wrapper'>

        <Input text={text} result={result} />
      
        <div className='row'>
        <Button symbol="("  handleClick={addToText}/>
        <Button symbol=")" handleClick={addToText}/>
        <Button symbol="mc" handleClick={addToText}/>
        <Button symbol="m+"   handleClick={addToText}/>
        <Button symbol="m-"   handleClick={addToText}/>
        <Button symbol="mr"  handleClick={addToText}/>
  
        <Button symbol="AC" handleClick={resetInput}  color="#AC7D88" />
        <Button symbol="+/-" handleClick={addToText} color="#AC7D88" />
        <Button symbol="%"   handleClick={addToText} color= "#AC7D88" />
        <Button symbol="/"  color="#A6B1E1" handleClick={addToText}/>


        </div>
        <div className='row'>
        <Button symbol="2ⁿᵈ" handleClick={addToText}/>
        <Button symbol="x²" handleClick={addToText}/>
        <Button symbol="x³"  handleClick={addToText}/>
        <Button symbol="xʸ" handleClick={addToText}/>
        <Button symbol="eˣ" handleClick={addToText}/>
        <Button symbol="10ˣ" handleClick={addToText}/>
        
        <Button symbol="7" color="#D77FA1"  handleClick={addToText}/>
        <Button symbol="8" color="#D77FA1" handleClick={addToText}/>
        <Button symbol="9" color="#D77FA1" handleClick={addToText}/>
        <Button symbol="*"  color="#A6B1E1" handleClick={addToText}/>
        

        </div>
        <div className='row'>
        <Button symbol="1/x" handleClick={addToText}/>
        <Button symbol="√x" handleClick={addToText}/>
        <Button symbol="³√x" handleClick={addToText}/>
        <Button symbol=""  handleClick={addToText}/>
        <Button symbol="ln" handleClick={addToText}/>
        <Button symbol="log10" handleClick={addToText}/>
        <Button symbol="4" color="#D77FA1" handleClick={addToText}/>
        <Button symbol="5"  color="#D77FA1" handleClick={addToText}/>
        <Button symbol="6" color="#D77FA1" handleClick={addToText}/>
        <Button symbol="-" color="#A6B1E1" handleClick={addToText}/>
        </div>

        <div className='row'>
        <Button symbol="x!" handleClick={addToText}/>
        <Button symbol="sin" handleClick={addToText}/>
        <Button symbol="cos" handleClick={addToText}/>
        <Button symbol="tan"  handleClick={addToText}/>
        <Button symbol="e" handleClick={addToText}/>
        <Button symbol="EE" handleClick={addToText}/>
        <Button symbol="1" color="#D77FA1" handleClick={addToText}/>
        <Button symbol="2" color="#D77FA1" handleClick={addToText}/>
        <Button symbol="3" color="#D77FA1" handleClick={addToText}/>
        <Button symbol="+" color="#A6B1E1" handleClick={addToText}/>
        </div>
        <div className='row'>
        <Button symbol="Rad" handleClick={addToText}/>
        <Button symbol="sinh" handleClick={addToText}/>
        <Button symbol="cosh" handleClick={addToText}/>
        <Button symbol="tanh"  handleClick={addToText}/>
        <Button symbol="π" handleClick={addToText}/>
        <Button symbol="Rand" handleClick={addToText}/>
       
        <div className='merged-buttons'>
        <Button symbol="   0"  color = "#D77FA1"handleClick={addToText} />
        <Button symbol="  "  color ="#D77FA1" handleClick={addToText}/>

        </div>
        <Button symbol="," color = "#D77FA1" handleClick={addToText}/>
        <Button symbol="="  color="#A6B1E1" handleClick={calculateResult}/>
        
        </div>
      </div>
    </div>
  );
}

export default App;