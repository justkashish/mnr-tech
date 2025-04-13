"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import "../styles/Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
 
 

return () => {
  window.removeEventListener("scroll", handleScroll)
  clearTimeout(timer)
}
}, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Solutions",
      path: "/solutions",
      dropdown: [
        { name: "Healthcare Solutions", path: "/solutions/healthcare" },
        { name: "Banking Solutions", path: "/solutions/banking" },
        { name: "AI Solutions", path: "/solutions/ai" },
        { name: "Cloud Solutions", path: "/solutions/cloud" },
        { name: "Cybersecurity", path: "/solutions/cybersecurity" },
      ],
    },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Product Development", path: "/services/product-development" },
        { name: "Digital Transformation", path: "/services/digital-transformation" },
        { name: "R&D Solutions", path: "/services/research-development" },
        { name: "Training Programs", path: "/services/training" },
      ],
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ]

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/">
          <div className="logo-loaded">
              <img
                src="/images/Logo.jpg"
                alt="MNR Technologies Logo"
                className="logo-image"
              />
              <div className="logo-glow"></div>
            </div>
          </Link>
        </div>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <ul className="navbar-links">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                {item.dropdown ? (
                  <div className="dropdown-container">
                    <div className="dropdown-trigger" onClick={() => toggleDropdown(index)}>
                      {item.name}
                      <ChevronDown className={`dropdown-icon ${activeDropdown === index ? "rotated" : ""}`} />
                    </div>
                    <div className={`dropdown-menu ${activeDropdown === index ? "active" : ""}`}>
                      {item.dropdown.map((dropItem, idx) => (
                        <Link
                          key={idx}
                          href={dropItem.path}
                          className="dropdown-item"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={item.path} className="nav-link">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="navbar-cta">
            <Link href="/contact" className="cta-button">
              Get Started
            </Link>
          </div>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </header>
  )
}

export default Navbar

