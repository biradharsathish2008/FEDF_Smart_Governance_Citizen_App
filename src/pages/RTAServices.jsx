import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function RTAServices() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('✓ Your vehicle registration application has been submitted successfully!')
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
          <h1>RTA Services</h1>
        </div>

        <section className="service-content">
          <div className="service-info">
            <h2>Road Transport Authority Services</h2>
            <p>
              Complete vehicle registration, license renewal, and transport certificate services.
            </p>
          </div>

          <div className="registration-form">
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

