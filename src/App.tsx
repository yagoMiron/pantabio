import "./App.css";
import Header from "./components/Header";
import Sobre from "./components/Sobre/indext";
import Tecnologia from "./components/Tecnologia";
import Solucoes from "./components/Solucao";
import Validacoes from "./components/Validacoes";
import Equipe from "./components/Equipe";
import Servicos from "./components/Servicos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <section id="home">
          <Home />
        </section>
        <section id="sobre">
          <Sobre />
        </section>
        <section id="tecnologia">
          <Tecnologia />
        </section>
        <section id="solucoes">
          <Solucoes />
        </section>
        <section id="validacoes">
          <Validacoes />
        </section>
        <section id="equipe">
          <Equipe />
        </section>
        <section id="servicos">
          <Servicos />
        </section>
        <section id="contato">
          <Contato />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
