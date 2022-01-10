import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import pizzaFill from '@iconify/icons-fluent/food-pizza-20-filled';
import meatIcon from '@iconify/icons-tabler/meat';
import areaChartOutlined from '@iconify/icons-ant-design/area-chart-outlined';
import cogIcon from '@iconify/icons-heroicons-solid/cog';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'produtos',
    path: '/dashboard/produtos',
    icon: getIcon(shoppingBagFill),
    children: [
      {
        title: 'Pizzas',
        path: '/dashboard/produtos/pizzas'
      },
      {
        title: 'Açougue',
        path: '/dashboard/produtos/acougue'
      },
      {
        title: 'Config Produtos',
        path: '/dashboard/produtos/configProd'
      }
    ]
  },
  {
    title: 'pizzas',
    path: '/dashboard/pizzas',
    icon: getIcon(pizzaFill),
    children: [
      {
        title: 'Categorias',
        path: '/dashboard/pizzas/categorias'
      },
      {
        title: 'Sabores',
        path: '/dashboard/pizzas/sabores'
      },
      {
        title: 'Ingredientes',
        path: '/dashboard/pizzas/ingredientes'
      },
      {
        title: 'Totens',
        path: '/dashboard/pizzas/totens'
      }
    ]
  },
  {
    title: 'açougue',
    path: '/dashboard/acougue',
    icon: getIcon(meatIcon),
    children: [
      {
        title: 'Produtos',
        path: '/dashboard/acougue/produtos'
      },
      {
        title: 'Tabela de Preços',
        path: '/dashboard/acougue/tabelaprecos'
      },
      {
        title: 'Paineis/Telas',
        path: '/dashboard/acougue/paineis&telas'
      }
    ]
  },
  {
    title: 'relatórios',
    path: '/dashboard/relatorios',
    icon: getIcon(areaChartOutlined)
  },
  {
    title: 'Configurações',
    path: '/dashboard/config',
    icon: getIcon(cogIcon),
    children: [
      {
        title: 'Sistema',
        path: '/dashboard/config/sistema'
      },
      {
        title: 'Usuários',
        path: '/dashboard/config/usuarios'
      },
      {
        title: 'Lojas',
        path: '/dashboard/config/lojas'
      }
    ]
  },
  {
    title: 'tabela',
    path: '/dashboard/tabela',
    icon: getIcon(peopleFill)
  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon(lockFill)
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon(personAddFill)
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon(alertTriangleFill)
  }
];

export default sidebarConfig;
