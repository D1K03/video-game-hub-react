import CategoryItem from '../CategoryItem/CategoryItem'
import './Sidebar.css'
import { BsStarFill, BsFire, BsSkipForwardFill, BsCalendarDate, BsTrophyFill, BsBarChartFill, BsBalloonFill, BsController, BsDownload, BsFolderFill, BsChatFill, BsGenderAmbiguous, BsPersonFill, BsHash, BsCodeSlash, BsCollectionFill, BsChevronDown, BsWindows, BsPlaystation, BsXbox, BsNintendoSwitch, BsPhone, BsAndroid2 } from 'react-icons/bs'

const OPTIONS = {
    new: [
        {icon: BsStarFill, desc: "Last 30 days"},
        {icon: BsFire, desc: "This week"},
        {icon: BsSkipForwardFill, desc: "Next week"},
        {icon: BsCalendarDate, desc: "Release calendar"}
    ],

    top: [
        {icon: BsTrophyFill, desc: "Best of the year"},
        {icon: BsBarChartFill, desc: "Popular in 2024"},
        {icon: BsBalloonFill, desc: "All time top 250"}
    ],

    browse: [
        {icon: BsController, desc: "Platforms"},
        {icon: BsDownload, desc: "Stores"},
        {icon: BsFolderFill, desc: "Collections"},
        {icon: BsChatFill, desc: "Reviews"},
        {icon: BsGenderAmbiguous, desc: "Genres"},
        {icon: BsPersonFill, desc: "Creators"},
        {icon: BsHash, desc: "Tags"},
        {icon: BsCodeSlash, desc: "Developers"},
        {icon: BsCollectionFill, desc: "Publishers"},
        {icon: BsChevronDown, desc: "Show All"}
    ],

    platforms: [
        {icon: BsWindows, desc: "PC"},
        {icon: BsPlaystation, desc: "Playstation 4"},
        {icon: BsXbox, desc: "Xbox One"},
        {icon: BsNintendoSwitch, desc: "Nintendo Switch"},
        {icon: BsPhone, desc: "iOS"},
        {icon: BsAndroid2, desc: "Android"},
        {icon: BsChevronDown, desc: "Show All"}
    ]
}

export default function Sidebar() {
    return (
        <aside>
            <h2>Home</h2>
            <h2>Reviews</h2>
            <div>
                <h2>New Releases</h2>
                <ul className='category-one'>
                    {OPTIONS.new.map((data, index) => {
                        return <CategoryItem key={index} icon={data.icon} description={data.desc}/>                    
                    })}
                </ul>
            </div>
            <div>
                <h2>Top</h2>
                <ul className='category-two'>
                    {OPTIONS.top.map((data, index) => {
                        return <CategoryItem key={index} icon={data.icon} description={data.desc}/>                    
                    })}
                </ul>
            </div>
            <h2>All Games</h2>
            <div>
                <h2>Browse</h2>
                <ul className='category-three'>
                    {OPTIONS.browse.map((data, index) => {
                        return <CategoryItem key={index} icon={data.icon} description={data.desc}/>                    
                    })}
                </ul>
            </div>
            <div>
                <h2>Platforms</h2>
                <ul className='category-four'>
                    {OPTIONS.platforms.map((data, index) => {
                        return <CategoryItem key={index} icon={data.icon} description={data.desc}/>                    
                    })}
                </ul>
            </div>
            <div>
                <h2>Genres</h2>
                <ul className='category-five'>
                </ul>
            </div>
        </aside>
    )
}