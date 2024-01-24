import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeList}) {
  const cards = pokeList.map((pokemon) => {
    return <PokemonCard pokemon={pokemon} key={pokemon.id}/>
  })
  
  return (
    <Card.Group itemsPerRow={6}>{cards}</Card.Group>
  );
}

export default PokemonCollection;
