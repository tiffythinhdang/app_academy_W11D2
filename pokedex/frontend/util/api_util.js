export const fetchAllPokemons = () => {
  return (
    $.ajax({
    url: '/api/pokemons',
    method: 'GET'
    })
  );
};

export const fetchPokemon = (pokeId) => {
  return (
    $.ajax({
      url: `/api/pokemons/${pokeId}`,
      method: 'GET'
    })
  );
};