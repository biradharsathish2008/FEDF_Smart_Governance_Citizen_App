import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'

function Services() {
  const departments = [
    {
      title: 'RTA Services',
      description: 'Vehicle registration, licence renewal, road tax, and permits.',
      badge: 'R',
      accent: 'blue',
      path: '/services/rta',
    },
    {
      title: 'Municipal Services',
      description: 'Property tax, certificates, civic requests, and local body services.',
      badge: 'M',
      accent: 'violet',
      path: '/services/municipal',
    },
    {
      title: 'Police Services',
      description: 'FIR filing, character certificates, and public safety requests.',
      badge: 'P',
      accent: 'red',
      path: '/services/police',
    },
    {
      title: 'Registration Services',
      description: 'Property registration, stamp duty, and document processing.',
      badge: 'D',
      accent: 'amber',
      path: '/services/registration',
    },
    {
      title: 'Revenue Department',
      description: 'Land records, mutation requests, and revenue certificates.',
      badge: 'L',
      accent: 'teal',
      path: '/services/revenue',
    },
    {
      title: 'Labour Welfare',
      description: 'Labour cards, worker records, employment support, and benefits.',
      badge: 'W',
      accent: 'crimson',
      path: '/services/labour',
    },
  ]

  const quickServices = [
    {
      title: 'Identity and certificates',
      items: ['Aadhaar update', 'PAN services', 'Birth certificate', 'Caste certificate'],
    },
    {
      title: 'Transport and mobility',
      items: ['Driving licence', 'Vehicle registration', 'Road tax', 'Permit applications'],
    },
    {
      title: 'Tax and records',
      items: ['Property tax', 'Land records', 'Stamp duty', 'Revenue certificates'],
    },
    {
      title: 'Social support',
      items: ['Pension', 'Scholarships', 'Health scheme', 'Employment assistance'],
    },
  ]

  return (
    <div className="app-shell">
      <Navbar />

      <main className="page">
        <section className="page-banner services-banner">
          <p className="eyebrow">Service directory</p>
          <h1>All citizen services</h1>
          <p>
            Choose a department to start an application or browse everyday services by category.
          </p>
        </section>

        <section className="service-card-grid directory-grid">
          {departments.map((service) => (
            <Link
              className={`service-card accent-${service.accent}`}
              key={service.title}
              to={service.path}
            >
              <div className="service-card-top">
                <span className="service-badge">{service.badge}</span>
              </div>

              <div className="service-card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-link-text">Open service</span>
              </div>
            </Link>
          ))}
        </section>

        <section className="panel-section service-category-section">
          <div className="section-heading">
            <p>Browse by need</p>
            <h2>Common service groups</h2>
          </div>

          <div className="tile-grid two-column">
          {quickServices.map((group) => (
            <article className="info-tile" key={group.title}>
              <h2>{group.title}</h2>

              <ul className="check-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Services
