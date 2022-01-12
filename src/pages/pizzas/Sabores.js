import { useFormik } from 'formik';
import { useState } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import { PizzaSort, PizzaList, PizzaFilterSidebar } from '../../components/_dashboard/pizza';
//
import SABORES from '../../_mocks_/sabores';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
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
    <Page title="Dashboard | Sabores">
      <Container>
        <Typography variant="h4" sx={{ mb: 1 }}>
          Sabores
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 2 }}
        >
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <PizzaFilterSidebar
              formik={formik}
              isOpenFilter={openFilter}
              onResetFilter={handleResetFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <PizzaSort />
          </Stack>
        </Stack>

        <PizzaList pizzas={SABORES} />
      </Container>
    </Page>
  );
}
