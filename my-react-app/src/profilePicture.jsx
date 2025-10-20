
function ProfilePicture(){

    const imageUrl = './src/assets/Banana.png';

    const handleClick = (e) => e.target.style.display = "none"; //disappears when you click on it now

    return(
        <img onClick = {(e) => handleClick(e)} src={imageUrl}>

        </img>
    );
}

export default ProfilePicture;