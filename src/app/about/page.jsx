"use client"
import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Award, Users, Globe, TrendingUp } from "lucide-react"
import "../../styles/AboutPage.css"

export default function AboutPage() {
    
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      image: "/john.jpg",
      bio: "John has over 20 years of experience in technology leadership and innovation.",
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      image: "/sarah.jpg",
      bio: "Sarah leads our technical strategy with expertise in AI and cloud architecture.",
    },
    {
      name: "Michael Chen",
      position: "Head of Product Development",
      image: "/Michael.jpg",
      bio: "Michael oversees our product development with a focus on user-centered design.",
    },
    {
      name: "Amanda Rodriguez",
      position: "Director of Client Services",
      image: "/amanda.jpg",
      bio: "Amanda ensures our clients receive exceptional service and support.",
    },
  ]

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description:
        "MNR Technologies was established with a vision to transform businesses through innovative technology solutions.",
    },
    {
      year: "2013",
      title: "First Major Client",
      description: "Secured our first enterprise client and delivered a successful healthcare management system.",
    },
    {
      year: "2016",
      title: "International Expansion",
      description: "Opened offices in Europe and Asia to serve our growing international client base.",
    },
    {
      year: "2019",
      title: "AI Division Launch",
      description: "Established a dedicated AI research and development division to focus on cutting-edge solutions.",
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Received multiple industry awards for our innovative cloud and cybersecurity solutions.",
    },
  ]

  return (
    <main>
      <Navbar />
      <div className="about-page">
        <div className="about-hero">
          <h1>About MNR Technologies</h1>
          <p>Driving innovation and digital transformation since 2010</p>
        </div>

        {/* <div className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                MNR Technologies was founded in 2010 with a clear mission: to help businesses harness the power of
                technology to achieve their goals. What began as a small team of passionate technologists has grown into
                a global company with offices across three continents and a diverse portfolio of clients ranging from
                startups to Fortune 500 companies.
              </p>
              <p>
                Our journey has been defined by a commitment to innovation, excellence, and client success. We've
                consistently stayed at the forefront of technological advancement, adapting our solutions to meet the
                evolving needs of the market while maintaining our core values of integrity, collaboration, and
                continuous improvement.
              </p>

              <div className="values-section">
                <h3>Our Core Values</h3>
                <div className="values-grid">
                  <div className="value-item">
                    <Award className="value-icon" />
                    <h4>Excellence</h4>
                    <p>We strive for excellence in everything we do, from code quality to client service.</p>
                  </div>
                  <div className="value-item">
                    <Users className="value-icon" />
                    <h4>Collaboration</h4>
                    <p>We believe in the power of teamwork and partnership with our clients.</p>
                  </div>
                  <div className="value-item">
                    <Globe className="value-icon" />
                    <h4>Innovation</h4>
                    <p>We embrace new ideas and technologies to solve complex challenges.</p>
                  </div>
                  <div className="value-item">
                    <TrendingUp className="value-icon" />
                    <h4>Growth</h4>
                    <p>We're committed to continuous learning and development.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image">
              <img src="/team.jpg" alt="MNR Technologies Office" />
            </div>
          </div>
        </div> */}

        <div className="team-section">
          <h2>Our Leadership Team</h2>
          <p>Meet the experts behind our innovative solutions</p>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <div className="member-image">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="milestones-section">
          <h2>Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>
                    {milestone.year} - {milestone.title}
                  </h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

