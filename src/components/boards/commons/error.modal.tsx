import { Alert, AlertTitle, Modal } from '@mui/material';
import { type ErrorModalProps } from './modal.type';
import { ModalContentWrapper } from './modal.wrapper';

export const ErrorModal = ({ errorModalStatus, toggleErrorModal, message }: ErrorModalProps) => {
  return (
    <Modal open={errorModalStatus} onClose={toggleErrorModal}>
      <ModalContentWrapper>
        <Alert severity="error" onClose={toggleErrorModal}>
          <AlertTitle>Error</AlertTitle>
          {message}
        </Alert>
      </ModalContentWrapper>
    </Modal>
  );
};
