import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreHoriz from '@mui/icons-material/MoreHoriz';

const ModuleList: FunctionComponent<Record<string, never>> = () => {
  return (
    <Box>
      <Typography variant="body1">Class Module List</Typography>
      <Box className="listWrapper">
        {[0, 1, 2, 3, 4, 5].map((list: number) => (
          <Box className="listContainer" key={list}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="subtitle2">Class name</Typography>
                <Typography variant="subtitle2">Research</Typography>
              </Grid>
              <Grid item>
                <IconButton size="small">
                  <MoreHoriz fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ModuleList;
