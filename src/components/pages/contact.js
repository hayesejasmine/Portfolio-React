import React, { useState } from "react";


const styles = {

};

function ContactForm() {
  return (
    <div id="contact">
        <h2 style={styles.h2}>Contact Me</h2>
        <div className="contact-form">
            <form action="mailto:hayesejasmine@gmail.com" method= "post" encType="txt/plain" style={styles.form} className="form">
            <div style={styles.input} className="formgroup">
          <label for="email"></label>
           <textarea className="email" id="email" placeholder="Email"></textarea>
        </div>
        <div style={styles.input} className="formgroup">
          <label for="name"></label>
           <textarea className="name" id="name" placeholder="Name"></textarea>
        </div>
        <div style={styles.input} className="formgroup">
          <label for="message"></label>
           <textarea className="message" id="message" placeholder="Send me a message"></textarea>
        </div>
        <div style={styles.input} className="formgroup">
          <button className="form-button" type="button">Submit</button>
         
        </div>
        </form>
        </div>
        </div>
  );

  }

export default ContactForm;






