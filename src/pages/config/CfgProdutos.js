import { useFormik } from 'formik';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';

// material
import { Container, Stack, Typography, Button } from '@mui/material';
// components
import Page from '../../components/Page';
import { CgfProdSort, CgfProdList } from '../../components/_dashboard/config';
//
import CFGPRODUTOS from '../../_mocks_/config/cfgprodutos';

// ----------------------------------------------------------------------

export default function CfgProdutos() {
  const [openFilter, setOpenFilter] = useState(false);

  const formik = useFormik({
    initialValues: {
      gender: '',
      category: '',
      colors: '',
      priceRange: '',
      rating: ''
    },
    onSubmit: () => {
      setOpenFilter(false);
    }
  });

  const { resetForm, handleSubmit } = formik;

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleResetFilter = () => {
    handleSubmit();
    resetForm();
  };

  return (
    <Page title="Dashboard | Configuração">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h4" sx={{ margin: '0' }}>
            Configuração | Produtos
          </Typography>
          {/* <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
          >
            Novo Produto
          </Button> */}
        </Stack>

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <CgfProdSort />
          </Stack>
        </Stack>

        <CgfProdList cfgprod={CFGPRODUTOS} />
      </Container>
    </Page>
  );
}
