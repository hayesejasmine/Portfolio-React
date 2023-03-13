import React from "react";

const styles = {

};

function Footer() {
    return (
<footer className="text-center">
<div className="footer">
    <section>
    
            <a href="mailto:hayesejasmine@gmail.com" target="blank"><img stye={styles.icons} src={email} alt="email icon"/> </a>
                       
            <a href="https://github.com/hayesejasmine" target="blank"><img stye={styles.icons} src={Github} alt="Github icon"/> </a>
                        
            <a href="https://www.linkedin.com/in/jasmine-hayes-mph-8a39ab178/" target="blank"><img stye={styles.icons} src={LinkedIn} alt="Linkedin icon"/> </a>
                        
            <p>Phone: (704) 606-9254</p>
                       
    </section>

</div>
</footer>
    );
}

export default Footer;