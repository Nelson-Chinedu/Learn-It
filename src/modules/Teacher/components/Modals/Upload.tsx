import { FunctionComponent } from 'react';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Cancel';
import { UploadedFileWrapper } from 'src/modules/Teacher/components/Modals/styled.modals';
import VideoIcon from 'src/assets/images/videoIcon.png';
import { ProgressBar } from 'src/components';

type Props = {
  assetName: string;
  status?: number;
};

export const Upload: FunctionComponent<Props> = ({ assetName, status }) => {
  return (
    <UploadedFileWrapper
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 2 }}
    >
      <Grid size={{ md: 1 }}>
        <img src={VideoIcon} alt="video icon" width={30} height={30} />
      </Grid>
      <Grid size={{ md: 10 }}>
        <Typography>{assetName}</Typography>
        {status && <ProgressBar uploadStatus={status} />}
      </Grid>
      <Grid size={{ md: 1 }}>
        <IconButton>
          <Close />
        </IconButton>
      </Grid>
    </UploadedFileWrapper>
  );
};
