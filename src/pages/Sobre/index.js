import { Link } from 'react-router-dom';

function Sobre() {
    return (
      <div>
       <h1>Página sobre a empresa</h1><br/>

       <Link to="/">Pagina Home</Link><br/>
       <Link to="/contato">Contato</Link>
      </div>
    );
  }
  
  export default Sobre;