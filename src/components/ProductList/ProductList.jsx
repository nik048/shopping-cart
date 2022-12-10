import { useEffect, useState } from 'react'
import React from "react"
import ProductCard from "../ProductCard/ProductCard"
const _products = [
    {
        title: "iphone"
    },
    {
        title: "samsung"
    },
    {
        title: "nokia"
    },
]

function getProductsApi(callback){
    setTimeout(function(){
        callback(_products);
    }, 1000
    )
}

function ProductList({increaseQuantity, decreaseQuantity, cart}) {
    const loadingState = useState(true); //returns array[2]
    const isLoading = loadingState[0];
    const setIsLoading = loadingState[1];
    
    //destructuring
    const [products, setProducts] = useState([]);

    //triggered on empty dependency on mounting phase
    //UseEffect should be used whenever you need to detect some 
    // react lifecycle event
    useEffect(() => {
        const promise = fetch('http://localhost:3001/products')
        promise.then(response => {
            console.log("Success", response);
        });
        promise.catch(error => {
            console.log('Error', error)
        })

        fetch('http://localhost:3001/products')
            .then(response => {
                console.log('Mock resp', response);
                return response.json();
            })
            .then(result => {
                console.log('mock result', result);
                setIsLoading(false);
                setProducts(res);
            })
            .catch(error => {
                console.log('mock error', error);
            })
    }, []);

    if(error){
        return <div>Something went wrong!</div>
    } else if(isLoading){
        return <div>Loading...</div>
    } else {
        return (
            <div>
                {
                    products.map(function(product){
                        return (
                            <ProductCard 
                                key={product.id} 
                                title={product.title} 
                                price={product.price}
                            />
                        )
                    })
                }
            </div>
        )
    } 
}

export default ProductList;

