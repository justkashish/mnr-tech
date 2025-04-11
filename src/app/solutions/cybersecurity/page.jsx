import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, FileCheck } from "lucide-react"
import "../../../styles/SolutionDetail.css"

export default function CybersecuritySolutionPage() {
  const features = [
    {
      icon: <Shield size={32} />,
      title: "Threat Detection & Response",
      description:
        "Advanced systems that identify and neutralize security threats before they can impact your business.",
    },
    {
      icon: <Eye size={32} />,
      title: "Security Assessment & Auditing",
      description: "Comprehensive evaluation of your security posture to identify vulnerabilities and compliance gaps.",
    },
    {
      icon: <Lock size={32} />,
      title: "Identity & Access Management",
      description: "Robust systems that ensure only authorized users can access sensitive resources and information.",
    },
    {
      icon: <AlertTriangle size={32} />,
      title: "Incident Response Planning",
      description: "Strategic preparation for security incidents to minimize damage and recovery time.",
    },
    {
      icon: <FileCheck size={32} />,
      title: "Compliance Management",
      description: "Solutions that help you meet industry regulations and standards for data protection and privacy.",
    },
  ]

  const benefits = [
    "Protection of sensitive data and intellectual property",
    "Reduced risk of security breaches and data loss",
    "Enhanced customer trust and confidence",
    "Compliance with industry regulations and standards",
    "Minimized downtime and business disruption",
    "Proactive security posture rather than reactive response",
  ]

  const caseStudies = [
    {
      title: "Healthcare Provider Network",
      description:
        "Implemented a comprehensive cybersecurity framework that reduced security incidents by 75% and ensured HIPAA compliance across all systems.",
    },
    {
      title: "E-commerce Platform",
      description:
        "Deployed advanced threat detection systems that prevented a major data breach, protecting customer information and maintaining brand reputation.",
    },
  ]

  return (
    <main>
      <Navbar />
      <div className="solution-detail-page">
        <div className="solution-hero">
          <h1>Cybersecurity Solutions</h1>
          <p>Robust security frameworks and protocols that protect your digital assets from evolving threats</p>
        </div>

        <div className="solution-overview">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Securing Your Digital Future</h2>
              <p>
                MNR Technologies provides comprehensive cybersecurity solutions designed to protect your organization's
                critical assets from increasingly sophisticated cyber threats. In today's digital landscape, security is
                not just an IT concern—it's a business imperative.
              </p>
              <p>
                Our cybersecurity experts employ a multi-layered approach to security, combining advanced technology,
                proven methodologies, and industry best practices to create robust defense systems tailored to your
                specific needs. We help you identify vulnerabilities, implement protective measures, and respond
                effectively to security incidents.
              </p>
            </div>
            <div className="overview-image">
              <img src="/security.jpg" alt="Cybersecurity Solutions" />
            </div>
          </div>
        </div>

        <div className="solution-features">
          <h2>Key Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="solution-benefits">
          <h2>Benefits</h2>
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="case-studies">
          <h2>Success Stories</h2>
          <div className="case-studies-grid">
            {caseStudies.map((caseStudy, index) => (
              <div className="case-study-card" key={index}>
                <h3>{caseStudy.title}</h3>
                <p>{caseStudy.description}</p>
                <a href="/case-studies" className="case-study-link">
                  Read full case study <ArrowRight size={16} className="arrow-icon" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="solution-cta">
          <h2>Ready to Strengthen Your Security Posture?</h2>
          <p>
            Contact us today to learn how our cybersecurity solutions can help protect your organization from evolving
            cyber threats.
          </p>
          <a href="/contact" className="cta-button">
            Schedule a Security Assessment
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}
