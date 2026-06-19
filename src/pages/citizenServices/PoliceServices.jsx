import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'

function PoliceServices() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Success! Your police service request has been submitted.')
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
            <p className="eyebrow">Safety and verification</p>
            <h1>Police Services</h1>
          </div>
        </div>

        <section className="service-content">
          <div className="service-info">
            <span className="status-chip">Secure request</span>
            <h2>Police Department Services</h2>
            <p>
              File FIRs, submit verification requests, and apply for character
              certificates through official digital forms.
            </p>
            <ul className="check-list">
              <li>Incident details and location capture</li>
              <li>Character certificate applications</li>
              <li>Complaint submission acknowledgement</li>
            </ul>
          </div>

          <div className="form-card service-form-card">
            <h3>File FIR Online</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="complaint-type">Complaint Type</label>
                <select id="complaint-type" required>
                  <option>Theft</option>
                  <option>Lost Property</option>
                  <option>Accident</option>
                  <option>Document Loss</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea id="description" placeholder="Describe the incident" rows="4" required></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="incident-date">Date of Incident</label>
                <input type="date" id="incident-date" required />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location of Incident</label>
                <input type="text" id="location" placeholder="Address where incident occurred" required />
              </div>
              <button type="submit" className="primary-button">
                File FIR
              </button>
            </form>
          </div>

          <div className="form-card service-form-card">
            <h3>Character Certificate</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="cert-purpose">Purpose of Certificate</label>
                <select id="cert-purpose" required>
                  <option>Employment</option>
                  <option>Education</option>
                  <option>Visa/Immigration</option>
                  <option>Passport</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="applicant-name">Applicant Name</label>
                <input type="text" id="applicant-name" placeholder="Your full name" required />
              </div>
              <button type="submit" className="primary-button">
                Apply for Certificate
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PoliceServices
