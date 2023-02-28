import Head from 'next/head';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Link from "next/link";
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Sending email...")
      let data = {
            name,
            email,
            message
      }

      fetch('/api/handle-contact', {
          method: 'POST',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
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
        }
      });
  }

  return (
    <div>
      <Head>
        <title>MovieWhiz</title>
      </Head>
      <div className="container">
        <Heading>{"Get in Touch"}</Heading>
        <div className="contact-container">
          < form className="form-main" >
            < formGroup className="inputGroup" >
              < label htmlFor='name'>Name</label>
              < input type='text' name='name'onChange={(e)=>{setName(e.target.value)}} className="inputField" required/>
            </formGroup>
            < formGroup className="inputGroup" >
              < label htmlFor='email'>Email</label>
              < input type='email' name='email' onChange={(e)=>{setEmail(e.target.value)}} className="inputField" required/>
            </formGroup>
            < formGroup className="inputGroup" >
              < label htmlFor='message'>Message</label>
              < textarea id="message" type='textfield' name='message' onChange={(e)=>{setMessage(e.target.value)}} className="inputField multiline" required />
            </formGroup>
             <input type='submit' onClick={(e)=>{handleSubmit(e)}} className="submit grow"/>
          </form >
          <div>
            { submitted ? <p className="success-message">Your message has been sent! We'll get back to you as soon as possible.</p> : null}
        </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;