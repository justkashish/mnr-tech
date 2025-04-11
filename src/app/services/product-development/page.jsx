import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowRight, Code, Smartphone, Globe, Layout, Users } from "lucide-react"
import "../../../styles/SolutionDetail.css"

export default function ProductDevelopmentPage() {
  const features = [
    {
      icon: <Code size={32} />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to address your specific business challenges and requirements.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across devices.",
    },
    {
      icon: <Globe size={32} />,
      title: "Web Application Development",
      description: "Scalable, responsive web applications built with modern technologies and best practices.",
    },
    {
      icon: <Layout size={32} />,
      title: "UI/UX Design",
      description: "User-centered design that enhances usability, accessibility, and user satisfaction.",
    },
    {
      icon: <Users size={32} />,
      title: "Product Strategy & Consulting",
      description: "Expert guidance on product vision, roadmap development, and market positioning.",
    },
  ]

  const benefits = [
    "Solutions tailored to your specific business needs",
    "Accelerated time-to-market for new products",
    "Improved user engagement and satisfaction",
    "Scalable architecture that grows with your business",
    "Reduced technical debt and maintenance costs",
    "Competitive advantage through innovation",
  ]

  const caseStudies = [
    {
      title: "Logistics Management Platform",
      description:
        "Developed a custom logistics platform that streamlined operations, reducing delivery times by 30% and operational costs by 25%.",
    },
    {
      title: "Healthcare Patient Portal",
      description:
        "Created a patient engagement application that improved appointment adherence by 40% and patient satisfaction scores by 35%.",
    },
  ]

  return (
    <main>
      <Navbar />
      <div className="solution-detail-page">
        <div className="solution-hero">
          <h1>Product Development</h1>
          <p>Custom software development and tailored solutions designed to meet your specific business requirements</p>
        </div>

        <div className="solution-overview">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Building Products That Drive Business Success</h2>
              <p>
                MNR Technologies offers comprehensive product development services that transform your ideas into
                market-ready solutions. Our experienced team of developers, designers, and product strategists work
                collaboratively to create innovative products that solve real business problems and deliver measurable
                value.
              </p>
              <p>
                From concept to launch and beyond, we partner with you at every stage of the product development
                lifecycle. Our agile approach ensures transparency, flexibility, and continuous improvement throughout
                the development process, resulting in high-quality products that meet your business objectives.
              </p>
            </div>
            <div className="overview-image">
              <img src="/product.jpg" alt="Product Development Services" />
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
          <h2>Ready to Build Your Next Great Product?</h2>
          <p>Contact us today to discuss how our product development services can help bring your vision to life.</p>
          <a href="/contact" className="cta-button">
            Start Your Project
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}
