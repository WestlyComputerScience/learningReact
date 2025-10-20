
function Button1() {

    let count = 0;

    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me!`);
        }
    }; // arrow function ( (parameters) => function body)

    const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    const handleClick3 = (e) => e.target.textContent = "Ouch 🙁";
    
    // or <button onDoubleClick> to double click to execute the function
    return (
        <button onClick={(e) => handleClick3(e)}> {/* When click on button, then execute the code, otherwise called immediately*/}
            Click Me 🥳
        </button>
    );
}

export default Button1