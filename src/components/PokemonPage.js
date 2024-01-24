import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import PokemonCard from './PokemonCard'
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeList, setPokeList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then((response) => response.json())
    .then((data) => setPokeList(data))
  }, [])

  const displayList = pokeList.filter((pokemon) => {
    if(pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true
    }
  })
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
        pokeList={pokeList}
        setPokeList={setPokeList}/>
      <br />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <br />
      <PokemonCollection pokeList={displayList}/>
    </Container>
  );
}

export default PokemonPage;
