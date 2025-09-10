import './GameCards.css';
import tuxIcon from '../../../assets/images/tux.svg'
import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router";
import { BsWindows, BsPlaystation, BsXbox, BsNintendoSwitch, BsPhone, BsAndroid2, BsApple, BsPlus, BsGlobe2 } from 'react-icons/bs';

const RAWG_API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = new URL("https://api.rawg.io/api/games");

const platformMap = {
    1: BsXbox,
    3: BsPhone,
    4: BsWindows,
    5: BsApple,
    7: BsNintendoSwitch,
    16: BsPlaystation,
    21: BsAndroid2,
    171: BsGlobe2
}

const consoleLookup = {
    14: 1,
    186: 1,
    18: 16,
    19: 16,
    187: 16
}

function GameCards() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [games, setGames] = useState([]);

    const checkConsole = (platformId) => {
        if (platformId === 6) {
            return (
            <img src={tuxIcon} alt='Linux'/>
        )}
        const lookupId = consoleLookup[platformId]
        const iconId = lookupId || platformId

        const PlatformIcon = platformMap[iconId]

        let result = PlatformIcon ? <PlatformIcon/> : null

        return result
    }

    useEffect(() => {
        setSearchParams({
            page_size: 20,
            ordering: '-rating,-released'
        })
    }, [])

    useEffect(() => {
        const queryParams = new URLSearchParams(searchParams);
        queryParams.set('key', RAWG_API_KEY);
        const RAWG_URL = `${BASE_URL}?${queryParams.toString()}`;

        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(RAWG_URL);
                if (!response.ok) throw new Error("Failed to fetch...");
                const rawData = await response.json();
                setGames(rawData.results);
            } catch (e) {
                console.error("Failed to fetch games", e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [searchParams])
    
    useEffect(() => {
        if (!games.length) return;
        console.log(games);

    }, [games])

    return (
        <section className='game-section'>
            {
                games.length &&
                games.map((game, index) => {
                    return (
                        <div className='game-card' key={index}>
                            <img src={game.background_image} className='game-image' alt={`${game.name} Image`}/>
                            <div className='game-data'>
                                <p>
                                    {game.platforms.map((console) => {
                                        return (<span key={console.platform.id}>{checkConsole(console.platform.id)}</span>)
                                    })}
                                </p>
                                <h3>{game.name}</h3>
                                <div className='like-button'>
                                    <span>+</span>
                                    <span className='like-count'>100</span>
                                </div>
                                <div className='hover-data'>
                                    <div className='extra-detail'>
                                        <span className='detail-title'>Release date:</span>
                                        <span className='release-date'></span>
                                    </div>
                                    <div className='extra-detail'>
                                        <span className='detail-title'>Genres:</span>
                                        <span className='game-genres'></span>
                                    </div>
                                    <div className='extra-detail'>
                                        <span className='detail-title'>User Score:</span>
                                        <span className='critic-ranking'></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default GameCards;