import Head from 'next/head';
import Footer from '../components/Footer';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <Head>
        <title>MovieWhiz</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1 className="neon-text">MovieWhiz</h1>
          </div>
          <div className="header-subtitle">
            <h2>Get In Touch</h2>
          </div>
        </div>
        <div className="contact-container">
          < form className="form-main" >
            < formGroup className="inputGroup" >
              < label htmlFor='name'>Name</label>
              < input type='text' name='name' className="inputField" />
            </formGroup>
            < formGroup className="inputGroup" >
              < label htmlFor='email'>Email</label>
              < input type='email' name='email' className="inputField" />
            </formGroup>
            < formGroup className="inputGroup" >
              < label htmlFor='message'>Message</label>
              < textarea type='textfield' name='message' className="inputField multiline" />
            </formGroup>
            < input type='submit' className="generate generate-button"/>
          </form >
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;