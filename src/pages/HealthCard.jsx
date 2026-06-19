import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function HealthCard() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('✓ Your Health Card application has been submitted successfully!')
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
          <h1>Health Card Registration</h1>
        </div>

        <section className="service-content">
          <div className="service-info">
            <h2>Apply for a Health Card</h2>
            <p>
              Get your health card to access medical benefits and avail government health schemes.
            </p>
          </div>

          <div className="service-form">
            <h3>Register for Health Card</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="aadhar">Aadhaar Number</label>
                <input type="text" id="aadhar" placeholder="12-digit Aadhaar" required />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input type="number" id="age" placeholder="Your age" required />
              </div>
              <div className="form-group">
                <label htmlFor="scheme">Select Scheme</label>
                <select id="scheme" required>
                  <option>Ayushman Bharat</option>
                  <option>State Health Scheme</option>
                  <option>Senior Citizen Health</option>
                </select>
              </div>
              <button type="submit" className="primary-button">
                Apply for Health Card
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HealthCard

