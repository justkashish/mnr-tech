import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowRight, Activity, Stethoscope, FileText, Clock, Users } from "lucide-react"
import "../../../styles/SolutionDetail.css"

export default function HealthcareSolutionPage() {
  const features = [
    {
      icon: <Stethoscope size={32} />,
      title: "Electronic Health Records",
      description:
        "Secure, accessible, and comprehensive patient records that streamline healthcare delivery and improve patient outcomes.",
    },
    {
      icon: <Activity size={32} />,
      title: "Patient Monitoring Systems",
      description:
        "Real-time monitoring solutions that track patient vitals and alert healthcare providers to critical changes.",
    },
    {
      icon: <FileText size={32} />,
      title: "Medical Billing Software",
      description:
        "Automated billing systems that reduce errors, accelerate reimbursement, and improve financial performance.",
    },
    {
      icon: <Clock size={32} />,
      title: "Appointment Scheduling",
      description: "Intelligent scheduling tools that optimize provider time and improve patient access to care.",
    },
    {
      icon: <Users size={32} />,
      title: "Telemedicine Platforms",
      description: "Secure video consultation platforms that extend healthcare access beyond physical boundaries.",
    },
  ]

  const benefits = [
    "Improved patient care and outcomes",
    "Enhanced operational efficiency",
    "Reduced administrative burden",
    "Better data security and compliance",
    "Increased revenue through optimized billing",
    "Improved patient engagement and satisfaction",
  ]

  const caseStudies = [
    {
      title: "Regional Hospital Network",
      description:
        "Implemented an integrated EHR system across 12 facilities, resulting in 35% reduction in administrative costs and 28% improvement in patient satisfaction scores.",
    },
    {
      title: "Multi-Specialty Clinic",
      description:
        "Deployed our telemedicine platform, enabling the clinic to serve 40% more patients while reducing no-show rates by 60%.",
    },
  ]

  return (
    <main>
      <Navbar />
      <div className="solution-detail-page">
        <div className="solution-hero">
          <h1>Healthcare Solutions</h1>
          <p>Advanced technology solutions designed to transform healthcare delivery and improve patient outcomes</p>
        </div>

        <div className="solution-overview">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Transforming Healthcare Through Technology</h2>
              <p>
                MNR Technologies offers comprehensive healthcare solutions that address the complex challenges facing
                modern healthcare providers. Our systems are designed to improve clinical workflows, enhance patient
                care, and optimize operational efficiency.
              </p>
              <p>
                From electronic health records to telemedicine platforms, our healthcare solutions leverage cutting-edge
                technology to help healthcare organizations deliver better care while managing costs and ensuring
                regulatory compliance.
              </p>
            </div>
            <div className="overview-image">
              <img src="/images/health.jpg" alt="Healthcare Technology Solutions" />
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
          <h2>Ready to Transform Your Healthcare Operations?</h2>
          <p>
            Contact us today to learn how our healthcare solutions can help your organization improve patient care and
            operational efficiency.
          </p>
          <a href="/contact" className="cta-button">
            Schedule a Consultation
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}

