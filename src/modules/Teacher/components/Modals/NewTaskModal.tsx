import { FC, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import SunEditorCore from 'suneditor/src/lib/core';
import SunEditor from 'suneditor-react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button, Input, Modal } from 'src/components';

import { useAddTaskMutation } from '../../services/teacherSlice';

import { RootState } from 'src/store';

import useModal from 'src/hooks/useModal';

import {
  errorNotification,
  successNotification,
} from 'src/helpers/notification';

const NewTaskModal: FC = () => {
  const { userId } = useSelector((state: RootState) => state.account);

  const { id } = useParams();

  const [state, setState] = useModal();

  const [addTask, { isLoading }] = useAddTaskMutation();

  const [note, setNote] = useState(null);
  const [formField, setFormField] = useState({
    taskName: '',
    dueDate: '',
  });
  const editor_note = useRef<SunEditorCore>();

  const getSunEditorInstance_Objective = (sunEditor: SunEditorCore) => {
    editor_note.current = sunEditor;
  };

  const _handleObjectives = (content: string) => {
    setNote(JSON.stringify(content));
  };

  const handleSubmit = async () => {
    const payload = {
      note,
      title: formField.taskName,
      dueDate: formField.dueDate,
      menteeId: id || state.data,
    };
    try {
      const response = await addTask({
        mentorId: userId,
        data: payload,
      }).unwrap();
      if (response.status === 201) {
        setState({ ...state, modalName: '', data: null });
        successNotification(response?.message);
      }
    } catch (error) {
      errorNotification('An error occurred, Please try again');
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <Modal modalName="NewTask" title="New Task">
      <form onSubmit={handleSubmit}>
        <Grid container mb={5}>
          <Input
            type="text"
            label="Task Name"
            name="taskName"
            handleChange={handleChange}
            fullWidth
            placeholder="Enter task name"
            InputLabelProps={{ shrink: true }}
            value={formField.taskName}
          />
        </Grid>
        <Grid container mb={5}>
          <Input
            type="date"
            name="dueDate"
            handleChange={handleChange}
            label="Due Date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            value={formField.dueDate}
          />
        </Grid>
        <Grid container mb={0}>
          <SunEditor
            getSunEditorInstance={getSunEditorInstance_Objective}
            placeholder="Please enter note here..."
            setOptions={{
              buttonList: [['bold', 'align', 'list', 'underline', 'codeView']],
            }}
            onChange={_handleObjectives}
            setContents={note}
            height="300px !important"
          />
        </Grid>
        <Button fullWidth handleClick={handleSubmit} disabled={isLoading}>
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default NewTaskModal;
