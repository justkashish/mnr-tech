import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowRight, Brain, MessageSquare, Search, Cpu, BarChart } from "lucide-react"
import "../../../styles/SolutionDetail.css"

export default function AISolutionPage() {
  const features = [
    {
      icon: <Brain size={32} />,
      title: "Machine Learning Models",
      description:
        "Custom-built machine learning models that solve specific business problems and deliver actionable insights.",
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Natural Language Processing",
      description:
        "Advanced NLP solutions that understand, interpret, and generate human language for improved customer interactions.",
    },
    {
      icon: <Search size={32} />,
      title: "Computer Vision Systems",
      description:
        "Intelligent image and video analysis systems that automate visual inspection and recognition tasks.",
    },
    {
      icon: <Cpu size={32} />,
      title: "AI Integration Services",
      description: "Seamless integration of AI capabilities into your existing systems and workflows.",
    },
    {
      icon: <BarChart size={32} />,
      title: "Predictive Analytics",
      description:
        "Forward-looking analytics that forecast trends, identify opportunities, and mitigate potential risks.",
    },
  ]

  const benefits = [
    "Automation of repetitive tasks and processes",
    "Enhanced decision-making through data-driven insights",
    "Improved customer experiences through personalization",
    "Increased operational efficiency and cost reduction",
    "Competitive advantage through innovation",
    "Scalable solutions that grow with your business",
  ]

  const caseStudies = [
    {
      title: "E-commerce Retailer",
      description:
        "Implemented a recommendation engine that increased average order value by 28% and customer retention by 15% through personalized product suggestions.",
    },
    {
      title: "Manufacturing Company",
      description:
        "Deployed a computer vision system for quality control that reduced defect rates by 40% and inspection costs by 60%.",
    },
  ]

  return (
    <main>
      <Navbar />
      <div className="solution-detail-page">
        <div className="solution-hero">
          <h1>AI Solutions & Consulting</h1>
          <p>
            Cutting-edge artificial intelligence solutions that drive intelligent automation and business transformation
          </p>
        </div>

        <div className="solution-overview">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Transforming Business Through Artificial Intelligence</h2>
              <p>
                MNR Technologies delivers innovative AI solutions that help organizations harness the power of
                artificial intelligence to solve complex business challenges. Our team of AI experts works closely with
                you to understand your unique needs and develop tailored solutions that deliver measurable results.
              </p>
              <p>
                From machine learning models to natural language processing and computer vision systems, our AI
                solutions are designed to automate processes, enhance decision-making, and create new opportunities for
                growth and innovation.
              </p>
            </div>
            <div className="overview-image">
              <img src="/AIsolutions.jpg" alt="AI Technology Solutions" />
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
          <h2>Ready to Leverage AI for Your Business?</h2>
          <p>
            Contact us today to learn how our AI solutions can help your organization automate processes, gain insights,
            and drive innovation.
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
