"use client"
import { useEffect, useRef } from "react"
import { ArrowRight, Activity, Database, Code, Cloud, Shield, Brain, Building, Repeat, Lightbulb } from "lucide-react"
import "../styles/Services.css"

const Services = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    const serviceCards = document.querySelectorAll(".service-card")
    serviceCards.forEach((card) => {
      observer.observe(card)
    })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      serviceCards.forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [])

  const services = [
    {
      icon: <Activity size={32} />,
      title: "Healthcare Solutions",
      description:
        "Advanced healthcare technology solutions that streamline operations, improve patient care, and enhance medical data management.",
      link: "/solutions/healthcare",
    },
    {
      icon: <Building size={32} />,
      title: "Banking Solutions",
      description:
        "Secure and efficient banking systems that modernize financial operations and enhance customer experience through digital innovation.",
      link: "/solutions/banking",
    },
    {
      icon: <Code size={32} />,
      title: "Product Development",
      description:
        "Custom software development and tailored solutions designed to meet your specific business requirements and challenges.",
      link: "/services/product-development",
    },
    {
      icon: <Brain size={32} />,
      title: "AI Solutions & Consulting",
      description:
        "Cutting-edge AI implementation including model training, LLM, SLM, and interface building to drive intelligent automation.",
      link: "/solutions/ai",
    },
    {
      icon: <Repeat size={32} />,
      title: "Digital Transformation",
      description:
        "Comprehensive digital transformation strategies that modernize your business processes and technology infrastructure.",
      link: "/services/digital-transformation",
    },
    {
      icon: <Database size={32} />,
      title: "Datacenter Migration",
      description:
        "Seamless datacenter migration services that minimize downtime and ensure business continuity throughout the transition.",
      link: "/services/datacenter-migration",
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and services that optimize performance, reduce costs, and enhance operational flexibility.",
      link: "/solutions/cloud",
    },
    {
      icon: <Shield size={32} />,
      title: "Cybersecurity Solutions",
      description:
        "Robust security frameworks and protocols that protect your digital assets and sensitive information from evolving threats.",
      link: "/solutions/cybersecurity",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "R&D Solutions",
      description:
        "Continuous research and development initiatives aligned with dynamic market changes to keep your business at the cutting edge.",
      link: "/services/research-development",
    },
  ]

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-header">
        <h2 className="section-title">Our Solutions & Services</h2>
        <p className="section-subtitle">
          Comprehensive technology solutions designed to transform your business and drive innovation
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <a href={service.link} className="service-link">
              Learn more <ArrowRight size={16} className="arrow-icon" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

