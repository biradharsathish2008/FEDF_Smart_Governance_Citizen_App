import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function LabourWelfare() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('✓ Your labour welfare application has been submitted successfully!')
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
          <h1>Labour Welfare Services</h1>
        </div>

        <section className="service-content">
          <div className="service-info">
            <h2>Worker Benefits and Labour Support</h2>
            <p>
              Access worker benefits, employment support, and labor welfare schemes for workforce protection.
            </p>
          </div>

          <div className="labour-card-form">
            <h3>Register for Labour Card</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="worker-name">Worker Name</label>
                <input type="text" id="worker-name" placeholder="Full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="worker-dob">Date of Birth</label>
                <input type="date" id="worker-dob" required />
              </div>
              <div className="form-group">
                <label htmlFor="occupation">Occupation</label>
                <select id="occupation" required>
                  <option>Construction Worker</option>
                  <option>Factory Worker</option>
                  <option>Agricultural Worker</option>
                  <option>Domestic Worker</option>
                  <option>Self-Employed</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="employer">Employer Name</label>
                <input type="text" id="employer" placeholder="Employer name" required />
              </div>
              <button type="submit" className="primary-button">
                Register for Labour Card
              </button>
            </form>
          </div>

          <div className="employment-records">
            <h3>Check Employment Records</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="labour-id">Labour Card Number</label>
                <input type="text" id="labour-id" placeholder="Your labour card ID" required />
              </div>
              <button type="submit" className="primary-button">
                View Records
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default LabourWelfare

