// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(year + 1)
//                    better ex. setYear(arrow function)
//                    Allows for safe updates based on previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions

import React, {useState} from 'react';

function UpdateFunction(){
    /*
    const [count, setCount] = useState(0);

    function increment(){
        
        Below code doesn't work, React batches together state updates for performance reasons.
        The NEXT state becomes the CURRENT state after an update.
        i.e. it set's count to count + 1 three separate times
        
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    }
    */

    const [count, setCount] = useState(0);

    //Takes the PENDING state to calculate the NEXT state
    // React puts your updater function in a queue
    // During next render, it will call them in the same order
    function increment(){
        //Basically does setCount(function(c) { return c + 1; });
        setCount(c => c + 1); //first letter of state variable
    }

   return(
        <div className="counter-container">
            <p className="count-display">Count is: {count}</p>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );
}

export default UpdateFunction;