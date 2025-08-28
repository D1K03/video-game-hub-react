import './App.css'
import Navbar from './components/Header/Navbar'
import Sidebar from './components/SideBar/Sidebar'
import Central from './components/Main/Central'

function App() {
  return (
    <div className='page-layout'>
      <Navbar/>
      <Sidebar/>
      <Central/>
    </div>
  )
}

export default App
