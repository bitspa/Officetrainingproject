import React, { useState, useEffect } from "react";
function EffectTutorial() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=100"
            );
            const data = await response.json();
            setPokemons(data.results);
        };

        fetchData();
    }, []);

    return (
        <ul>
            {pokemons.map(({ name, url }) => (
                <li key={url}>{name}</li>
            ))}
        </ul>
    );
};
export default EffectTutorial
