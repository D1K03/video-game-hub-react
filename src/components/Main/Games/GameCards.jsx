import './GameCards.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router";

const RAWG_API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = new URL("https://api.rawg.io/api/games");

function GameCards() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [games, setGames] = useState([]);


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
                                        return (<span key={index}>{console.platform.name}</span>)
                                    })}
                                </p>
                                <h3>{game.name}</h3>
                                <div class="like-button">
                                    <i class="bi bi-plus"></i>
                                    <span class="like-count"></span>
                                </div>
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
                    )
                })
            }
        </section>
    )
}

export default GameCards;