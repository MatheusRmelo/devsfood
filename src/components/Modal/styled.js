import styled from 'styled-components';

export const Container = styled.div`
    display:${props=>props.visible ? 'flex':'none'};
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:rgba(0,0,0,0.7);
    z-index:900;
    justify-content:center;
    align-items:center;
    transition: all ease 0.3s;
`;
export const ModalBody = styled.div`
    background-color:white;
    border-radius:20px;
    box-shadow: 0px 0px 50px black;
    max-width:100vw;
    max-height:95vh;
    overflow:auto;
`;