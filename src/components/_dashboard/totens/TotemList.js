import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import TotemCard from './TotemCard';

// ----------------------------------------------------------------------

TotemList.propTypes = {
  totens: PropTypes.array.isRequired
};

export default function TotemList({ totens, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {totens.map((totem) => (
        <Grid key={totem.id} item xs={12} sm={6} md={3}>
          <TotemCard totem={totem} />
        </Grid>
      ))}
    </Grid>
  );
}
