import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'

function PassportServices() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('✓ Your Passport application has been submitted successfully!')
    navigate('/')
  }

  return (
    <div className="app-shell">
      <Navbar />

      <main className="page service-detail-page">
        <div className="service-header">
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back
          </button>
          <h1>Passport Services</h1>
        </div>

        <section className="service-content">
          <div className="service-info">
            <h2>Apply for or Renew Your Passport</h2>
            <p>
              Get your passport online or apply for renewal through our streamlined digital
              platform. Fast-track applications available.
            </p>
          </div>

          <div className="service-form">
            <h3>Submit Your Application</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" required />
              </div>
              <div className="form-group">
                <label htmlFor="service-type">Service Type</label>
                <select id="service-type" required>
                  <option>Fresh Passport</option>
                  <option>Renewal</option>
                  <option>Lost/Damaged</option>
                </select>
              </div>
              <button type="submit" className="primary-button">
                Apply for Passport
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PassportServices
