import './Central.css'
import GameFilters from './Filters/GameFilters'
import GameCards from './Games/GameCards'

export default function MainComponent() {
    return (
        <main>
            <section className='page-topic'>
                <h2>New and Trending</h2>
                <p>Based on player counts and release</p>
            </section>
            <GameFilters/>
            <GameCards/>
        </main>
    )
}