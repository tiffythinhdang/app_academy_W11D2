import { connect } from 'react-redux';
import { selectAllPokemons } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';
import { requestAllPokemons } from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
  pokemons: selectAllPokemons(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemons: () => dispatch(requestAllPokemons())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex); 
