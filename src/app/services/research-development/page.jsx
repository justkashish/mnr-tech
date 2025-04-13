import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowRight, Lightbulb, Search, Compass, Target, TrendingUp } from "lucide-react"
import "../../../styles/SolutionDetail.css"

export default function ResearchDevelopmentPage() {
  const features = [
    {
      icon: <Lightbulb size={32} />,
      title: "Technology Research",
      description: "In-depth exploration of emerging technologies and their potential applications for your business.",
    },
    {
      icon: <Search size={32} />,
      title: "Proof of Concept Development",
      description:
        "Rapid prototyping and validation of innovative ideas to demonstrate feasibility and potential value.",
    },
    {
      icon: <Compass size={32} />,
      title: "Innovation Workshops",
      description:
        "Collaborative sessions designed to generate new ideas and approaches to solving business challenges.",
    },
    {
      icon: <Target size={32} />,
      title: "Emerging Technology Adoption",
      description: "Strategic guidance on evaluating and implementing cutting-edge technologies.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Competitive Analysis",
      description:
        "Comprehensive assessment of market trends and competitor activities to inform your innovation strategy.",
    },
  ]

  const benefits = [
    "Accelerated innovation and time-to-market",
    "Reduced risk in technology investments",
    "Competitive advantage through early adoption",
    "New revenue streams and business models",
    "Enhanced product and service offerings",
    "Future-proofing your business against disruption",
  ]

  const caseStudies = [
    {
      title: "Pharmaceutical Company",
      description:
        "Developed an AI-powered drug discovery platform that reduced research time by 40% and identified three promising new compounds in the first six months.",
    },
    {
      title: "Manufacturing Firm",
      description:
        "Created a proof of concept for IoT-enabled predictive maintenance that led to a full implementation, reducing equipment downtime by 35%.",
    },
  ]

  return (
    <main>
      <Navbar />
      <div className="solution-detail-page">
        <div className="solution-hero">
          <h1>R&D Solutions</h1>
          <p>Continuous research and development initiatives that keep your business at the cutting edge</p>
        </div>

        <div className="solution-overview">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Driving Innovation Through Research & Development</h2>
              <p>
                MNR Technologies offers comprehensive R&D solutions that help organizations explore new technologies,
                validate innovative concepts, and develop groundbreaking products and services. Our dedicated team of
                researchers and technologists work at the intersection of business needs and technological
                possibilities.
              </p>
              <p>
                We believe that sustained innovation is critical to long-term business success. Our R&D services are
                designed to help you stay ahead of market trends, identify new opportunities, and create solutions that
                address evolving customer needs and business challenges.
              </p>
            </div>
            <div className="overview-image">
              <img src="/images/R&D.jpg" alt="Research and Development Services" />
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
          <h2>Ready to Innovate?</h2>
          <p>
            Contact us today to learn how our R&D solutions can help your organization discover new opportunities and
            create innovative solutions.
          </p>
          <a href="/contact" className="cta-button">
            Start Innovating
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}
