import './App.css'

const metrics = [
  { label: 'Years in Operations', value: '15+' },
  { label: 'Current Role', value: 'Data Scientist' },
  { label: 'Primary Strength', value: 'Ops + AI' },
  { label: 'Location', value: 'Ontario, Canada' },
]

const highlights = [
  {
    title: 'Enterprise AI Solution',
    category: 'AI DELIVERY',
    summary:
      'Helped move an enterprise AI solution from experimentation toward practical business use through research, prototyping, documentation, and stakeholder collaboration.',
    impact: 'Enterprise AI delivery focused on reliability, usability, and business value',
  },
  {
    title: 'Operational Analytics',
    category: 'DATA SCIENCE',
    summary:
      'Delivered analytics, reporting, validation, and dashboards that improved visibility, trend analysis, and decision support.',
    impact: 'Work spanning requirements, modeling, validation, and reporting',
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
    title: 'Operations',
    skills: ['NOC operations', 'Incident management', 'Change coordination', 'SLA oversight'],
  },
  {
    title: 'Data & AI',
    skills: ['Data analysis', 'Reporting', 'Model development', 'AWS AI services'],
  },
  {
    title: 'Cloud & Delivery',
    skills: ['AWS', 'Microsoft Azure', 'Cloud delivery', 'CI/CD'],
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
    title: 'Natural Language Processing & Responsible AI',
    details:
      'Working with NLP, text mining, prompt design, LLM evaluation, and practical AI workflows while supporting reliable use of AI technologies.',
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
    title: 'Telecom Network Support',
    details:
      'Core network connectivity support, routing and configuration integrity, interconnection coordination, subscriber database management, and managed services execution.',
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

function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">Michael Obi</div>
        <nav className="nav-links" aria-label="Section links">
          <a href="#about">About</a>
          <a href="#highlights">Highlights</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">Network Operations - Incident & Change Management - Data Science - AI Engineering</p>
          <h1>
            I build reliable systems, lead operational delivery, and turn complex technical work into clear outcomes.
          </h1>
          <p className="intro">
            Operations-focused technology professional with deep experience in telecom network operations, data-centre
            service oversight, enterprise data work, and enterprise AI delivery.
          </p>
          <div className="actions">
            <a className="btn-solid" href="mailto:emichaelobi@gmail.com">
              Get In Touch
            </a>
            <a className="btn-ghost" href="#experience">
              View Experience
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

        <section id="about" className="card">
          <h2>Background</h2>
          <p>
            I bring together operational discipline, technical troubleshooting, documentation, stakeholder
            communication, and delivery ownership. My background spans telecom service assurance, cloud-based AI
            delivery, analytics, and reporting across enterprise environments.
          </p>
        </section>

        <section id="highlights" className="card">
          <h2>Selected Highlights</h2>
          <div className="grid three">
            {highlights.map((project) => (
              <article key={project.title} className="project-card">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="impact">{project.impact}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="card">
          <h2>Core Strengths</h2>
          <div className="grid two">
            {coreStrengths.map((item) => (
              <article key={item.title} className="project-card">
                <h3>{item.title}</h3>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="card">
          <h2>Career</h2>
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

        <section id="skills" className="card">
          <h2>Technical Stack</h2>
          <div className="grid two">
            {skillGroups.map((group) => (
              <article key={group.title}>
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

        <section id="education" className="card">
          <h2>Education & Certifications</h2>
          <div className="grid two">
            <article>
              <h3>Education</h3>
              <div className="chips">
                {education.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
            <article>
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

        <section id="contact" className="card contact">
          <h2>Let's Build Something</h2>
          <p>
            Open to discussions around operations leadership, data science, AI delivery, and enterprise technology
            support.
          </p>
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
      </main>

      <footer className="footer">&copy; {new Date().getFullYear()} Michael Obi. Built with purpose.</footer>
    </div>
  )
}

export default App
