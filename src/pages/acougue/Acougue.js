import faker from 'faker/locale/pt_BR';
import bxsShoppingBag from '@iconify/icons-bx/bxs-shopping-bag';
import shoppingCart from '@iconify/icons-el/shopping-cart';
import moneyAlt from '@iconify/icons-dashicons/money-alt';
import packageV from '@iconify/icons-mdi/package-variant';
// material
import { Box, Grid, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// components
import Page from '../../components/Page';
import {
  AppCardInfo,
  AppGraficoLA,
  AppCardAtualizacoes,
  AppTimeline,
  AppGraficoPizza,
  AppGraficoBarra
} from '../../components/_dashboard/app';
// utils
import { mockImgCover } from '../../utils/mockImages';

// ----------------------------------------------------------------------
const CHART_LINE = {
  series: [
    {
      name: 'Produto A',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 20]
    },
    {
      name: 'Produto B',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 52]
    },
    {
      name: 'Produto B',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 30]
    }
  ],
  title: 'Vendas Anuais',
  description: '(+17%) que no último ano',
  xaxis: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  labelsData: [
    '01/01/2021',
    '02/01/2021',
    '03/01/2021',
    '04/01/2021',
    '05/01/2021',
    '06/01/2021',
    '07/01/2021',
    '08/01/2021',
    '09/01/2021',
    '10/01/2021',
    '11/01/2021',
    '12/01/2021'
  ]
};

const PIZZA_CHART = {
  title: 'Gráfico em Pizza',
  series: [4344, 5435, 1443, 4443],
  labelsData: ['A', 'B', 'C', 'D']
};

const BARRA_CHART = {
  title: 'Gráfico em Barra',
  description: '(+10%) que no último mês',
  series: [{ data: [400, 580, 690, 1100, 1200, 1380] }],
  xaxis: ['A', 'B', 'C', 'D', 'E', 'F']
};

const NEWS = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;
  return {
    title: faker.name.title(),
    description: faker.lorem.paragraphs(),
    image: mockImgCover(setIndex),
    postedAt: faker.date.soon()
  };
});

export default function Acougue() {
  const theme = useTheme();

  const CARD1 = {
    value: 14000,
    title: 'Vendas Totais',
    icon: bxsShoppingBag,
    color: theme.palette.primary.darker,
    bgColor: theme.palette.primary.lighter,
    color2: theme.palette.primary.dark
  };
  const CARD2 = {
    value: 573,
    title: 'Vendas Diárias',
    icon: shoppingCart,
    color: theme.palette.info.darker,
    bgColor: theme.palette.info.lighter,
    color2: theme.palette.info.dark
  };
  const CARD3 = {
    value: 53450,
    title: 'Receita Mensal',
    icon: moneyAlt,
    color: theme.palette.success.darker,
    bgColor: theme.palette.success.lighter,
    color2: theme.palette.success.dark
  };
  const CARD4 = {
    value: 15000,
    title: 'Pedidos Totais',
    icon: packageV,
    color: theme.palette.warning.darker,
    bgColor: theme.palette.warning.lighter,
    color2: theme.palette.warning.dark
  };

  return (
    <Page title="Dashboard | Açougue">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Relatórios | Açougue</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppCardInfo data={CARD1} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppCardInfo data={CARD2} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppCardInfo data={CARD3} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppCardInfo data={CARD4} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppGraficoLA chartData={CHART_LINE} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppGraficoPizza chartData={PIZZA_CHART} />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppGraficoBarra chartData={BARRA_CHART} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppCardAtualizacoes data={NEWS} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTimeline />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
