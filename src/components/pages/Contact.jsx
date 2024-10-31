import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Header from '../Header';
import Footer from './Footer';

export const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true); // Set sending state to true

    // Check if all fields are filled
    const formData = new FormData(form.current);
    const values = Object.fromEntries(formData.entries());
    const areAllFieldsFilled = Object.values(values).every((value) => value.trim() !== '');

    if (!areAllFieldsFilled) {
      alert('Please fill in all fields.');
      setIsSending(false); // Reset sending state
      return;
    }

    emailjs
      .sendForm('service_fzu6x5p', 'template_kbwmbmj', form.current, {
        publicKey: 'S_QcCRHNtlj0LwN7_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
          setIsSending(false); // Reset sending state
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSending(false); // Reset sending state
        }
      );
  };

  const handleDialogClose = () => {
    setIsSubmitted(false);
    // Clear all input values
    const inputs = form.current.querySelectorAll('input, textarea');
    inputs.forEach((input) => (input.value = ''));
  };

  return (
    <div id="contact-main">
      <Header />
      <div className="contact-main">
        <form className="class-form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="to_name" disabled={isSending || isSubmitted} />
          <label>Email</label>
          <input type="email" name="from_name" disabled={isSending || isSubmitted} />
          <label>Message</label>
          <textarea className="message-input" name="message" disabled={isSending || isSubmitted} />
          <input className="submit-btn" type="submit" value="Send" disabled={isSending || isSubmitted} />
          {isSending && <p>Sending...</p>}
        </form>
        {isSubmitted && (
          <div className="dialog-overlay">
            <div className="dialog-box">
              <p>Message sent successfully!</p>
              <button className="dialog-btn" onClick={handleDialogClose}>
                OK
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
