import { ListGroup } from "react-bootstrap"
import { useSelector } from "react-redux"
//list to show the status of orders

const OrdersList = () => {

    const orders = useSelector((state) => state.orders);
    const sandwiches = useSelector((state => state.sandwiches));


    return(
        <div>
            <h2>Current situation of orders:</h2>
            {orders.isEmpty ? null : 
            <ListGroup>
                {orders.map(order => 
                <ListGroup.Item 
                    key={order.orderId} 
                    variant="primary"> 
                    {`Ordered sandwich: ${sandwiches.find(s => s.id === order.sandwichId).name}, Current status: ${order.status}`} 
                </ListGroup.Item>) }
            </ListGroup>
            }
        </div>

    )
}
export default OrdersList;
