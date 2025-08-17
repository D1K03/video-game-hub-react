import './App.css'
import GameCards from './components/Games/GameCards'
import Navbar from './components/Header/Navbar'
import Sidebar from './components/SideBar/Sidebar'

function App() {
  return (
    <div className='page-layout'>
      <Navbar/>
      <Sidebar/>
      <GameCards/>
    </div>
  )
}

export default App
