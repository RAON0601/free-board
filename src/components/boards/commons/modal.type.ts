export interface ErrorModalProps {
  errorModalStatus: boolean;
  toggleErrorModal: () => void;
  message: string;
}

export interface SuccessModalProps {
  successModalStatus: boolean;
  toggleSuccessModal: () => void;
  message: string;
}
