
function Food(){

    const food1 = "pizza sliders";
    const food2 = "chili";

    return(
        <ul>
            <li>Burger</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );

}

export default Food