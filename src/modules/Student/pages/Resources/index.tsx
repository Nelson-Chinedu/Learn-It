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
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

import EmptyState from 'src/assets/images/search.gif';

import { Button } from 'src/components';

import {
  useGetCategoryQuery,
  useGetResourceQuery,
} from 'src/modules/Student/services/studentSlice';

import ResourceModal from 'src/modules/Student/components/Modals/ResourceModal';
import CategoryModal from 'src/modules/Student/components/Modals/CategoryModal';

import useModal from 'src/hooks/useModal';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiButton-text': {
      color: theme.palette.primary.main,
    },
  },
}));

const Resources: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
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
    <>
      <Box component="section" className={classes.root}>
        <Box>
          <Grid
            container
            alignItems="center"
            justifyContent="flex-end"
            style={{ marginBottom: '1em' }}
          >
            <Grid item>
              <Button handleClick={handleAddResource}>Add Resource url</Button>
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
                      fullWidth={false}
                      variant="text"
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
                    <Box
                      sx={{
                        width: '50%',
                        margin: '5em auto',
                        textAlign: 'center',
                      }}
                    >
                      <img
                        src={EmptyState}
                        alt=""
                        style={{ width: '300px', height: '300px' }}
                      />
                      <Typography variant="h2">
                        No Resource added Yet
                      </Typography>
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
      </Box>
      <CategoryModal />
      <ResourceModal />
    </>
  );
};

export default Resources;
