import React, { useRef, useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
// material
import { alpha } from '@mui/material/styles';
import {
  Avatar,
  Box,
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
import MenuPopover from '../../components/MenuPopover';

const modeSettings = [
  {
    id: 'light',
    name: 'Claro',
    label: 'C',
    background: 'theme.lightbg',
    class: 'theme-mode-light'
  },
  {
    id: 'dark',
    name: 'Escuro',
    label: 'E',
    background: 'theme.darkbg',
    class: 'theme-mode-dark'
  }
];

const colorSettings = [
  {
    id: 'blue',
    name: 'Azul',
    label: 'A',
    background: 'theme.pallete.themes.blue',
    class: 'theme-color-blue'
  },
  {
    id: 'red',
    name: 'Vermelho',
    label: 'V',
    background: 'theme.red',
    class: 'theme-color-red'
  },
  {
    id: 'green',
    name: 'Verde',
    label: 'V',
    background: 'theme.green',
    class: 'theme-color-green'
  },
  {
    id: 'orange',
    name: 'Laranja',
    label: 'L',
    background: 'theme.orange',
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
          </Box>
        </Box>

        <Divider />

        <List
          disablePadding
          subheader={
            <ListSubheader disableSticky sx={{ py: 1, px: 2.5, mt: 1, typography: 'overline' }}>
              Tema Principal
            </ListSubheader>
          }
        >
          {modeSettings.map((mode) => (
            <ListItemButton
              key={mode.id}
              disableGutters
              sx={{ px: 2.5 }}
              /* onClick={() => setMode(item)} */
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: mode.background }}>{mode.label}</Avatar>
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="subtitle2">{mode.name}</Typography>
              </ListItemText>
            </ListItemButton>
          ))}
        </List>

        <Divider />

        <List
          disablePadding
          subheader={
            <ListSubheader disableSticky sx={{ py: 1, px: 2.5, mt: 1, typography: 'overline' }}>
              Cores
            </ListSubheader>
          }
          sx={{ mb: 1 }}
        >
          {colorSettings.map((color) => (
            <ListItemButton key={color.id} disableGutters sx={{ px: 2.5 }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: color.background }}>{color.label}</Avatar>
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="subtitle2">{color.name}</Typography>
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
      </MenuPopover>
    </>
  );
}
