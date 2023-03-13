import React from "react";

const styles = {

};

function Navbar ({ currentPage, handlePageChange}) {
    return (
        <nav style={styles.navbar}>
        <header className= "navbar">
        <h1>Jasmine Hayes</h1>
        </header>
        <ul style={styles.navbarA} className="nav">
        <li style={styles.padding} className="nav-item">
            <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link-active" : "nav-link"}>
                About
                </a>
            </li>
        </ul>
        </nav>
    );
}

export default Navbar;