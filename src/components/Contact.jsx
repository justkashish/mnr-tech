"use client"
import { useState, useEffect, useRef } from "react"
import { Send, MapPin, Phone, Mail } from "lucide-react"
import "../styles/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "Select a service",
  })

  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const errors = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid"
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
    }

    if (formData.service === "Select a service") {
      errors.service = "Please select a service"
    }

    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const errors = validateForm()
    setFormErrors(errors)

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true)

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitSuccess(true)

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          service: "Select a service",
        })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      }, 1500)
    }
  }

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-header">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Ready to transform your business with innovative technology solutions? Contact us today.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Reach out to us for a consultation or to learn more about our services.</p>

          <div className="info-items">
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h4>Our Location</h4>
                <p>
                  123 Tech Park, Innovation Drive
                  <br />
                  Silicon Valley, CA 94025
                </p>
              </div>
            </div>

            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <h4>Phone Number</h4>
                <p> +91 73299 99968</p>
              </div>
            </div>

            <div className="info-item">
              <Mail className="info-icon" />
              <div>
                <h4>Email Address</h4>
                <p>info@mnrtechnologies.com</p>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <img src="/location.jpg" alt="MNR Technologies Location" className="map-image" />
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Us a Message</h3>

            {submitSuccess && (
              <div className="success-message">Thank you for your message! We'll get back to you shortly.</div>
            )}

            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={formErrors.name ? "error" : ""}
              />
              {formErrors.name && <span className="error-message">{formErrors.name}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? "error" : ""}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service of Interest*</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={formErrors.service ? "error" : ""}
                >
                  <option disabled>Select a service</option>
                  <option>Healthcare Solutions</option>
                  <option>Banking Solutions</option>
                  <option>Product Development</option>
                  <option>AI Solutions & Consulting</option>
                  <option>Digital Transformation</option>
                  <option>Cloud Solutions</option>
                  <option>Cybersecurity Solutions</option>
                  <option>R&D Solutions</option>
                  <option>Training Programs</option>
                  <option>Other</option>
                </select>
                {formErrors.service && <span className="error-message">{formErrors.service}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message*</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={formErrors.message ? "error" : ""}
              ></textarea>
              {formErrors.message && <span className="error-message">{formErrors.message}</span>}
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} className="send-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

