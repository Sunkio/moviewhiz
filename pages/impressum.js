import Link from 'next/link';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Head from "next/head";

const Impressum = () => {
  return (
    <div>
        <Head>
          <title>MovieWhiz - Impressum</title>
        </Head>
      <div className="container">
        <Heading>{ "Impressum - Legal" }</Heading>
        <div className="sub-container">
          <div className="header-subtitle">
            <p>The following information (Impressum) is required under German law.</p>
            <ul>
              <li>Tanja Schmidt</li>
              <li>Barkhausenstr. 34, 27568 Bremerhaven, Germany</li>
            </ul>
            
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:moviewhiz@tanjaschmidt.com" className="footer-link">moviewhiz@tanjaschmidt.com</a> - or -</li>
              <li><Link className="footer-link" href="/contact_test">Contact Form</Link></li>
            </ul>
            
            <h3>Online Dispute Resolution website of the EU Commission</h3>
            <p>In order for consumers and traders to resolve a dispute out-of-court, the European Commission developed the Online Dispute Resolution Website: <a href="https://ec.europa.eu/consumers/odr" className="footer-link">https://ec.europa.eu/consumers/odr</a></p>
            <p>We are neither willing nor obligated to participate in dispute resolution proceedings before a consumer dispute resolution body.</p>

            <h3>Legal Disclaimer</h3>
            <p>The contents of these pages were prepared with utmost care. Nonetheless, we cannot assume liability for the timeless accuracy and completeness of the information.            </p>
            <p>Our website contains links to external websites. As the contents of these third-party websites are beyond our control, we cannot accept liability for them. Responsibility for the contents of the linked pages is always held by the provider or operator of the pages.</p>
            <p>Source <a href="https://language-boutique.com/impressum-template" class="footer-link">language-boutique.com/impressum-template</a></p>
            
            <h3>Data Protection</h3>
            <p>In general, when visiting the website of moviewhiz.xyz, no personal data are saved. However, these data can be given on a voluntary basis. No data will be passed on to third parties without your consent. We point out that in regard to unsecured data transmission in the internet (e.g. via email), security cannot be guaranteed. Such data could possibly be accessed by third parties.</p>
            <p>Essential to providing our movie recommendations is the use of OpenAi's language model GPT - to access this, your input to the recommendation generator is sent to OpenAi.</p>
            <p className="source">Source: <a href="https://language-boutique.com/impressum-template" class="footer-link">language-boutique.com/impressum-template</a></p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Impressum;