import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createOrder } from "../reducers/ordersReducer";
import { useSelector } from "react-redux";

const OrderForm = () => {
    // form to order a sandwich
    const dispatch = useDispatch();
    const [sandwichId, setSandwichId] = useState("0");
    const sandwiches = useSelector((state => state.sandwiches));

    const handleSandwichChange = (event) => {
        setSandwichId(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(`${sandwichId} sandwich ordered`);
        const newOrder = {
            sandwichId: parseInt(sandwichId),
            status: "ordered"
            
        };
        dispatch(createOrder(newOrder));
    }

    return(
        <div>
            <h2>Order a sandwich:</h2>
            {sandwiches.length === 0 ? 
            <p>No sandwiches, add some from <a href="http://localhost:3000/admin/sandwich_form">"manage sandwiches"</a> page</p>:
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Choose the sandwich you want to order</Form.Label>
                    <Form.Select defaultValue="0" onChange={handleSandwichChange} required>
                        {sandwiches.map(sandwich => <option value={sandwich.id} key={sandwich.id}>{sandwich.name}</option>)}
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit Order
                </Button>
            </Form>
            }

        </div>
    )}
export default OrderForm;

/*
test sandwiches
                        <option value="1">Ham and Cheese</option>
                        <option value="2">Mozzarella pesto</option>
                        <option value="3">Egg and Bacon</option>
                        <option value="4">Peanut butter and Jam</option>
                        <option value="5">Chili and Ginger Delikaura™</option>
                        <option value="6">Smokey Turkey</option>
*/
