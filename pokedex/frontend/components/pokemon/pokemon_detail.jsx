import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
   
    this.displayDetail = this.displayDetail.bind(this);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.pokeId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pokeId !== this.props.pokeId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }

  displayDetail(poke) {
    if (poke.moves) {
      return (
        <ul>
          <li>Attack: {poke.attack}</li>
          <li>Defense: {poke.defense}</li>
          <li>Type: {poke.poke_type}</li>
          <li>Moves: {poke.moves.join(", ")}</li>
        </ul>
      );
    } else {
      return "";
    }
  }

  render() {
    const poke = this.props.poke;
    return (
      <div>
        <p><img src={poke.image_url}/></p>
        <h3>{poke.name}</h3>
        {this.displayDetail(poke)}
      </div>
    );
  };
}

export default PokemonDetail;