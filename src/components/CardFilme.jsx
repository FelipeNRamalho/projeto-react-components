import './CardFilme.css'

export default function CardFilme({ filme }) {
  return (
    <article className="card-filme">
      <span className="card-filme__genero">{filme.genero}</span>
      <h3 className="card-filme__titulo">{filme.titulo}</h3>
      <p className="card-filme__ano">Lançamento: {filme.ano}</p>
    </article>
  )
}
