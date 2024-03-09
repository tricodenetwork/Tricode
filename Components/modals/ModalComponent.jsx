import React, { useState } from "react";
import Modal from "react-modal";

const ModalComponent = ({ Content }) => {
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
        onRequestClose={closeModal}
        className='modal w-auto  bg-transparent'
        overlayClassName='overlay'
      >
        <Content close={closeModal} />
      </Modal>
    </div>
  );
};

export default ModalComponent;
