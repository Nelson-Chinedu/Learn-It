import { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

import { Modal, Input, Button } from 'src/components';

import {
  useGetCategoryQuery,
  useAddResourceMutation,
  useEditResourceMutation,
} from 'src/modules/Student/services/studentSlice';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

import useModal from 'src/hooks/useModal';
import { RootState } from 'src/store';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  categoryId: Yup.string().required('Required'),
  url: Yup.string().required('Required'),
});

const useStyles = makeStyles({
  root: {
    '& .MuiTypography-subtitle2': {
      paddingBottom: '1em',
    },
    '& .MuiButton-contained': {
      margin: '1em 0px',
    },
  },
});

const ResourceModal: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const [state, setState] = useModal();
  const { userId } = useSelector((state: RootState) => state.account);
  const { data, isLoading } = useGetCategoryQuery(userId);
  const [addResource] = useAddResourceMutation();
  const [editResource] = useEditResourceMutation();

  const _handleAdd = async (values: {
    categoryId: string;
    name: string;
    url: string;
  }) => {
    const payload = {
      categoryId: values.categoryId,
      name: values.name,
      url: values.url,
    };

    try {
      const data = await addResource({ userId, payload }).unwrap();
      if (data.status === 201) {
        successNotification(data.message);
        setState({ ...state, modalName: '' });
        resetForm();
      }
    } catch (error) {
      errorNotification('An error occurred, please try again');
    }
  };

  const _handleEdit = async (values: {
    categoryId: string;
    name: string;
    url: string;
  }) => {
    const payload = {
      categoryId: values.categoryId,
      name: values.name,
      url: values.url,
      resourceId: state.data.id,
    };

    try {
      const data = await editResource({ userId, payload }).unwrap();
      if (data.status === 200) {
        successNotification(data.message);
        setState({ ...state, modalName: '' });
        resetForm();
      }
    } catch (error) {
      errorNotification('An error occurred, please try again');
    }
  };

  const formik = useFormik({
    initialValues: {
      categoryId:
        state.modalName === 'EditResource'
          ? (state.data.category.id as string)
          : '',
      name: state.modalName === 'EditResource' ? state.data.name : '',
      url: state.modalName === 'EditResource' ? state.data.url : '',
    },
    validationSchema,
    onSubmit: state.modalName === 'EditResource' ? _handleEdit : _handleAdd,
    enableReinitialize: true,
  });

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    values,
    touched,
    isSubmitting,
    resetForm,
  } = formik;

  const modalName =
    state.modalName === 'AddResource' ? 'AddResource' : 'EditResource';

  return (
    <Modal
      modalName={modalName}
      title={modalName === 'AddResource' ? 'Add New Resource' : 'Edit Resource'}
      width="30%"
    >
      <Box className={classes.root}>
        <Grid container spacing={2}>
          <Grid item sm={12} sx={{ margin: '.3em 0px' }}>
            <Input
              select
              size="small"
              fullWidth={true}
              label="Select Category"
              name="categoryId"
              handleChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.categoryId && errors.categoryId}
              error={touched.categoryId && Boolean(errors.categoryId)}
              value={values.categoryId}
            >
              {isLoading ? (
                <Typography>Loading...</Typography>
              ) : data.payload.length > 0 ? (
                data?.payload?.map((category: any) => (
                  <MenuItem value={category.id} key={category.id}>
                    {category.name}
                  </MenuItem>
                ))
              ) : (
                <Typography>No category added</Typography>
              )}
            </Input>
          </Grid>
          <Grid item sm={12} sx={{ margin: '.3em 0px' }}>
            <Input
              size="small"
              fullWidth={true}
              label="Name"
              name="name"
              value={values.name}
              handleChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.name && errors.name}
              error={touched.name && Boolean(errors.name)}
            />
          </Grid>
          <Grid item sm={12} sx={{ margin: '.3em 0px' }}>
            <Input
              size="small"
              fullWidth={true}
              label="url"
              name="url"
              value={values.url}
              handleChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.url && errors.url}
              error={touched.url && Boolean(errors.url)}
            />
          </Grid>
        </Grid>
        <Button size="large" handleClick={handleSubmit} disabled={isSubmitting}>
          {modalName === 'AddResource' ? 'Add' : 'Save'}
        </Button>
      </Box>
    </Modal>
  );
};

export default ResourceModal;
