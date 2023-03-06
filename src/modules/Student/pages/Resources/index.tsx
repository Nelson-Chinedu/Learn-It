import { FunctionComponent, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import IconEdit from '@mui/icons-material/EditOutlined';
import IconDelete from '@mui/icons-material/DeleteOutline';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

import EmptyState from 'src/assets/images/searching-data.gif';

import { Button } from 'src/components';

import {
  useGetCategoryQuery,
  useGetResourceQuery,
} from 'src/modules/Student/services/studentSlice';

import ResourceModal from 'src/modules/Student/components/Modals/ResourceModal';
import CategoryModal from 'src/modules/Student/components/Modals/CategoryModal';

import useModal from 'src/hooks/useModal';

import { RootState } from 'src/store';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiButton-text': {
      color: theme.palette.primary.main,
    },
  },
}));

const Resources: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(null);
  const { userId } = useSelector((state: RootState) => state.account);
  const { data, isLoading } = useGetCategoryQuery(userId);
  const { data: resourceData, isLoading: resourceIsLoading } =
    useGetResourceQuery(
      { userId, categoryId: selectedTab?.id },
      { skip: !selectedTab?.id }
    );
  const [state, setState] = useModal();

  const handleAddCategory = () => {
    setState({ ...state, modalName: 'AddCategory' });
  };

  useEffect(() => {
    const getIndexCategory = () => {
      const category = data?.payload
        ?.slice(0, 1)
        ?.map((data: { id: string | number; name: string }) => data);

      if (category) {
        setSelectedTab({ id: category[0]?.id, name: category[0]?.name });
      }
    };
    getIndexCategory();
  }, [data]);

  const handleAddResource = () => {
    setState({ ...state, modalName: 'AddResource' });
  };

  const handleCategory = (data: { id: string | number; name: string }) => {
    setSelectedTab(data);
  };

  return (
    <Box component="section" className={classes.root}>
      <Box>
        {isLoading && !data ? (
          <>
            <Typography>Loading...</Typography>
          </>
        ) : data && data.payload.length !== 0 ? (
          <>
            <Grid
              container
              alignItems="center"
              justifyContent="flex-end"
              style={{ marginBottom: '1em' }}
            >
              <Grid item>
                <Button handleClick={handleAddResource}>
                  Add Resource url
                </Button>
              </Grid>
            </Grid>
            {data?.payload?.map(
              (data: { name: string; id: string | number }) => (
                <>
                  <Button
                    fullWidth={false}
                    variant="text"
                    handleClick={() => handleCategory(data)}
                    sx={{
                      textTransform: 'capitalize',
                      color: data.id !== selectedTab?.id && 'grey !important',
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
              <Typography>Loading...</Typography>
            ) : (
              <Box sx={{ mt: 3 }}>
                {resourceData?.payload.length === 0 ? (
                  <Box
                    sx={{
                      width: '50%',
                      margin: '5em auto',
                      textAlign: 'center',
                    }}
                  >
                    <img
                      src={EmptyState}
                      alt="Empty Catalog"
                      style={{ width: '300px', height: '300px' }}
                    />
                    <Typography
                      variant="h2"
                      sx={{ textTransform: 'capitalize' }}
                    >
                      {`No Resource added Yet to ${selectedTab.name}`}
                    </Typography>
                  </Box>
                ) : (
                  resourceData?.payload?.map(
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
        ) : (
          <Box sx={{ width: '50%', margin: '10em auto', textAlign: 'center' }}>
            <img
              src={EmptyState}
              style={{ width: '300px', height: '300px' }}
              alt="Empty Category"
            />
            <Typography variant="h2" sx={{ mt: -5, mb: 5 }}>
              No Resource Added Yet
            </Typography>
            <Button handleClick={handleAddCategory} fullWidth={false}>
              Add Category
            </Button>
          </Box>
        )}
      </Box>
      <ResourceModal />
      <CategoryModal />
    </Box>
  );
};

export default Resources;
