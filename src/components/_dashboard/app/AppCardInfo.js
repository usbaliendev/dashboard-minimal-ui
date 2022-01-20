import { Icon } from '@iconify/react';

// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

export default function AppCardInfo({ data }) {
  const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: data.color,
    backgroundColor: data.bgColor
  }));

  console.log(data.color2);

  const IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: data.color2,
    backgroundImage: `linear-gradient(135deg, ${alpha(data.color2, 0)} 0%, ${alpha(
      data.color2,
      0.24
    )} 100%)`
  }));

  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={data.icon} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{fShortenNumber(data.value)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
        {data.title}
      </Typography>
    </RootStyle>
  );
}
