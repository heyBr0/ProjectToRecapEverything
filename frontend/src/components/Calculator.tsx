import React, { useEffect, useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState<number>(0);
  const [operand1, setOperand1] = useState<string>("");
  const [operand2, setOperand2] = useState<string>("");
  const [operatorClicked, setOperatorClicked] = useState<boolean>(false);
  const [operator, setOperator] = useState<string | null>(null);
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators: string[] = ["+", "-", "*", "/"];

  const counting = () => {
    if (operand1 && operand2 && operator) {
      const num1 = parseFloat(operand1);
      const num2 = parseFloat(operand2);
      switch (operator) {
        case "+": {
          setDisplay(num1 + num2);
          break;
        }
        case "-": {
          setDisplay(num1 - num2);
          break;
        }
        case "*": {
          setDisplay(num1 * num2);
          break;
        }
        case "/": {
          setDisplay(num1 / num2);
          break;
        }
        default: {
          return display;
        }
      }
    }
  };

  useEffect(() => {
    counting();
  }, [operand1, operand2, operator]);

  useEffect(() => {
    if (operator) {
      setOperatorClicked(true);
    }
  }, [operator]);

  const clear = () => {
    setDisplay(0);
    setOperand1("");
    setOperand2("");
    setOperator(null);
    setOperatorClicked(false);
  };

  const handleNumberClick = (number: number) => {
    if (operatorClicked) {
      setOperand2(operand2 + number.toString());
    } else {
      setOperand1(operand1 + number.toString());
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <span style={{ padding: "5px" }}> {operand1}</span>
        <span style={{ padding: "5px" }}> {operator}</span>
        <span style={{ padding: "5px" }}> {operand2}</span>
      </div>
      <p>{display}</p>
      <div style={{ display: "flex" }}>
        {numbers.map((item) => {
          return (
            <div key={item}>
              <button
                style={{ padding: "1rem" }}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleNumberClick(item)
                }
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex" }}>
        {operators.map((item) => {
          return (
            <div key={item}>
              <button
                style={{ padding: "1rem" }}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  setOperator(item)
                }
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={clear}>clear</button>
    </div>
  );
};

export default Calculator;
