import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import css from './ImageModal.module.css';

const ImageModal = ({ isOpen, closeModal, image }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnEsc={true}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 9999,
        },
        content: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
          border: 'none',
        },
      }}
      shouldCloseOnOverlayClick={true}
    >
      <div style={{ maxWidth: '90vw', maxHeight: '90vh' }}>
        {image && (
          <img
            src={image.urls.regular}
            alt="Selected"
            style={{ width: '100%', height: 'auto' }}
          />
        )}
      </div>
    </ReactModal>
  );
};

export default ImageModal;
