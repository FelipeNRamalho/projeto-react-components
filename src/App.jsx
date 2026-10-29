import { useState } from 'react'
import FiltroFavoritos from './components/FiltroFavoritos.jsx'
import FiltroGenero from './components/FiltroGenero.jsx'
import ListaFilmes from './components/ListaFilmes.jsx'
import { filmes } from './data/filmes.js'

const generos = [...new Set(filmes.map((filme) => filme.genero))].sort((a, b) =>
  a.localeCompare(b, 'pt-BR'),
)

export default function App() {
  const [favoritos, setFavoritos] = useState([])
  const [generoSelecionado, setGeneroSelecionado] = useState('')
  const [somenteFavoritos, setSomenteFavoritos] = useState(false)

  const filmesFiltrados = filmes.filter((filme) => {
    const correspondeAoGenero =
      generoSelecionado === '' || filme.genero === generoSelecionado
    const correspondeAosFavoritos =
      !somenteFavoritos || favoritos.includes(filme.id)

    return correspondeAoGenero && correspondeAosFavoritos
  })

  function alternarFavorito(filmeId) {
    setFavoritos((favoritosAtuais) =>
      favoritosAtuais.includes(filmeId)
        ? favoritosAtuais.filter((id) => id !== filmeId)
        : [...favoritosAtuais, filmeId],
    )
  }

  return (
    <main className="app">
      <header className="app__cabecalho">
        <h1>Catálogo de Filmes</h1>
        <p>Descubra histórias para a sua próxima sessão de cinema.</p>
      </header>

      <div className="app__filtros" role="group" aria-label="Filtros do catálogo">
        <FiltroGenero
          generos={generos}
          generoSelecionado={generoSelecionado}
          onAlterarGenero={setGeneroSelecionado}
        />
        <FiltroFavoritos
          somenteFavoritos={somenteFavoritos}
          onAlterarSomenteFavoritos={setSomenteFavoritos}
        />
      </div>

      <section aria-labelledby="titulo-catalogo">
        <h2 id="titulo-catalogo">
          {somenteFavoritos ? 'Meus favoritos' : 'Catálogo'}
        </h2>
        <p className="app__resultados" role="status">
          {filmesFiltrados.length === 1
            ? '1 filme encontrado'
            : `${filmesFiltrados.length} filmes encontrados`}
        </p>
        <ListaFilmes
          filmes={filmesFiltrados}
          favoritos={favoritos}
          onAlternarFavorito={alternarFavorito}
        />
      </section>
    </main>
  )
}
