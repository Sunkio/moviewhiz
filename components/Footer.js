import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Made with ❤️ by{' '}
        <a
          className="footer-link"
          href="https://find.tanjaschmidt.com" target="_blank">
          Tanja</a>
        </p>
      <p><Link className="footer-link" href="/contact">Contact</Link></p>
      <p><a className="footer-link" href="">Legal Disclaimer</a></p>
      <p className="" id="last">Buy me a <a className="footer-link" href="https://www.buymeacoffee.com/tanjaS" target="_blank">Coffee</a></p>
    </footer>
    );
}

export default Footer;

