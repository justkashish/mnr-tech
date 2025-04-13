"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import "../../styles/ContactPage.css";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="contact-page">
        <div className="contact-hero">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Reach out to discuss how we can help
            with your technology needs.
          </p>
        </div>

        <Contact />

        <div className="offices-section">
          <h2>Our Global Offices</h2>
          <div className="offices-grid">
            <div className="office-card">
              <h3>Headquarters</h3>
              <p>
                Pranava business park
                <br />
                Kothaguda, Hyderabad
                <br />
                Telangana 500084
              </p>
              <p>Phone: +91 73299 99968</p>
              <p>Email: info@mnrtechnologies.com</p>
            </div>

            <div className="office-card">
              <h3>Europe</h3>
              <p>
                45 Digital Square
                <br />
                London, UK EC2A 4BX
              </p>
              <p>Phone: +44 20 1234 5678</p>
              <p>Email: europe@mnrtechnologies.com</p>
            </div>

            <div className="office-card">
              <h3>Asia Pacific</h3>
              <p>
                88 Innovation Tower, Level 21
                <br />
                Singapore 018956
              </p>
              <p>Phone: +65 6123 4567</p>
              <p>Email: apac@mnrtechnologies.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
