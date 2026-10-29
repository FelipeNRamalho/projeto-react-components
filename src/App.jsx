import { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router'
import Catalogo from './pages/Catalogo.jsx'
import Favoritos from './pages/Favoritos.jsx'
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada.jsx'
import { carregarFavoritos, salvarFavoritos } from './utils/favoritosStorage.js'

export default function App() {
  const [favoritos, setFavoritos] = useState(carregarFavoritos)

  useEffect(() => {
    salvarFavoritos(favoritos)
  }, [favoritos])

  function alternarFavorito(filmeId) {
    setFavoritos((favoritosAtuais) =>
      favoritosAtuais.includes(filmeId)
        ? favoritosAtuais.filter((id) => id !== filmeId)
        : [...favoritosAtuais, filmeId],
    )
  }

  return (
    <div className="app">
      <header className="app__cabecalho">
        <h1>Catálogo de Filmes</h1>
        <p>Descubra histórias para a sua próxima sessão de cinema.</p>
        <nav className="app__navegacao" aria-label="Navegação principal">
          <NavLink to="/" end>
            Catálogo
          </NavLink>
          <NavLink to="/favoritos" end>
            Favoritos
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Catalogo
                favoritos={favoritos}
                onAlternarFavorito={alternarFavorito}
              />
            }
          />
          <Route
            path="/favoritos"
            element={
              <Favoritos
                favoritos={favoritos}
                onAlternarFavorito={alternarFavorito}
              />
            }
          />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
      </main>
    </div>
  )
}
