import ChangePassword from "@/components/modals/ChangePassword";
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
        className='modal w-[35%]  bg-transparent'
        overlayClassName='overlay'
      >
        <Content close={closeModal} />
      </Modal>
      <button onClick={openModal}>On modal</button>
    </div>
  );
};

export default ModalComponent;
