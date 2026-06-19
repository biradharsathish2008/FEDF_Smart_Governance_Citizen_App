import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'

function RevenueServices() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Success! Your revenue service request has been submitted.')
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
            <p className="eyebrow">Land and records</p>
            <h1>Revenue Department</h1>
          </div>
        </div>

        <section className="service-content">
          <div className="service-info">
            <span className="status-chip">Record access</span>
            <h2>Land Records and Revenue Services</h2>
            <p>
              Access land records, request ownership certificates, and submit
              revenue-related applications without visiting multiple counters.
            </p>
            <ul className="check-list">
              <li>Survey number based land lookup</li>
              <li>Mutation transfer applications</li>
              <li>Village and ward record support</li>
            </ul>
          </div>

          <div className="form-card service-form-card">
            <h3>Access Land Records</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="survey-number">Survey Number</label>
                <input type="text" id="survey-number" placeholder="Property survey number" required />
              </div>
              <div className="form-group">
                <label htmlFor="taluk">Taluk/Block</label>
                <input type="text" id="taluk" placeholder="Taluk or block name" required />
              </div>
              <div className="form-group">
                <label htmlFor="village">Village/Ward</label>
                <input type="text" id="village" placeholder="Village or ward name" required />
              </div>
              <button type="submit" className="primary-button">
                View Land Records
              </button>
            </form>
          </div>

          <div className="form-card service-form-card">
            <h3>Apply for Mutation</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="old-owner">Old Owner Name</label>
                <input type="text" id="old-owner" placeholder="Current owner name" required />
              </div>
              <div className="form-group">
                <label htmlFor="new-owner">New Owner Name</label>
                <input type="text" id="new-owner" placeholder="New owner name" required />
              </div>
              <div className="form-group">
                <label htmlFor="transfer-reason">Reason for Transfer</label>
                <select id="transfer-reason" required>
                  <option>Sale</option>
                  <option>Gift</option>
                  <option>Inheritance</option>
                  <option>Exchange</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="submit" className="primary-button">
                Apply for Mutation
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default RevenueServices
