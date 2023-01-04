import { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MoreHoriz from '@mui/icons-material/MoreHoriz';

import { Card, Button, Menu } from 'src/components';

import useMenu from 'src/hooks/useMenu';

const ClassList: FunctionComponent<Record<string, never>> = () => {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState<number>(0);
  const { open, anchorEl, handleClick, handleClose } = useMenu();

  const handleSelected = (id: number) => {
    setIsSelected(id);
  };

  const handleCreateClass = () => {
    navigate('/m/live-class/create');
  };

  const handleStart = () => {
    navigate('/m/live-class/start');
  };

  return (
    <Box>
      <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box style={{ width: '48%' }}>
          <Card borderRadius="10px" width="100%" height="100vh">
            <Box className="classListWrapper">
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <Typography variant="body1">Live Class List</Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    fullWidth={true}
                    disableElevation={true}
                    size="small"
                    color="primary"
                    handleClick={handleCreateClass}
                  >
                    Create Class
                  </Button>
                </Grid>
              </Grid>
              <Box className="container">
                {[0, 1, 2, 3, 4, 5, 6].map((list: number) => (
                  <Box
                    className={`${
                      isSelected === list ? 'active' : 'inactive'
                    } classListContainer`}
                    key={list}
                    onClick={() => handleSelected(list)}
                  >
                    <Grid
                      container
                      alignItems="baseline"
                      justifyContent="space-between"
                    >
                      <Grid item>
                        <Typography variant="subtitle2">
                          UI/UX Design Course
                        </Typography>
                      </Grid>
                      <Grid item>
                        <IconButton size="small" onClick={handleClick}>
                          <MoreHoriz fontSize="small" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </Box>
            </Box>
          </Card>
        </Box>
        <Box style={{ width: '48%' }}>
          <Card borderRadius="10px" width="100%" height="100vh">
            <Box className="classListWrapper">
              <Typography variant="body1">Course Content</Typography>
              <Typography variant="subtitle2">
                Lecture(15) Total(5.5){' '}
              </Typography>
              <Box className="container">
                {[0, 1, 2, 3, 4, 5, 6].map((content: number) => (
                  <Box key={content} style={{ marginBottom: '1em' }}>
                    <Typography variant="subtitle2">Module 1</Typography>
                    <Typography variant="subtitle1">Introduction</Typography>
                  </Box>
                ))}
              </Box>
              <Grid container spacing={2} justifyContent="flex-start">
                <Grid item md={12}>
                  <Button
                    variant="contained"
                    fullWidth={true}
                    disableElevation={true}
                    size="small"
                    color="primary"
                    handleClick={handleStart}
                  >
                    Go Live
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Box>
      </Box>
      <Menu
        handleClose={handleClose}
        open={open}
        anchorEl={anchorEl}
        menus={[
          { name: 'Edit', path: '#' },
          { name: 'Delete', path: '#' },
        ]}
      />
    </Box>
  );
};

export default ClassList;
