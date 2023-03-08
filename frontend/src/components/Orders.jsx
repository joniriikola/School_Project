import { Container, Row } from 'react-bootstrap';
import OrderForm from './OrderForm';
import OrdersList from './OrdersList';

const Orders = () => {
    return(
        <div>
            <Container>
                <Row>
                    <OrderForm/>
                    <OrdersList/>
                </Row>
            </Container>
        </div>
    )
}

export default Orders;