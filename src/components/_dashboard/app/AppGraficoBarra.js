import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

export default function AppGraficoBarra({ chartData }) {
  const theme = useTheme();
  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`
        }
      }
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '28%', borderRadius: 2 }
    },
    xaxis: {
      categories: chartData.xaxis
    }
  });

  return (
    <Card>
      <CardHeader title={chartData.title} subheader={chartData.description} />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={chartData.series} options={chartOptions} height={320} />
      </Box>
    </Card>
  );
}
