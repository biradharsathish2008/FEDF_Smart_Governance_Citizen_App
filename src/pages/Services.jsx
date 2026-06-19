import Navbar from '../components/Navbar'

function Services() {
  const services = [
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
        <section className="page-banner compact">
          <p className="eyebrow">Service directory</p>
          <h1>Government services</h1>
          <p>
            Browse common citizen services grouped by the kind of task you want to complete.
          </p>
        </section>

        <section className="tile-grid two-column">
          {services.map((group) => (
            <article className="info-tile" key={group.title}>
              <h2>{group.title}</h2>

              <ul className="check-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Services