import { Modal } from "native-base";
import React from "react";

const CustomModal = ({
    isOpen,
    onClose,
    children
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <Modal.Content w={"90%"}>
                <Modal.CloseButton />
                {children}
            </Modal.Content>
        </Modal>
    )
}
export default CustomModal;