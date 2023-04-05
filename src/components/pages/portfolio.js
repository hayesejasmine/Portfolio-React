import React from "react";
import PasswordGenerator from "../../assets/img/javascript-password.png";
import CodeRefactor from "../../assets/img/Image 10-23-22 at 4.47 PM copy.jpg";
import ServerSideAPIProject from "../../assets/img/Server side API copy.png";
import ThirdPartyAPIScheduler from "../../assets/img/Third-Party APIs  Work Day Scheduler copy.png";
import webAPICodingQuiz from "../../assets/img/web-api-coding.png";
import MVCproject from "../../assets/img/project2.png";
import MERNproject from "../../assets/img/scoresocial.png";
import booksearch from "../../assets/img/booksearch.png";

export default function Portfolio() {
    return (
        <div id="portfolio">
           <div className="container">
                <h1 className="my-work">My Portfolio</h1>
                        <hr/>
<div className="row">
    <div className="col-md-4">
        <div className="my-work">
            <a href="https://hayesejasmine.github.io/Accessibility-Refactor-Challenge/">
                <img src={CodeRefactor} alt="Code Refactoring"/>
                <p>Code Refactoring Challenge-HTML/CSS</p>
            </a>
            
        </div>
 </div>
 <div className="col-md-4">
    <div className="my-work">
        <a href="https://hayesejasmine.github.io/password-generate/index.html">
            <img src={PasswordGenerator} alt="password generator"/>
            <p>Password Generator Challenge-Javascript</p>
        </a>
    </div>
 </div>
 <div className="col-md-4">
    <div className="my-work">
        <a href="https://hayesejasmine.github.io/Coding-Quiz/index.html">
            <img src={webAPICodingQuiz}  alt="coding quiz"/>
            <p>Coding Quiz Challenge-HTML/CSS/Javascript</p>
        </a>
    </div>
 </div>
 <div className="col-md-4">
    <div className="my-work">
        <a href="https://hayesejasmine.github.io/Workday-Calender/Develop/index.html">
            <img src={ThirdPartyAPIScheduler}  alt="Third Party API Scheduler"/>
            <p>Workday Scheduler-Third Party APIs</p>
        </a>
    </div>
 </div>
 <div className="col-md-4">
    <div className="my-work">
        <a href="https://beefbones.github.io/travel-planner/">
            <img src={ServerSideAPIProject}  alt="Server Side API"/>
            <p>Project 1-Server Side APIs</p>
        </a>
    </div>
 </div>
 <div className="col-md-4">
    <div className="my-work">
        <a href="https://music-review-4-u.herokuapp.com/login">
            <img src={MVCproject} alt="MVC"/>
            <p>Project 2-MVC</p>
        </a>
    </div>
 </div>
 <div className="col-md-4">
    <div className="my-work">
        <a href="https://book-search-jeh.herokuapp.com/">
            <img src={booksearch} alt="MERNbooksearch"/>
            <p>Book Search-MERN application</p>
        </a>
    </div>
 </div>
 <div className="col-md-4">
    <div className="my-work">
        <a href="https://mighty-cliffs-23244.herokuapp.com/">
            <img src={MERNproject} alt="MERN"/>
            <p>Project 3-MERN application</p>
        </a>
    </div>
 </div>

                    </div>
                </div>
            
        </div>
    );
}