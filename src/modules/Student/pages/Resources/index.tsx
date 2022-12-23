import { FunctionComponent, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import IconEdit from '@mui/icons-material/EditOutlined';
import IconDelete from '@mui/icons-material/DeleteOutline';

import { Layout } from 'src/Layout/student';

import { Card, Button } from 'src/components';

import {
  useGetCategoryQuery,
  useGetResourceQuery,
} from 'src/modules/Student/services/studentSlice';

import ResourceModal from 'src/modules/Student/components/Modals/ResourceModal';
import CategoryModal from 'src/modules/Student/components/Modals/CategoryModal';

import useModal from 'src/hooks/useModal';

const Resources: FunctionComponent<Record<string, never>> = () => {
  const [selectedTab, setSelectedTab] = useState<number | string>('');
  const { data, isLoading } = useGetCategoryQuery();
  const { data: resourceData, isLoading: resourceIsLoading } =
    useGetResourceQuery(selectedTab, { skip: !selectedTab });
  const [state, setState] = useModal();

  const handleAddCategory = () => {
    setState({ ...state, modalName: 'AddCategory' });
  };

  useEffect(() => {
    const getIndexCategory = () => {
      const category = data?.payload
        ?.slice(0, 1)
        ?.map((data) => data.id)
        ?.toString();
      setSelectedTab(category);
    };
    getIndexCategory();
  }, [data]);

  const handleAddResource = () => {
    setState({ ...state, modalName: 'AddResource' });
  };

  const handleCategory = (id: string | number) => {
    setSelectedTab(id);
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
            {isLoading && !data ? (
              <Typography>Fetching data</Typography>
            ) : (
              <>
                {data?.payload.map(
                  (data: { name: string; id: string | number }) => (
                    <>
                      <Button
                        disableElevation
                        fullWidth={false}
                        variant="text"
                        color="primary"
                        size="small"
                        handleClick={() => handleCategory(data.id)}
                        sx={{
                          textTransform: 'capitalize',
                          color: data.id !== selectedTab && 'grey !important',
                        }}
                      >
                        {data.name}
                      </Button>
                    </>
                  )
                )}
                <IconButton size="small" onClick={handleAddCategory}>
                  <AddIcon fontSize="small" />
                </IconButton>
                <Divider />

                {resourceIsLoading && !resourceData ? (
                  <Typography>fetching...</Typography>
                ) : (
                  <Box sx={{ mt: 3 }}>
                    {resourceData?.payload.length === 0 ? (
                      <Box>
                        <Typography>No resource added yet</Typography>
                      </Box>
                    ) : (
                      resourceData?.payload.map(
                        (
                          data: { name: string; url: string; id: string } | null
                        ) => (
                          <Stack
                            key={data.id}
                            sx={{
                              my: 1,
                              padding: '1em',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              '&:hover': {
                                background: '#f8f8f8',
                              },
                              '& a': {
                                textDecoration: 'none',
                                color: 'inherit',
                              },
                            }}
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                          >
                            <a href={data.url} target="_blank">
                              <Typography>{data.name}</Typography>
                            </a>
                            <Box>
                              <IconButton>
                                <IconEdit fontSize="small" />
                              </IconButton>
                              <IconButton>
                                <IconDelete fontSize="small" />
                              </IconButton>
                            </Box>
                          </Stack>
                        )
                      )
                    )}
                  </Box>
                )}
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
