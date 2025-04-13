import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowRight, Database, Server, RefreshCw, CheckSquare, Clock } from "lucide-react"
import "../../../styles/SolutionDetail.css"

export default function DatacenterMigrationPage() {
  const features = [
    {
      icon: <Database size={32} />,
      title: "Migration Planning & Strategy",
      description:
        "Comprehensive assessment and planning to ensure a smooth, efficient migration with minimal disruption.",
    },
    {
      icon: <Server size={32} />,
      title: "Infrastructure Assessment",
      description:
        "Detailed evaluation of your current infrastructure to identify dependencies, risks, and optimization opportunities.",
    },
    {
      icon: <RefreshCw size={32} />,
      title: "Data Transfer & Validation",
      description:
        "Secure, reliable data migration with thorough validation to ensure data integrity and completeness.",
    },
    {
      icon: <CheckSquare size={32} />,
      title: "Post-Migration Support",
      description: "Ongoing assistance and troubleshooting to ensure stability after the migration is complete.",
    },
    {
      icon: <Clock size={32} />,
      title: "Hybrid Cloud Integration",
      description: "Seamless integration between on-premises systems and cloud environments for optimal performance.",
    },
  ]

  const benefits = [
    "Minimal business disruption during migration",
    "Reduced operational costs and improved efficiency",
    "Enhanced scalability and flexibility",
    "Improved reliability and disaster recovery capabilities",
    "Modernized infrastructure aligned with business needs",
    "Optimized performance and resource utilization",
  ]

  const caseStudies = [
    {
      title: "Global Manufacturing Company",
      description:
        "Successfully migrated 200+ servers and 50TB of data to a hybrid cloud environment with zero data loss and only 4 hours of planned downtime.",
    },
    {
      title: "Financial Services Provider",
      description:
        "Completed a complex datacenter consolidation project that reduced infrastructure costs by 40% while improving system performance by 25%.",
    },
  ]

  return (
    <main>
      <Navbar />
      <div className="solution-detail-page">
        <div className="solution-hero">
          <h1>Datacenter Migration</h1>
          <p>Seamless datacenter migration services that minimize downtime and ensure business continuity</p>
        </div>

        <div className="solution-overview">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Transforming Your Infrastructure with Minimal Disruption</h2>
              <p>
                MNR Technologies provides comprehensive datacenter migration services designed to help organizations
                relocate, consolidate, or modernize their IT infrastructure with minimal risk and business disruption.
                Our experienced team has successfully executed complex migrations for organizations across various
                industries.
              </p>
              <p>
                Whether you're moving to a new physical datacenter, migrating to the cloud, or implementing a hybrid
                solution, our methodical approach ensures a smooth transition while optimizing your infrastructure for
                improved performance, scalability, and cost-efficiency.
              </p>
            </div>
            <div className="overview-image">
              <img src="/images/data.jpg" alt="Datacenter Migration Services" />
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
          <h2>Ready to Modernize Your Infrastructure?</h2>
          <p>
            Contact us today to learn how our datacenter migration services can help your organization transform its IT
            infrastructure with minimal risk and disruption.
          </p>
          <a href="/contact" className="cta-button">
            Plan Your Migration
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}
