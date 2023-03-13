import React, { useState } from "react";
import Navbar from "./header";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import Footer from "./footer";

export default function main() {
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

        return <Resume />;
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