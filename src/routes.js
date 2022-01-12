import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Pizzas from './pages/pizzas/Pizzas';
import Categorias from './pages/pizzas/Categorias';
import Sabores from './pages/pizzas/Sabores';
import Ingredientes from './pages/pizzas/Ingredientes';

import Acougue from './pages/acougue/Acougue';

import Relatorios from './pages/Relatorios';

import Blog from './pages/Blog';
import Tabela from './pages/Tabela';
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
        { path: 'produtos', element: <Products /> },
        { path: 'pizzas', element: <Pizzas /> },
        { path: 'pizzas/categorias', element: <Categorias /> },
        { path: 'pizzas/sabores', element: <Sabores /> },
        { path: 'pizzas/ingredientes', element: <Ingredientes /> },
        { path: 'pizzas/totens', element: <Categorias /> },

        { path: 'acougue', element: <Acougue /> },
        { path: 'configProd', element: <Products /> },
        { path: 'relatorios', element: <Relatorios /> },
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
