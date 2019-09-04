import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_A_POKEMON = "RECEIVE_A_POKEMON";

export const receiveAllPokemons = (pokemons) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemons
});

export const receiveAPokemon = (poke) => ({
  type: RECEIVE_A_POKEMON,
  poke
});

export const requestAllPokemons = () => (dispatch) => {
    return APIUtil.fetchAllPokemons()
      .then(pokemons => dispatch(receiveAllPokemons(pokemons)));
};

export const requestSinglePokemon = (pokeId) => (dispatch) => {
  return APIUtil.fetchPokemon(pokeId)
    .then(poke => dispatch(receiveAPokemon(poke)));
  // let res = APIUtil.fetchPokemon(pokeId);
  // res.then(poke => dispatch(receiveAPokemon(poke)));
};