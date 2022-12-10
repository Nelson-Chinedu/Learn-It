import { FunctionComponent, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { Layout } from 'src/Layout/student';

import { Card, Button, TabNav } from 'src/components';
import { useGetCategoryQuery } from 'src/features/user/userSlice';

import ResourceModal from 'src/pages/Student/Modals/ResourceModal';
import CategoryModal from 'src/pages/Student/Modals/CategoryModal';

import useModal from 'src/hooks/useModal';
import { TabPanel } from 'src/components/Tab';

const Resources: FunctionComponent<Record<string, never>> = () => {
  const { data, isLoading } = useGetCategoryQuery();
  const [state, setState] = useModal();
  const [value, setValue] = useState(1);

  const handleAddResource = () => {
    setState({ ...state, modalName: 'AddResource' });
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
                  handleClick={handleAddResource}
                >
                  Add Resource url
                </Button>
              </Grid>
            </Grid>
            {isLoading ? (
              <Typography>Fetching data</Typography>
            ) : (
              <>
                <TabNav
                  nav={data.payload.map((name: { name: string }) => name.name)}
                  value={value}
                  handleChange={handleChange}
                >
                  <TabPanel index={value} value={value}>
                    <p>test {value}</p>
                  </TabPanel>
                </TabNav>
              </>
            )}
          </Box>
        </Card>
      </Box>
      <CategoryModal />
      <ResourceModal />
    </Layout>
  );
};

export default Resources;
