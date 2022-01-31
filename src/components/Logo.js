import PropTypes from 'prop-types';
// material
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import cleverLogo from '../assets/icons/Logoclever.svg';

// ----------------------------------------------------------------------

const ImgBoxStyle = styled(Box)(({ theme }) => ({
  width: 120,
  height: 40,
  background: theme.palette.grey[200],
  borderRadius: 12
}));

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return <ImgBoxStyle component="img" src={cleverLogo} />;
}
