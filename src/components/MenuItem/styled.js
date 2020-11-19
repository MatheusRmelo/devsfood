import styled from 'styled-components';

export const LinkArea = styled.a`
    display:flex;
    width:60px;
    height:60px;
    border-radius:10px;
    justify-content:center;
    align-items:center;
    margin-bottom:10px;
    background-color:${props=>props.active?'#0B4D08':'transparent'};
`;

export const LinkIcon = styled.img`
    width:34px;
    height:auto;
`;