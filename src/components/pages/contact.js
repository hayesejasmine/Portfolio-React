import React, { useState } from "react";

import { validateEmail} from "../../utils/helpers";

const styles = {

};

function ContactForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "name") {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            alert("Email unsuccessful");
            return;
        }

        if (!name) {
            alert("This field is required");
            return;
        }

        if (!message) {
            alert("This field is required");
        }

        if (email || name || message) {
            setSuccess("Thank you for your interest. I look forward to speaking with you soon!");
            return;
        }

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div id="contact">
        <h2 style={styles.h2}>Contact Me</h2>
        <div  style={styles.email}>
            <a href="mailto:hayesejasmine@gmail.com"></a>
            </div>
            <form action="mailto:hayesejasmine@gmail.com" method= "post" encType="txt/plain" style={styles.form} className="form">
            <div style={styles.input} className="email">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div style={styles.input} className="name">
          <input
            value={name}
            name="Name"
            onChange={handleInputChange}
            type="text"
            placeholder="Full Name"
            required
          />
        </div>
        <div style={styles.input} className="message">
          <input
            style={styles.inputa}
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Message"
            required
          />
        </div>
        <div>
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
     </form>
     {setSuccess && (
        <div style={styles.form}>
        <p className="success-text">{setSuccess}</p>
        </div>
     )}
</div>
    );
}

export default ContactForm;