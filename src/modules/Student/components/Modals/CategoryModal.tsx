import { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';

import { Modal, Input, Button } from 'src/components';

import { useAddCategoryMutation } from 'src/modules/Student/services/studentSlice';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

import useModal from 'src/hooks/useModal';

const validationSchema = Yup.object().shape({
  categoryName: Yup.string().required('Required'),
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

const CategoryModal: FunctionComponent<Record<string, never>> = () => {
  const classes = useStyles();
  const [state, setState] = useModal();
  const [addCategory] = useAddCategoryMutation();

  const _handleAddCategory = async (values: { categoryName: string }) => {
    const payload = {
      name: values.categoryName,
    };
    try {
      const data = await addCategory(payload).unwrap();
      if (data.status === 201) {
        successNotification(data.message);
        values.categoryName = '';
        setState({ ...state, modalName: '' });
      }
    } catch (error) {
      errorNotification('An error occurred, please try again');
    }
  };

  const formik = useFormik({
    initialValues: {
      categoryName: '',
    },
    validationSchema,
    onSubmit: _handleAddCategory,
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
    <Modal modalName="AddCategory" title="Add New Category">
      <Box className={classes.root}>
        <Input
          variant="outlined"
          color="primary"
          size="small"
          fullWidth={true}
          label="Category name"
          name="categoryName"
          value={values.categoryName}
          handleChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.categoryName && errors.categoryName}
          error={touched.categoryName && Boolean(errors.categoryName)}
        />
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

export default CategoryModal;
