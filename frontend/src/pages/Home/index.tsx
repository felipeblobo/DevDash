import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="jumbotron my-4 bg-light ">
            <h1 className="display-4">DevDash</h1>
            <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
            <hr/>
            <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
            <Link id='dashButton' className=' btn bg-primary btn-lg' to='/dashboard'>
              Acessar Dashboard
            </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;