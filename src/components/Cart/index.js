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
    ProductQuantityArea
} from './styled';
import { useSelector } from 'react-redux';

export default () => {
    const products = useSelector(state=>state.cart.products);
    const [show, setShow] = useState(true);
    

    const handleCartClick = () => {
        setShow(prevState=>!prevState);
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
                                
                            </ProductQuantityArea>
                        </ProductItem>
                    ))}
                    
                </ProductsArea>
            </CartBody>
        </CartArea>
    );
}