import React, { useState, useEffect } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill } from 'react-icons/bs'
import { getItem, setItem } from "../../services/LocalStorageFuncs";
import { Link } from "react-router-dom";
import { ProductsArea } from "./style";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer"

export const Store = () => {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState(getItem('carrinho' || []));


    useEffect(() => {
        const fetchApi = async () => {
            const url = 'https://api.mercadolibre.com/sites/MLB/search?q=brinquedos-espaciais'
            const response = await fetch(url);
            const objJson = await response.json()
            setData(objJson.results)
        }
        fetchApi();
    }, [])

    const handleClick = (obj) => {
        const element = cart.find((e) => e.id === obj.id)
        
        if(element){
            const arrayFilter = cart.filter((e) => e.id != obj.id)
            setCart(arrayFilter)
            setItem('carrinho', arrayFilter)
        } else {
            setCart([...cart,obj])
            setItem('carrinho',[...cart,obj]);
        }
    }

    console.log(localStorage)
    return (
        <div>
            <Header/>
            
            <ProductsArea>
                {
                data.map((e) => (
                    <div key={e.id}>
                        <h4> {e.title}</h4>
                        <img src={e.thumbnail} alt="" />
                        <h4>R$ {e.price}</h4>
                        <button onClick = {() => handleClick(e)}>
                            {
                                cart.some((itemCart) => itemCart.id === e.id) ? (<BsFillCartCheckFill/>) : (<BsFillCartPlusFill/>)
                            }
                        </button>
                    </div>

                ))}
            </ProductsArea>
            {/* <Footer/> */}
        </div>
    )
}