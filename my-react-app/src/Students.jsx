import PropTypes from 'prop-types' //allows us to work with prop-types from node_modules

function Student(props){

    return(
        <div className="student"> {/* Class is a reserved keyword in jsx, so we use className */}
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p> {/* Can place javascript code in HTML, booleans don't displace directly to the DOM*/}
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student