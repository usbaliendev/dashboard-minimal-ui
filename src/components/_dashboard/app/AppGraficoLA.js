import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { useTheme } from '@mui/material/styles';
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

export default function AppGraficoLA({ chartData }) {
  const theme = useTheme();
  const chartOptions = merge(BaseOptionChart(), {
    colors: [theme.palette.chartX.red, theme.palette.chartX.yellow, theme.palette.chartX.blue],
    /* colors: [theme.palette.chart.red[0], theme.palette.chart.red[1], theme.palette.chart.red[2]], */
    stroke: {
      width: [0, 2, 3]
    },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: chartData.labelsData,
    xaxis: {
      type: 'category',
      categories: chartData.xaxis,
      labels: {
        style: {
          fontSize: 14,
          colors: theme.palette.text.primary
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: 14,
          colors: theme.palette.text.primary
        }
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} clientes`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title={chartData.title} subheader={chartData.description} />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={chartData.series} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
