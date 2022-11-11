import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        console.log(email, subject, message);
        // alert('Submitted');
        form.reset();
    }
    return (
        <div>
            <div className="hero my-28" style={{ backgroundImage: `url(${appointment})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md my-14">
                        <h1 className=" text-lg font-bold text-primary">Contact Us</h1>
                        <p className="mb-5 text-3xl">Stay connected with us</p>
                        <form onSubmit={handleSubmit} >
                            <input type="email" name='email' placeholder="Email Address" className="input text-black w-full max-w-xs" />
                            <input type="text" name='subject' placeholder="Subject" className="input text-black w-full max-w-xs my-4" />
                            <input type="text" name='message' placeholder="Your Message" className="input text-black h-24 w-full max-w-xs mb-8" />
                            <br />
                            <PrimaryButton>Submit</PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;