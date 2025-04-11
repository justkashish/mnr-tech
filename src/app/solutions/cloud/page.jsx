import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowRight, Cloud, Server, Shield, Database, BarChart } from "lucide-react"
import "../../../styles/SolutionDetail.css"

export default function CloudSolutionPage() {
  const features = [
    {
      icon: <Cloud size={32} />,
      title: "Cloud Migration Services",
      description:
        "Seamless migration of your applications, data, and infrastructure to the cloud with minimal disruption.",
    },
    {
      icon: <Server size={32} />,
      title: "Multi-Cloud Management",
      description:
        "Unified management of resources across multiple cloud providers for optimal performance and cost efficiency.",
    },
    {
      icon: <Shield size={32} />,
      title: "Cloud Security Solutions",
      description:
        "Comprehensive security measures that protect your cloud environment from threats and ensure compliance.",
    },
    {
      icon: <Database size={32} />,
      title: "Cloud Infrastructure Design",
      description:
        "Custom-designed cloud architectures that align with your business goals and technical requirements.",
    },
    {
      icon: <BarChart size={32} />,
      title: "Cloud Cost Optimization",
      description:
        "Strategic resource allocation and management that reduces cloud spending without compromising performance.",
    },
  ]

  const benefits = [
    "Increased scalability and flexibility",
    "Reduced IT infrastructure costs",
    "Improved business continuity and disaster recovery",
    "Enhanced collaboration and accessibility",
    "Faster deployment of applications and services",
    "Access to cutting-edge technologies and services",
  ]

  const caseStudies = [
    {
      title: "Global Retail Chain",
      description:
        "Migrated on-premises infrastructure to a hybrid cloud solution, reducing IT costs by 40% while improving system availability to 99.99%.",
    },
    {
      title: "Financial Services Firm",
      description:
        "Implemented a multi-cloud strategy that improved application performance by 60% and enabled rapid scaling during peak trading periods.",
    },
  ]

  return (
    <main>
      <Navbar />
      <div className="solution-detail-page">
        <div className="solution-hero">
          <h1>Cloud Solutions</h1>
          <p>
            Scalable cloud infrastructure and services that optimize performance, reduce costs, and enhance flexibility
          </p>
        </div>

        <div className="solution-overview">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Empowering Business Through Cloud Technology</h2>
              <p>
                MNR Technologies delivers comprehensive cloud solutions that help organizations leverage the full
                potential of cloud computing. Whether you're looking to migrate existing systems to the cloud, optimize
                your current cloud environment, or implement a multi-cloud strategy, our team of cloud experts will
                guide you through every step of the journey.
              </p>
              <p>
                Our cloud solutions are designed to provide the scalability, flexibility, and cost-efficiency your
                business needs to stay competitive in today's rapidly evolving digital landscape. We work with leading
                cloud providers to deliver solutions that meet your specific requirements and business objectives.
              </p>
            </div>
            <div className="overview-image">
              <img src="/cloud.jpg" alt="Cloud Technology Solutions" />
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
          <h2>Ready to Transform Your Business with Cloud Technology?</h2>
          <p>
            Contact us today to learn how our cloud solutions can help your organization improve efficiency, reduce
            costs, and gain competitive advantage.
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
