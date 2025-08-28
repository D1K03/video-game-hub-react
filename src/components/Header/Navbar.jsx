import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <header>
            <h1>Game Hub</h1>
            <form role='search'>
                <label htmlFor="game-search" className='search-label'>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    <input id="game-search" type="textbox" placeholder="Search"></input>
                    <FontAwesomeIcon icon={faXmark}/>
                    <div className='shortcut-one'>
                        <p><span className='symbol'>alt</span> + <span className='symbol'>enter</span></p>
                    </div>
                </label>
            </form>
        </header>
    )
}