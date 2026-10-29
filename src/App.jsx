import { useEffect, useRef, useState } from 'react'
import BuscaFilmes from './components/BuscaFilmes.jsx'
import FiltroFavoritos from './components/FiltroFavoritos.jsx'
import FiltroGenero from './components/FiltroGenero.jsx'
import ListaFilmes from './components/ListaFilmes.jsx'
import { filmes } from './data/filmes.js'
import { carregarFavoritos, salvarFavoritos } from './utils/favoritosStorage.js'

const generos = [...new Set(filmes.map((filme) => filme.genero))].sort((a, b) =>
  a.localeCompare(b, 'pt-BR'),
)

export default function App() {
  const [favoritos, setFavoritos] = useState(carregarFavoritos)
  const [generoSelecionado, setGeneroSelecionado] = useState('')
  const [somenteFavoritos, setSomenteFavoritos] = useState(false)
  const [textoBusca, setTextoBusca] = useState('')
  const [termoBusca, setTermoBusca] = useState('')
  const tituloCatalogoRef = useRef(null)

  useEffect(() => {
    salvarFavoritos(favoritos)
  }, [favoritos])

  const termoNormalizado = termoBusca.toLocaleLowerCase('pt-BR')

  const filmesFiltrados = filmes.filter((filme) => {
    const correspondeAoGenero =
      generoSelecionado === '' || filme.genero === generoSelecionado
    const correspondeAosFavoritos =
      !somenteFavoritos || favoritos.includes(filme.id)
    const correspondeAoTitulo = filme.titulo
      .toLocaleLowerCase('pt-BR')
      .includes(termoNormalizado)

    return correspondeAoGenero && correspondeAosFavoritos && correspondeAoTitulo
  })

  function buscarFilmes() {
    setTermoBusca(textoBusca.trim())
  }

  function limparBusca() {
    setTextoBusca('')
    setTermoBusca('')
  }

  function alternarFavorito(filmeId) {
    setFavoritos((favoritosAtuais) =>
      favoritosAtuais.includes(filmeId)
        ? favoritosAtuais.filter((id) => id !== filmeId)
        : [...favoritosAtuais, filmeId],
    )

    if (somenteFavoritos) {
      tituloCatalogoRef.current?.focus()
    }
  }

  function limparFiltros() {
    setGeneroSelecionado('')
    setSomenteFavoritos(false)
    limparBusca()
    tituloCatalogoRef.current?.focus()
  }

  return (
    <main className="app">
      <header className="app__cabecalho">
        <h1>Catálogo de Filmes</h1>
        <p>Descubra histórias para a sua próxima sessão de cinema.</p>
      </header>

      <BuscaFilmes
        textoBusca={textoBusca}
        termoBusca={termoBusca}
        onAlterarTextoBusca={setTextoBusca}
        onBuscar={buscarFilmes}
        onLimparBusca={limparBusca}
      />

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
        <h2
          id="titulo-catalogo"
          className="app__titulo-catalogo"
          ref={tituloCatalogoRef}
          tabIndex={-1}
        >
          {somenteFavoritos ? 'Meus favoritos' : 'Catálogo'}
        </h2>
        <p className="app__resultados" role="status">
          {filmesFiltrados.length === 1
            ? '1 filme encontrado'
            : `${filmesFiltrados.length} filmes encontrados`}
          {termoBusca && (
            <>
              {' para '}
              <strong>“{termoBusca}”</strong>
            </>
          )}
        </p>
        <ListaFilmes
          filmes={filmesFiltrados}
          favoritos={favoritos}
          onAlternarFavorito={alternarFavorito}
          somenteFavoritos={somenteFavoritos}
          generoSelecionado={generoSelecionado}
          termoBusca={termoBusca}
          onLimparFiltros={limparFiltros}
        />
      </section>
    </main>
  )
}
