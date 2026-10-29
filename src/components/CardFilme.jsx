import { Link } from 'react-router'
import BotaoFavorito from './BotaoFavorito.jsx'
import './CardFilme.css'

export default function CardFilme({ filme, favorito, onAlternarFavorito }) {
  return (
    <article className="card-filme" aria-labelledby={`filme-${filme.id}`}>
      <img
        className="card-filme__poster"
        src={filme.poster}
        alt={`Pôster do filme ${filme.titulo}`}
        width="500"
        height="750"
        loading="lazy"
        decoding="async"
      />

      <div className="card-filme__conteudo">
        <span className="card-filme__genero">{filme.genero}</span>
        <h3 className="card-filme__titulo" id={`filme-${filme.id}`}>
          <Link to={`/filmes/${filme.id}`}>{filme.titulo}</Link>
        </h3>
        <p className="card-filme__ano">Lançamento: {filme.ano}</p>
        <BotaoFavorito
          className="card-filme__favorito"
          filme={filme}
          favorito={favorito}
          onAlternarFavorito={onAlternarFavorito}
        />
      </div>
    </article>
  )
}
