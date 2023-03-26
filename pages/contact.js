import Head from 'next/head';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import ContactForm from '../components/ContactForm'; // Import the ContactForm component

const Contact = () => {
  return (
    <div>
      <Head>
        <title>MovieWhiz - Contact</title>
      </Head>
      <div className="container">
        <Heading>{"Get in Touch"}</Heading>
        <div className="contact-container">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;