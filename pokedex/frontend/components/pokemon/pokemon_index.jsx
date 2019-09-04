import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemons();
  }

  render() {
    const pokemonsItems = this.props.pokemons.map(poke => (
      <PokemonIndexItem key={poke.id} poke={poke} />
    ));
    return(
      <section className="pokedex">
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <ul>{pokemonsItems}</ul>
      </section>
    );
  }
};

export default PokemonIndex;