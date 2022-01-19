import faker from 'faker';
import PropTypes from 'prop-types';
// material
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot
} from '@mui/lab';
// utils
import { fDateTime } from '../../../utils/formatTime';

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    title: '1983, pedidos, $4220',
    time: faker.date.past(),
    type: 'pedido1'
  },
  {
    title: '12 Invoices foram pagas',
    time: faker.date.past(),
    type: 'pedido2'
  },
  {
    title: 'Pedido #37745 de Setembro',
    time: faker.date.past(),
    type: 'pedido3'
  },
  {
    title: 'Novo pedido feito #XF-2356',
    time: faker.date.past(),
    type: 'pedido4'
  },
  {
    title: 'Novo pedido feito #XF-2346',
    time: faker.date.past(),
    type: 'pedido5'
  }
];

// ----------------------------------------------------------------------

PedidoItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool
};

function PedidoItem({ item, isLast }) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor:
              (type === 'pedido1' && 'primary.main') ||
              (type === 'pedido2' && 'success.main') ||
              (type === 'pedido3' && 'info.main') ||
              (type === 'pedido4' && 'warning.main') ||
              'error.main'
          }}
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {fDateTime(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function AppPedidoTimeline() {
  return (
    <Card
      sx={{
        '& .MuiTimelineItem-missingOppositeContent:before': {
          display: 'none'
        }
      }}
    >
      <CardHeader title="Timeline" />
      <CardContent>
        <Timeline>
          {TIMELINES.map((item, index) => (
            <PedidoItem key={item.title} item={item} isLast={index === TIMELINES.length - 1} />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}
