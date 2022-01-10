import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';
import cleverLogo from '../assets/images/Logoclever.svg';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return <Box component="img" src={cleverLogo} sx={{ width: 172, height: 40, ...sx }} />;
}
