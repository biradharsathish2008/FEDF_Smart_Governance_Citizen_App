import { useState } from 'react'

import Navbar from '../components/Navbar'

function Feedback() {
  const [feedback, setFeedback] = useState('')
  const [category, setCategory] = useState('Service quality')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!feedback.trim()) {
      alert('Please enter your feedback before submitting.')

      return
    }

    alert(`Thanks for your feedback on ${category}.`)
    setFeedback('')
  }

  return (
    <div className="app-shell">
      <Navbar />

      <main className="page split-layout">
        <section className="page-banner compact">
          <p className="eyebrow">User voice</p>
          <h1>Feedback system</h1>
          <p>
            Share issues, suggestions, or service experiences so the portal can improve.
          </p>
        </section>

        <section className="form-card">
          <form onSubmit={handleSubmit}>
            <label>
              Feedback category
              <select value={category} onChange={(event) => setCategory(event.target.value)}>
                <option>Service quality</option>
                <option>Technical issue</option>
                <option>Suggestion</option>
                <option>Complaint</option>
              </select>
            </label>

            <label>
              Your feedback
              <textarea
                value={feedback}
                onChange={(event) => setFeedback(event.target.value)}
                placeholder="Tell us what worked and what can be improved"
                rows="6"
              />
            </label>

            <button type="submit">Submit feedback</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Feedback