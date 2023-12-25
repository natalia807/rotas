import { Link } from 'react-router-dom';

function Contato(){
    return(
        <div>
            <h1>Página Contato</h1>
            <span>Contato da empresa (dd) 123323-234</span><br/>

            <Link to='/'>Home</Link><br/>
            <Link to='/sobre'>Sobre</Link>
        </div>
    )
}

export default Contato;