import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate, Link } from 'react-router-dom'

import Home from './pages/core/Home'
import Services from './pages/core/Services'
import Schemes from './pages/core/Schemes'
import Notifications from './pages/core/Notifications'
import Feedback from './pages/core/Feedback'
import Login from './pages/core/Login'
import Signup from './pages/core/Signup'

// Quick access service pages
import AadhaarUpdate from './pages/quickAccess/AadhaarUpdate'
import PassportServices from './pages/quickAccess/PassportServices'
import HealthCard from './pages/quickAccess/HealthCard'
import ScholarshipStatus from './pages/quickAccess/ScholarshipStatus'
import ElectricityBill from './pages/quickAccess/ElectricityBill'
import PensionRegistration from './pages/quickAccess/PensionRegistration'

// Main citizen service pages
import RTAServices from './pages/citizenServices/RTAServices'
import MunicipalServices from './pages/citizenServices/MunicipalServices'
import PoliceServices from './pages/citizenServices/PoliceServices'
import RegistrationServices from './pages/citizenServices/RegistrationServices'
import RevenueServices from './pages/citizenServices/RevenueServices'
import LabourWelfare from './pages/citizenServices/LabourWelfare'

function AuthEntry() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  if (isAuthenticated) {
    return <Navigate to="/home" replace />
  }

  return (
    <div className="auth-shell">
      <div className="auth-layout">
        <section className="auth-panel auth-panel-highlight">
          <p className="eyebrow">Smart citizen access</p>
          <h1>Login or signup to continue</h1>
          <p className="auth-subtitle">
            Use your account to open the dashboard, track services, and submit requests.
          </p>
        </section>

        <section className="form-container auth-card auth-login-card">
          <div className="auth-card-header">
            <p className="eyebrow">Get started</p>
            <h2>Choose an option</h2>
          </div>

          <div className="auth-points">
            <div>
              <strong>Existing user</strong>
              <span>Sign in to open the dashboard.</span>
            </div>
            <div>
              <strong>New user</strong>
              <span>Create an account to begin.</span>
            </div>
          </div>

          <div className="hero-actions">
            <Link className="primary-button" to="/login">
              Login
            </Link>
            <Link className="secondary-button" to="/signup">
              Signup
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

function ProtectedHome() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return <Home />
}

function RequireAuth({ children }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return children
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthEntry />} />

        <Route path="/home" element={<ProtectedHome />} />

        <Route
          path="/services"
          element={
            <RequireAuth>
              <Services />
            </RequireAuth>
          }
        />

        <Route
          path="/schemes"
          element={
            <RequireAuth>
              <Schemes />
            </RequireAuth>
          }
        />

        <Route
          path="/notifications"
          element={
            <RequireAuth>
              <Notifications />
            </RequireAuth>
          }
        />

        <Route
          path="/feedback"
          element={
            <RequireAuth>
              <Feedback />
            </RequireAuth>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        {/* Quick access service routes */}
        <Route
          path="/service/aadhaar"
          element={
            <RequireAuth>
              <AadhaarUpdate />
            </RequireAuth>
          }
        />
        <Route
          path="/service/passport"
          element={
            <RequireAuth>
              <PassportServices />
            </RequireAuth>
          }
        />
        <Route
          path="/service/healthcard"
          element={
            <RequireAuth>
              <HealthCard />
            </RequireAuth>
          }
        />
        <Route
          path="/service/scholarship"
          element={
            <RequireAuth>
              <ScholarshipStatus />
            </RequireAuth>
          }
        />
        <Route
          path="/service/electricity"
          element={
            <RequireAuth>
              <ElectricityBill />
            </RequireAuth>
          }
        />
        <Route
          path="/service/pension"
          element={
            <RequireAuth>
              <PensionRegistration />
            </RequireAuth>
          }
        />

        {/* Main citizen service routes */}
        <Route
          path="/services/rta"
          element={
            <RequireAuth>
              <RTAServices />
            </RequireAuth>
          }
        />
        <Route
          path="/services/municipal"
          element={
            <RequireAuth>
              <MunicipalServices />
            </RequireAuth>
          }
        />
        <Route
          path="/services/police"
          element={
            <RequireAuth>
              <PoliceServices />
            </RequireAuth>
          }
        />
        <Route
          path="/services/registration"
          element={
            <RequireAuth>
              <RegistrationServices />
            </RequireAuth>
          }
        />
        <Route
          path="/services/revenue"
          element={
            <RequireAuth>
              <RevenueServices />
            </RequireAuth>
          }
        />
        <Route
          path="/services/labour"
          element={
            <RequireAuth>
              <LabourWelfare />
            </RequireAuth>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App