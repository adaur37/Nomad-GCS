import React, { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';

//MyComponent functional component is created to maintain the inupt value in the state using 'useState' hook with the value of 10
const MyComponent = () => {
  const [inputValue, setInputValue] = useState(10);
  //The 'useRef' hook is used to create a refernce to the input element. The 'inputRef' is assigned to the 'inputRef' prop of the Material-UI 'TextField' component. 
  const inputRef = useRef(null);

  //The 'handleInputChange' function checks if the new value falls withing the range of 10 to 20. If the condition is met, the 'setInputValue' function is called to update the component's state with the new value. Otherwise, the input value remains unchanged. 
  const handleInputChange = () => {
    const newValue = parseInt(inputRef.current.value);
    //Validation ensures that the user can only change the input value to a number between 10 and 20. Anyother values are ignored. 
    //The restrictions can be changed to ensure the users input range is enforced.
    if (newValue >= 10 && newValue <= 20){
      setInputValue(newValue);
    }
  };

  return (
    <div>
    //TextField component from the Material-UI is used to render the input field with a label of "Input Value". the 'defaultValue' prop is set to the 'inputValue' from the component's state, which ensures the input field displays the initial value of 10. The 'inputRef' and 'onChange' props are used to bind the input elements to the 'inputRef' and 'handleInputChange' functions respectively. 
      <TextField
        label="Input Value"
        defaultValue={inputValue}
        inputRef={inputRef}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default MyComponent;

//By using 'useRef', the user can change the input value to 20 without triggering any unnecessary re-renders. The value is updated in the components state, allowing you to use it for further processing or pass it to other components as needed. 
