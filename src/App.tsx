import { useEffect, useRef, type ReactNode } from 'react'
import './App.css'

const metrics = [
  { label: 'Years of experience', value: '15+' },
  { label: 'Current role', value: 'Data Scientist' },
  { label: 'Primary strength', value: 'AI + Ops' },
  { label: 'Location', value: 'Ontario, Canada' },
]

const highlights = [
  {
    title: 'Operational Analytics',
    category: 'DATA SCIENCE',
    summary:
      'Delivered analytics, reporting, validation, and dashboards that improved visibility, trend analysis, and decision support.',
    impact: 'Work spanning requirements, modeling, validation, and reporting',
  },
  {
    title: 'Enterprise AI Solution',
    category: 'AI DELIVERY',
    summary:
      'Helped move an enterprise AI solution from experimentation toward practical business use through research, prototyping, documentation, and stakeholder collaboration.',
    impact: 'Enterprise AI delivery focused on reliability, usability, and business value',
  },
  {
    title: 'Network Operations Leadership',
    category: 'OPERATIONS',
    summary:
      'Managed incident, problem, and change workflows in 24/7 telecom and data-centre environments while mentoring teams and protecting uptime.',
    impact: 'Experience across NOC, escalation, change windows, and service assurance',
  },
]

const careerTimeline = [
  {
    years: '2023 - Present',
    role: 'Data Scientist, Emerging Technologies and Innovation',
    company: 'Federal Government Agency',
    details:
      'Helped deliver an enterprise AI solution, translating experimentation into practical business value through research, prototyping, and stakeholder collaboration.',
  },
  {
    years: '2021 - 2023',
    role: 'Data Scientist, Operational Workload Development',
    company: 'Federal Government Agency',
    details:
      'Built analytics and reporting solutions end-to-end, including data preparation, model development, validation, reporting, and stakeholder communication.',
  },
  {
    years: '2020 - 2021',
    role: 'Data Officer',
    company: 'Federal Government Agency',
    details:
      'Performed testing, validation, issue analysis, and anomaly review across 50+ source systems feeding enterprise data warehouse and reporting environments.',
  },
  {
    years: '2019',
    role: 'Manager, Fulfillment Department',
    company: 'Walmart Canada - Ottawa, CA',
    details:
      'Provided leadership and supervision for fulfillment department operations, executed floor and backroom stocking and sampling, and managed receiving inventory and warehousing workflows.',
  },
  {
    years: '2018 - 2019',
    role: 'Manager, Network Operations Center',
    company: 'Huawei Technologies - Abuja, Nigeria',
    details:
      'Led service operations and process optimization in a 24/7 data center environment, improving service quality and SLA performance. Oversaw capacity planning, utilization analysis, change management, technical reporting, and stakeholder coordination for infrastructure and software upgrades.',
  },
  {
    years: '2010 - 2018',
    role: 'Team Lead, Core Network Technology Products',
    company: 'Huawei Technologies - West Africa',
    details:
      'Led deployment, acceptance, configuration, and troubleshooting of core network technology products while coordinating cross-functional operations and service continuity in telecom environments.',
  },
  {
    years: '2008 - 2010',
    role: 'Specialist, Network Operations',
    company: 'ZoomMobile',
    details:
      'Supported network operations, subscriber database management, monitoring, interconnection configuration, and performance reporting in telecom environments.',
  },
]

const skillGroups = [
  {
    title: 'Data & AI',
    skills: ['Data analysis', 'Reporting', 'Model development', 'AWS AI services'],
  },
  {
    title: 'Cloud & Delivery',
    skills: ['AWS', 'Microsoft Azure', 'Cloud delivery', 'CI/CD'],
  },
  {
    title: 'Operations',
    skills: ['NOC operations', 'Incident management', 'Change coordination', 'SLA oversight'],
  },
  {
    title: 'Telecom Systems',
    skills: ['Core network support', 'Subscriber database', 'Interconnection', 'Configuration integrity'],
  },
]

const education = [
  'Leadership Principles Certificate - Harvard Business School Online, 2024',
  'M.Sc., Engineering Management - Ahmadu Bello University, 2017',
  'B.Eng., Mechanical Engineering - University of Nigeria Nsukka, 2005',
]

const coreStrengths = [
  {
    title: 'Data Science, Machine Learning & AI',
    details:
      'Developing and evaluating AI solutions, working with large datasets, applying exploratory data analysis and statistical methods, and supporting deployment and integration with enterprise systems.',
  },
  {
    title: 'Natural Language Processing & Responsible AI',
    details:
      'Working with NLP, text mining, prompt design, LLM evaluation, and practical AI workflows while supporting reliable use of AI technologies.',
  },
  {
    title: 'Analytics & BI',
    details:
      'Power BI, Tableau, and Cognos Analytics for dashboarding, reporting, and KPI analysis to support operational and strategic decision-making.',
  },
  {
    title: 'Data Engineering',
    details:
      'Data validation, ETL workflows, data warehousing, data modeling, data quality testing, metadata development, and automation for reliable data pipelines.',
  },
  {
    title: 'Monitoring & Operations',
    details:
      'Event monitoring, operations management, service assurance, uptime protection, incident triage, and escalation in high-availability environments.',
  },
  {
    title: 'Incident, Problem & Change Management',
    details:
      'Incident coordination, root-cause analysis support, problem tracking, change planning, and maintenance window execution.',
  },
  {
    title: 'Technical Execution',
    details:
      'Deployment, acceptance testing, configuration, troubleshooting, performance reporting, and capacity and utilization analysis.',
  },
  {
    title: 'Documentation & Improvement',
    details:
      'Issue logging, action tracking, operational reporting, SOP support, and continuous coaching and mentorship to improve team execution quality.',
  },
  {
    title: 'Telecom Network Support',
    details:
      'Core network connectivity support, routing and configuration integrity, interconnection coordination, subscriber database management, and managed services execution.',
  },
  {
    title: 'Customer & Team Skills',
    details:
      'Professional communication, quick judgment, de-escalation mindset, and accountability in cross-functional and customer-facing situations.',
  },
]

const certifications = [
  'ITIL',
  'HCNA',
  'Microsoft Certified: Azure AI Engineer Associate',
  'Microsoft Certified: Azure AI Fundamentals',
  'IBM Data Science Professional Certificate',
  'Oracle Autonomous Database Cloud Certified Specialist',
]

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.disconnect()
          }
        })
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function SectionHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="section-head">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  )
}

function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">Michael Obi</div>
        <nav className="nav-links" aria-label="Section links">
          <a href="#about">About</a>
          <a href="#highlights">Highlights</a>
          <a href="#work">Strengths</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Data Scientist &middot; AI Engineering
          </p>
          <h1>
            I turn complex <span className="grad-amber">data and AI</span> work into{' '}
            <span className="grad-teal">reliable systems</span> — and keep them running.
          </h1>
          <p className="intro">
            Data scientist and AI engineer delivering enterprise AI, analytics, and data engineering — backed by
            15+ years of operational leadership across telecom network operations and 24/7 service environments.
          </p>
          <div className="actions">
            <a className="btn-solid" href="mailto:emichaelobi@gmail.com">
              Get In Touch
            </a>
            <a className="btn-ghost" href="#highlights">
              Selected Work
            </a>
            <a
              className="btn-ghost"
              href="https://www.linkedin.com/in/michael-obi-30109617/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="metrics" aria-label="Profile metrics">
            {metrics.map((metric) => (
              <article key={metric.label} className="metric">
                <h2>{metric.value}</h2>
                <p>{metric.label}</p>
              </article>
            ))}
          </div>
        </section>

        <Reveal>
          <section id="about" className="card">
            <SectionHeader
              eyebrow="About"
              title="Data scientist first, operator at heart"
              lead="I bring analytical depth to operational problems: modeling, measurement, and delivery discipline, applied where uptime and outcomes both matter."
            />
            <div className="about-grid">
              <p>
                Today I work as a data scientist in Emerging Technologies and Innovation, moving enterprise AI
                from experimentation to practical business use. My background spans machine learning, analytics,
                data engineering, and cloud-based AI delivery.
              </p>
              <p>
                Before that, I spent a decade in telecom network operations — leading incident, problem, and
                change workflows in 24/7 environments. That operational discipline now shapes how I build:
                validated, observable, and documented, with stakeholders brought along at every step.
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="highlights" className="card">
            <SectionHeader
              eyebrow="Highlights"
              title="Selected work"
              lead="A few places where the data science and AI delivery had to work under real-world pressure."
            />
            <div className="grid three">
              {highlights.map((project, index) => (
                <article key={project.title} className="project-card accent">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <p className="impact">{project.impact}</p>
                  <span className="card-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="work" className="card">
            <SectionHeader
              eyebrow="Strengths"
              title="Core strengths"
              lead="Where I contribute most, from modeling to delivery and the operations that keep both alive."
            />
            <div className="grid two">
              {coreStrengths.map((item) => (
                <article key={item.title} className="project-card">
                  <h3>{item.title}</h3>
                  <p>{item.details}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="experience" className="card">
            <SectionHeader
              eyebrow="Experience"
              title="Career"
              lead="From network operations floors to enterprise AI delivery — one continuous thread of keeping critical systems honest."
            />
            <div className="timeline">
              {careerTimeline.map((item) => (
                <article key={`${item.years}-${item.role}`} className="timeline-item">
                  <p className="years">{item.years}</p>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.details}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="skills" className="card">
            <SectionHeader eyebrow="Skills" title="Technical stack" />
            <div className="grid two">
              {skillGroups.map((group) => (
                <article key={group.title} className="skill-group">
                  <h3>{group.title}</h3>
                  <div className="chips">
                    {group.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="education" className="card">
            <SectionHeader eyebrow="Credentials" title="Education & certifications" />
            <div className="grid two">
              <article className="skill-group">
                <h3>Education</h3>
                <ul className="clean-list">
                  {education.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="skill-group">
                <h3>Certifications</h3>
                <div className="chips">
                  {certifications.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="contact" className="card contact">
            <SectionHeader
              eyebrow="Contact"
              title="Let's build something"
              lead="Open to discussions around data science, AI delivery, operations leadership, and enterprise technology support."
            />
            <div className="actions">
              <a className="btn-solid" href="mailto:emichaelobi@gmail.com">
                emichaelobi@gmail.com
              </a>
              <a
                className="btn-ghost"
                href="https://www.linkedin.com/in/michael-obi-30109617/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </Reveal>
      </main>

      <footer className="footer">&copy; {new Date().getFullYear()} Michael Obi. Built with purpose.</footer>
    </div>
  )
}

export default App
