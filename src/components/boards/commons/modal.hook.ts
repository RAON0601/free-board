import { useState } from 'react';

export const useModal = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [message, setMessage] = useState('');
  const toggleModal = () =>
    setModalStatus(prev => {
      if (prev) {
        setMessage('');
      }

      return !prev;
    });
  return {
    modalStatus,
    setModalStatus,
    message,
    setMessage,
    toggleModal,
  };
};

export const useSuccessModal = () => {
  const { modalStatus, setModalStatus, message, setMessage, toggleModal } = useModal();
  const [successModalStatus, setSuccessModalStatus, successMessage, setSuccessMessage, toggleSuccessModal] = [
    modalStatus,
    setModalStatus,
    message,
    setMessage,
    toggleModal,
  ];

  return {
    successModalStatus,
    setSuccessModalStatus,
    successMessage,
    setSuccessMessage,
    toggleSuccessModal,
  };
};

export const useErrorModal = () => {
  const { modalStatus, setModalStatus, message, setMessage, toggleModal } = useModal();
  const [errorModalStatus, setErrorModalStatus, errorMessage, setErrorMessage, toggleErrorModal] = [
    modalStatus,
    setModalStatus,
    message,
    setMessage,
    toggleModal,
  ];

  return {
    errorModalStatus,
    setErrorModalStatus,
    errorMessage,
    setErrorMessage,
    toggleErrorModal,
  };
};
