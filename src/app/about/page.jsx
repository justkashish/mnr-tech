"use client"
import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import About from "@/components/About"
import {
  CheckCircle,
  Activity,
  Building,
  Brain,
  Cloud,
  Shield,
  Code,
  Repeat,
  Database,
  Lightbulb,
  GraduationCap,
} from "lucide-react"
import "../../styles/AboutPage.css"

export default function AboutPage() {
  // const [isLoaded, setIsLoaded] = useState(true)

  // useEffect(() => {
  //   setIsLoaded(true)
  // }, [])

  const solutions = [
    {
      icon: <Activity size={32} />,
      title: "Healthcare Solutions",
      description:
        "Advanced healthcare technology solutions that streamline operations, improve patient care, and enhance medical data management.",
    },
    {
      icon: <Building size={32} />,
      title: "Banking Solutions",
      description:
        "Secure and efficient banking systems that modernize financial operations and enhance customer experience through digital innovation.",
    },
    {
      icon: <Brain size={32} />,
      title: "AI Solutions",
      description:
        "Cutting-edge AI implementation including model training, LLM, SLM, and interface building to drive intelligent automation.",
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and services that optimize performance, reduce costs, and enhance operational flexibility.",
    },
    {
      icon: <Shield size={32} />,
      title: "Cybersecurity Solutions",
      description:
        "Robust security frameworks and protocols that protect your digital assets and sensitive information from evolving threats.",
    },
  ]

  const services = [
    {
      icon: <Code size={32} />,
      title: "Product Development",
      description:
        "Custom software development and tailored solutions designed to meet your specific business requirements and challenges.",
    },
    {
      icon: <Repeat size={32} />,
      title: "Digital Transformation",
      description:
        "Comprehensive digital transformation strategies that modernize your business processes and technology infrastructure.",
    },
    {
      icon: <Database size={32} />,
      title: "Datacenter Migration",
      description:
        "Seamless datacenter migration services that minimize downtime and ensure business continuity throughout the transition.",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "R&D Solutions",
      description:
        "Continuous research and development initiatives aligned with dynamic market changes to keep your business at the cutting edge.",
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Training Programs",
      description:
        "Comprehensive training programs on multiple emerging technologies for corporate teams and individuals.",
    },
  ]

  const keyPoints = [
    "Industry-leading expertise in emerging technologies",
    "Customized solutions tailored to your specific business needs",
    "Comprehensive training and support throughout implementation",
    "Continuous research and development to stay ahead of market trends",
    "Strategic partnerships with global technology leaders",
  ]

  return (
    <main>
      <Navbar />
      <div className="about-page">
        <div className="about-hero">
          <h1>About MNR Technologies</h1>
          <p>Transforming businesses through innovative technology solutions</p>
        </div>
<About />
      
        <div className="solutions-section">
          <h2>Our Solutions</h2>
          <p>Comprehensive technology solutions designed to transform your business</p>

          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div className="solution-item" key={index}>
                <div className="solution-icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <a
                  href={`/solutions/${solution.title.toLowerCase().replace(" solutions", "").replace(" ", "-")}`}
                  className="learn-more"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="services-section">
          <h2>Our Services</h2>
          <p>Expert services to help you implement and optimize technology solutions</p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-item" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={`/services/${service.title.toLowerCase().replace(" ", "-")}`} className="learn-more">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>



        <div className="approach-section">
          <h2>Our Approach</h2>

          <div className="approach-content">
            <div className="approach-image">
              <img src="/images/approach.jpg" alt="MNR Technologies Approach" />
            </div>

            <div className="approach-steps">
              <div className="approach-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>Discover</h3>
                  <p>
                    We begin by understanding your business objectives, challenges, and technical requirements through
                    in-depth consultation.
                  </p>
                </div>
              </div>

              <div className="approach-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>Design</h3>
                  <p>
                    Our experts design a tailored solution that addresses your specific needs, leveraging the most
                    appropriate technologies.
                  </p>
                </div>
              </div>

              <div className="approach-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>Develop</h3>
                  <p>
                    We build your solution using agile methodologies, ensuring quality, security, and scalability at
                    every step.
                  </p>
                </div>
              </div>

              <div className="approach-step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h3>Deploy</h3>
                  <p>
                    We implement the solution with minimal disruption to your operations, providing comprehensive
                    training and support.
                  </p>
                </div>
              </div>

              <div className="approach-step">
                <div className="step-number">05</div>
                <div className="step-content">
                  <h3>Optimize</h3>
                  <p>
                    We continuously monitor and refine your solution to ensure optimal performance and adaptation to
                    evolving needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Transform Your Business?</h2>
          <p>Contact us today to discuss how our solutions and services can help you achieve your business goals.</p>
          <a href="/contact" className="cta-button">
            Get in Touch
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}
