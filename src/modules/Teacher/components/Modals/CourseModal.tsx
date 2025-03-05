import { FunctionComponent, useState, useRef } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { StyledLabel } from 'src/modules/Teacher/components/Modals/styled.modals';
import { Upload } from 'src/modules/Teacher/components/Modals/Upload';

import { Modal, Input, Button } from 'src/components';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

import { useAddCourseMutation } from 'src/modules/Teacher/services/teacherSlice';

import useModal from 'src/hooks/useModal';

const validationSchema = Yup.object().shape({
  courseName: Yup.string().required('Required'),
  price: Yup.string().required('Required'),
});

const CourseModal: FunctionComponent<Record<string, never>> = () => {
  const [state, setState] = useModal();
  const [addCourse] = useAddCourseMutation();
  const ref = useRef(null);
  const [uploadingFile, setUploadingFile] = useState<{
    name: string;
    status: number;
  }>({ name: '', status: 0 });
  const [uploadedFiles, setUploadedFiles] = useState<Array<{ name: string }>>(
    [],
  );
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<Array<string>>([]);

  const _handleAddCourse = async (values: {
    courseName: string;
    price: string;
  }) => {
    const payload = {
      video_url: videoUrl,
      course_name: values.courseName,
      price: values.price,
    };
    try {
      const data = await addCourse(payload).unwrap();
      if (data.status === 201) {
        successNotification(data.message);
        values.courseName = '';
        values.price = '';
        ref.current.value = '';
        setState({ ...state, modalName: '' });
        setUploadedFiles([]);
        setVideoUrl([]);
        setIsUploading(false);
        setUploadingFile({ name: '', status: 0 });
      }
    } catch (error: any) {
      if (error && error.status === 400) {
        return errorNotification(error.data.message);
      }
      errorNotification('An error occurred please try again');
    }
  };

  const handleUpload = async (e: {
    preventDefault: () => void;
    target: HTMLInputElement;
  }) => {
    e.preventDefault();
    const filename = e.target.files[0].name;

    const form = new FormData();
    form.append('video', e.target.files[0]);

    try {
      setIsUploading(true);
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/upload/video`,
        form,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total,
            );
            setUploadingFile({ name: filename, status: percentCompleted });
          },
        },
      );

      if (res) {
        const {
          status,

          payload: { url },
        } = res.data;
        if (status === 201) {
          ref.current.value = '';
          setVideoUrl((prev) => [...prev, url]);
          setUploadedFiles((prev) => [...prev, { name: filename }]);
          setUploadingFile(null);
          setIsUploading(false);
        }
      }
    } catch (error) {
      setIsUploading(false);
      errorNotification('An error occurred while uploading video');
    }
  };

  const formik = useFormik({
    initialValues: {
      courseName: '',
      price: '',
    },
    validationSchema,
    onSubmit: _handleAddCourse,
  });

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    values,
    touched,
    isSubmitting,
  } = formik;

  return (
    <Modal modalName="AddCourse" title="">
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <Grid item sm={6}>
            <Input
              label="Course name"
              fullWidth={true}
              name="courseName"
              variant="outlined"
              size="small"
              color="primary"
              value={values.courseName}
              handleChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.courseName && errors.courseName}
              error={touched.courseName && Boolean(errors.courseName)}
            />
          </Grid>
          <Grid item sm={6}>
            <Input
              label="Price"
              fullWidth={true}
              name="price"
              variant="outlined"
              size="small"
              color="primary"
              value={values.price}
              handleChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.price && errors.price}
              error={touched.price && Boolean(errors.price)}
            />
          </Grid>
        </Grid>
        <StyledLabel>
          <CloudUploadIcon fontSize="large" />
          <Typography variant="subtitle2">Upload Videos</Typography>
          <Typography variant="subtitle1">Click to browse files</Typography>
          <input
            type="file"
            accept="video/mp4,video/x-m4v,video/*"
            onChange={handleUpload}
            ref={ref}
          />
        </StyledLabel>
        <Box sx={{ mb: 4 }}>
          {isUploading && uploadingFile !== null && (
            <Upload
              assetName={uploadingFile?.name}
              status={uploadingFile?.status}
            />
          )}
          {uploadedFiles.map((file: { name: string }, index: number) => (
            <Upload assetName={file.name} key={index} />
          ))}
        </Box>
        <Button
          fullWidth={true}
          size="large"
          handleClick={handleSubmit}
          disabled={!isSubmitting}
        >
          Add Course
        </Button>
      </form>
    </Modal>
  );
};

export default CourseModal;
