"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import "../styles/Hero.css"

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-content">
        <h1 className="hero-title">
          Innovative Technology Solutions for <span className="highlight">Tomorrow's Challenges</span>
        </h1>
        <p className="hero-subtitle">
          Transforming businesses through cutting-edge technology, custom software development, and strategic digital
          solutions.
        </p>
        <div className="hero-buttons">
          <Link href="/solutions" className="primary-button">
            Explore Solutions
          </Link>
          <Link href="/contact" className="secondary-button">
            Talk to an Expert
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-container">
          <img
            src="/images/team.jpg"
            alt="MNR Technologies Digital Solutions"
            className="main-image animated"
          />
          {/* <div className="floating-element element-1">
            <img src="/heart.jpg" alt="AI" className="element-image" />
          </div>
          <div className="floating-element element-2">
            <img src="/cloud.jpg" alt="Cloud" className="element-image" />
          </div>
          <div className="floating-element element-3">
            <img src="/security.jpg" alt="Security" className="element-image" />
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero

