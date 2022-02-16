import { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const Bio: FunctionComponent<Record<string, never>> = () => {
  return (
    <>
      <Grid container alignItems="baseline" justifyContent="space-between">
        <Grid item>
          <Typography variant="h6">Short Bio</Typography>
        </Grid>
        <Grid item>
          <IconButton size="small">
            <EditIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
      <Typography variant="subtitle2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto officiis
        expedita ipsa! Inventore similique tempora sequi placeat? Doloremque,
        eveniet, animi suscipit eum a temporibus modi esse nisi neque placeat
        ut!
      </Typography>
    </>
  );
};

export default Bio;
