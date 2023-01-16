import React, { useState } from "react";
import { getItem, setItem } from "../../services/LocalStorageFuncs";
import {BsFillCartDashFill} from 'react-icons/bs'
import {ProductsArea} from './style'
import {Header} from "../Header/Header";


export const Cart = () => {

    const [data, setData] = useState(getItem('carrinho') || []);

    const removerItem  = (obj) => {
        const arrayFilter = data.filter((e)=> e.id != obj.id)
        setData(arrayFilter)
        setItem('carrinho', arrayFilter)
    }

    return (
        <>
            <Header/>
            <h1>Carrinho de compras</h1>
            <ProductsArea>
            <div>
                {
                    data.map((e) => (
                    <div key={e.id}>
                        <h4>{e.title}</h4>
                        <img src={e.thumbnail} alt={e.title}/>
                        <h4>R$ {e.price}</h4>
                        <button onClick= {() => removerItem(e)}>
                            <BsFillCartDashFill/>
                        </button>
                    </div>
                    ))
                }
            </div>
        </ProductsArea>
        </>
    )
}