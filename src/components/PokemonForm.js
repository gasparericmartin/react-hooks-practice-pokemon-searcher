import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokeList, setPokeList}) {
  const [pokeObj, setPokeObj] = useState({
                                  id: '',
                                  name: '',
                                  hp: '',
                                  frontUrl: '',
                                  backUrl: ''
  })

  function handleChange(e) {
    setPokeObj({...pokeObj, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    const newPokemon = {
                        id: pokeObj.id,
                        name: pokeObj.name,
                        hp: pokeObj.hp,
                        sprites: {
                          front: pokeObj.frontUrl,
                          back: pokeObj.backUrl
                        }

    }
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
    .then((response) => response.json())
    .then((data) => setPokeList([...pokeList, data]))
  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            onChange={handleChange} 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name"
            value={pokeObj.name} />
          <Form.Input 
            onChange={handleChange}
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp"
            value={pokeObj.hp} />
          <Form.Input
            onChange={handleChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokeObj.front}
          />
          <Form.Input
            onChange={handleChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokeObj.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
