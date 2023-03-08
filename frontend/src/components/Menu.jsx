import {Table } from "react-bootstrap"
import { useSelector } from "react-redux"

const Menu = () => {
    const sandwiches = useSelector((state) => state.sandwiches);
       //a list of made up sandwich order objects used to test that the list stuffs work

    return(
        <div>
            <h2>Menu:</h2>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Sandwich Name</th>
                  <th>Bread Type</th>
                  <th>Toppings</th>
                </tr>
              </thead>
              <tbody>
                  {sandwiches.map(sandwich => 
                  <tr>
                    <td key={sandwich.id}> {sandwich.id} </td>
                    <td key={sandwich.id}> {sandwich.name} </td>
                    <td key={sandwich.id}> {sandwich.breadType} </td>
                    <td key={sandwich.id}> {sandwich.toppings.map(topping => topping.name).join(', ')} </td>
                  </tr>)
                  }
              </tbody>
            </Table>
        </div>
    )
}
export default Menu;
