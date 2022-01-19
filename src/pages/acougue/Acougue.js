// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import {
  AppCardVendasD,
  AppCardVendasT,
  AppCardPedidosT,
  AppCardReceitaM,
  AppGraficoLA,
  AppTasks,
  AppCardAtualizacoes,
  AppOrderTimeline,
  AppGraficoPizza,
  AppTrafficBySite,
  AppGraficoRadar,
  AppGraficoBarra
} from '../../components/_dashboard/app';

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
  data: [4344, 5435, 1443, 4443],
  labelsData: ['A', 'B', 'C', 'D']
};

const BARRA_CHART = {
  title: 'Gráfico em Barra',
  description: '(+10%) que no último mês',
  series: [{ data: [400, 580, 690, 1100, 1200, 1380] }],
  xaxis: ['A', 'B', 'C', 'D', 'E', 'F']
};

export default function Acougue() {
  return (
    <Page title="Dashboard | Açougue">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Relatórios | Açougue</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppCardVendasT />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppCardVendasD />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppCardReceitaM />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppCardPedidosT />
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
            <AppCardAtualizacoes />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
