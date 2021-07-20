import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

function FoodItem({ items, addToCart, cantFind }) {
  const { id } = useParams();

  let snack = items.find(snack => snack.id === id);
  if (!snack) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
          <Button onClick={()=>addToCart(snack.name)}>Add to Cart</Button>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
