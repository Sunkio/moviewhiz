import Link from "next/link";

function Footer() {
  return (
    <footer className="footer footer-legal-sm">

      <p><Link className="footer-link " href="/">Home</Link></p>
      <p><Link className="footer-link" href="/contact">Contact</Link></p>
      <p><Link className="footer-link" href="/impressum">Impressum - Legal</Link></p>
      <p className="footer-text">
        Made with ❤️ by{' '}
        <a
          className="footer-link"
          href="https://find.tanjaschmidt.com" target="_blank">
          Tanja</a>
      </p>
      <p className="" id="last">Buy me a <a className="footer-link" href="https://www.buymeacoffee.com/tanjaS" target="_blank">Coffee</a></p>
    </footer>
    );
}

export default Footer;

