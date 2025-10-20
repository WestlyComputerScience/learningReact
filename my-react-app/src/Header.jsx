
function Header(){

    // returns a single element
    return(
        <header>
            <h1>My Website</h1>
            <nav> {/* navigation links */}
                <ul> {/* unordered list */}
                    <li><a href = "#">Pizza Silders</a></li> {/* list elements */}
                    <li><a href = "#">Home</a></li>
                    <li><a href = "#">About</a></li>
                    <li><a href = "#">Services</a></li>
                    <li><a href = "#">Contacts</a></li>
                </ul>
            </nav>
            <hr></hr> {/* horizontal rule */}
        </header>
    );
}

// Basically allows us to work with header anywhere
export default Header // Exports our header, if another file imports from this file without using curly braces, it will get header
