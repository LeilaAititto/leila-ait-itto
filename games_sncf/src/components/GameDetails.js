import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const GameDetails = () => {
    const { id } = useParams()
    const [result, setResult] = useState({})
    useEffect(() => {
        axios
            .get(`https://apis.wilders.dev/wild-games/games/${id}`)
            .then((response) => setResult(response.data))
            .catch("error")
    }, [])
    return (
        <div>
            <h1>{result.name}</h1>
            <img src={result.background_image} height="120px" alt={result.name}></img>
            <p>{result.released}</p>
        </div>
    );
};
export default GameDetails;