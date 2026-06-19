import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'

function MunicipalServices() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Success! Your municipal service request has been submitted.')
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
            <p className="eyebrow">Civic services</p>
            <h1>Municipal Services</h1>
          </div>
        </div>

        <section className="service-content">
          <div className="service-info">
            <span className="status-chip">City services</span>
            <h2>Municipal Corporation Services</h2>
            <p>
              Apply for local certificates, manage property tax, and send civic
              service requests through one clean form flow.
            </p>
            <ul className="check-list">
              <li>Birth, death, and marriage certificate applications</li>
              <li>Property tax lookup and payment</li>
              <li>Local body request tracking</li>
            </ul>
          </div>

          <div className="form-card service-form-card">
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

          <div className="form-card service-form-card">
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
