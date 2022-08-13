import { Link } from 'react-router-dom'
import './error.css'

export default function Error() {
    return (
        <div className="container">
           <img src="./error-404.png" alt="imagem 404" />   
           <h1>Página não encontrada!</h1>
           <Link
             className="link-to-home"
             to="/">
                Voltar para home
           </Link>
        </div>
    )
}