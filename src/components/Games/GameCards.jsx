import './GameCards.css'
import { BsChevronDown } from 'react-icons/bs';

export default function GameCards() {
    return (
        <main>
            <section className='page-topic'>
                <h2>New and Trending</h2>
                <p>Based on player counts and release</p>
            </section>
            <section className='page-options'>
                <div className='game-filters'>
                    <div>
                        <p><span className='order-filter-spacing'>Order by:<span className='bold-filter'>Relevance</span></span> <BsChevronDown className='dropdown-chevron'/></p>
                    </div>
                    <div>
                        <p>Platforms <BsChevronDown className='dropdown-chevron'/></p>
                    </div>
                </div>
                <div className='page-formats'>
                    <span></span>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </section>
            <section className='game-section'></section>
        </main>
    )
}