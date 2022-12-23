import { FunctionComponent } from 'react';
import { Player, BigPlayButton } from 'video-react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { makeStyles } from '@mui/styles';

import { Modal, Button } from 'src/components';
import useModal from 'src/hooks/useModal';

const useStyles = makeStyles({
  root: {
    '& .MuiTypography-subtitle2': {
      paddingBottom: '1em',
    },
    '& .MuiButton-contained': {
      marginTop: '1em',
    },
  },
});

const ViewCourseModal: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const [state] = useModal();

  return (
    <Modal modalName="ViewCourse">
      <Box className={classes.root}>
        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize' }}>
          {state?.data?.name}
        </Typography>

        <Player src={state?.data?.video[0]}>
          <BigPlayButton position="center" />
        </Player>

        <Box>
          <Typography variant="body2" sx={{ mt: 2 }}>
            What you'll learn
          </Typography>
          {[0, 1, 2, 3, 4].map((item: any) => (
            <List>
              <ListItem
                sx={{
                  listStyleType: 'disc',
                  display: 'list-item',
                }}
              >
                Big ideas in finite-element analysis and computational fluid
                dynamics {item}
              </ListItem>
            </List>
          ))}
        </Box>
        <Button
          color="primary"
          size="large"
          fullWidth={true}
          variant="contained"
          disableElevation={true}
        >
          Enroll
        </Button>
      </Box>
    </Modal>
  );
};

export default ViewCourseModal;
