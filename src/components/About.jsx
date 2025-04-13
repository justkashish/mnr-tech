"use client"
import { useEffect, useRef } from "react"
import { CheckCircle } from "lucide-react"
import "../styles/About.css"

const About = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      },
      { threshold: 0.1 },
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

  const keyPoints = [
    "Industry-leading expertise in emerging technologies",
    "Customized solutions tailored to your specific business needs",
    "Comprehensive training and support throughout implementation",
    "Continuous research and development to stay ahead of market trends",
    "Strategic partnerships with global technology leaders",
  ]

  return (
    <section className="about-section" ref={aboutRef}>
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title">About MNR Technologies</h2>
          <p className="about-description">
            MNR Technologies is a leading provider of innovative technology solutions, dedicated to helping businesses
            navigate the complexities of digital transformation. With expertise spanning healthcare, banking, AI, cloud
            computing, and cybersecurity, we deliver tailored solutions that drive growth and operational excellence.
          </p>
          <p className="about-description">
            Our team of experienced professionals combines technical expertise with deep industry knowledge to develop
            solutions that address your unique challenges and opportunities. We're committed to staying at the forefront
            of technological advancement through continuous research and development.
          </p>

          <div className="key-points">
            {keyPoints.map((point, index) => (
              <div className="key-point" key={index}>
                <CheckCircle size={20} className="check-icon" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-image">
          <img src="/images/about.jpg" alt="MNR Technologies Team" className="team-image" />
        </div>
      </div>
    </section>
  )
}

export default About

