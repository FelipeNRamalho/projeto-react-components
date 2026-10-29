import CardFilme from './CardFilme.jsx'
import './ListaFilmes.css'

export default function ListaFilmes({ filmes, favoritos, onAlternarFavorito }) {
  return (
    <ul className="lista-filmes">
      {filmes.map((filme) => (
        <li key={filme.id}>
          <CardFilme
            filme={filme}
            favorito={favoritos.includes(filme.id)}
            onAlternarFavorito={onAlternarFavorito}
          />
        </li>
      ))}
    </ul>
  )
}
