import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowRight, Building, CreditCard, Lock, BarChart, Smartphone } from "lucide-react"
import "../../../styles/SolutionDetail.css"

export default function BankingSolutionPage() {
  const features = [
    {
      icon: <Smartphone size={32} />,
      title: "Digital Banking Platforms",
      description: "Secure, user-friendly mobile and web banking solutions that provide seamless customer experiences.",
    },
    {
      icon: <CreditCard size={32} />,
      title: "Payment Processing Systems",
      description: "Fast, reliable payment processing solutions that support multiple payment methods and currencies.",
    },
    {
      icon: <Lock size={32} />,
      title: "Fraud Detection & Prevention",
      description: "Advanced AI-powered systems that identify and prevent fraudulent transactions in real-time.",
    },
    {
      icon: <Building size={32} />,
      title: "Core Banking Systems",
      description: "Robust, scalable core banking platforms that streamline operations and improve efficiency.",
    },
    {
      icon: <BarChart size={32} />,
      title: "Financial Analytics",
      description: "Comprehensive analytics tools that provide actionable insights for better decision-making.",
    },
  ]

  const benefits = [
    "Enhanced customer experience and satisfaction",
    "Improved operational efficiency and reduced costs",
    "Strengthened security and fraud prevention",
    "Better regulatory compliance",
    "Increased agility and faster time-to-market",
    "Data-driven decision making capabilities",
  ]

  const caseStudies = [
    {
      title: "National Retail Bank",
      description:
        "Implemented our digital banking platform, resulting in a 45% increase in mobile banking adoption and 30% reduction in branch transaction costs.",
    },
    {
      title: "Regional Credit Union",
      description:
        "Deployed our fraud detection system, reducing fraud losses by 60% while improving customer satisfaction through fewer false positives.",
    },
  ]

  return (
    <main>
      <Navbar />
      <div className="solution-detail-page">
        <div className="solution-hero">
          <h1>Banking Solutions</h1>
          <p>
            Secure and efficient banking systems that modernize financial operations and enhance customer experience
          </p>
        </div>

        <div className="solution-overview">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Modernizing Banking Through Innovation</h2>
              <p>
                MNR Technologies delivers cutting-edge banking solutions designed to help financial institutions
                navigate the rapidly evolving digital landscape. Our systems combine security, efficiency, and user
                experience to meet the demands of today's banking customers.
              </p>
              <p>
                From digital banking platforms to advanced fraud detection systems, our solutions enable banks and
                financial institutions to streamline operations, enhance security, and deliver exceptional customer
                experiences.
              </p>
            </div>
            <div className="overview-image">
              <img src="/bank.jpg" alt="Banking Technology Solutions" />
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
          <h2>Ready to Transform Your Banking Operations?</h2>
          <p>
            Contact us today to learn how our banking solutions can help your institution improve efficiency and
            customer satisfaction.
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

