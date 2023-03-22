import { useEffect, useMemo, useState, useCallback } from "react";

// useMemo is used to memoize a value that is expensive to compute

const JSprep = () => {
  const [sequence, setSequence] = useState<number>(0);
  const [fibonacciInput, setFibonacciInput] = useState<number>(0);

  const fibonacci = (num: number): number => {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
  };

  const handleFibonacci = (e: any) => {
    e.preventDefault();
    setFibonacciInput(e.target.value);
  };

  const fibonacciMemo = useMemo(
    () => fibonacci(fibonacciInput),
    [fibonacciInput]
  );

  useEffect(() => {
    setSequence(fibonacciMemo);
  }, [fibonacciMemo]);

  ////////////////////////////////
  // Reverse a sting

  const [reversed, setReversed] = useState<string>("");
  const [string, setString] = useState<string>("");

  function reverseString(str: string) {
    return str.split("").reverse().join("");
  }

  const handleChange = (e: any) => {
    e.preventDefault();
    setString(e.target.value);
  };

  useEffect(() => {
    setReversed(reverseString(string));
  }, [string]);

  ////////////////////////////////
  // Palindrome

  const [isPalindrome, setIsPalindrome] = useState<boolean>(false);
  const [inputPalindrome, setInputPalindrome] = useState<string>("");

  const palindrome = (str: string): boolean => {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, "");
    let reverseStr = lowRegStr.split("").reverse().join("");
    return reverseStr === lowRegStr;
  };

  const handlePalindrome = (e: any) => {
    e.preventDefault();
    setInputPalindrome(e.target.value);
  };

  useEffect(() => {
    setIsPalindrome(palindrome(inputPalindrome));
  }, [inputPalindrome]);

  ////////////////////////////////
  // Fizz buzz

    const [fizzBuzz, setFizzBuzz] = useState<string[]>([]);
    const [inputFizzBuzz, setInputFizzBuzz] = useState<number>(0);
  
    const checkFizzBuzz = () => {
      const newFizzBuzz = Array.from({ length: inputFizzBuzz }, (_, i) => {
        if (i % 3 === 0 && i % 5 === 0) {
          return `${i} is FizzBuzz`;
        } else if (i % 3 === 0) {
          return `${i} is Fizz`;
        } else if (i % 5 === 0) {
          return `${i} is Buzz`;
        } else {
          return `${i}`;
        }
      });
      setFizzBuzz(newFizzBuzz);
    };
  
    const handleFizzBuzzChange = (e: any) => {
      e.preventDefault();
      checkFizzBuzz();
    };
  
    const handleInputFizzBuzzChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputFizzBuzz(Number(e.target.value));
    };

  return (
    <div>
      <h3>Fibonacci: </h3>
      <input
        type="number"
        value={fibonacciInput}
        onChange={handleFibonacci}
      ></input>
      {/*       <button onClick={()=>setSequence(fibonacciMemo)}>Count fibonacci</button> */}
      <p>{sequence}</p>
      <h3>Reverse a String With Built-In Functions: </h3>
      <input type="text" value={string} onChange={handleChange} />
      <p>{reversed}</p>
      <h3>Palindrome check:</h3>
      <input type="text" value={inputPalindrome} onChange={handlePalindrome} />
      <div>
        {isPalindrome ? (
          <div>
            <h3>{inputPalindrome}</h3>
            {` is a palindrome`}{" "}
          </div>
        ) : (
          "it is not a palindrome"
        )}
      </div>
      <h3>Fizz buzz:</h3>
      <p>Enter a number to display a list of Fizz Buzz items:</p>
      <input type="number" value={inputFizzBuzz} onChange={handleInputFizzBuzzChange} />
      <button onClick={handleFizzBuzzChange}>Show Fizz Buzz</button>
      {fizzBuzz.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default JSprep;

// use Callback  is used to memoize a function that is expensive to create

/* const JSprep = () => {
  const [sequence, setSequence] = useState(0);

  const fibonacci = useCallback((num: number): number => {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
  }, []);

  const fibonacciMemo = fibonacci(18);

  useEffect(() => {
    setSequence(fibonacciMemo);
  }, [fibonacciMemo]);

  return (
    <div>
      <h3>Fibonacci: </h3>
      <p>{sequence}</p>
    </div>
  );
};

export default JSprep; */
