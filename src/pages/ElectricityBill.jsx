import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

function ElectricityBill() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('✓ Your bill payment request has been submitted successfully!')
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
          <h1>Electricity Bill</h1>
        </div>

        <section className="service-content">
          <div className="service-info">
            <h2>View and Pay Your Electricity Bill</h2>
            <p>
              Check your bill status and make secure online payments through multiple payment options.
            </p>
          </div>

          <div className="bill-form">
            <h3>Check Your Bill</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="consumer-id">Consumer ID</label>
                <input type="text" id="consumer-id" placeholder="Your consumer ID" required />
              </div>
              <div className="form-group">
                <label htmlFor="service-number">Service Number</label>
                <input type="text" id="service-number" placeholder="Your service number" required />
              </div>
              <button type="submit" className="primary-button">
                View Bill
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ElectricityBill

