import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
// material
import { alpha } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  List,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  ListItemButton
} from '@mui/material';
//  icons
import paintBrush from '@iconify/icons-fluent/paint-brush-arrow-up-24-filled';
// components
import Scrollbar from '../../components/Scrollbar';
import MenuPopover from '../../components/MenuPopover';

const mode_settings = [
  {
    id: 'light',
    name: 'Light',
    background: 'light-background',
    class: 'theme-mode-light'
  },
  {
    id: 'dark',
    name: 'Dark',
    background: 'dark-background',
    class: 'theme-mode-dark'
  }
];

const color_settings = [
  {
    id: 'blue',
    name: 'Azul',
    background: 'blue-color',
    class: 'theme-color-blue'
  },
  {
    id: 'red',
    name: 'Vermelho',
    background: 'red-color',
    class: 'theme-color-red'
  },
  {
    id: 'green',
    name: 'Verde',
    background: 'green-color',
    class: 'theme-color-green'
  },
  {
    id: 'orange',
    name: 'Laranja',
    background: 'orange-color',
    class: 'theme-color-orange'
  }
];

export default function ThemePainelOver() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        size="large"
        color={open ? 'primary' : 'default'}
        onClick={handleOpen}
        sx={{
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        <Icon icon={paintBrush} width={20} height={20} />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 400 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', py: 2.5, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Configurações Tema</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Escolha um tema para seu dashboard
            </Typography>
            <List
              disablePadding
              subheader={
                <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                  Tema Principal
                </ListSubheader>
              }
            >
              {mode_settings.map((item, index) => (
                <ListItemButton key={index} disableGutters sx={{ py: 1.5, px: 2.5, mt: '1px' }}>
                  <ListItemText>Claro</ListItemText>
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Box>
      </MenuPopover>
    </>
  );
}
