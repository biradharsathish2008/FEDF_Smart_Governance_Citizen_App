import Navbar from '../../components/Navbar'

function Schemes() {
  const schemes = [
    {
      title: 'Farmer support package',
      description: 'Subsidies, crop assistance, and seasonal advisory support.',
      status: 'Open',
    },
    {
      title: 'Student scholarship track',
      description: 'Merit and need-based scholarships for school and college students.',
      status: 'Popular',
    },
    {
      title: 'Women welfare program',
      description: 'Financial aid, safety, and livelihood support for women.',
      status: 'Active',
    },
  ]

  return (
    <div className="app-shell">
      <Navbar />

      <main className="page">
        <section className="page-banner compact">
          <p className="eyebrow">Support programs</p>
          <h1>Government schemes</h1>
          <p>
            Discover active welfare programs that can help families, students, and workers.
          </p>
        </section>

        <section className="tile-grid">
          {schemes.map((scheme) => (
            <article className="info-tile scheme-tile" key={scheme.title}>
              <span className="status-chip">{scheme.status}</span>
              <h2>{scheme.title}</h2>
              <p>{scheme.description}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Schemes
