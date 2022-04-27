import { FunctionComponent } from 'react';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type Props = {
  uploadStatus?: number;
};

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="subtitle1" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const ProgressBar: FunctionComponent<Props> = ({ uploadStatus = 0 }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={uploadStatus} />
    </Box>
  );
};

export { ProgressBar };
