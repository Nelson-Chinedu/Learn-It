import { FC, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import SunEditorCore from 'suneditor/src/lib/core';
import SunEditor from 'suneditor-react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button, Modal } from 'src/components';

import { RootState } from 'src/store';

import useModal from 'src/hooks/useModal';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';
import { useProvideFeedbackMutation } from '../../services/teacherSlice';

const FeedbackModal: FC = () => {
  const { userId } = useSelector((state: RootState) => state.account);

  const { taskId } = useParams();

  const [state, setState] = useModal();

  const [provideFeedback, { isLoading }] = useProvideFeedbackMutation();

  const [feedback, setFeedback] = useState(null);

  const editor_note = useRef<SunEditorCore>();

  const getSunEditorInstance_Objective = (sunEditor: SunEditorCore) => {
    editor_note.current = sunEditor;
  };

  const _handleObjectives = (content: string) => {
    setFeedback(JSON.stringify(content));
  };

  const handleSubmit = async () => {
    const payload = {
      feedback,
    };
    const params = {
      taskId,
      mentorId: userId,
    };
    try {
      const response = await provideFeedback({
        params,
        data: payload,
      }).unwrap();
      if (response.status === 201) {
        setState({ ...state, modalName: '' });
        successNotification(response?.message);
      }
    } catch (error) {
      errorNotification('An error occurred, Please try again');
    }
  };

  return (
    <Modal modalName="Feedback" title="Feedback">
      <form>
        <Grid container mb={5}>
          <SunEditor
            getSunEditorInstance={getSunEditorInstance_Objective}
            placeholder="Please enter feedback here..."
            setOptions={{
              buttonList: [['bold', 'align', 'list', 'underline', 'codeView']],
            }}
            onChange={_handleObjectives}
            setContents={feedback}
            height="400px"
          />
        </Grid>
        <Button fullWidth handleClick={handleSubmit} disabled={isLoading}>
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default FeedbackModal;
