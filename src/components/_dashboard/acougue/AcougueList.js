import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import AcougueCard from './AcougueCard';

// ----------------------------------------------------------------------

AcougueList.propTypes = {
  produtos: PropTypes.array.isRequired
};

export default function AcougueList({ produtos, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {produtos.map((item) => (
        <Grid key={item.id} item xs={12} sm={6} md={3}>
          <AcougueCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
