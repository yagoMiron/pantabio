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
        <Home />
        <Sobre />
        <Tecnologia />
        <Solucoes />
        <Validacoes />
        <Equipe />
        <Servicos />
        <Contato />
        <Footer />
      </div>
    </div>
  );
}

export default App;
