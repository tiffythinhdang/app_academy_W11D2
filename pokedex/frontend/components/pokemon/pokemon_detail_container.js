import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
  return (
    {
      pokeId: ownProps.match.params.pokemonId,
      poke: state.entities.pokemon[ownProps.match.params.pokemonId]
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (pokeId) => dispatch(requestSinglePokemon(pokeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);