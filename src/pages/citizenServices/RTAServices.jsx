import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'

function RTAServices() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Success! Your vehicle registration application has been submitted.')
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
            <p className="eyebrow">Transport and mobility</p>
            <h1>RTA Services</h1>
          </div>
        </div>

        <section className="service-content">
          <div className="service-info">
            <span className="status-chip">Online application</span>
            <h2>Road Transport Authority Services</h2>
            <p>
              Complete vehicle registration, licence renewal, and transport certificate
              services with a simple guided application.
            </p>
            <ul className="check-list">
              <li>Vehicle ownership and chassis verification</li>
              <li>Registration request acknowledgement</li>
              <li>Transport certificate support</li>
            </ul>
          </div>

          <div className="form-card service-form-card">
            <h3>Vehicle Registration</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="vehicle-type">Vehicle Type</label>
                <select id="vehicle-type" required>
                  <option>Two Wheeler</option>
                  <option>Four Wheeler - Car</option>
                  <option>Four Wheeler - SUV</option>
                  <option>Commercial Vehicle</option>
                  <option>Auto Rickshaw</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="chassis">Chassis Number</label>
                <input type="text" id="chassis" placeholder="Vehicle chassis number" required />
              </div>
              <div className="form-group">
                <label htmlFor="engine">Engine Number</label>
                <input type="text" id="engine" placeholder="Vehicle engine number" required />
              </div>
              <div className="form-group">
                <label htmlFor="owner-name">Owner Name</label>
                <input type="text" id="owner-name" placeholder="Vehicle owner full name" required />
              </div>
              <button type="submit" className="primary-button">
                Apply for Registration
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default RTAServices
