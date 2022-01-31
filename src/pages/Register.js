import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { RegisterForm } from '../components/authentication/register';
import AuthSocial from '../components/authentication/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title="Register | Minimal-UI">
      <AuthLayout>
        Já possui uma conta? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
          Logar
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h4" sx={{ px: 5, mt: 10, mb: 5, textAlign: 'center' }}>
            Gerencie o trabalho de forma mais eficaz com o nosso <br />
            Dashboard de Produtos
          </Typography>
          <img alt="register" src="/static/illustrations/register.svg" />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Comece totalmente grátis.
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Basta pedir um cadastro com a Clever ou o Admin da sua empresa.
            </Typography>
          </Box>

          <RegisterForm />

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            Ao se registrar, eu concordo com os &nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Termos de Serviço
            </Link>
            &nbsp;e a &nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              Política de Privacidade
            </Link>
            .
          </Typography>

          <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              Já possui uma conta?&nbsp;
              <Link to="/login" component={RouterLink}>
                Logar
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
