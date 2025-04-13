import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowRight, GraduationCap, Users, Award, BookOpen, Monitor } from "lucide-react"
import "../../../styles/SolutionDetail.css"

export default function TrainingProgramsPage() {
  const features = [
    {
      icon: <GraduationCap size={32} />,
      title: "Technical Skills Training",
      description:
        "Comprehensive training on the latest technologies, programming languages, and technical frameworks.",
    },
    {
      icon: <Users size={32} />,
      title: "Leadership Development",
      description: "Programs designed to enhance leadership capabilities and management skills for technical teams.",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Customized Learning Paths",
      description: "Tailored training programs that address your organization's specific needs and skill gaps.",
    },
    {
      icon: <Award size={32} />,
      title: "Certification Programs",
      description: "Preparation and support for industry-recognized certifications and qualifications.",
    },
    {
      icon: <Monitor size={32} />,
      title: "Hands-on Workshops",
      description: "Interactive, practical sessions that reinforce learning through real-world application.",
    },
  ]

  const benefits = [
    "Enhanced employee skills and capabilities",
    "Improved team performance and productivity",
    "Increased employee retention and satisfaction",
    "Accelerated adoption of new technologies",
    "Reduced skill gaps within your organization",
    "Consistent quality and standards across teams",
  ]

  const caseStudies = [
    {
      title: "Technology Firm",
      description:
        "Implemented a comprehensive cloud skills training program that enabled successful migration to AWS, resulting in 30% cost savings and improved system reliability.",
    },
    {
      title: "Financial Services Company",
      description:
        "Delivered cybersecurity training for 500+ employees, reducing security incidents by 65% and establishing a strong security-aware culture.",
    },
  ]

  return (
    <main>
      <Navbar />
      <div className="solution-detail-page">
        <div className="solution-hero">
          <h1>Training Programs</h1>
          <p>Comprehensive training on emerging technologies for corporate teams and individuals</p>
        </div>

        <div className="solution-overview">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Empowering Your Team Through Knowledge</h2>
              <p>
                MNR Technologies offers specialized training programs designed to equip your team with the skills and
                knowledge needed to excel in today's rapidly evolving technological landscape. Our expert instructors
                combine theoretical knowledge with practical experience to deliver engaging, effective learning
                experiences.
              </p>
              <p>
                Whether you're looking to upskill your existing workforce, onboard new team members, or develop
                specialized capabilities, our training programs can be tailored to meet your specific organizational
                needs and learning objectives.
              </p>
            </div>
            <div className="overview-image">
              <img src="/images/training.jpg" alt="Training Programs" />
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
          <h2>Ready to Invest in Your Team's Skills?</h2>
          <p>
            Contact us today to learn how our training programs can help your organization build the capabilities needed
            for success.
          </p>
          <a href="/contact" className="cta-button">
            Explore Training Options
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}
