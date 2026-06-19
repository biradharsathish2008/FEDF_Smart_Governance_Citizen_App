import Navbar from '../components/Navbar'

function Notifications() {
  const notifications = [
    {
      title: 'Application approved',
      text: 'Your document verification request has been completed successfully.',
      tone: 'success',
    },
    {
      title: 'Bill reminder',
      text: 'Electricity payment is due in 3 days for your registered account.',
      tone: 'warning',
    },
    {
      title: 'New scheme added',
      text: 'A fresh scholarship option is now available in the education section.',
      tone: 'info',
    },
  ]

  return (
    <div className="app-shell">
      <Navbar />

      <main className="page">
        <section className="page-banner compact">
          <p className="eyebrow">Live updates</p>
          <h1>Notifications</h1>
          <p>
            Keep track of approvals, alerts, and newly launched programs in one feed.
          </p>
        </section>

        <section className="stacked-cards">
          {notifications.map((item) => (
            <article className={`notice-card notice-${item.tone}`} key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Notifications