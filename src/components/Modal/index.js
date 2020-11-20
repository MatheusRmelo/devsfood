import React from 'react';
import {
    Container,
    ModalBody
} from './styled';

export default ({visible,setVisible, children}) => {

    const handleModalClick = (e) => {
        if(e.target.classList.contains('modal-bg'))
            setVisible(false);
    }

    return(
        <Container 
            visible={visible} 
            onClick={handleModalClick}
            className="modal-bg"
        >
            <ModalBody>
                {children}
            </ModalBody>
        </Container>
    )
}