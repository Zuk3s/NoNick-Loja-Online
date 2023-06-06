import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import AdministracaoRestaurantes from './paginas/Administracao/Produtos/AdministracaoProdutos';
import FormularioProdutos from './paginas/Administracao/Produtos/FormularioProdutos';
import NavBarAdmin from './paginas/Administracao/NavBarAdmin';
import VitrineProdutos from './paginas/VitrineProdutos';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<VitrineProdutos />} />

      <Route path='/admin' element={<NavBarAdmin />}>
        <Route path='produtos' element={<AdministracaoRestaurantes />} />
        <Route path='produtos/novo' element={<FormularioProdutos />} />
        <Route path='produtos/:id' element={<FormularioProdutos />} />
      </Route>
    </Routes>
  );
}

export default App;