import React from "react";
import { Link } from "react-router-dom";
import "./DrinksMenu.css";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
} from "reactstrap";

const DrinksMenu = ({drinks}) => {
    return(
        <section className="col-md-4">
          <Card>
            <CardBody>
               <CardTitle className="font-weight-bold text-center">
               Drinks Menu
               </CardTitle>
               <CardText>
                Some quick example text to build on the card title and make up the
            bulk of the card's content.
                </CardText>
                <ListGroup>
                 {drinks.map(drink => (
                     <Link to={`/drinks/${drink.id}`} key={drink.id}>
                        <ListGroupItem>{drink.name}</ListGroupItem>
                     </Link>
                 ))}
                </ListGroup>
            </CardBody>
          </Card>
        </section>
    );
}

export default DrinksMenu;