import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'))

    if (!storedUser) {
      alert('No account found. Please sign up first.')

      return
    }

    if (storedUser.email === email && storedUser.password === password) {
      alert('Login Successful')

      navigate('/')
    } else {
      alert('Invalid Credentials')
    }
  }

  return (
    <div className="auth-shell">
      <div className="auth-layout">
        <section className="auth-panel auth-panel-highlight">
          <p className="eyebrow">Welcome back</p>
          <h1>Login to your account</h1>

          <p className="auth-subtitle">
            Sign in to access citizen services, alerts, saved applications, and updates.
          </p>

          <div className="auth-points">
            <div>
              <strong>Fast access</strong>
              <span>Open services and track requests quickly.</span>
            </div>
            <div>
              <strong>Secure portal</strong>
              <span>Use your account to manage submissions safely.</span>
            </div>
            <div>
              <strong>Stay updated</strong>
              <span>See important notices, deadlines, and alerts.</span>
            </div>
          </div>
        </section>

        <section className="form-container auth-card auth-login-card">
          <div className="auth-card-header">
            <p className="eyebrow">Sign in</p>
            <h2>Login</h2>
          </div>

          <label className="auth-field">
            <span>Email address</span>
            <input
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="auth-field">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button onClick={handleLogin}>Login</button>

          <p className="auth-footer-text">
            Don't have an account?
            <Link to="/signup"> Create one</Link>
          </p>
        </section>
      </div>
    </div>
  )
}

export default Login