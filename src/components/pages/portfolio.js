import React from "react";
import PasswordGenerator from "../../assets/img/javascript-password generator copy.png";
import CodeRefactor from "../../assets/img/Image 10-23-22 at 4.47 PM copy.jpg";
import ServerSideAPIProject from "../../assets/img/Server side API copy.png";
import ThirdPartyAPIScheduler from "../../assets/img/Third-Party APIs  Work Day Scheduler copy.png";
import webAPICodingQuiz from "../../assets/img/web-api-coding quiz copy.png";

const styles = {

};

export default function Portfolio() {
    return (
<div id="portfolio">
    <h2 style={styles.h2}>Portfolio</h2>
    <section className="my-work">
<div className="my-work">
<div className= "projects-grid-wrapper">
<div className="projects-grid">

    <a href="https://hayesejasmine.github.io/Accessibility-Refactor-Challenge/" target="_blank" className="project refactoring" src={CodeRefactor}>
        <div className="project-label">
            <h3>Code Refactoring</h3>
            <p>HTML/CSS</p>
        </div>
    </a>
    <a href="https://hayesejasmine.github.io/password-generate/index.html" target="_blank" className="project project-generator" src={PasswordGenerator}>
        <div className="project-label">
            <h3>"Password Generator Quiz"</h3>
            <p>JavaScript</p>
        </div>
    </a>
    <a href="https://hayesejasmine.github.io/Coding-Quiz/index.html" target="_blank" className="project coding-quiz" src={webAPICodingQuiz}>
        <div className="project-label">
            <h3>Coding Quiz</h3>
            <p>HTML/CSS/JavaScript</p>
        </div>
    </a>
    <a href="https://hayesejasmine.github.io/Workday-Calender/Develop/index.html" target="_blank"  className="project planner" src={ThirdPartyAPIScheduler}>
        <div className="project-label">
            <h3>Workday Schdeule Planner"</h3>
            <p>Third-Party APIs</p>
        </div>
    </a>
    <a href="https://beefbones.github.io/travel-planner/" target="_blank" className="project 1 travel-planner" src={ServerSideAPIProject}>
        <div className="project-label">
            <h3>"Travel Planner Site"</h3>
            <p>Server Side APIs</p>
            <p>Project 1</p>
        </div>
    </a>
    <a href="https://music-review-4-u.herokuapp.com/login" target="_blank" className="project 2 mvc">
        <div className="project-label">
            <h3>"Review4U"</h3>
            <p>MVC</p>
            <p>Project 2</p>
        </div>
    </a>
</div>
</div>
</div>
</section>
</div>
    );
}