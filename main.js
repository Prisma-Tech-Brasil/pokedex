const pokemonSection = document.getElementById("pokemon-section");

function adicionarNovoPokemon(pokemon) {
  const tipos = pokemon.types.map((tipo) => tipo.type);

  pokemonSection.innerHTML += `
    <div class="pokemon-card">
      <img src="${pokemon.sprites.front_default}" alt="Imagem do ${pokemon.name}" />
      <small>Nº ${pokemon.id}</small>

      <strong>${pokemon.name}</strong>

      <div id="tipos-${pokemon.name}"></div>
    </div>
  `;

  const tiposDiv = document.getElementById(`tipos-${pokemon.name}`);
  tipos.map(
    (tipo) =>
      (tiposDiv.innerHTML += `<span class="${tipo.name}">${tipo.name}</span>`)
  );
}

const URL = "https://pokeapi.co/api/v2";

async function buscarPokemons() {
  const resposta = await fetch(URL + "/pokemon&limit=20");

  const dados = await resposta.json();
  console.log(dados);

  const pokemons = dados.results;

  const todos = await Promise.all(
    pokemons.map(async (pokemon) => {
      const resposta = await fetch(pokemon.url);

      const dados = await resposta.json();

      return dados;
    })
  );

  return todos;
}

const pokemons = buscarPokemons().then((pokemons) => {
  pokemons.forEach(adicionarNovoPokemon);
});
