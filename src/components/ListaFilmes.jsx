import CardFilme from './CardFilme.jsx'
import './ListaFilmes.css'

export default function ListaFilmes({ filmes }) {
  return (
    <ul className="lista-filmes">
      {filmes.map((filme) => (
        <li key={filme.id}>
          <CardFilme filme={filme} />
        </li>
      ))}
    </ul>
  )
}
