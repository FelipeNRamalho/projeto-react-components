import PaginaFilmes from '../components/PaginaFilmes.jsx'

export default function Catalogo({ favoritos, onAlternarFavorito }) {
  return (
    <PaginaFilmes
      titulo="Catálogo"
      favoritos={favoritos}
      onAlternarFavorito={onAlternarFavorito}
    />
  )
}
