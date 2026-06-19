import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'

function LabourWelfare() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Success! Your labour welfare application has been submitted.')
    navigate('/services')
  }

  return (
    <div className="app-shell">
      <Navbar />

      <main className="page service-detail-page">
        <div className="service-header">
          <button className="back-button" onClick={() => navigate('/services')}>
            Back to services
          </button>
          <div>
            <p className="eyebrow">Worker support</p>
            <h1>Labour Welfare</h1>
          </div>
        </div>

        <section className="service-content">
          <div className="service-info">
            <span className="status-chip">Benefits support</span>
            <h2>Worker Benefits and Labour Support</h2>
            <p>
              Register labour cards, check employment records, and access worker
              welfare services through one streamlined page.
            </p>
            <ul className="check-list">
              <li>Labour card registration</li>
              <li>Employment record lookup</li>
              <li>Worker benefit application support</li>
            </ul>
          </div>

          <div className="form-card service-form-card">
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

          <div className="form-card service-form-card">
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
