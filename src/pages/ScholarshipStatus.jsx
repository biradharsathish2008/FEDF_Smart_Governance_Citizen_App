import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function ScholarshipStatus() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('✓ Your scholarship application has been submitted successfully!')
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
          <h1>Scholarship Status</h1>
        </div>

        <section className="service-content">
          <div className="service-info">
            <h2>Check Your Scholarship Application Status</h2>
            <p>
              Track your scholarship application status in real-time. Get updates on approvals
              and disbursements.
            </p>
          </div>

          <div className="check-status">
            <h3>Check Your Application Status</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="application-id">Application ID</label>
                <input type="text" id="application-id" placeholder="Your application ID" required />
              </div>
              <div className="form-group">
                <label htmlFor="reg-number">Registration Number</label>
                <input type="text" id="reg-number" placeholder="Your registration number" required />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" required />
              </div>
              <button type="submit" className="primary-button">
                Check Status
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ScholarshipStatus

