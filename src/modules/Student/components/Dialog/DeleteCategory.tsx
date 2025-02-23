import { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Dialog } from 'src/components';

import useDialog from 'src/hooks/useDialog';

import { useDeleteCategoryMutation } from 'src/modules/Student/services/studentSlice';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

const DeleteCategoryDialog: FunctionComponent<Record<string, never>> = () => {
  const [dialog, setDialog] = useDialog();
  const [deleteCategory, { isLoading }] = useDeleteCategoryMutation();

  const _handleAction = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await deleteCategory({ id: dialog.id }).unwrap();
      successNotification('Category deleted successfully');
      setDialog({ ...dialog, dialogName: '', id: '', data: null });
    } catch (error) {
      errorNotification('An error occurred, Please try again');
    }
  };

  return (
    <Dialog
      dialogName="deleteCategory"
      title="Delete"
      handleAction={_handleAction}
      isLoading={isLoading}
      btnLabel="Delete"
      color="error"
    >
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        {dialog?.data?.resource?.length > 0 ? (
          <>
            <Typography variant="subtitle2" sx={{ pb: '.4em' }}>
              This category has {dialog.data.resource.length}{' '}
              {dialog.data.resource.length === 1 ? 'resource' : 'resources'}
            </Typography>
            <Typography variant="subtitle2" sx={{ padding: '' }}>
              Are you sure you want to delete this category?
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="subtitle2" sx={{ pb: '.4em' }}>
              Are you sure you want to delete this category?
            </Typography>
            <Typography variant="subtitle2" sx={{ padding: '' }}>
              This action cannot be undone.
            </Typography>
          </>
        )}
      </Box>
    </Dialog>
  );
};

export default DeleteCategoryDialog;
