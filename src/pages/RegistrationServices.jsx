import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function RegistrationServices() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('✓ Your property registration request has been submitted successfully!')
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
          <h1>Registration Services</h1>
        </div>

        <section className="service-content">
          <div className="service-info">
            <h2>Land and Property Registration</h2>
            <p>
              Register your property ownership with complete online documentation and secure processing.
            </p>
          </div>

          <div className="registration-form">
            <h3>Register Your Property</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="property-type">Property Type</label>
                <select id="property-type" required>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Agricultural</option>
                  <option>Mixed Use</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="property-address">Property Address</label>
                <input type="text" id="property-address" placeholder="Complete address" required />
              </div>
              <div className="form-group">
                <label htmlFor="property-value">Property Value (Rs)</label>
                <input type="number" id="property-value" placeholder="Estimated value" required />
              </div>
              <div className="form-group">
                <label htmlFor="seller-name">Seller Name</label>
                <input type="text" id="seller-name" placeholder="Seller's full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="buyer-name">Buyer Name</label>
                <input type="text" id="buyer-name" placeholder="Buyer's full name" required />
              </div>
              <button type="submit" className="primary-button">
                Register Property
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default RegistrationServices

