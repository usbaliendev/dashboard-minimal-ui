import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Form, FormikProvider } from 'formik';
import closeFill from '@iconify/icons-eva/close-fill';
import roundClearAll from '@iconify/icons-ic/round-clear-all';
import roundFilterList from '@iconify/icons-ic/round-filter-list';
// material
import {
  Box,
  Radio,
  Stack,
  Button,
  Drawer,
  Rating,
  Divider,
  IconButton,
  Typography,
  RadioGroup,
  FormControlLabel
} from '@mui/material';
import { alpha } from '@mui/material/styles';
// icons
import colorPaletteFill from '@iconify/icons-eva/color-palette-fill';
//
import Scrollbar from '../../Scrollbar';

// ----------------------------------------------------------------------

export const MAIN_THEME_OPTIONS = [
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
export const THEME_COLOR_OPTIONS = [
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

export const FILTER_CATEGORY_OPTIONS = [
  { value: '15', label: 'Pizzas Doces' },
  { value: '14', label: 'Pizzas Salgadas' },
  { value: '13', label: 'Pizzas Especiais' },
  { value: '12', label: 'Pizzas Premium' }
];
export const FILTER_RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];
export const FILTER_PRICE_OPTIONS = [
  { value: 'abaixo', label: 'Abaixo R$15' },
  { value: 'entre', label: 'Entre R$15 - R$25' },
  { value: 'acima', label: 'Acima $25' }
];

// ----------------------------------------------------------------------

ThemeSidebar.propTypes = {
  isOpenTheme: PropTypes.bool,
  onOpenTheme: PropTypes.func,
  onCloseTheme: PropTypes.func
};

export default function ThemeSidebar({ isOpenTheme, onOpenTheme, onCloseTheme }) {
  const anchorRef = useRef(null);

  return (
    <>
      <IconButton
        ref={anchorRef}
        size="large"
        color={isOpenTheme ? 'primary' : 'default'}
        onClick={onOpenTheme}
        sx={{
          ...(isOpenTheme && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        <Icon icon={colorPaletteFill} width={20} height={20} />
      </IconButton>

      <Drawer
        anchor="right"
        open={isOpenTheme}
        onClose={onCloseTheme}
        PaperProps={{
          sx: { width: 280, border: 'none', overflow: 'hidden' }
        }}
      >
        <Stack direction="column" alignItems="center" sx={{ px: 1, pt: 1, pb: 2 }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Typography variant="subtitle1" sx={{ ml: 1 }}>
              Temas do Sistema
            </Typography>
            <IconButton onClick={onCloseTheme}>
              <Icon icon={closeFill} width={20} height={20} />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
            Escolha um tema para seu dashboard
          </Typography>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            <div>
              <Typography variant="subtitle1" gutterBottom>
                Tema Principal
              </Typography>
              <RadioGroup>
                {MAIN_THEME_OPTIONS.map((item) => (
                  <FormControlLabel
                    key={item}
                    value={item.id}
                    control={<Radio />}
                    label={item.name}
                  />
                ))}
              </RadioGroup>
            </div>

            <div>
              <Typography variant="subtitle1" gutterBottom>
                Cores
              </Typography>
              <RadioGroup>
                {THEME_COLOR_OPTIONS.map((item) => (
                  <FormControlLabel
                    key={item.id}
                    value={item.id}
                    control={<Radio />}
                    label={item.name}
                  />
                ))}
              </RadioGroup>
            </div>
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}
