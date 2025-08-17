import './Navbar.css'

export default function Navbar() {
    return (
        <>
        <h1>Game Hub</h1>
        <form>
            <label for="game-search" class="search-label">
                <input id="game-search" type="textbox" placeholder="Search"></input>
            </label>
        </form>
        </>
    )
}