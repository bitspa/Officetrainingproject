
import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        setData(response.data.results.map(({name})=>name));
      });
  }, []);

  return (
    <div>
      List of Pokemons are: 
      <div>{data.map((n,index)=>
        <li> {n}</li>)}
        </div>
    </div>
  );
}

export default EffectTutorial;

