const pokemonSection = document.getElementById("pokemon-section");

function adicionarNovoPokemon(pokemon) {
  const tipos = pokemon.types.map((tipo) => tipo.type);
  console.log(tipos)

  pokemonSection.innerHTML += `
    <div class="pokemon-card">
      <img src="${pokemon.sprites.front_default}" alt="Imagem do ${pokemon.name}" />
      <small>Nº ${pokemon.id}</small>

      <strong>${pokemon.name}</strong>

      <div id="tipos-${pokemon.name}"></div>
    </div>
  `;

  const tiposDiv = document.getElementById(`tipos-${pokemon.name}`);
  tipos.map(tipo => tiposDiv.innerHTML += `<span class="${tipo.name}">${tipo.name}</span>`)
}

const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    types: [
      { type: { name: "grass" } },
      { type: { name: "poison" } }
    ]
  },
  {
    id: 4,
    name: "charmander",
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    types: [
      { type: { name: "fire" } }
    ]
  },
  {
    id: 7,
    name: "squirtle",
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    types: [
      { type: { name: "water" } }
    ]
  },
  {
    id: 25,
    name: "pikachu",
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    types: [
      { type: { name: "electric" } }
    ]
  },
  {
    id: 39,
    name: "jigglypuff",
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
    },
    types: [
      { type: { name: "normal" } },
      { type: { name: "fairy" } }
    ]
  },
  {
    id: 150,
    name: "mewtwo",
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
    },
    types: [
      { type: { name: "psychic" } }
    ]
  }
];

pokemons.forEach(adicionarNovoPokemon)