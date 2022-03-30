import React, { useState } from "react";

function Form(props) {

    
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count => count + 1);
      };
    
      //Create handleDecrement event handler
      const handleDecrement = () => {
        setCount(count => count - 1);
      };

      const handleDeDevision = () => {
        setCount(count => count / 2);
      };
    return(
        <div>
        
            <h1>Count = {count}</h1>
        <div className="buttons">
            <button className="btn third" onClick={handleIncrement}>+</button>
            
            <button className="btn third" onClick={handleDecrement}>-</button>

            <button className="btn third" onClick={handleDeDevision}>/</button>
            <br></br>
            <button className="btn fourth" onClick={() => setCount(0)}>Reset</button>
        </div>
            
        </div>
    )
}

export default Form;