import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
// components
import { Icon, InlineIcon } from '@iconify/react';
import calendarQuestionMkFilled from '@iconify/icons-fluent/calendar-question-mark-16-filled';
import Logo from '../../components/Logo';
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
import { MHidden } from '../../components/@material-extend';
//
import sidebarConfig from './SidebarConfig';
import account from '../../_mocks_/account';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH
  }
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200]
}));

const ButtonStyle = styled((props) => <Button {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 40,
  width: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'capitalize',

  background: theme.palette.background.neutral,
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  color: theme.palette.text.secondary
}));

const ItemIconStyle = styled(InlineIcon)({
  width: 22,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0
});

const TextStyle = styled(Typography)({
  width: 50,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0
});

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': { height: '100%', display: 'flex', flexDirection: 'column' }
      }}
    >
      <Box sx={{ px: 2.5, py: 2.5 }}>
        <Box component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
          <Logo />
        </Box>
      </Box>

      <Box sx={{ mb: 2.5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src={account.photo} alt="avatarPhoto" />
            <Box sx={{ ml: 4 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {account.displayName}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {account.role}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={sidebarConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonStyle component={RouterLink} to="/dashboard/faq">
          <ItemIconStyle>{getIcon(calendarQuestionMkFilled)}</ItemIconStyle>
          <TextStyle>FAQ</TextStyle>
        </ButtonStyle>
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default'
            }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
