import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert('Please complete all fields before signing up.')

      return
    }

    const user = {
      name,
      email,
      password,
    }

    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('isAuthenticated', 'true')

    alert('Signup Successful')

    navigate('/home')
  }

  return (
    <div className="auth-shell">
      <div className="form-container auth-card auth-signup-card">
        <p className="eyebrow">Create account</p>
        <h1>Signup</h1>

        <p className="auth-subtitle">
          Create your account to track services, receive updates, and submit requests.
        </p>

        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignup}>Create account</button>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
