

function PokemonCard(props) {
  console.log(props);
  const pokemon = props.pokemon
  return (
    <figure>
      {pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc}></img> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
