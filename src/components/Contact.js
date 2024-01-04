import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vvmo2po', 'template_ydxmazn', form.current, 'xh9jTb0gwoALgWkey')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div class="contact">
            <div className="max-width">
                <div className="title">Contact Me</div>
                <div className="contact-content">
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="input-sect">
                            <label for="user_name">Name</label>
                            <input required="true" autocomplete="off" type="text" name='user_name'></input>
                        </div>

                        <div className="input-sect">
                            <label for="user_email">E-mail</label>
                            <input required="true" autocomplete="off" type="email" name="user_email"></input>
                        </div>

                        <div className="input-sect">
                            <label for="message">Message</label>
                            <textarea required="true" cols="30" rows="1" name="message"></textarea>
                        </div>
                        <button type='submit' value='send' className="contact-form-button"><span>Send Message</span></button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Contact;