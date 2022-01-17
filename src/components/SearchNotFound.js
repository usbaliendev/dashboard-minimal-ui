import PropTypes from 'prop-types';
// material
import { Paper, Typography } from '@mui/material';

// ----------------------------------------------------------------------

SearchNotFound.propTypes = {
  searchQuery: PropTypes.string
};

export default function SearchNotFound({ searchQuery = '', ...other }) {
  return (
    <Paper {...other}>
      <Typography gutterBottom align="center" variant="subtitle1">
        Não encontrado
      </Typography>
      <Typography variant="body2" align="center">
        Sem resultados encontrados para &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. Tente checar a escrita ou usar palavras
        completas.
      </Typography>
    </Paper>
  );
}
