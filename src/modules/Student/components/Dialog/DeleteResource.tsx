import { FunctionComponent } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Dialog } from 'src/components';

import useDialog from 'src/hooks/useDialog';

import { useDeleteResourceMutation } from 'src/modules/Student/services/studentSlice';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

const DeleteResourceDialog: FunctionComponent<Record<string, never>> = () => {
  const [dialog, setDialog] = useDialog();
  const [deleteResource, { isLoading }] = useDeleteResourceMutation();

  const _handleAction = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await deleteResource({ id: dialog.id }).unwrap();
      successNotification('Resource deleted successfully');
      setDialog({ ...dialog, dialogName: '', id: '' });
    } catch (error) {
      errorNotification('An error occurred, Please try again');
    }
  };

  return (
    <Dialog
      dialogName="deleteResource"
      title="Delete"
      handleAction={_handleAction}
      isLoading={isLoading}
      btnLabel="Delete"
      color="error"
    >
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="subtitle2" sx={{ pb: '.4em' }}>
          Are you sure you want to delete this resource?
        </Typography>
        <Typography variant="subtitle2" sx={{ padding: '' }}>
          This action cannot be undone.
        </Typography>
      </Box>
    </Dialog>
  );
};

export default DeleteResourceDialog;
