import React from "react"
import { Link } from "react-router-dom"
import {HeaderArea} from './style'

// const HeaderArea = styled.header`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 50px;
//     background-color: crimson;
//     padding: 20px;
//     a {
//         text-decoration: none;
//         color: white
//     }

// `

export const Header = () => {

    return (
       
        <HeaderArea>
            <h2>Bugingangas da Jéssica</h2>
            <Link to="/">Store</Link>
            <Link to="/cart">Carrinho</Link>
        </HeaderArea>
        
    )
}