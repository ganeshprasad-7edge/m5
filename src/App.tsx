import { BrowserRouter as Router } from 'react-router-dom'
import SideBar from './components/sideBar'
import AppRoutes from './routes/route'
import './App.css'

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <SideBar />
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
