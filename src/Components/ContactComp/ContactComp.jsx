import React, { useRef, useState } from 'react';
import contact from '../../images/13.jpg';
import './Contact.css'
import emailjs from 'emailjs-com';
import SocialIcons from '../SocialIcons/SocialIcons';

function ContactComp() {
    const formRef = useRef();
    const [setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_phx4fap', 'template_5tz0zs6', formRef.current, '8kJv77-bla_A4zVDe')
            .then((result) => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";
                console.log(result.text);
                alert('message sent');
                setDone(true)
            }, (error) => {
                console.log(error.text);
                alert('Error sending message ')
            });
    }
    return (
        <div className='contact component__space' id='Contact'>
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me</h1>
                            <p className="hire__text white">I am available for freelance work. connect with via phone:</p>
                            <p className="hire__text white"><strong>+234 806 455 5076</strong> or email <strong>info@adediransulyman.com</strong>
                            </p>
                            <SocialIcons />
                        </div>
                        <div className="input__box">
                            <form ref={formRef} onSubmit={handleSubmit}>
                                <input type="text" required className="contact name" placeholder='Your Name' id='name' name='user_name' />
                                <input type="email" required className="contact email" placeholder='Your Email' id='email' name='user_email' />
                                <input type="text" className="contact subject" placeholder='Write a Subject' id='subject' name='user_subject' />
                                <textarea name="message" id="message" placeholder='Write Your Message'></textarea>
                                <button className="btn contact pointer">Submit</button>
                                {/* <button>Submit</button> */}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <div className="contact__img">
                        <img src={contact} width='100%' height='50%' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComp