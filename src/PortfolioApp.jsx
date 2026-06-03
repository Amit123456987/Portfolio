import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Reveal from "./components/Reveal";
import "./App.css";

const projects = [
  {
    title: "OPMS — Operations & Project Management",
    tag: "NestJS · TypeScript · React",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    description:
      "Owned and significantly improved an OPMS at Wellwiz — dashboards, workflows, JWT auth, file uploads, and SQL optimizations delivering 40–80% performance gains."
  },
  {
    title: "Azure Microservices on AKS",
    tag: "Azure · Kubernetes · TypeScript",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    description:
      "Designed scalable microservices on Azure Kubernetes Service at Eximpedia, migrated from AWS Elastic Beanstalk, and reduced latency 25% with Azure Functions."
  },
  {
    title: "Mobile Device Management (MDM) System",
    tag: "WebSocket · WSS · Real-time",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description:
      "Built real-time MDM with WebSocket/WSS channels for remote device control, end-to-end encryption, and secure authentication at Wellwiz."
  }
];

const experience = [
  {
    role: "Software Development Engineer",
    company: "Wellwiz Pvt. Ltd.",
    period: "May 2024 – Present",
    location: "Noida, India",
    highlights: [
      "Developed MDM system with WebSocket/WSS for real-time remote device control and end-to-end encryption.",
      "Owned OPMS built with NestJS + TypeScript — dashboards, workflows, JWT auth, and file upload flows.",
      "Optimized SQL queries (indexing, EXPLAIN ANALYZE, CTEs) achieving 40–80% performance gains on critical endpoints."
    ]
  },
  {
    role: "Software Development Engineer",
    company: "Eximpedia Pte. Ltd.",
    period: "Sep 2023 – May 2024",
    location: "Noida, India",
    highlights: [
      "Built RESTful APIs, webhooks, and WebSocket solutions for scalable client-server interactions.",
      "Migrated hosting from AWS Elastic Beanstalk to Azure Kubernetes Service (AKS).",
      "Converted APIs to TypeScript and deployed serverless solutions via Azure Functions — 25% latency reduction."
    ]
  },
  {
    role: "Associate Software Development Engineer",
    company: "JungleWorks",
    period: "Jan 2022 – Sep 2023",
    location: "Chandigarh, India",
    highlights: [
      "Built React.js UIs and Node.js/Express.js APIs with PostgreSQL schemas and Redis caching.",
      "Mentored junior engineers on external APIs, ELK Stack, Kibana, and PEM files.",
      "Integrated third-party services and improved front-end performance via memoization and profiling."
    ]
  }
];

const education = {
  degree: "B.Tech. Computer Science & Engineering",
  school: "IIIT Delhi",
  period: "Sept 2018 – June 2022"
};

const services = [
  {
    title: "Backend Development",
    icon: "⚡",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    description:
      "Production-grade Node.js APIs, authentication, payments, and scalable architecture for high-growth products."
  },
  {
    title: "LLM + AI Integrations",
    icon: "🤖",
    image:
      "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1200&q=80",
    description:
      "RAG pipelines, AI assistants, and workflow automation wired directly into your existing stack."
  },
  {
    title: "Performance & Reliability",
    icon: "🚀",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description:
      "Caching, queues, monitoring, and microservices-ready infrastructure that keeps your product fast under load."
  }
];

const processSteps = [
  { step: "01", title: "Discovery Call", desc: "We align on goals, scope, and timeline." },
  { step: "02", title: "Architecture Plan", desc: "I design a clean, scalable solution blueprint." },
  { step: "03", title: "Build & Iterate", desc: "Fast delivery with regular progress updates." },
  { step: "04", title: "Launch & Support", desc: "Deployment, handoff docs, and ongoing support." }
];

const techStack = [
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
];

const contactDetails = [
  {
    label: "Email",
    value: "amitmaurya11042000@gmail.com",
    href: "mailto:amitmaurya11042000@gmail.com",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
  },
  {
    label: "Work Email",
    value: "amit18015@iiitd.ac.in",
    href: "mailto:amit18015@iiitd.ac.in",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
  },
  {
    label: "Phone",
    value: "+91 8800158242",
    href: "tel:+918800158242",
    icon: "https://img.icons8.com/ios-filled/100/ffffff/phone.png"
  },
  {
    label: "Location",
    value: "Delhi, India",
    href: "https://maps.google.com/?q=Delhi,India",
    icon: "https://img.icons8.com/ios-filled/100/ffffff/marker.png"
  },
  {
    label: "GitHub",
    value: "Amit123456987",
    href: "https://github.com/Amit123456987",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  {
    label: "LinkedIn",
    value: "amit-maurya-4616121b2",
    href: "https://www.linkedin.com/in/amit-maurya-4616121b2/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
  }
];

const profileImage = "/amit-profile.png";

function PageTransition({ children }) {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, [location.pathname]);

  return (
    <div className={`page-transition ${show ? "page-visible" : ""}`}>{children}</div>
  );
}

function SectionLabel({ children }) {
  return <span className="section-label">{children}</span>;
}

function HomePage() {
  return (
    <main id="home">
      <section className="hero container section">
        <div className="hero-layout">
          <div className="hero-content">
            <Reveal delay={0}>
              <SectionLabel>Software Engineer · Full Stack Developer</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <span className="status-badge">● Open to New Projects</span>
            </Reveal>
            <Reveal delay={160}>
              <h1>
                I build backend systems &{" "}
                <span className="gradient-text">AI products</span> that scale.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="hero-subtitle">
                Hi, I'm Amit — B.Tech CSE from IIIT Delhi with 3+ years building production systems at
                Wellwiz, Eximpedia, and JungleWorks. I specialize in Node.js, NestJS, microservices, Azure,
                and React — now available for freelance backend & AI projects.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="hero-metrics">
                <div className="metric-card">
                  <strong>3+</strong>
                  <span>Years Experience</span>
                </div>
                <div className="metric-card">
                  <strong>100+</strong>
                  <span>APIs Built</span>
                </div>
                <div className="metric-card">
                  <strong>IIIT Delhi</strong>
                  <span>B.Tech CSE</span>
                </div>
                <div className="metric-card">
                  <strong>Azure AKS</strong>
                  <span>Microservices</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="hero-actions">
                <Link className="btn btn-primary" to="/projects">
                  View My Work
                  <span className="btn-arrow">→</span>
                </Link>
                <a className="btn btn-secondary" href="/Amit_Maurya.pdf" target="_blank" rel="noreferrer">
                  Download CV
                </a>
                <a className="btn btn-secondary" href="/#contact">
                  Let's Talk
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} direction="left">
            <div className="hero-image-wrap">
              <div className="hero-image-glow" />
              <img className="hero-image" src={profileImage} alt="Amit Maurya" />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="container section">
        <Reveal>
          <SectionLabel>About Me</SectionLabel>
          <h2>Full Stack Engineer with deep backend expertise</h2>
          <p className="section-text">
            I'm a Software Engineer (Full Stack Developer) based in Delhi, India, with a B.Tech in CSE from
            IIIT Delhi. Over 3+ years I've shipped production systems across Wellwiz, Eximpedia, and JungleWorks —
            building REST APIs, WebSocket solutions, NestJS microservices on Azure AKS, and React portals.
            I've built 100+ APIs, optimized SQL for 40–80% gains, and mentored junior engineers. I'm now taking
            freelance projects in backend engineering, microservices, and AI integrations.
          </p>
          <p className="section-text languages-text">
            <strong>Languages:</strong> English · Hindi
          </p>
        </Reveal>
      </section>

      <section id="experience" className="container section">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
          <h2>Where I've built & shipped</h2>
        </Reveal>
        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 100}>
              <article className="timeline-card">
                <div className="timeline-meta">
                  <span className="timeline-period">{job.period}</span>
                  <span className="timeline-location">{job.location}</span>
                </div>
                <h3>{job.role}</h3>
                <p className="timeline-company">{job.company}</p>
                <ul className="timeline-highlights">
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="education" className="container section">
        <Reveal>
          <SectionLabel>Education</SectionLabel>
          <h2>Academic background</h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="education-card">
            <div>
              <h3>{education.degree}</h3>
              <p className="timeline-company">{education.school}</p>
            </div>
            <span className="timeline-period">{education.period}</span>
          </div>
        </Reveal>
      </section>

      <section className="container section" id="services">
        <Reveal>
          <SectionLabel>Services</SectionLabel>
          <h2>What I deliver for clients</h2>
          <p className="section-text">
            End-to-end engineering — from architecture to deployment.
          </p>
        </Reveal>
        <div className="service-grid">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <article className="card service-card">
                <div className="card-image-wrap">
                  <img className="card-visual service-visual" src={service.image} alt={service.title} />
                  <span className="card-icon">{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container section" id="process">
        <Reveal>
          <SectionLabel>How I Work</SectionLabel>
          <h2>Simple, transparent process</h2>
        </Reveal>
        <div className="process-grid">
          {processSteps.map((item, i) => (
            <Reveal key={item.step} delay={i * 80}>
              <div className="process-card">
                <span className="process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="skills" className="container section">
        <Reveal>
          <SectionLabel>Tech Stack</SectionLabel>
          <h2>Tools I work with daily</h2>
        </Reveal>
        <div className="skills-grid">
          {techStack.map((tech, i) => (
            <Reveal key={tech.name} delay={(i % 4) * 60}>
              <div className="skill-card">
                <img className="skill-icon" src={tech.icon} alt={`${tech.name} logo`} />
                <span>{tech.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container section">
        <Reveal>
          <div className="cta-banner">
            <div>
              <h2>Have a project in mind?</h2>
              <p>Let's build something great together. I respond within 24 hours.</p>
            </div>
            <a className="btn btn-primary btn-lg" href="/#contact">
              Start a Conversation
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="container section">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <h2>Let's work together</h2>
          <p className="section-text">
            Available for freelance backend and AI projects. Reach out via email, phone, or social.
          </p>
        </Reveal>
        <div className="contact-links">
          {contactDetails.map((contact, i) => {
            const isExternal = contact.href.startsWith("http");
            return (
              <Reveal key={contact.label} delay={i * 80}>
                <a
                  href={contact.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="contact-card"
                >
                  <img src={contact.icon} alt={`${contact.label} icon`} />
                  <div>
                    <span className="contact-label">{contact.label}</span>
                    <span className="contact-value">{contact.value}</span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function ProjectsPage() {
  return (
    <main className="container section projects-page">
      <Reveal>
        <Link className="back-link" to="/">
          ← Back to Home
        </Link>
        <SectionLabel>Portfolio</SectionLabel>
        <h2>Featured Projects</h2>
        <p className="section-text">
          Real projects from Wellwiz, Eximpedia, and JungleWorks — production systems I've built and shipped.
        </p>
      </Reveal>
      <div className="project-grid">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 120}>
            <article className="card project-card">
              <div className="card-image-wrap">
                <img className="card-visual project-visual" src={project.image} alt={project.title} />
                <span className="project-tag">{project.tag}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a className="project-link" href="#" aria-label={`View ${project.title}`}>
                View Details <span>→</span>
              </a>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={400}>
        <div className="cta-banner cta-banner-sm">
          <div>
            <h2>Like what you see?</h2>
            <p>I'm available for similar projects. Let's discuss yours.</p>
          </div>
          <a className="btn btn-primary" href="/#contact">
            Hire Me <span className="btn-arrow">→</span>
          </a>
        </div>
      </Reveal>
    </main>
  );
}

function PortfolioApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const year = new Date().getFullYear();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    closeMenu();
  }, [location.pathname]);

  return (
    <>
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="container nav-wrapper">
          <Link className="brand" to="/" onClick={closeMenu}>
            Amit<span className="brand-accent">.</span>
          </Link>
          <button
            className={`menu-toggle ${isMenuOpen ? "menu-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="site-nav"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav id="site-nav" className={`site-nav ${isMenuOpen ? "open" : ""}`}>
            <a href="/#about" onClick={closeMenu}>About</a>
            <a href="/#experience" onClick={closeMenu}>Experience</a>
            <Link to="/projects" onClick={closeMenu} className={location.pathname === "/projects" ? "nav-active" : ""}>
              Projects
            </Link>
            <a href="/#skills" onClick={closeMenu}>Skills</a>
            <a href="/#contact" onClick={closeMenu} className="nav-cta">Hire Me</a>
          </nav>
        </div>
      </header>

      <PageTransition>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </PageTransition>

      <footer className="site-footer">
        <div className="container footer-content">
          <p>&copy; {year} Amit Maurya. Built with React & Node.js expertise.</p>
        </div>
      </footer>
    </>
  );
}

export default PortfolioApp;
