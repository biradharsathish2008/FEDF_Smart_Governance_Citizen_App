import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'

function AadhaarUpdate() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('✓ Your Aadhaar update application has been submitted successfully!')
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
          <h1>Aadhaar Update</h1>
        </div>

        <section className="service-content">
          <div className="service-info">
            <h2>Update Your Aadhaar Information</h2>
            <p>
              Keep your Aadhaar data up-to-date with the latest information. Update your address,
              phone number, email, or other personal details.
            </p>
          </div>

          <div className="service-form">
            <h3>Submit Your Update Request</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="aadhaar">Aadhaar Number</label>
                <input type="text" id="aadhaar" placeholder="12-digit Aadhaar number" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="+91 XXXXX XXXXX" required />
              </div>
              <button type="submit" className="primary-button">
                Submit Update Request
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AadhaarUpdate
