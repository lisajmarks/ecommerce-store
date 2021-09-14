import React, { useContext} from 'react'
import { CartContext } from '../Contexts/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    let totalItems = 0

    const deleteItem = (product) => {
        console.log(cart)
        const updatedCart = cart.filter(p => {
            return p.id !== product.id
        })
        setCart(updatedCart)
        console.log(updatedCart)
    }
    

    cart.map(p => totalItems += p.quantity)
    const history = useHistory();

    return (
        <div>
              {
               cart.map(product => 
                < Card style={{ width: '18rem' }}>
                    <Card.Text>{product.title}</Card.Text>
                    <Card.Img src={product.image} />
                    <Card.Text>$ {product.price}</Card.Text>
                    <Card.Text> Quantity: {product.quantity}</Card.Text>
                    <Button onClick={() => deleteItem(product)}> Delete Item </Button>
                </Card>
                ) 
              }
            <Button onClick={() => history.push('/checkout')}> Check Out </Button>
            <Button onClick={() => history.push('/products')}> Add More Items</Button>
        </div>
    );
}

export default Cart
