import { Alert, AlertTitle, Modal } from '@mui/material';
import { type SuccessModalProps } from './modal.type';
import { ModalContentWrapper } from './modal.wrapper';

export const SuccessModal = ({ successModalStatus, toggleSuccessModal, message }: SuccessModalProps) => {
  return (
    <Modal open={successModalStatus} onClose={toggleSuccessModal}>
      <ModalContentWrapper>
        <Alert severity="success" onClose={toggleSuccessModal}>
          <AlertTitle>Success</AlertTitle>
          {message}
        </Alert>
      </ModalContentWrapper>
    </Modal>
  );
};
