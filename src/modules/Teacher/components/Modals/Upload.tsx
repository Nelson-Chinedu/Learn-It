import { FunctionComponent } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Cancel';
import { useStyles } from 'src/modules/Teacher/components/Modals/styled.modals';
import VideoIcon from 'src/assets/images/videoIcon.png';
import { ProgressBar } from 'src/components';

type Props = {
  assetName: string;
  status?: number;
};

export const Upload: FunctionComponent<Props> = ({ assetName, status }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      className={classes.uploadedFile}
      sx={{ mb: 2 }}
    >
      <Grid item md={1}>
        <img src={VideoIcon} alt="video icon" width={30} height={30} />
      </Grid>
      <Grid item md={10}>
        <Typography>{assetName}</Typography>
        {status && <ProgressBar uploadStatus={status} />}
      </Grid>
      <Grid item md={1}>
        <IconButton>
          <Close />
        </IconButton>
      </Grid>
    </Grid>
  );
};
