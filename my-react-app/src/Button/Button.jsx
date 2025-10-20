import styles from './Button.module.css' //grabs our CSS style from the folder

function Button(){

    // However, hard to read and bad for complex styling, better for tiny things
    const styles = {
        backgroundColor:"hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "20px",
        border: "none",
        cursor: "pointer",
    }

    // or <button style = {styles}> Click Me! </button>
    return(
        <button className={styles.button}>
            Click Me!
        </button>
    );

}

export default Button