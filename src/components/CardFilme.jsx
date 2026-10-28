import './CardFilme.css'

export default function CardFilme({ filme }) {
  return (
    <article className="card-filme">
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
        <h3 className="card-filme__titulo">{filme.titulo}</h3>
        <p className="card-filme__ano">Lançamento: {filme.ano}</p>
      </div>
    </article>
  )
}
