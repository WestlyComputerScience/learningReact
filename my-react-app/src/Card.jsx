import bananaPic from './assets/Banana.png' // Gets my asperite banana pic

function Card() {

    return(
        <div className="card">
            <img className="card-image" alt="profile picture of Westly Orr" src={bananaPic}></img> {/* alt= for alternate text if can't be displayed or for screen reader */}
            <h2 className="card-title">Westly Orr</h2>
            <p className="card-text">The undisputed goat TA for COMS 2300</p>
        </div>
    );

}

export default Card