import { FunctionComponent, useRef, useState } from 'react';
import axios from 'axios';
import SunEditor from 'suneditor-react';
import SunEditorCore from 'suneditor/src/lib/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material';

import { Upload } from 'src/modules/Teacher/components/Modals/Upload';

import { Input, Button } from 'src/components';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

import { useAddCourseMutation } from 'src/modules/Teacher/services/teacherSlice';

const validationSchema = Yup.object().shape({
  courseName: Yup.string().required('Required'),
  price: Yup.string().required('Required'),
});

const Wrapper = styled(Box)({
  width: '80%',
  margin: '7em auto',
  '& .sun-editor': {
    marginBottom: '2em',
  },
  '& .sun-editor-editable': {
    height: '400px !important',
  },
  '& .se-resizing-bar': {
    display: 'none !important',
  },
  '& .MuiTypography-h5': {
    paddingBottom: '.2em',
  },
  '& .MuiButton-contained': {
    marginBottom: '5em',
  },
});

const StyledLabel = styled('label')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px dashed grey !important',
  borderRadius: '5px',
  padding: '2em',
  textAlign: 'center',
  height: '150px',
  cursor: 'pointer',
  marginBottom: '2em',
  '& input': {
    display: 'none',
  },
});

const AddCourse: FunctionComponent<Record<string, never>> = () => {
  const [addCourse] = useAddCourseMutation();
  const [objectives, setObjectives] = useState(null);
  const [faq, setFaq] = useState(null);
  const ref = useRef(null);
  const thumbnailRef = useRef(null);
  const previewRef = useRef(null);
  const editor_objective = useRef<SunEditorCore>(null);
  const editor_faq = useRef<SunEditorCore>(null);
  const [uploadingFile, setUploadingFile] = useState<{
    name: string;
    status: number;
  }>({ name: '', status: 0 });
  const [uploadedFiles, setUploadedFiles] = useState<Array<{ name: string }>>(
    [],
  );
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [videoUrl, setVideoUrl] = useState<Array<string>>([]);
  const [thumbnail, setThumbnail] = useState<string>('');
  const [preview, setPreview] = useState<string>('');

  const getSunEditorInstance_Objective = (sunEditor: SunEditorCore) => {
    editor_objective.current = sunEditor;
  };

  const getSunEditorInstance_Faq = (sunEditor: SunEditorCore) => {
    editor_faq.current = sunEditor;
  };

  const _handleObjectives = (content: string) => {
    setObjectives(JSON.stringify(content));
  };

  const _handleFaq = (content: string) => {
    setFaq(JSON.stringify(content));
  };

  const _handleAddCourse = async (values: {
    courseName: string;
    price: string;
  }) => {
    const payload = {
      video_url: videoUrl,
      course_name: values.courseName,
      price: values.price,
      course_objective: objectives,
      course_faq: faq,
      course_thumbnail: thumbnail,
      course_preview: preview,
    };
    try {
      const data = await addCourse(payload).unwrap();
      if (data.status === 201) {
        successNotification(data.message);
        values.courseName = '';
        values.price = '';
        ref.current.value = '';
        thumbnailRef.current.value = '';
        previewRef.current.value = '';
        setObjectives(null);
        setFaq(null);
        setUploadedFiles([]);
        setVideoUrl([]);
        setThumbnail('');
        setPreview('');
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

  const handleUploadFile = async (
    e: { preventDefault: () => void; target: HTMLInputElement },
    fileType: string,
  ) => {
    e.preventDefault();
    const filename = e.target.files[0].name;

    const formDataKey = fileType === 'thumbnail' ? 'image' : 'video';
    const endpoint =
      fileType === 'course_preview' || fileType === 'video'
        ? 'video'
        : 'thumbnail';

    const form = new FormData();
    form.append(formDataKey as string, e.target.files[0]);

    try {
      setIsUploading(true);
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/courses/${endpoint}`,
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
          setUploadingFile(null);
          setIsUploading(false);
          if (fileType === 'thumbnail') {
            thumbnailRef.current.value = '';
            setThumbnail(url);
          } else if (fileType === 'course_preview') {
            previewRef.current.value = '';
            setPreview(url);
          } else {
            ref.current.value = '';
            setVideoUrl((prev) => [...prev, url]);
            setUploadedFiles((prev) => [...prev, { name: filename }]);
          }
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
    <Wrapper>
      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        justifyContent="space-between"
        sx={{ marginBottom: '2em' }}
      >
        <Grid size={{ sm: 6 }}>
          <Typography variant="h5">Course Title</Typography>
          <Input
            placeholder="Course Title"
            fullWidth={true}
            name="courseName"
            value={values.courseName}
            handleChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.courseName && errors.courseName}
            error={touched.courseName && Boolean(errors.courseName)}
          />
        </Grid>
        <Grid size={{ sm: 6 }}>
          <Typography variant="h5">Price</Typography>
          <Input
            placeholder="Price"
            fullWidth={true}
            name="price"
            size="small"
            value={values.price}
            handleChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.price && errors.price}
            error={touched.price && Boolean(errors.price)}
          />
        </Grid>
      </Grid>
      <Typography variant="h5">Upload course thumbnail</Typography>
      <StyledLabel>
        <CloudUploadIcon fontSize="large" />
        <Typography variant="subtitle2">Upload thumbnail</Typography>
        <Typography variant="subtitle1">Click to browse file</Typography>
        <input
          type="file"
          accept="image/jpg,image/png"
          onChange={(e) => handleUploadFile(e, 'thumbnail')}
          ref={thumbnailRef}
        />
      </StyledLabel>

      <Typography variant="h5">Upload course preview</Typography>
      <StyledLabel>
        <CloudUploadIcon fontSize="large" />
        <Typography variant="subtitle2">Upload course preview</Typography>
        <Typography variant="subtitle1">Click to browse file</Typography>
        <input
          type="file"
          accept="video/mp4,video/x-m4v"
          onChange={(e) => handleUploadFile(e, 'course_preview')}
          ref={previewRef}
        />
      </StyledLabel>

      <Typography variant="h5">Upload video(s) by modules</Typography>
      <StyledLabel>
        <CloudUploadIcon fontSize="large" />
        <Typography variant="subtitle2">Upload Video</Typography>
        <Typography variant="subtitle1">Click to browse file</Typography>
        <input
          type="file"
          accept="video/mp4,video/x-m4v"
          onChange={(e) => handleUploadFile(e, 'video')}
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
      <Typography variant="h5">Objectives</Typography>
      <SunEditor
        getSunEditorInstance={getSunEditorInstance_Objective}
        placeholder="Please enter objectives here..."
        setOptions={{
          buttonList: [['bold', 'align', 'list', 'underline']],
        }}
        onChange={_handleObjectives}
        setContents={objectives}
      />
      <Typography variant="h5">FAQ</Typography>
      <SunEditor
        getSunEditorInstance={getSunEditorInstance_Faq}
        placeholder="Please enter FAQ's here..."
        setOptions={{
          buttonList: [['bold', 'align', 'list', 'underline']],
        }}
        onChange={_handleFaq}
        setContents={faq}
      />
      <Button
        fullWidth={false}
        size="large"
        handleClick={handleSubmit}
        disabled={isSubmitting}
      >
        Add Course
      </Button>
    </Wrapper>
  );
};

export default AddCourse;
