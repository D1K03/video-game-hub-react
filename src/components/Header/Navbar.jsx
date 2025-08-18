import './Navbar.css'

export default function Navbar() {
    return (
        <header>
            <h1>Game Hub</h1>
            <form>
                <label for="game-search" class="search-label">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input id="game-search" type="textbox" placeholder="Search"></input>
                    <i class="fa-solid fa-xmark"></i>
                    <div class="shortcut-one">
                        <p><span className='symbol'>alt</span> + <span className='symbol'>enter</span></p>
                    </div>
                </label>
            </form>
        </header>
    )
}