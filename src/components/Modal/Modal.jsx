import { useEffect } from 'react';
import PropTypes from 'prop-types'

import { Overlay, ModalWindow } from '../ui/Modal';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onCloseModal, largeImage }) {
    useEffect(() => {
        window.addEventListener('keydown', hendleKeyDown);

        return () => window.removeEventListener('keydown', hendleKeyDown);
    });

    const hendleKeyDown = e => {
        if (e.code === 'Escape') {
            onCloseModal();
        }
    };

    const hendleOverlayClick = e => {
        if (e.currentTarget === e.target) {
            onCloseModal();
        }
    };

    return createPortal(
        <Overlay onClick={hendleOverlayClick}>
            <ModalWindow>
                <img src={largeImage} alt="" />
            </ModalWindow>
        </Overlay>,
        modalRoot
    );
}

Modal.propTypes = {
    onCloseModal: PropTypes.func,
    largeImage: PropTypes.string.isRequired,
}