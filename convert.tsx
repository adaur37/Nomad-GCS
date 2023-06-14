//Question c) 
//The given code was into a functional component using TypeScript. The component uses the useRef and useEffect hooks. 
import React, { useEffect, useRef } from 'react';

const MyComponent: React.FC = () => {
//The inputRef is created using the useRef hook and assigned to the input element's reference. This allows the user to access the input element later on.
  const inputRef = useRef<HTMLInputElement>(null);

// Inside the useEffect hook, the handleInputChange function is defined, which sets the input value using keyboard.setInput(). It is attached as an event listener to the input event of the input element.
  useEffect(() => {
    const handleInputChange = (event: Event) => {
      //The useEffect hook has an empty dependency array ([]) to ensure that the effect runs only once after the initial render.
      const inputElement = event.target as HTMLInputElement;
      keyboard.setInput(inputElement.value);
    };

    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener('input', handleInputChange);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener('input', handleInputChange);
      }
    };
  }, []);

  //The 'return' statement inside the useEffect hook is used to clean up the event listener when the component is unmounted.
  return (
    //Finally, the component renders an input element with the className of "input" and the ref set to inputRef.
    <input
      className="input"
      ref={inputRef}
    />
  );
};

export default MyComponent;
