import { BrowserRouter as Router } from 'react-router-dom'
import SideBar from './components/sideBar'
import AppRoutes from './routes/route'
import { ToastProvider } from './context/ToastContext'
import './App.css'

function App() {
  return (
    <Router>
      <ToastProvider>
        <div className="flex h-screen">
          <SideBar />
          <AppRoutes />
        </div>
      </ToastProvider>
    </Router>
  )
}

export default App
