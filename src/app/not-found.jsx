"use client"

import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"
import "../styles/NotFound.css"

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1>Page Not Found</h1>
        <p>We're sorry, the page you are looking for doesn't exist or has been moved.</p>
        <div className="not-found-actions">
          <Link href="/" className="not-found-button primary">
            <Home size={18} />
            Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="not-found-button secondary">
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
        <div className="not-found-suggestions">
          <h2>You might be looking for:</h2>
          <div className="suggestion-links">
            <Link href="/solutions">Our Solutions</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
      {/* <div className="not-found-illustration">
        <img src="/not-found.jpg" alt="Page not found illustration" />
      </div> */}
    </div>
  )
}
