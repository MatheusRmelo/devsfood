import React from 'react';
import { Container, CategoryImage } from './styled';

export default ({data, activeCategory,setActiveCategory })=>{ 
    return(
        <Container data-tip={data.name} data-for="tip-top" active={activeCategory} id={data.id} onClick={()=>setActiveCategory(data.id)} >
            <CategoryImage src={data.image}/>
        </Container>
    );
}