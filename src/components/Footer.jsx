import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"
import "../styles/Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <div className="footer-logo">
            <Link href="/">
            <img src="/images/Logo.jpg" alt="MNR Technologies Logo" className="footer-logo-image" />
            </Link>
          </div>
          <p className="footer-description">
            Transforming businesses through innovative technology solutions and strategic digital transformation.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" className="social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" className="social-link" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/company/mnr-technologies-global-pvt-ltd/" className="social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Solutions</h3>
          <ul className="footer-links">
            <li>
              <Link href="/solutions/healthcare">Healthcare Solutions</Link>
            </li>
            <li>
              <Link href="/solutions/banking">Banking Solutions</Link>
            </li>
            <li>
              <Link href="/solutions/ai">AI Solutions & Consulting</Link>
            </li>
            <li>
              <Link href="/solutions/cloud">Cloud Solutions</Link>
            </li>
            <li>
              <Link href="/solutions/cybersecurity">Cybersecurity Solutions</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            <li>
              <Link href="/services/product-development">Product Development</Link>
            </li>
            <li>
              <Link href="/services/digital-transformation">Digital Transformation</Link>
            </li>
            <li>
              <Link href="/services/datacenter-migration">Datacenter Migration</Link>
            </li>
            <li>
              <Link href="/services/research-development">R&D Solutions</Link>
            </li>
            <li>
              <Link href="/services/training">Training Programs</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/case-studies">Case Studies</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Newsletter</h3>
          <p className="newsletter-text">
            Subscribe to our newsletter to receive updates on the latest technology trends and insights.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">&copy; {currentYear} MNR Technologies. All rights reserved.</div>
        <div className="footer-legal">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/sitemap">Sitemap</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

