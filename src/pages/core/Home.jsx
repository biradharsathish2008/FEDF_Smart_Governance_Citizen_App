import Navbar from '../../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const cards = [
    {
      title: 'RTA Services',
      description: 'Vehicle registration, license renewal, and transport certificates.',
      accent: 'blue',
      badge: 'R',
      path: '/services/rta',
    },
    {
      title: 'Municipal Services',
      description: 'Property tax, birth and death certificates, and civic requests.',
      accent: 'violet',
      badge: 'M',
      path: '/services/municipal',
    },
    {
      title: 'Police Services',
      description: 'FIR access, verification requests, and public safety support.',
      accent: 'red',
      badge: 'P',
      path: '/services/police',
    },
    {
      title: 'Registration',
      description: 'Property registration, stamp duty, and document services.',
      accent: 'amber',
      badge: 'D',
      path: '/services/registration',
    },
    {
      title: 'Revenue Department',
      description: 'Land records, certificates, and revenue-related applications.',
      accent: 'teal',
      badge: 'L',
      path: '/services/revenue',
    },
    {
      title: 'Labour Welfare',
      description: 'Worker benefits, employment support, and labour regulations.',
      accent: 'crimson',
      badge: 'W',
      path: '/services/labour',
    },
  ]

  const quickLinks = [
    { name: 'Aadhaar update', path: '/service/aadhaar' },
    { name: 'Passport services', path: '/service/passport' },
    { name: 'Health card', path: '/service/healthcard' },
    { name: 'Scholarship status', path: '/service/scholarship' },
    { name: 'Electricity bill', path: '/service/electricity' },
    { name: 'Pension registration', path: '/service/pension' },
  ]

  return (
    <div className="app-shell">
      <Navbar />

      <main className="page home-page">
        <section className="hero-panel">
          <div className="hero-copy">
            <p className="eyebrow">Citizen services at a glance</p>
            <h1>Smart access to public services in one place</h1>
            <p className="hero-text">
              A cleaner dashboard for transport, civic, police, revenue, and
              welfare services with quick links for everyday tasks.
            </p>

            <div className="hero-actions">
              <Link className="primary-button" to="/services">
                Explore services
              </Link>

              <Link className="secondary-button" to="/login">
                Secure login
              </Link>
            </div>
          </div>

          <div className="hero-stat-grid">
            <article>
              <strong>24/7</strong>
              <span>service access</span>
            </article>

            <article>
              <strong>12+</strong>
              <span>core modules</span>
            </article>

            <article>
              <strong>Fast</strong>
              <span>application flow</span>
            </article>
          </div>
        </section>

        <section className="panel-section">
          <div className="section-heading">
            <p>Quick access</p>
            <h2>Most used services</h2>
          </div>

          <div className="quick-link-grid">
            {quickLinks.map((item) => (
              <button
                className="quick-link"
                key={item.name}
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </section>

        <section className="panel-section">
          <div className="section-heading">
            <p>Featured departments</p>
            <h2>Citizen services</h2>
          </div>

          <div className="service-card-grid">
            {cards.map((card) => (
              <button
                className={`service-card accent-${card.accent}`}
                key={card.title}
                onClick={() => navigate(card.path)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                <div className="service-card-top">
                  <span className="service-badge">{card.badge}</span>
                </div>

                <div className="service-card-body">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
