import "./contact.scss"     
import { useState } from "react";

export default function Contact() {
    const [message, setMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className='contact' id="contact">
            <div className="left">
                <img src="assets/connect.jpg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="Submit">Send</button>
                    {message && <span>Thank you for the message. please email me as well :)</span>}
                </form>
            </div>
        </div>
    )
}
