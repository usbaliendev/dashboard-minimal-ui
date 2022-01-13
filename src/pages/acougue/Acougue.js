// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import {
  AppCardVendasD,
  AppCardVendasT,
  AppCardPedidosT,
  AppCardReceitaM,
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function Acougue() {
  return (
    <Page title="Dashboard | Açougue">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Açougue</Typography>
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
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
