import React,{ useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; 

import {
    Container,
    ProductArea,
    ProductButtons,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductQuantityArea,
    ProductName,
    ProductIngredients,
    ProductButton,
    ProductQuantity,
    ProductQtImage,
    ProductQtText,
    ProductPrice
} from './styled';

export default ({data, setVisible}) => {
    const dispatch = useDispatch();
    const [qt, setQt] = useState(1);

    const handleMinusQt = ()=>{
        if(qt>1){
            setQt(prevState=>prevState-1);
        }
    }

    useEffect(()=>{
        setQt(1);
    }, [data]);

    const handleAddToCart = () => {
        
        dispatch({
            type:'ADD_PRODUCT',
            payload: {data,qt}
        })

        setVisible(false);
    }

    return(
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtImage onClick={handleMinusQt} src="/assets/minus.png" />
                            <ProductQtText>{qt}</ProductQtText>
                            <ProductQtImage onClick={()=>setQt(prevState=>prevState+1)} src="/assets/plus.png" />
                        </ProductQuantity>
                        <ProductPrice>
                            R$ {(data.price * qt).toFixed(2)}
                        </ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton onClick={()=>setVisible(false)} small >Cancelar</ProductButton>
                <ProductButton onClick={handleAddToCart}>Adicionar ao Carrinho</ProductButton>
            </ProductButtons>
        </Container>
    );
}