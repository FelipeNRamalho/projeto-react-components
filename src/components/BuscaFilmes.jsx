import { useRef } from 'react'
import './BuscaFilmes.css'

export default function BuscaFilmes({
  textoBusca,
  termoBusca,
  onAlterarTextoBusca,
  onBuscar,
  onLimparBusca,
}) {
  const campoBuscaRef = useRef(null)

  function enviarBusca(event) {
    event.preventDefault()
    onBuscar()
  }

  function limparBusca() {
    onLimparBusca()
    campoBuscaRef.current?.focus()
  }

  return (
    <form
      className="busca-filmes"
      role="search"
      aria-label="Busca de filmes"
      onSubmit={enviarBusca}
    >
      <label className="busca-filmes__label" htmlFor="busca-titulo">
        Buscar por título
      </label>
      <div className="busca-filmes__controles">
        <input
          className="busca-filmes__input"
          id="busca-titulo"
          name="titulo"
          type="search"
          placeholder="Ex.: Toy Story"
          aria-describedby="ajuda-busca"
          ref={campoBuscaRef}
          value={textoBusca}
          onChange={(event) => onAlterarTextoBusca(event.target.value)}
        />
        <button className="busca-filmes__buscar" type="submit">
          Buscar
        </button>
        <button
          className="busca-filmes__limpar"
          type="button"
          disabled={!textoBusca && !termoBusca}
          onClick={limparBusca}
        >
          Limpar busca
        </button>
      </div>
      <p className="busca-filmes__ajuda" id="ajuda-busca">
        Digite o título e clique em Buscar ou pressione Enter.
      </p>
    </form>
  )
}
