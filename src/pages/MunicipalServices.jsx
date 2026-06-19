import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function MunicipalServices() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('✓ Your municipal service request has been submitted successfully!')
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
          <h1>Municipal Services</h1>
        </div>

        <section className="service-content">
          <div className="service-info">
            <h2>Municipal Corporation Services</h2>
            <p>
              Property tax payment, birth and death certificates, and civic services online.
            </p>
          </div>

          <div className="certificate-form">
            <h3>Apply for Certificate</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="cert-type">Certificate Type</label>
                <select id="cert-type" required>
                  <option>Birth Certificate</option>
                  <option>Death Certificate</option>
                  <option>Marriage Certificate</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="reg-number">Registration Number</label>
                <input type="text" id="reg-number" placeholder="Certificate registration number" required />
              </div>
              <div className="form-group">
                <label htmlFor="name">Person Name</label>
                <input type="text" id="name" placeholder="Full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth/Death</label>
                <input type="date" id="dob" required />
              </div>
              <button type="submit" className="primary-button">
                Apply for Certificate
              </button>
            </form>
          </div>

          <div className="property-section">
            <h3>Property Tax Payment</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="property-id">Property ID</label>
                <input type="text" id="property-id" placeholder="Your property ID" required />
              </div>
              <button type="submit" className="primary-button">
                View and Pay Tax
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default MunicipalServices

