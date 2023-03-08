import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createSandwich } from "../reducers/sandwichesReducer";
import SandwichList from "./SandwichList"
import { useSelector } from "react-redux"

const SandwichForm = () => {
    // form to order a sandwich
    const dispatch = useDispatch();
    const [sandwichName, setSandwichName] = useState("");
    const [toppings, setToppings] = useState([]);
    const [breadType, setBreadType] = useState("oat")

    const toppingList = useSelector((state) => state.toppings);
    const breadTypes = ["oat", "rye", "wheat"]

    const handleBreadTypeChange = (event) => {
        event.preventDefault()
        setBreadType(event.target.value);
    }
    const handleSandwichNameChange = (event) => {
        event.preventDefault()
        setSandwichName(event.target.value);
    }

    const handleToppingsChange = (event) => {
        event.preventDefault()
        const id = parseInt(event.target.value)
        const name = toppingList.find(topping => topping.id === id).name
        setToppings([...toppings,{id: id, name: name}]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setToppings([]);
        const newSandwich = {
            name:sandwichName,
            toppings: toppings,
            breadType:breadType
           
        };
        dispatch(createSandwich(newSandwich));
    }
    return(
        <div>
            <h2>Sandwiches:</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Sandwich Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter name of the sandwich" onChange={handleSandwichNameChange} required/>
                    <Form.Label>Bread Type:</Form.Label>
                    <Form.Select onChange={handleBreadTypeChange} require>
                        {breadTypes.map(bt => <option key= {bt} value={bt}>{bt}</option>)}
                    </Form.Select>
                    <Form.Label>Choose Toppings</Form.Label>
                    <Form.Select onChange={handleToppingsChange}>
                        {toppingList.map(t => <option key= {t.id} value={t.id}>{t.name}</option>)}
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit Sandwich
                </Button>
            </Form>
            <SandwichList/>
        </div>
    )}
export default SandwichForm;