import React from 'react'
import Key from './Key'


const calcData = [
    { value: "AC", id: "clear" },
    { value: "/", id: "divide" },
    { value: "x", id: "multiply" },
    { value: 7, id: "seven" },
    { value: 8, id: "eight" },
    { value: 9, id: "nine" },
    { value: "-", id: "subtract" },
    { value: 4, id: "four" },
    { value: 5, id: "five" },
    { value: 6, id: "six" },
    { value: "+", id: "add" },
    { value: 1, id: "one" },
    { value: 2, id: "two" },
    { value: 3, id: "three" },
    { value: "=", id: "equals" },
    { value: 0, id: "zero" },
    { value: ".", id: "decimal" }
];

const Keyboard = ({handleInput}) => {
    return ( <div className="keys">
       {calcData.map((key,index) => (
       <Key key={index} keyData={key} handleInput={handleInput} />
       ))}
     </div>
     )
 }

export default Keyboard;