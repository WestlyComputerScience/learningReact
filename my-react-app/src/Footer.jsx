
function Footer() {

    // 1 element, but can have children inside the footer
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} Westly Orr</p>
        </footer>
    );

}

export default Footer