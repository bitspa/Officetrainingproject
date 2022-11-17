import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        setData(response.data.results.map(({name})=><li key={name}>{name}</li>));
      });
  }, []);

  return (
    <div>
      List of Pokemons are: 
      <div>
        {data}
        </div>
    </div>
  );
}

export default EffectTutorial;
