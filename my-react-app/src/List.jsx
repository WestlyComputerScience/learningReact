
function List(){
    const fruits = [{id : 1, name : "apple", calories : 95}, 
                    {id : 2, name : "orange", calories : 45}, 
                    {id : 3, name : "banana", calories : 105}, 
                    {id : 4, name : "coconut", calories : 159},     
                    {id : 5, name : "pineapple", calories : 37}];

    //fruits.sort(((a, b) => a.name.localeCompare(b.name))); //sorts Alphabetically
    //fruits.sort(((a, b) => b.name.localeCompare(a.name))); //sorts reverse Alphabetically
    //fruits.sort(((a, b) => a.calories - b.calories)); //sorts non-decreasing numerically
    //fruits.sort(((a, b) => b.calories - a.calories)); //sorts non-increasing numerically

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); //gets array of fruits less than 100 calories
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100); //gets array of fruits greater than or equal to 100 calories

    // for each list element fruit => (do) a new list element of that fruit
    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name} 
                                            : &nbsp; <b>{fruit.calories}</b> calories</li>); // &nbsp (non-braking space character) (i.e. if we need 100 km to be on the same line)
    
    const lowCalListItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                            {lowCalFruit.name} : &nbsp; <b>{lowCalFruit.calories}</b> calories
                                                     </li>); // &nbsp (non-braking space character)
    
    const highCalListItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
                                            {highCalFruit.name} : &nbsp; <b>{highCalFruit.calories}</b> calories
                                                     </li>); // &nbsp (non-braking space character)

    

    return (
        <>
            <ol>{listItems}</ol> {/* ol for ordered list */}
            <br></br>
            <br></br>
            <ol>{lowCalListItems}</ol>
            <br></br>
            <br></br>
            <ol>{highCalListItems}</ol>
        </>
    );
}

export default List