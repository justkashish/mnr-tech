import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowRight, Code, Repeat, Database, Lightbulb, GraduationCap } from "lucide-react"
import "../../styles/Services.css"

export default function ServicesPage() {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Product Development",
      description:
        "Custom software development and tailored solutions designed to meet your specific business requirements and challenges.",
      link: "/services/product-development",
      features: [
        "Custom Software Development",
        "Mobile App Development",
        "Web Application Development",
        "API Development & Integration",
        "UI/UX Design",
      ],
    },
    {
      icon: <Repeat size={32} />,
      title: "Digital Transformation",
      description:
        "Comprehensive digital transformation strategies that modernize your business processes and technology infrastructure.",
      link: "/services/digital-transformation",
      features: [
        "Business Process Automation",
        "Legacy System Modernization",
        "Digital Workplace Solutions",
        "Customer Experience Transformation",
        "Digital Strategy Consulting",
      ],
    },
    {
      icon: <Database size={32} />,
      title: "Datacenter Migration",
      description:
        "Seamless datacenter migration services that minimize downtime and ensure business continuity throughout the transition.",
      link: "/services/datacenter-migration",
      features: [
        "Migration Planning & Strategy",
        "Data Transfer & Validation",
        "Infrastructure Assessment",
        "Post-Migration Support",
        "Hybrid Cloud Integration",
      ],
    },
    {
      icon: <Lightbulb size={32} />,
      title: "R&D Solutions",
      description:
        "Continuous research and development initiatives aligned with dynamic market changes to keep your business at the cutting edge.",
      link: "/services/research-development",
      features: [
        "Technology Research",
        "Proof of Concept Development",
        "Innovation Workshops",
        "Emerging Technology Adoption",
        "Competitive Analysis",
      ],
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Training Programs",
      description:
        "Comprehensive training programs on multiple emerging technologies for corporate teams and individuals.",
      link: "/services/training",
      features: [
        "Technical Skills Training",
        "Leadership Development",
        "Customized Learning Paths",
        "Certification Programs",
        "Hands-on Workshops",
      ],
    },
  ]

  return (
    <main>
      <Navbar />
      <div className="services-page">
        <div className="services-hero">
          <h1>Our Services</h1>
          <p>Expert services to help you implement and optimize technology solutions for your business</p>
        </div>

        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-detail-card" key={index}>
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h2 className="service-title">{service.title}</h2>
              </div>
              <p className="service-description">{service.description}</p>

              <div className="service-features">
                <h3>What We Offer</h3>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <a href={service.link} className="service-link">
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

