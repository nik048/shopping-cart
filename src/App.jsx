import React from 'react';
import ProductList from './components/ProductList/ProductList';

const [cart, setCart] = useState({});
function App(){
    /*
    * product-id: {
    *   id: number
    *   title: String,
    *   price: Number,
    *   quantity: Number   
    * } 
    */
    const newCart = {...cart}

    function increaseQuantity(product){
        if(!cart[product.id]){
            cart[product.id] = {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: 0
            }
        }

        cart[product.id].quantity +=1;
        setCart(cart);
    }

    function decreaseQuantity(product){
        if(!cart[product.id]){
            return;
        }
        cart[product.id].quantity -= 1;
        if(cart[product.id].quantity <= 1){
            delete cart[product.id];
        }
        setCart(cart);
    }

    return(
        <div>
            <Cart />
            <ProductList increaseQuantity={increaseQuantity} 
                         decreaseQuantity={decreaseQuantity} 
                         cart={cart}/>
        </div>
    )
}

export default App;