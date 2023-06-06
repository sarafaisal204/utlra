import React from "react";
import"./style.css"
const Contact =()=>{
    return(
        <div className="contactsection">
            <div className="container">
                <div className="contactInfo">
                    <h1><span>Drop</span> Me A Line</h1>
                    <div className="box">
                        <input className="text" type="text" placeholder="Your Name"/>
                        <input className="email" type="e-mail" placeholder="Your Email"/>
                    </div>
                    <input className="subject" type="text" placeholder="Your Subject"/>
                    <textarea placeholder="Your Message"></textarea>
                    <input className="submit" type="submit" placeholder="Send Message"/>
                </div>
            </div>    
        </div>
    )
}
export default Contact;