import { useEffect, useRef, useState } from 'react'
import BuscaFilmes from './BuscaFilmes.jsx'
import FiltroGenero from './FiltroGenero.jsx'
import ListaFilmes from './ListaFilmes.jsx'
import { filmes } from '../data/filmes.js'

const generos = [...new Set(filmes.map((filme) => filme.genero))].sort((a, b) =>
  a.localeCompare(b, 'pt-BR'),
)

export default function PaginaFilmes({
  titulo,
  favoritos,
  onAlternarFavorito,
  somenteFavoritos = false,
}) {
  const [generoSelecionado, setGeneroSelecionado] = useState('')
  const [textoBusca, setTextoBusca] = useState('')
  const [termoBusca, setTermoBusca] = useState('')
  const tituloPaginaRef = useRef(null)

  useEffect(() => {
    document.title = `${titulo} | Catálogo de Filmes`
    tituloPaginaRef.current?.focus()
  }, [titulo])

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

  function limparFiltros() {
    setGeneroSelecionado('')
    limparBusca()
    tituloPaginaRef.current?.focus()
  }

  function alternarFavorito(filmeId) {
    onAlternarFavorito(filmeId)

    if (somenteFavoritos) {
      tituloPaginaRef.current?.focus()
    }
  }

  return (
    <section aria-labelledby="titulo-pagina">
      <h2
        id="titulo-pagina"
        className="pagina__titulo"
        ref={tituloPaginaRef}
        tabIndex={-1}
      >
        {titulo}
      </h2>

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
      </div>

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
  )
}
