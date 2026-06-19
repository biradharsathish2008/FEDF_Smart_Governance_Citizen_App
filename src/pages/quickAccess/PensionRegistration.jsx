import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'

function PensionRegistration() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('✓ Your pension registration has been submitted successfully!')
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
          <h1>Pension Registration</h1>
        </div>

        <section className="service-content">
          <div className="service-info">
            <h2>Register for Pension Benefits</h2>
            <p>
              Apply for various government pension schemes. Secure your financial future with
              guaranteed pension benefits.
            </p>
          </div>

          <div className="registration-form">
            <h3>Apply for Pension</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="full-name">Full Name</label>
                <input type="text" id="full-name" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" required />
              </div>
              <div className="form-group">
                <label htmlFor="income">Annual Income</label>
                <input type="number" id="income" placeholder="Your annual income" required />
              </div>
              <div className="form-group">
                <label htmlFor="pension-type">Select Pension Scheme</label>
                <select id="pension-type" required>
                  <option>Old Age Pension</option>
                  <option>Widow Pension</option>
                  <option>Disability Pension</option>
                  <option>Atal Pension Yojana</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="bank">Bank Account Number</label>
                <input type="text" id="bank" placeholder="Your bank account number" required />
              </div>
              <button type="submit" className="primary-button">
                Register for Pension
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PensionRegistration
