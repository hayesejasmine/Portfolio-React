import React from "react";
import "../assets/style/style.css";
import Githublogo from "../assets/img/GitHub-Mark.png";
import Linkedinlogo from "../assets/img/linkedin.png";
import Emaillogo from "../assets/img/email.png";

const styles = {

    
};

function Footer() {
    return (
<footer className="text-center">
<div className="footer">
    <section>
    <ul>
                        <li>
                            <a href="mailto:hayesejasmine@gmail.com" target="_blank"><img style={styles.icons} src={Emaillogo} alt="Email"/></a>
                        </li>
                        <li>
                            <a href="https://github.com/hayesejasmine" target="_blank"><img style={styles.icons} src={Githublogo} alt="Github"/></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jasmine-hayes-mph-8a39ab178/" target="_blank"><img style={styles.icons} src={Linkedinlogo} alt="Linkedin"/></a>
                        </li>
                    </ul>                  
    </section>
</div>
</footer>
    );
}

export default Footer;