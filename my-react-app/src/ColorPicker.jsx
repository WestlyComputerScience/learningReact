import React, {useState} from 'react';


function ColorPicker(){

    const [color, setColor] = useState("#ffffffff");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(
        <>
            <div className="colorpicker-container">
                <h1 className="colorpicker-h1">Color Picker</h1>
                <div className="colorpicker-display" style={{backgroundColor: color}}> {/* to change css properties in js, use {{}} */}
                    <p>Selected Color: {color}</p>
                </div>
                <label>Select a Color:</label>
                <input type="color" value={color} onChange={handleColorChange}></input>
            </div>
        </>
    );
}

export default ColorPicker;