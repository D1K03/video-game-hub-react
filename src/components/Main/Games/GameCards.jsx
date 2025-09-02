import './GameCards.css';
import tuxIcon from '../../../assets/images/tux.svg'
import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router";
import { BsWindows, BsPlaystation, BsXbox, BsNintendoSwitch, BsPhone, BsAndroid2, BsApple } from 'react-icons/bs';

const RAWG_API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = new URL("https://api.rawg.io/api/games");

const platformMap = {
    "PC": BsWindows,
    "Xbox": BsXbox,
    "PlayStation": BsPlaystation,
    "PS": BsPlaystation,
    "Android": BsAndroid2,
    "macOS": BsApple,
    "iOS": BsPhone,
    "Linux": tuxIcon,
    "Nintendo": BsNintendoSwitch
}

function GameCards() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [games, setGames] = useState([]);

    const checkConsole = (platform) => {
        const keys = Object.keys(platformMap);

        for (const key of keys) {
            if (platform.includes(key)) {
                return platformMap[key];
            }
        }
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
                                    {game.platforms.map((console, index) => {
                                        return (<span key={index}>{checkConsole(console.platform.name)}</span>)
                                    })}
                                </p>
                                <h3>{game.name}</h3>
                                <div class="like-button">
                                    <i class="bi bi-plus"></i>
                                    <span class="like-count"></span>
                                </div>
                                <div class="hover-data">
                                    <div class="extra-detail">
                                        <span class="detail-title">Release date:</span>
                                        <span class="release-date"></span>
                                    </div>
                                    <div class="extra-detail">
                                        <span class="detail-title">Genres:</span>
                                        <span class="game-genres"></span>
                                    </div>
                                    <div class="extra-detail">
                                        <span class="detail-title">User Score:</span>
                                        <span class="critic-ranking"></span>
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