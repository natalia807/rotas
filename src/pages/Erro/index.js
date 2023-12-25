import { Link } from 'react-router-dom'

function Erro(){
    return(
        <div>
            <h2>Ops parece que essa pagina não existe!</h2><br/>

            <span>Encontramos essas páginas aqui:</span><br/>
            <Link to="/">Home</Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>Contato</Link>

        </div>
    )
}

export default Erro;