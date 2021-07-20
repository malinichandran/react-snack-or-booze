import React, {useState} from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
} from "reactstrap";

const Cart = ({cart, removeFromCart}) => {
  
console.log(cart);
return(
    <section className="col-md-4">
    
        <Card>
            <CardBody>
                <CardTitle>
                 Cart
                </CardTitle>
                <CardText>
                 Items in your cart.
                </CardText>
                <ListGroup>
                 {cart.map(item=>(
                     <ListGroupItem>{item.el}
                     <input type="submit" value="remove" onClick={() => removeFromCart(item)} /></ListGroupItem>
                 ))}
                </ListGroup>
            </CardBody>
        </Card>
    </section>
)
}

export default Cart;