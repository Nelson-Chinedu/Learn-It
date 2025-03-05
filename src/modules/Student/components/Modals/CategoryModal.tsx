import { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

import { Modal, Input, Button } from 'src/components';

import { useAddCategoryMutation } from 'src/modules/Student/services/studentSlice';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

import useModal from 'src/hooks/useModal';

import { RootState } from 'src/store';

const validationSchema = Yup.object().shape({
  categoryName: Yup.string().required('Required'),
});

const Wrapper = styled(Box)({
  '& .MuiTypography-subtitle2': {
    paddingBottom: '1em',
  },
  '& .MuiButton-contained': {
    margin: '2em 0px 1em',
  },
});

const CategoryModal: FunctionComponent<Record<string, never>> = () => {
  const [state, setState] = useModal();
  const [addCategory] = useAddCategoryMutation();
  const { userId } = useSelector((state: RootState) => state.account);

  const _handleAddCategory = async (values: { categoryName: string }) => {
    const payload = {
      name: values.categoryName,
    };
    try {
      const data = await addCategory({
        userId,
        payload,
      }).unwrap();
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
    <Modal modalName="AddCategory" title="Add New Category" width="30%">
      <Wrapper>
        <Input
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
        <Button size="large" handleClick={handleSubmit} disabled={isSubmitting}>
          Add
        </Button>
      </Wrapper>
    </Modal>
  );
};

export default CategoryModal;
