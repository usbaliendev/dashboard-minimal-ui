// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppCardAtualizacoes,
  AppOrderTimeline,
  AppGraficoPizza,
  AppGraficoLA,
  AppTrafficBySite,
  AppGraficoRadar,
  AppGraficoBarra
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function Relatorios() {
  return (
    <Page title="Dashboard | Relatórios">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Relatórios</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <AppGraficoLA />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppGraficoPizza />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppGraficoBarra />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppGraficoRadar />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppCardAtualizacoes />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
