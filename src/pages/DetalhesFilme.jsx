import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router'
import BotaoFavorito from '../components/BotaoFavorito.jsx'
import { filmes } from '../data/filmes.js'
import './DetalhesFilme.css'

export default function DetalhesFilme({ favoritos, onAlternarFavorito }) {
  const { id } = useParams()
  const filme = filmes.find((item) => String(item.id) === id)
  const titulo = filme?.titulo ?? 'Filme não encontrado'
  const tituloPaginaRef = useRef(null)

  useEffect(() => {
    document.title = `${titulo} | Catálogo de Filmes`
    tituloPaginaRef.current?.focus()
  }, [titulo, id])

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

      {filme ? (
        <div className="detalhes-filme">
          <img
            className="detalhes-filme__poster"
            src={filme.poster}
            alt={`Pôster do filme ${filme.titulo}`}
            width="500"
            height="750"
            decoding="async"
          />
          <div>
            <dl className="detalhes-filme__ficha">
              <div>
                <dt>Gênero</dt>
                <dd>{filme.genero}</dd>
              </div>
              <div>
                <dt>Ano de lançamento</dt>
                <dd>{filme.ano}</dd>
              </div>
            </dl>

            <h3 className="detalhes-filme__subtitulo">Sinopse</h3>
            <p className="detalhes-filme__sinopse">{filme.sinopse}</p>

            <div className="detalhes-filme__acoes">
              <BotaoFavorito
                filme={filme}
                favorito={favoritos.includes(filme.id)}
                onAlternarFavorito={onAlternarFavorito}
              />
            </div>
          </div>
        </div>
      ) : (
        <p>O filme que você tentou acessar não está cadastrado no catálogo.</p>
      )}

      <Link className="app__link-retorno" to="/">
        Voltar ao catálogo
      </Link>
    </section>
  )
}
