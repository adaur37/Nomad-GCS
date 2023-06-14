//Slider component receives various props, including 'value', 'min', 'max', 'onChange' and 'aria-labelledby'

import React, { useState } from 'react';
//'Slider' component from the Material-UI is used to render the slider bar. 
import Slider from '@material-ui/core/Slider';

//Create MySlider functional component, which maintains the value of the slider using the 'useState' hook. 
const MySlider = () => {
  // The initial value of the slider is set at 50.
  const [sliderValue, setSliderValue] = useState(50);

  //handleSliderChange function receives the 'event' object and the 'newValue' from the slider. It updates the component's state by calling the 'setSliderValue' with the new value, triggering singular a re-render. 
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <div>
      <Slider
        //Value prop is set to 'sliderValue' from the component's state, which determines the initial position of the slider.
        value={sliderValue}
        min={0}
        max={100}
        //onChange prop is assigned to the 'handleSliderChange' 
        onChange={handleSliderChange}
        aria-labelledby="slider-label"
      />
      // this is used to display the slider value, the 'id' element is associated with the 'aria-labelledby' prop of the 'Slider' component. 
      //SliderValue is only re-rendered when necessary.
      <p id="slider-label">Slider Value: {sliderValue}</p>
    </div>
  );
};

export default MySlider;
