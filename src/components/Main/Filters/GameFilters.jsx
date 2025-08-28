import { BsChevronDown } from 'react-icons/bs';
import './GameFilters.css'

export default function GameFilters() {
    return (
        <section className='page-options'>
            <div className='game-filters'>
                <div>
                    <p><span className='order-filter-spacing'>Order by:<span className='bold-filter'>Relevance</span></span> <BsChevronDown className='dropdown-chevron'/></p>
                </div>
                <div>
                    <p><span className='platform-spacing'>Platforms</span> <BsChevronDown className='dropdown-chevron'/></p>
                </div>
            </div>
            <span className='page-formats'>
                <span>Display options:</span>
                <div>
                    <div className='format-row'>
                        {Array.from({length: 6}, (_,index) => (
                            <div key={index}></div>
                        ))}
                    </div>
                    <div className='format-column'>
                        <div className='format-column-sub'>
                            {Array.from({length: 3}, (_,index) => (
                                <div key={index}></div>
                            ))}
                        </div>
                    </div>
                </div>  
            </span>
        </section>
    )
}