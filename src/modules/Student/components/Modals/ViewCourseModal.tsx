import { FunctionComponent } from 'react';
import { Player, BigPlayButton } from 'video-react';
import sanitizeHtml from 'sanitize-html';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';

import { Modal, Button } from 'src/components';
import useModal from 'src/hooks/useModal';
import { useEnrollCourseMutation } from '../../services/studentSlice';
import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

const useStyles = makeStyles({
  root: {
    '& .MuiTypography-subtitle2': {
      paddingBottom: '1em',
    },
    '& .MuiButton-contained': {
      marginTop: '1em',
    },
  },
  contentWrapper: {
    lineHeight: '1.8em',
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: 300,
    fontSize: '14px',
    '& h1, h2, h3, h4, h5, h6': {
      margin: '.8em 0px',
    },
  },
});

const ViewCourseModal: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const [state, setState] = useModal();

  const [enrollCourse, { isLoading }] = useEnrollCourseMutation();

  const _handleEnrollCourse = async () => {
    try {
      const payload = {
        courseId: state?.data?.id,
      };
      const res = await enrollCourse(payload).unwrap();
      successNotification(res.message);
      setState({ ...state, modalName: '' });
    } catch (error) {
      return errorNotification('An error occurred, Please try again');
    }
  };

  return (
    <Modal modalName="ViewCourse" title={state?.data?.name}>
      <Box className={classes.root}>
        <Player src={state?.data?.video[0]}>
          <BigPlayButton position="center" />
        </Player>

        <Box sx={{ mt: 2 }}>
          <Box
            component="div"
            className={classes.contentWrapper}
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(
                JSON.parse(state?.data?.objectives ?? null)
              )?.replace(/["]+/g, ''),
            }}
          />
        </Box>
        <Button
          color="primary"
          size="large"
          fullWidth={true}
          variant="contained"
          disableElevation={true}
          disabled={isLoading}
          handleClick={_handleEnrollCourse}
        >
          {isLoading ? <CircularProgress size={20} /> : 'Enroll'}
        </Button>
      </Box>
    </Modal>
  );
};

export default ViewCourseModal;
