import React, {useState} from 'react';

function UpdateObjects(){

    const [car, setCar] = useState({year:2024, 
                                    make:"Ford", 
                                    model:"Bronco"});
    
    function handleYearChange(event){
        //    ...car     is same as       year:2024, make:"Ford", model:"Bronco"
        // c as arrow function parameter convention for car (make reference to previous state, safe updating!)
        setCar(c => ({...car, year: event.target.value})); // ... car allows us to re-use what's already in car, then updates year to later property
    }

    function handleMakeChange(event){
        setCar(c => ({...car, make: event.target.value}));
    }

    function handleModelChange(event){
        setCar(c => ({...car, model: event.target.value}));
    }

    return(
        <>
            <div>
                <p>Your favorite car is: {car.year} {car.make} {car.model}</p><br/>
                <input type="number" value={car.year} onChange={handleYearChange}/><br/>
                <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
                <input type="text" value={car.model} onChange={handleModelChange}/><br/>
            </div>
        </>
    );

}

export default UpdateObjects;