import { useEffect, useRef } from 'react'
import { Link } from 'react-router'

export default function PaginaNaoEncontrada() {
  const tituloPaginaRef = useRef(null)

  useEffect(() => {
    document.title = 'Página não encontrada | Catálogo de Filmes'
    tituloPaginaRef.current?.focus()
  }, [])

  return (
    <section aria-labelledby="titulo-pagina">
      <h2
        id="titulo-pagina"
        className="pagina__titulo"
        ref={tituloPaginaRef}
        tabIndex={-1}
      >
        Página não encontrada
      </h2>
      <p>O endereço que você tentou acessar não existe.</p>
      <Link className="app__link-retorno" to="/">
        Voltar ao catálogo
      </Link>
    </section>
  )
}
