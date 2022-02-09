import { FunctionComponent, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { Layout } from 'src/Layout/student';

import { Card, Button, TabNav } from 'src/components';

const Resources: FunctionComponent<Record<string, never>> = () => {
  const [links, setLinks] = useState([
    'Blog site',
    'Illustration site',
    'Icon site',
    'Image site',
  ]);

  const handleAddCategory = () => {
    setLinks([...links, 'Category added']);
  };

  return (
    <Layout>
      <Box component="section">
        <Card borderRadius="10px" width="100%" height="100vh">
          <Box style={{ padding: '20px' }}>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              style={{ marginBottom: '1em' }}
            >
              <Grid item>
                <Typography>My Resources</Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  disableElevation
                  size="medium"
                  handleClick={handleAddCategory}
                >
                  Add new category
                </Button>
              </Grid>
            </Grid>
            <TabNav nav={links} />
          </Box>
        </Card>
      </Box>
    </Layout>
  );
};

export default Resources;
