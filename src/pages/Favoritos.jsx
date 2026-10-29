import PaginaFilmes from '../components/PaginaFilmes.jsx'

export default function Favoritos({ favoritos, onAlternarFavorito }) {
  return (
    <PaginaFilmes
      titulo="Meus favoritos"
      favoritos={favoritos}
      onAlternarFavorito={onAlternarFavorito}
      somenteFavoritos
    />
  )
}
