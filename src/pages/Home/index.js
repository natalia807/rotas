import { Link } from 'react-router-dom';


function Home() {
    return (
      <div>
       <h1>Bem vindo a página Home</h1>
       <span>Sujeito Programador</span><br/>

       <Link to="/sobre">Sobre</Link><br/>
       <Link to="/contato">Contato</Link>

       <hr/>

       <Link to="/produto/123">Acessar Produto 12345</Link>
      </div>
    );
  }
  
  export default Home;