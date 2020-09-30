import React, { useState } from "react";
import "./main.css";
function Button() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const [operators, setOperators] = useState("");

  const plusNumber = (number) => {
    setNumber1(number1 + number);
    
  };
  const handleOperators = (operatorBtn) => {
    setOperators(operatorBtn);
    setNumber2(number1);
    setNumber1(" ")
  };

  const handleReset = () =>{
    setNumber1("")
    setNumber2("")
    setOperators("")
  }

  const equalTo = () => {
    switch (operators) {
      case "+":
        setNumber1(parseInt(number2) + parseInt(number1));
        break;
      case "-":
        setNumber1(parseInt(number2) - parseInt(number1));
        break;
      case "*":
        setNumber1(parseInt(number2) * parseInt(number1));
        break;
      default:
        setNumber1(parseInt(number2) / parseInt(number1));
        break;
    }
  };

  return (
    <>
      <div className="display">
        <div >&nbsp;{number1}&nbsp;</div>
      </div>
      <button onClick={() => handleOperators("+")}>+</button>
      <button onClick={() => handleOperators("-")}>-</button>
      <button onClick={() => handleOperators("*")}>*</button>
      <button onClick={() => handleOperators("/")}>/</button>

      <button onClick={equalTo}>=</button>
      <button onClick={handleReset}>Reset</button>
      <div>
        <button onClick={() => plusNumber("1")}>1</button>
        <button onClick={() => plusNumber("2")}>2</button>
        <button onClick={() => plusNumber("3")}>3</button>
      </div>
      <div>
        <button onClick={() => plusNumber("4")}>4</button>
        <button onClick={() => plusNumber("5")}>5</button>
        <button onClick={() => plusNumber("6")}>6</button>
      </div>
      <div>
        <button onClick={() => plusNumber("7")}>7</button>
        <button onClick={() => plusNumber("8")}>8</button>
        <button onClick={() => plusNumber("9")}>9</button>
      </div>
      <div>
        <button onClick={() => plusNumber("0")}>0</button>
      </div>
    </>
  );
}
export default Button;
