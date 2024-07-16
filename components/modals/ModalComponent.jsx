import React, { useState } from "react";
import Modal from "react-modal";

const ModalComponent = ({ Content, close }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='flex justify-center items-center'>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={close}
        className='modal w-auto  bg-transparent'
        overlayClassName='overlay'
      >
        {Content}
      </Modal>
    </div>
  );
};

export default ModalComponent;
