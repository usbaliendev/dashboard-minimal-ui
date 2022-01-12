import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import PizzaCard from './PizzaCard';

// ----------------------------------------------------------------------

PizzaList.propTypes = {
  pizzas: PropTypes.array.isRequired
};

export default function PizzaList({ pizzas, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {pizzas.map((pizza) => (
        <Grid key={pizza.id} item xs={12} sm={6} md={3}>
          <PizzaCard pizza={pizza} />
        </Grid>
      ))}
    </Grid>
  );
}
