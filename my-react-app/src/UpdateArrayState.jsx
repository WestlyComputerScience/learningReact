import React, { useState } from 'react';

function UpdateArrayState(){
    
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value; // when we click the button, grab text from our input element
        document.getElementById("foodInput").value = ""; // resent whatever is in input

        // f => gets new value (aka safely changing our array)
        setFoods(f => [...foods, newFood]); //spread operator (...) gives us all our values in our array
    }

    function handleRemoveFood(index){

        setFoods(foods.filter((_element, i) => i !== index)); //_ means ignore parameter
    }

    return(
        <>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)} {/*Create list item for each item in array*/}
            </ul>   
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add food</button>
        </>
    );
}

export default UpdateArrayState;