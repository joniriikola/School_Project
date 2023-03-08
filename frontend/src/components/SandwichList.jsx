import { Button, Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import { removeSandwich } from "../reducers/sandwichesReducer";
import { useDispatch } from "react-redux";

const SandwichList = () => {
    const sandwiches = useSelector((state) => state.sandwiches);
    const dispatch = useDispatch();

    const handleRemove = (event) => {
      event.preventDefault();
      dispatch(removeSandwich(event.target.value))
    }
    return(
        <div>
            <h2>Sandwiches:</h2>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Sandwich Name</th>
                  <th>Bread Type</th>
                  <th>Toppings</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                  {sandwiches.map(sandwich => 
                  <tr key={sandwich.id}>
                    <td > {sandwich.id} </td>
                    <td > {sandwich.name} </td>
                    <td > {sandwich.breadType} </td>
                    <td > {sandwich.toppings.map(topping => topping.name).join(', ')} </td>
                    <td > {<Button variant="danger"  value={sandwich.id}>Remove</Button>} </td>
                  </tr>)
                  }
              </tbody>
            </Table>
        </div>

    )
}
export default SandwichList;
