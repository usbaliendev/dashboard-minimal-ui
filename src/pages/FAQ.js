// material
import { Grid, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { FaqCard, FaqSearch } from '../components/_dashboard/faq';
//
import FAQPOSTS from '../_mocks_/faq/faq';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];

// ----------------------------------------------------------------------

export default function FaqPage() {
  return (
    <Page title="Dashboard: Blog | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            FAQ | Perguntas frequentes
          </Typography>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <FaqSearch posts={FAQPOSTS} />
        </Stack>

        <Grid container spacing={3}>
          {FAQPOSTS.map((post, index) => (
            <FaqCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
