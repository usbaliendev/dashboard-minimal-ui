import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import CgfProdCard from './CgfProdCard';

// ----------------------------------------------------------------------

CgfProdList.propTypes = {
  cfgprod: PropTypes.array.isRequired
};

export default function CgfProdList({ cfgprod, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {cfgprod.map((prod) => (
        <Grid key={prod.id} item xs={12} sm={6} md={3}>
          <CgfProdCard item={prod} />
        </Grid>
      ))}
    </Grid>
  );
}
