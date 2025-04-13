"use client"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import "../styles/Testimonials.css"

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef(null)
  const intervalRef = useRef(null)

  const testimonials = [
    {
      quote:
        "MNR Technologies transformed our healthcare operations with their innovative solutions. Their AI-driven patient management system has significantly improved our efficiency and patient care quality.",
      author: "Dr. Sarah Johnson",
      position: "Medical Director, HealthFirst Clinic",
      image: "/images/sarah.jpg",
    },
    {
        quote:
          "Working with MNR Technologies on our cloud migration was seamless. Their expertise and attention to detail ensured zero downtime during the transition.",
        author: "Amanda Rodriguez",
        position: "VP of Operations, TechSolutions Inc.",
        image: "/images/amanda.jpg",
      },
      {
        quote:
          "The cybersecurity framework implemented by MNR Technologies has strengthened our banking infrastructure and given us confidence in our digital transformation journey.",
        author: "Michael Chen",
        position: "CTO, Global Finance Bank",
        image: "/images/Michael.jpg",
      },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  // Set up auto-sliding
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Set new interval
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 5000)

    // Clean up on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [currentSlide])

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-header">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Hear from organizations that have transformed their operations with our solutions
        </p>
      </div>

      <div className="testimonials-carousel">
      <div className="testimonials-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
             <div className="testimonial-card" key={index}>
              <div className="quote-icon">
                <Quote size={40} />
              </div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.author} className="author-image" />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <button className="carousel-button prev" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button> */}

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

