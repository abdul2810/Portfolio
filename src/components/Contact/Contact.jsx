import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "729bffcc-4b1e-4e0e-a7b1-ccc5e8a29589");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently looking for opportunities as a Full Stack Developer. If you're hiring or have a project in mind, feel free to reach out!</p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt='' /><p>abdulrzk2810@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                            <img src={call_icon} alt='' /><p>+91 8072196113</p>
                        </div>

                        <div className="contact-detail">
                            <img src={location_icon} alt='' /><p>35, Ambedkar Salai, Valasaravakkam, Chennai - 600087</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>

                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter your name...' name='name' />

                    <label htmlFor=''>Your Email</label>
                    <input type='email' placeholder='Enter your E-mail...' name='email' />

                    <label htmlFor=''>Write your message here</label>
                    <textarea name='message' rows="7" placeholder='Enter your message...'></textarea>

                    <button type='submit' className="contact-submit">Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact