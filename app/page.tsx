import Contato from "./components/Contato";
import { Elementos } from "./components/Elementos";
import Footer from "./components/Footer";
import Habilidades from "./components/Habilidades";
import Header from "./components/Header";
import Home from "./components/Home";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <Header />
      <Elementos />
      <Home />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer /> 
    </div>
  );
}
