import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowRight, Repeat, Zap, Users, BarChart, Layers } from "lucide-react"
import "../../../styles/SolutionDetail.css"

export default function DigitalTransformationPage() {
  const features = [
    {
      icon: <Repeat size={32} />,
      title: "Business Process Automation",
      description:
        "Streamline operations by automating repetitive tasks and workflows to improve efficiency and accuracy.",
    },
    {
      icon: <Layers size={32} />,
      title: "Legacy System Modernization",
      description: "Update and transform outdated systems into modern, scalable, and secure digital solutions.",
    },
    {
      icon: <Users size={32} />,
      title: "Digital Workplace Solutions",
      description:
        "Create collaborative, efficient digital environments that enhance employee productivity and satisfaction.",
    },
    {
      icon: <Zap size={32} />,
      title: "Customer Experience Transformation",
      description: "Reimagine customer journeys to deliver seamless, personalized digital experiences.",
    },
    {
      icon: <BarChart size={32} />,
      title: "Digital Strategy Consulting",
      description: "Expert guidance on developing and implementing effective digital transformation roadmaps.",
    },
  ]

  const benefits = [
    "Increased operational efficiency and productivity",
    "Enhanced customer engagement and satisfaction",
    "Improved agility and faster response to market changes",
    "Data-driven decision making capabilities",
    "Reduced operational costs through automation",
    "Competitive advantage through innovation",
  ]

  const caseStudies = [
    {
      title: "Retail Chain",
      description:
        "Implemented an omnichannel digital strategy that increased online sales by 120% and improved in-store customer experience through digital integration.",
    },
    {
      title: "Insurance Provider",
      description:
        "Modernized legacy systems and automated claims processing, reducing processing time by 70% and improving customer satisfaction scores by 45%.",
    },
  ]

  return (
    <main>
      <Navbar />
      <div className="solution-detail-page">
        <div className="solution-hero">
          <h1>Digital Transformation</h1>
          <p>Comprehensive strategies that modernize your business processes and technology infrastructure</p>
        </div>

        <div className="solution-overview">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Reimagining Business in the Digital Age</h2>
              <p>
                MNR Technologies helps organizations navigate the complex journey of digital transformation. We work
                with you to reimagine your business processes, customer experiences, and operational models through the
                strategic application of digital technologies.
              </p>
              <p>
                Our approach to digital transformation goes beyond technology implementation—we focus on creating
                sustainable change that aligns with your business objectives and organizational culture. By combining
                technical expertise with business acumen, we help you unlock new opportunities for growth, efficiency,
                and innovation.
              </p>
            </div>
            <div className="overview-image">
              <img src="/digital.jpg" alt="Digital Transformation Services" />
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
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Contact us today to learn how our digital transformation services can help your organization thrive in the
            digital age.
          </p>
          <a href="/contact" className="cta-button">
            Start Your Transformation
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}
