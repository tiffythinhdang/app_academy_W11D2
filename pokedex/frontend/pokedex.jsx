import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

//testing codes
// import { fetchAllPokemons } from './util/api_util';
// import { receiveAllPokemons, requestAllPokemons } from './actions/pokemon_actions';
// import { selectAllPokemons } from './reducers/selectors';
//testing codes

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, rootEl);

  //testing codes
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchAllPokemons = fetchAllPokemons;
  // window.receiveAllPokemons = receiveAllPokemons;
  // window.requestAllPokemons = requestAllPokemons;
  // window.selectAllPokemons = selectAllPokemons;
  //testing codes
});