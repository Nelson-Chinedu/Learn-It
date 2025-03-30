import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button, Input } from 'src/components';
import { useTaskSubmissionMutation } from 'src/modules/Student/services/studentSlice';
import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';
import { FunctionComponent } from 'react';

const validationSchema = Yup.object().shape({
  url: Yup.string().url('Invalid URL').required('Required'),
  note: Yup.string(),
});

const Submission: FunctionComponent<{ task: string }> = ({ task }) => {
  const [taskSubmission] = useTaskSubmissionMutation();

  const handleSubmission = async (data: { url: string; note: string }) => {
    const payload = {
      submissionUrl: data.url,
      supportingNote: data.note,
    };
    try {
      const res = await taskSubmission({
        taskId: task,
        data: payload,
      }).unwrap();

      if (res.status === 200) {
        successNotification(res.message);
      }
    } catch (error) {
      errorNotification('An error occurred, Please try again');
    }
  };

  const formik = useFormik({
    initialValues: {
      url: '',
      note: '',
    },
    onSubmit: handleSubmission,
    validationSchema,
  });
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    touched,
  } = formik;

  return (
    <Box component="form">
      <Stack direction={'column'} alignItems={'flex-start'} spacing={4}>
        <Input
          label="URL"
          placeholder="https://www.example.com"
          fullWidth
          type="url"
          handleChange={handleChange}
          onBlur={handleBlur}
          name="url"
          value={values.url}
          helperText={touched.url && errors.url}
          error={touched.url && Boolean(errors.url)}
        />

        <Input
          label="Note (Optional)"
          placeholder="Enter supporting note"
          fullWidth
          handleChange={handleChange}
          onBlur={handleBlur}
          value={values.note}
          rows={6}
          name="note"
          multiline
          sx={{
            '&>*': { height: 'unset !important' },
          }}
        />
        <Button handleClick={handleSubmit} disabled={isSubmitting}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default Submission;
