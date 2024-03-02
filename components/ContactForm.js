import React, { useState } from 'react';
import GenerateButton from './GenerateButton';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameFocus, setNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [messageFocus, setMessageFocus] = useState(false);
    const [messageValid , setMessageValid] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const validateInput = (input, type) => {
        const emailPat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (type === "name") {
            return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(String(input).toLowerCase());
        } else if (type === "message") {
            return (input.length > 0 && input.length < 3000);
        } else if (type === "email") {
            return emailPat.test(String(input).toLowerCase());
        }
    }

    const handleNameFocus = (e) => {
        setNameFocus(true);
    }

    const handleEmailFocus = (e) => {
        setEmailFocus(true);
    }

    const handleMessageFocus = (e) => {
        setMessageFocus(true);
        if (!message) {
            setMessageValid(false);
        }
    }

    const handleError = (e) => {
        setError(false);
        setSubmitted(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = {
            name,
            email,
            message
        }

        if (!validateInput(name, "name") || !validateInput(email, "email") || !validateInput(message, "message")  || name === '' || email === '' || message === '') {
            setError(true);
            setSubmitted(false);
            return;
        }
        setError(false);
        setEmailFocus(false);
        setNameFocus(false);
        setMessageFocus(false);
        setSubmitted(true);

        console.log("Sending email...")
        fetch('/api/handle-contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Allow': 'POST, GET, HEAD',
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                console.log('Response received');
                if (res.status === 200) {
                    console.log('Response succeeded!');
                    setSubmitted(true);
                    setName('');
                    setEmail('');
                    setMessage('');
                    setNameFocus(false);
                    setEmailFocus(false);
                    setMessageFocus(false);
                }
            });

        console.log("Email sent!")
        document.getElementById("form-main").reset();
    }




    return (
        <form className="form-main" id="form-main">
            <div className="inputGroup">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    onBlur={handleNameFocus}
                    placeholder="Name"
                    pattern={validateInput(name, 'name')}
                    onFocus={handleError}
                    focused={nameFocus.toString()}
                    className="inputField"
                    id="name"
                    required
                />
                <span className="inputError" id="nameError">
          Please enter your name.
        </span>
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleEmailFocus}
                    placeholder="jane@example-mail.com"
                    pattern={validateInput(email, 'email')}
                    onFocus={handleError}
                    focused={emailFocus.toString()}
                    className="inputField"
                    required
                />
                <span className="inputError">
          Please enter a valid email address.
        </span>
            </div>
            <div className="inputGroup">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    type="textfield"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    onBlur={handleMessageFocus}
                    placeholder="Your Message"
                    pattern={validateInput(message, 'message')}
                    onFocus={handleError}
                    focused={messageFocus.toString()}
                    className={
                        messageValid
                            ? 'inputField multiline'
                            : 'msg-invalid inputField multiline'
                    }
                    required
                />
                <span className="inputError">Please enter a message.</span>
            </div>
            <div className="">
                <GenerateButton
                    isGenerating={submitted}
                    onClick={(e) => handleSubmit(e)}
                    buttonText="Submit"
                    disableLoading={true}

                />
            </div>
            <div>
                {submitted ? (
                    <p className="success-message">
                        <span>Success!</span> Your message has been sent! We'll get back to
                        you as soon as possible.
                    </p>
                ) : null}
            </div>
            <div>
                {error ? (
                    <p className="error-message">
                        <span>Error:</span> Please fill out the complete form with valid
                        input before submitting.
                    </p>
                ) : null}
            </div>
        </form>
    );
};

export default ContactForm;
