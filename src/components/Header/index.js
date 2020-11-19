import React, { useState } from 'react';
import { Container, Logo, SearchInput } from './styled';

export default ({search, onSearch}) => {
    const [inputActive, setInputActive] = useState(!!search); 
    const handleInputFocus = () => {
        setInputActive(true);
    }
    const handleInputBlur = () => {
        if(search === '')
            setInputActive(false);
    }

    return (
        <Container>
            <Logo src="/assets/logo.png" />
            <SearchInput 
                active={inputActive}
                type="text"
                placeholder="Digite um produto" 
                value={search}
                onChange={e=>onSearch(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
        </Container>
    );
}