import React, { useState } from "react";
import Navbar from "./Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./Footer";

export default function Main() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }

        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }

        if (currentPage === 'Contact') {
            return <Contact />;
        }

        if (currentPage === 'Resume') {
            return <Resume />;
        }
        
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="body">
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}