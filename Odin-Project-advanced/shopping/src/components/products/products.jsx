import React, {useState, useEffect} from "react";

import styles from "./products.module.css"

const Products = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setItems(json)); 
    }, [])

    return (
        <>
        {items.map((item) => (
        <div key={item.id}>
            <img src={item.image} alt={item.title}></img>
            <p>Title: {item.title}</p>
            <p>Price: {item.price}</p>
            <p>Description: {item.description}</p>
            <p>Rating: {item.rating.rate}</p>
        </div>
        ))}

        </>
    )
}

export default Products

