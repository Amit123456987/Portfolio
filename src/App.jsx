import { useState } from "react";
import "./App.css";

const projects = [
  {
    title: "Scalable REST API for SaaS",
    description:
      "Designed and shipped a production-ready Node.js API with authentication, role-based access, caching, and monitoring."
  },
  {
    title: "LLM-Powered Support Assistant",
    description:
      "Built an AI assistant using prompt pipelines, retrieval-based context, and guardrails to automate customer queries."
  },
  {
    title: "AI Document Processing Workflow",
    description:
      "Created a backend pipeline that extracts, validates, and structures data from documents using modern AI models."
  }
];

const services = [
  {
    title: "Backend Development",
    description:
      "Production-grade Node.js APIs, auth, payments, and scalable architecture for high-growth products."
  },
  {
    title: "LLM + AI Integrations",
    description: "RAG pipelines, AI assistants, and workflow automation connected to your stack."
  },
  {
    title: "Performance & Reliability",
    description:
      "Caching, queues, monitoring, deployment hardening, and microservices-ready backend systems."
  }
];

const techStack = [
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    name: "OpenAI API",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg"
  }
];

const contactDetails = [
  {
    label: "Email",
    value: "amitmaurya11042000@gmail.com",
    href: "mailto:amitmaurya11042000@gmail.com",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
  },
  {
    label: "Phone",
    value: "+91 8800158242",
    href: "tel:+918800158242",
    icon: "https://img.icons8.com/ios-filled/100/ffffff/phone.png"
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrapper">
          <a className="brand" href="#home" onClick={closeMenu}>
            Amit Maurya
          </a>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="site-nav"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav id="site-nav" className={`site-nav ${isMenuOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero container section">
          <p className="eyebrow">Freelance Backend & AI Engineer</p>
          <span className="status-badge">Open to New Projects</span>
          <h1>
            Hey, I am Amit.
            <br />
            I build cool backend + AI products.
          </h1>
          <p className="hero-subtitle">
            Tech-first freelancer helping founders and teams ship robust Node.js
            platforms, LLM features, and automation systems fast.
          </p>
          <div className="hero-metrics">
            <div>
              <strong>100+</strong>
              <span>APIs Built</span>
            </div>
            <div>
              <strong>Microservices</strong>
              <span>Architecture Knowledge</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Builder Mindset</span>
            </div>
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              Explore Projects
            </a>
            <a className="btn btn-secondary" href="#contact">
              Hire Me
            </a>
          </div>
        </section>

        <section id="about" className="container section">
          <h2>About Me</h2>
          <p className="section-text">
            I am a software engineer and freelancer focused on backend systems, Node.js,
            LLM tools, AI automation, and microservices. I have built 100+ APIs and
            take ideas from 0 to production with clean architecture, clear
            communication, and delivery you can trust.
          </p>
        </section>

        <section className="container section" id="services">
          <div className="section-head">
            <h2>What I Do</h2>
            <p className="section-text">
              End-to-end engineering support for modern products.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="card service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="container section">
          <div className="section-head">
            <h2>Featured Projects</h2>
            <p className="section-text">
              Backend and AI solutions I can deliver for clients.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#" aria-label={`View ${project.title} project`}>
                  View Project
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="container section">
          <h2>Tech Stack</h2>
          <ul className="skills-grid">
            {techStack.map((tech) => (
              <li className="skill-card" key={tech.name}>
                <img className="skill-icon" src={tech.icon} alt={`${tech.name} logo`} />
                <span>{tech.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="container section">
          <h2>Contact</h2>
          <p className="section-text">
            I am actively taking new freelance projects. If you need backend APIs, AI
            features, microservices, or full server-side ownership, let us build it.
          </p>
          <ul className="contact-links">
            {contactDetails.map((contact) => {
              const isExternal = contact.href.startsWith("http");
              return (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                  >
                    <img src={contact.icon} alt={`${contact.label} icon`} />
                    <span>{contact.value}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <p>&copy; {year} Amit Maurya. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
