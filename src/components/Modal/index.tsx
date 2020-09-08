import React from 'react';

import './styles.css';

interface ModalProps {
  id?: string;
  name: string;
  author: string;
  onClose: any;
  description: string;
}

const Modal: React.FC<ModalProps> = ({ name, author, description, onClose, id = 'modal' }) => {
  const handleOutsideClick = (e: any) => {
    if(e.target.id === id) onClose();
  }

  return(
    <div id={id} className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal">
        <p className="close-modal" onClick={onClose}>X</p>

        <div className="modal-content">
          <h2>{name}</h2>
          <h3>{author}</h3>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;