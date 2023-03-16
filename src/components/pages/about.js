import React from "react";
import portfolio2 from "../../assets/img/portfolio2.jpeg";
const styles = {

}

export default function About() {
    return (
<div id="about" style={styles.space}>
    <h2 style={styles.h2}></h2>
<div>
<img style={styles.portfolio2} src={portfolio2} alt="professional headshot" />
</div>
<p>
Welcome to my page! 
                     
<br/> I am a fullstack web developer student located in Charlotte, NC. I am currently enrolled in the Coding Boot Camp at UNC Charlotte. I love structure, order and most of all, quality. I am excited to continue refining my skills through assisting others in bringing their web ideas to life!     

<br/>
</p>
</div>
    );
}