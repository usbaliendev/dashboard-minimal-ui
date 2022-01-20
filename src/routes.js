import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';

import DashboardApp from './pages/DashboardApp';
import Pizzas from './pages/pizzas/Pizzas';
import Acougue from './pages/acougue/Acougue';

import Categorias from './pages/pizzas/Categorias';
import Sabores from './pages/pizzas/Sabores';
import Ingredientes from './pages/pizzas/Ingredientes';
import Totens from './pages/pizzas/Totens';

import Produtos from './pages/acougue/Produtos';
import TabelaPrecos from './pages/acougue/TabelaPrecos';
import PaineisTelas from './pages/acougue/PaineisTelas';

import Relatorios from './pages/Relatorios';

import CfgProdutos from './pages/config/CfgProdutos';
import CfgUsers from './pages/config/CfgUsers';
import CfgLojas from './pages/config/CfgLojas';

import Tabela from './pages/Tabela';
import Products from './pages/Products';
import Blog from './pages/Blog';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },

        { path: 'pizzas/categorias', element: <Categorias /> },
        { path: 'pizzas/sabores', element: <Sabores /> },
        { path: 'pizzas/ingredientes', element: <Ingredientes /> },
        { path: 'pizzas/totens', element: <Totens /> },

        { path: 'acougue/produtos', element: <Produtos /> },
        { path: 'acougue/tabelaprecos', element: <TabelaPrecos /> },
        { path: 'acougue/paineis&telas', element: <PaineisTelas /> },

        { path: 'relatorios/pizzas', element: <Pizzas /> },
        { path: 'relatorios/acougue', element: <Acougue /> },

        { path: 'config/produtos', element: <CfgProdutos /> },
        { path: 'config/usuarios', element: <CfgUsers /> },
        { path: 'config/lojas', element: <CfgLojas /> },

        { path: 'tabela', element: <Tabela /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'faq', element: <Blog /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
