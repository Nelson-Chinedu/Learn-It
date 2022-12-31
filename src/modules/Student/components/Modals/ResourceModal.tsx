import { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';

import { Modal, Input, Button } from 'src/components';

import {
  useGetCategoryQuery,
  useAddResourceMutation,
} from 'src/modules/Student/services/studentSlice';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

import useModal from 'src/hooks/useModal';

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
      marginTop: '1em',
    },
  },
});

const ResourceModal: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const [state, setState] = useModal();
  const { data, isLoading } = useGetCategoryQuery();
  const [addResource] = useAddResourceMutation();

  const _handleAdd = async (values: {
    categoryId: string;
    name: string;
    url: string;
  }) => {
    const payload = {
      category: values.categoryId,
      name: values.name,
      url: values.url,
    };

    try {
      const data = await addResource(payload).unwrap();
      if (data.status === 201) {
        successNotification(data.message);
        setState({ ...state, modalName: '' });
      }
    } catch (error) {
      errorNotification('An error occurred, please try again');
    }
  };

  const formik = useFormik({
    initialValues: {
      categoryId: '',
      name: '',
      url: '',
    },
    validationSchema,
    onSubmit: _handleAdd,
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
    <Modal modalName="AddResource" title="Add New Resource">
      <Box className={classes.root}>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Input
              select
              variant="outlined"
              color="primary"
              size="small"
              fullWidth={true}
              label="Select Category"
              name="categoryId"
              handleChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.categoryId && errors.categoryId}
              error={touched.categoryId && Boolean(errors.categoryId)}
            >
              {isLoading ? (
                <Typography>Loading...</Typography>
              ) : data.payload.length > 0 ? (
                data.payload.map((category) => (
                  <MenuItem value={category.id} key={category.id}>
                    {category.name}
                  </MenuItem>
                ))
              ) : (
                <Typography>No category added</Typography>
              )}
            </Input>
          </Grid>
          <Grid item sm={12}>
            <Input
              variant="outlined"
              color="primary"
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
          <Grid item sm={12}>
            <Input
              variant="outlined"
              color="primary"
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
        <Button
          color="primary"
          size="large"
          fullWidth={true}
          variant="contained"
          disableElevation={true}
          handleClick={handleSubmit}
        >
          {isSubmitting ? (
            <CircularProgress size={28} style={{ color: 'white' }} />
          ) : (
            'Add'
          )}
        </Button>
      </Box>
    </Modal>
  );
};

export default ResourceModal;
