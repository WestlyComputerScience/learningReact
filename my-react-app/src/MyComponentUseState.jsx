import React, {useState} from 'react' //object destructuring to only get certain methods

function MyComponent(){

    const [name, setName] = useState("Guest"); //returns an array of a variable and setter function
    const [age, setAge] = useState(0); //note 0 is an inital placeholder value
    const [isStudent, setStudentStatus] = useState(false);

    const updateName = () => {
        setName("Dug");
    };

    const incrementAge = () => {
        setAge(age + 1);
    };

    const toggleStudentStatus = () => {
        setStudentStatus(!isStudent);
    };

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>IsStudent: {isStudent ? "Yes" : "No"}</p>
            <button onClick={toggleStudentStatus}>Toggle Student Status</button>
        </div>
    );


}

export default MyComponent;