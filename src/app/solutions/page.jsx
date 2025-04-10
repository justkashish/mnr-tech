import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowRight, Activity, Cloud, Shield, Brain, Building } from "lucide-react"
import "../../styles/Solutions.css"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: <Activity size={32} />,
      title: "Healthcare Solutions",
      description:
        "Advanced healthcare technology solutions that streamline operations, improve patient care, and enhance medical data management.",
      link: "/solutions/healthcare",
      features: [
        "Electronic Health Records (EHR) Systems",
        "Telemedicine Platforms",
        "Healthcare Analytics",
        "Patient Management Systems",
        "Medical Billing Software",
      ],
    },
    {
      icon: <Building size={32} />,
      title: "Banking Solutions",
      description:
        "Secure and efficient banking systems that modernize financial operations and enhance customer experience through digital innovation.",
      link: "/solutions/banking",
      features: [
        "Digital Banking Platforms",
        "Payment Processing Systems",
        "Fraud Detection & Prevention",
        "Customer Relationship Management",
        "Regulatory Compliance Solutions",
      ],
    },
    {
      icon: <Brain size={32} />,
      title: "AI Solutions & Consulting",
      description:
        "Cutting-edge AI implementation including model training, LLM, SLM, and interface building to drive intelligent automation.",
      link: "/solutions/ai",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Systems",
        "Predictive Analytics",
        "AI-Powered Chatbots",
      ],
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and services that optimize performance, reduce costs, and enhance operational flexibility.",
      link: "/solutions/cloud",
      features: [
        "Cloud Migration Services",
        "Multi-Cloud Management",
        "Cloud Security Solutions",
        "Serverless Architecture",
        "Cloud Cost Optimization",
      ],
    },
    {
      icon: <Shield size={32} />,
      title: "Cybersecurity Solutions",
      description:
        "Robust security frameworks and protocols that protect your digital assets and sensitive information from evolving threats.",
      link: "/solutions/cybersecurity",
      features: [
        "Threat Detection & Response",
        "Security Assessment & Auditing",
        "Identity & Access Management",
        "Data Protection & Encryption",
        "Security Awareness Training",
      ],
    },
  ]

  return (
    <main>
      <Navbar />
      <div className="solutions-page">
        <div className="solutions-hero">
          <h1>Our Solutions</h1>
          <p>Comprehensive technology solutions designed to transform your business and drive innovation</p>
        </div>

        <div className="solutions-container">
          {solutions.map((solution, index) => (
            <div className="solution-card" key={index}>
              <div className="solution-header">
                <div className="solution-icon">{solution.icon}</div>
                <h2 className="solution-title">{solution.title}</h2>
              </div>
              <p className="solution-description">{solution.description}</p>

              <div className="solution-features">
                <h3>Key Features</h3>
                <ul>
                  {solution.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <a href={solution.link} className="solution-link">
                Learn more <ArrowRight size={16} className="arrow-icon" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

