import React, { useState } from 'react';
import {
    CartArea,
    CartHeader,
    CartIcon,
    CartText,
    CartBody,
    ProductsArea,
    ProductItem,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductQuantityArea,
    ProductQtIcon,
    ProductQtText
} from './styled';
import { useDispatch, useSelector } from 'react-redux';

export default () => {
    const dispatch = useDispatch();
    const products = useSelector(state=>state.cart.products);
    const [show, setShow] = useState(true);
    

    const handleCartClick = () => {
        setShow(prevState=>!prevState);
    }
    const handleProductChange = (key, type) => {
        dispatch({
            type:'CHANGE_PRODUCT',
            payload:{key, type}
        });
        
    }   
    return(
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src="/assets/cart.png" />
                <CartText>Meu Carrinho ({products.length})</CartText>
                {show && <CartIcon src="/assets/down.png" />}
            </CartHeader>
            <CartBody show={show}>
                <ProductsArea>
                    {products.map((item,index)=>(
                        <ProductItem key={index}>
                            <ProductPhoto src={item.image} />
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
                            </ProductInfoArea>
                            <ProductQuantityArea>
                                <ProductQtIcon onClick={()=>handleProductChange(index, '-')} src="/assets/minus.png" />
                                <ProductQtText>{item.qt}</ProductQtText>
                                <ProductQtIcon onClick={()=>handleProductChange(index, '+')} src="/assets/plus.png" />
                            </ProductQuantityArea>
                        </ProductItem>
                    ))}
                    
                </ProductsArea>
            </CartBody>
        </CartArea>
    );
}