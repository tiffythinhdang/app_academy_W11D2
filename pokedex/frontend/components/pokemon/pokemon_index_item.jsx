import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = function ( { poke } ) {
  return (
    <li key={poke.id}>
      <Link to={`/pokemon/${poke.id}`}>
        {poke.name}
        <img src={poke.image_url} />
      </Link>
    </li>
  )
}

// class PokemonIndexItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const poke = this.props.poke;
//     return (
//       <li key={poke.id}>
//         {poke.name}
//         <img src={poke.image_url} />
//       </li>
//     );
//   }
// }

// export default PokemonIndexItem;