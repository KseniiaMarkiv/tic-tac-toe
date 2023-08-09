import { useState } from 'react';

// a prop called value
export default function Square() {

  // a function used to change the value
  // null as the initial value
  const [value, setValue] = useState(null); 

  function handleClick() {
    setValue('X');
  }
  // render the JavaScript variable called value
  return (
        <button 
            className="square"
            onClick={handleClick}
            >
            {value}
        </button>
        );
}
