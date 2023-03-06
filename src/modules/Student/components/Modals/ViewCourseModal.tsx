import { FunctionComponent } from 'react';
import ReactPlayer from 'react-player';
import sanitizeHtml from 'sanitize-html';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import { Modal, Button } from 'src/components';

import { pxToRem } from 'src/helpers/formatFont';

import useModal from 'src/hooks/useModal';

import { useEnrollCourseMutation } from 'src/modules/Student/services/studentSlice';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

import { RootState } from 'src/store';

const useStyles = makeStyles({
  root: {
    '& .MuiTypography-subtitle2': {
      paddingBottom: '1em',
    },
    '& .MuiTypography-h3': {
      fontSize: pxToRem(20),
      fontWeight: 600,
      margin: '1em .6em',
    },
    '& .MuiButton-contained': {
      margin: '1em 0px',
    },
  },
  contentWrapper: {
    lineHeight: '1.8em',
    fontFamily: "'Work Sans', sans-serif",
    fontWeight: 300,
    fontSize: '14px',
    marginLeft: '1em',
    '& h1, h2, h3, h4, h5, h6': {
      margin: '.8em 0px',
    },
  },
});

const ViewCourseModal: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const [state, setState] = useModal();
  const { userId } = useSelector((state: RootState) => state.account);

  const [enrollCourse, { isLoading }] = useEnrollCourseMutation();

  const _handleEnrollCourse = async () => {
    try {
      const res = await enrollCourse({
        userId,
        courseId: state?.data?.id,
      }).unwrap();
      successNotification(res.message);
      setState({ ...state, modalName: '' });
    } catch (error) {
      errorNotification('An error occurred, Please try again');
    }
  };

  return (
    <Modal modalName="ViewCourse" title={state?.data?.name}>
      <Box className={classes.root}>
        <ReactPlayer url={state?.data?.video || ''} controls />
        <Box sx={{ mt: 2 }}>
          <Typography variant="h3">What you will learn</Typography>
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
          size="large"
          disabled={isLoading}
          handleClick={_handleEnrollCourse}
        >
          Enroll
        </Button>
      </Box>
    </Modal>
  );
};

export default ViewCourseModal;
