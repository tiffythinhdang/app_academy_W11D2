import { RECEIVE_ALL_POKEMON, RECEIVE_A_POKEMON } from '../actions/pokemon_actions';
import entitiesReducer from './entities_reducer';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, state, action.pokemons);

    case RECEIVE_A_POKEMON:
      let nextState = Object.assign({}, state);
      nextState[action.poke.pokemon.id] = action.poke.pokemon;
      return nextState;
  
    default:
      return state;
  }
};

export default pokemonReducer;