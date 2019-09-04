import { RECEIVE_A_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_A_POKEMON:
      const nextState = {};
      const items = action.poke.items;
      Object.values(items).forEach(item => {
        nextState[item.id] = item;
      });
      return nextState;

    default:
      return state;
  }
};

export default itemsReducer;