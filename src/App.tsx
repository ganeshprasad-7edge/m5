import { BrowserRouter as Router } from 'react-router-dom'
import SideBar from './components/sideBar'
import AppRoutes from './routes/route'
import { ToastProvider } from './context/ToastContext'
import { SidebarProvider } from './context/SidebarContext'
import './App.css'

function App() {
  return (
    <Router>
      <ToastProvider>
        <SidebarProvider>
          <div className="flex flex-col md:flex-row min-h-screen">
            <SideBar />
            <div className="flex-1 overflow-y-auto lg:ml-[240px] xl:ml-[280px]">
              <AppRoutes />
            </div>
          </div>
        </SidebarProvider>
      </ToastProvider>
    </Router>
  )
}

export default App
