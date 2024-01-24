import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [isFront, setIsFront] = useState(true)

  function handleClick() {
    setIsFront(!isFront)
  }
  
  return (
    <Card>
      <div>
        <div className="image">
          {isFront ? <img src={pokemon.sprites.front} 
                          alt={pokemon.name}
                          onClick={handleClick}/> :
                    <img src={pokemon.sprites.back} 
                          alt={pokemon.name}
                          onClick={handleClick}/>}
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
